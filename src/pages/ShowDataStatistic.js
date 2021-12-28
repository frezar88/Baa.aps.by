import React, {useContext, useEffect, useState} from 'react';
import {Container, Spinner} from "react-bootstrap";
import s from './ShowDataStatistic.module.css'

import {Context} from "../index";
import ItemForShowDataEnter from "../components/ShowDataStatic/ItemForShowDataEnter";
import {getFillingStatistic, num_of_days_to_send_stat} from "../http/brandAPI";
import ItemForShowDataWait from "../components/ShowDataStatic/ItemForShowDataWait";
import {STATISTIC_MENU} from "../utils/consts";
import {useHistory} from "react-router-dom";


const ShowDataStatistic = () => {
    const [load, setLoad] = useState({})
    const {user} = useContext(Context)
    const dateNow = Math.round(new Date() / 1000)
    const history = useHistory()

    const [lastDay, setLastDay] = useState()
    const [lostTime, setLostTime] = useState()
    const [fullLastDay, setFullLasDay] = useState()
    const [loadDate, setLoadDate] = useState(false)

    const [dayToSend, setDayToSend] = useState({day: 0, time: '00:00'})

    useEffect(() => {
        num_of_days_to_send_stat().then(data => {
            setDayToSend({
                day: data.data['num_of_days_to_send_stat'],
                time: data.data['time_to_send_stat']
            })
        })
    }, [])


    function timer(year, mount, day, hour, minute, second) {

        let nowDate = new Date();
        let lastDateValue = new Date(year, mount, day, hour, minute, second); //Задаем дату, к которой будет осуществляться обратный отсчет

        let result = (lastDateValue - nowDate) + 1000;
        if (result < 0) {

            return 'Срок даты не действителен';
        }
        let seconds = Math.floor((result / 1000) % 60);
        let minutes = Math.floor((result / 1000 / 60) % 60);
        let hours = Math.floor((result / 1000 / 60 / 60) % 24);
        let days = Math.floor(result / 1000 / 60 / 60 / 24);
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;

        return days ? days + ' д. ' + hours + ' ч ' + minutes + ' м. ' + seconds + ' с' : hours + ' ч. ' + minutes + ' м. ' + seconds + ' с.'
    }


    useEffect(() => {
        getFillingStatistic(dateNow).then((data) => {

            let filled = data.data.data.filled.map((f) => ({
                ...f,
                brand: data.data.included.brands.find((b) => b.id === f.brand_id),
                dealer: data.data.included.dealers.find((d) => d.id === f.dealer_id)
            }));
            let not_filled = data.data.data['not_filled'].map((f) => ({
                ...f,
                dealer: data.data.included.dealers.find((d) => d.id === f.dealer_id),
                brand: data.data.included.brands.find((b) => b.id === f.brand_id)
            }));

            setLoad({filled: filled, not_filled: not_filled})
        })
        let date = new Date();
        let y = date.getFullYear();
        let timeSplit = dayToSend['time'].split(':');
        let m = new Date().getDate() < dayToSend['day'] || (new Date().getDate() === dayToSend['day'] && (new Date().getHours() < +timeSplit[0] || +timeSplit[0] === new Date().getHours()
            && new Date().getMinutes() < +timeSplit[1]))
            ? date.getMonth()
            : date.getMonth() + 1;

        let firstDay = new Date(y, m, dayToSend['day'], +timeSplit[0], +timeSplit[1]);
        let lastDayForTitle = new Date(y, m, dayToSend['day']);

        setLastDay(lastDayForTitle.toLocaleString('ru', {month: "long", day: 'numeric', year: "numeric"}))

        let arrayLastDay = [
            firstDay.toLocaleString('ru', {
                year: "numeric",
            }),
            firstDay.toLocaleString('ru', {
                month: "numeric",
            }) - 1,
            firstDay.toLocaleString('ru', {
                day: 'numeric',
            }),
            firstDay.toLocaleString('ru', {
                hour: 'numeric',
            }),
            firstDay.toLocaleString('ru', {
                minute: "numeric"
            }),
            firstDay.toLocaleString('ru', {
                second: "numeric"
            })
        ]
        setFullLasDay(arrayLastDay)
        setLoadDate(true)
    }, [dayToSend])

    useEffect(() => {
        let interval = null;
        if (loadDate && dayToSend['day']) {
            interval = setInterval(() => {
                setLostTime(timer(fullLastDay[0], fullLastDay[1], fullLastDay[2], fullLastDay[3], fullLastDay[4], fullLastDay[5]))
            }, 1000)
        }
        return () => {
            if (interval)
                clearTimeout(interval);
        }

    }, [loadDate, dayToSend, fullLastDay])
    return (
        <>
            {
                load['filled'] && load['not_filled']
                    ?

                    <div onClick={(e) => {

                        if (e.target.className === 'd-flex flex-column overflow-hidden') {
                            history.push(STATISTIC_MENU)
                        }
                    }} className='d-flex flex-column overflow-hidden'
                         // style={{zIndex: '22', minHeight: 'calc(100vh - 70px)', background: 'rgb(8 8 8 / 20%)'}}>
                         style={{zIndex: '22', minHeight: 'calc(100vh - 70px)', background: '#fff'}}>
                        <div style={{marginTop: '3%'}}>
                            <Container
                                style={{
                                    color: '#fff',
                                    // backgroundColor: 'rgb(8 8 8 / 80%)',
                                     backgroundColor: '#666666',
                                    marginTop: '222', minHeight: 500,
                                    borderRadius: 10, padding: '10px 25px',
                                }}>
                                <div className='mb-5 d-flex justify-content-between'>
                                    <p>
                                        <span style={{fontWeight: 500}}>Представитель </span>
                                        :
                                        <span style={{fontWeight: 'bold'}}> {user.User.dealer}</span>
                                    </p>
                                    <div>

                                        <span
                                            style={{fontSize: 14}}>Последний день подачи данных за текущий месяц: </span>
                                        <span style={{
                                            fontWeight: 500,
                                            textDecoration: 'underline',
                                            fontSize: 15,
                                            marginLeft: 20
                                        }}>{lastDay + ' ' + dayToSend['time']}</span>
                                        <div className='d-flex align-items-center justify-content-between mt-2'>
                                            <p style={{fontSize: 14}}>До окончания подачи данных осталось:</p>
                                            <p style={{
                                                fontWeight: 500,
                                                textDecoration: 'underline',
                                                fontSize: 15,
                                                marginLeft: 20
                                            }}>{lostTime}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className={s.body}>
                                    <ItemForShowDataEnter data={load['filled']}/>
                                    <ItemForShowDataWait data={load['not_filled']}/>
                                </div>
                            </Container>
                        </div>
                    </div>
                    :
                    <Spinner animation={"grow"}/>
            }
        </>

    );
};

export default ShowDataStatistic;