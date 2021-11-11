import React, {useContext, useEffect, useState} from 'react';
import {getFillingStatistic, num_of_days_to_send_stat} from "../../http/brandAPI";
import {Context} from "../../index";

import {observer} from "mobx-react-lite";

const Reminder = observer( (props) => {
    const {user} = useContext(Context)
    let dateNow = Math.round(new Date() / 1000)
    let [lost,setLost]=useState()
    const [countDay,setCountDay]=useState()



    function timer(year, mount, day, hour, minute, second) {
        let nowDate = new Date();
        let lastDateValue = new Date(year, mount, props.dayToSend?+props.dayToSend+ +day:day, hour, minute, second); //Задаем дату, к которой будет осуществляться обратный отсчет
        let result = (lastDateValue - nowDate) + 1000;
        if (result < 0) {

            return 'Срок даты не действителен';
        }
        let seconds = Math.floor((result / 1000) % 60);
        let minutes = Math.floor((result / 1000 / 60) % 60);
        let hours = Math.floor((result / 1000 / 60 / 60) % 24);
        let days = Math.floor(result / 1000 / 60 / 60 / 24);
        setCountDay(days)

        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;

        return days ? days + ' д. ' + hours + ' ч ' + minutes + ' м. ' + seconds + ' с' : hours + ' ч. ' + minutes + ' м. ' + seconds + ' с.'
    }
    useEffect(()=>{
        if (props.dayToSend){
            setInterval(() => {
                setLost(timer(props.arrDate[0], props.arrDate[1] - 1, props.arrDate[2], props.arrDate[3], props.arrDate[4], props.arrDate[5]))
            }, 1000)
        }

    },[props.dayToSend])


    useEffect(() => {
        if (user.IsAuth){
            getFillingStatistic(dateNow).then(data => {
                let sortStatistic=data.data['not_filled'].filter(item=>item.dealer.name === user.User.dealer)

                if (sortStatistic[0]){
                    props.setReminderState(true)
                }else{
                    props.setReminderState(false)
                }
            })
        }

    }, [user.IsAuth])

    return (
        <>
            {
                props.reminderState && user.IsAuth && countDay < 5 ? <div style={{
                        color: '#fff',
                        marginBottom: 0,
                        position: 'absolute',
                        left: 'calc(50% - 250px)',
                        maxWidth: '500px',
                        fontSize: 12,
                        cursor: 'pointer'
                    }}>
                        <p style={{textDecoration: 'underline'}} className='m-0'>Напоминаем что вы не подали статистику по
                             автомобилям за текущий месяц.</p>
                        <p className='m-0'>Последний день подачи данных за текущий месяц <span
                            style={{fontWeight: 'bold'}}>{props.lastDay}</span>  </p>
                        <p  className='m-0'>Осталось : {lost}</p>
                    </div>
                    :
                    false
            }

        </>

    );
});

export default Reminder;