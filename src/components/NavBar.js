import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, STATISTIC_MENU} from "../utils/consts";
import {observer} from "mobx-react-lite";
import s from "./NavBar.module.css"
import Reminder from "./Reminder/Reminder";
import {num_of_days_to_send_stat} from "../http/brandAPI";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [lastDay, setLastDay] = useState()

    const [reminderState, setReminderState] = useState(false)

    const [arrDate, setArrDate] = useState([])
    const [loadArrDate, setLoadArrDate] = useState(false)


    const [dayToSend,setDayToSend]=useState()

    useEffect(()=>{
        num_of_days_to_send_stat().then(data=>{
            console.log(data.data)
            setDayToSend(data.data['num_of_days_to_send_stat'])
        })
    },[])


    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
        localStorage.setItem('exp', '1577826000')
        localStorage.setItem('token', '')
        setReminderState(false)
    }

    useEffect(() => {
        let date = new Date(), y = date.getFullYear(), m = date.getMonth() + 1;
        let firstDay = new Date(y, m, 2);
        let lastDayForTitle = new Date(y, m, dayToSend?+dayToSend+1:1);
        setLastDay(lastDayForTitle.toLocaleString('ru', {month: "long", day: 'numeric', year: "numeric"}))


        let arrayLastDay = [
            firstDay.toLocaleString('ru', {
                year: "numeric",
            }),
            firstDay.toLocaleString('ru', {
                month: "numeric",
            }),
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
        setArrDate(arrayLastDay)
        setLoadArrDate(true)
    }, [dayToSend])

    return (
        <Navbar bg="dark" variant={"dark"} expand="lg">


            <Container>

                {
                    user.IsAuth ?
                        <NavLink
                            className={s.header_statistic}
                            to={STATISTIC_MENU}
                            style={{
                                fontWeight: 'bold',
                                fontSize: '20px',
                                textDecoration: 'none',
                                color: '#fff'
                            }}
                        >
                            Меню
                        </NavLink> :
                        ''
                }

                <Navbar.Toggle aria-controls="navbarScroll"/>

                <Navbar.Collapse id="navbarScroll" className={'justify-content-end'} style={{position: "relative"}}>
                    {
                        loadArrDate ?
                            <Reminder
                                dayToSend={dayToSend}
                                loadArrDate={loadArrDate}
                                setReminderState={setReminderState}
                                reminderState={reminderState}
                                lastDay={lastDay}
                                arrDate={arrDate}
                            />
                            :
                            false
                    }


                    <div className='d-flex align-items-center'>

                        <Nav
                            className=" my-2 my-lg-0" style={{maxHeight: '150px'}} navbarScroll>
                            {
                                user._isAuth ?
                                    <Nav className="ml-auto" style={{color: '#fff'}}>
                                        <Button className="m-2" variant={'secondary'}
                                                onClick={() => logOut()}>Выйти</Button>
                                    </Nav>
                                    :
                                    <Nav className="ml-auto" style={{color: '#fff'}}>

                                        <Button className={s.btn_avt + " m-2"}
                                                variant={'outline-light'}
                                                onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                                    </Nav>
                            }
                        </Nav>
                    </div>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;