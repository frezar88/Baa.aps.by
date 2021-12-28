import React, {useContext, useEffect, useState} from 'react';
import {Container, Spinner} from "react-bootstrap";

import {useHistory} from "react-router-dom";
import img from "../Screenshot_2.png";
import s from './StatisticMenu.module.css'
import {ALL_STATISTIC_ROUTE, SET_STATISTIC_ROUTE, SHOW_STATISTIC_ROUTE} from "../utils/consts";
import FeedBack from "../components/FeedBack/FeedBack";
import {Context} from "../index";
import {getFillingStatistic} from "../http/brandAPI";


const StatisticMenu = () => {
    const history = useHistory()
    const {user} = useContext(Context)

    const [load, setLoad] = useState(false)
    const [onlyRead, setOnlyRead] = useState(true)

    const [errorText,setErrorText]=useState('')

    const sendData = async (data) => {
        try {
            await getFillingStatistic(data).then(() => {
                setOnlyRead(false)
            })
        } catch (e) {
            if (e.response.status === 403) {
                setErrorText(e.response.data)
                setOnlyRead(true)
            }
        } finally {
            setLoad(true)
        }
    }

    useEffect(() => {
        sendData(Math.round(new Date() / 1000)).then()
    }, [])

    return (
        <>
            {
                load
                    ?
                    onlyRead ?
                        <div className='d-flex flex-column overflow-hidden'
                             style={{backgroundColor: '#00000094', zIndex: '22'}}>
                            <Container className="d-flex" style={{
                                position: 'relative',
                                backgroundImage: `url(${img})`,
                                zIndex: -21,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                padding: '15px',
                                width: '100%',
                                height: 'calc(100vh - 70px) ',
                                filter: 'blur(0.4rem)'
                            }}>
                            </Container>
                            <div className={s.buttons}>
                                <Container style={{
                                    position: "absolute",
                                    top: (window.innerHeight / 2 - 70) / 2,
                                    left: window.innerWidth / 2 - 500,
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                }}
                                           className={s.grid_menu}
                                >
                                    {
                                        user.User.role === 'admin_readonly' ?
                                            false
                                            :
                                            <div onClick={() => history.push(SET_STATISTIC_ROUTE)}
                                                 className={s.block + " p-5 d-flex justify-content-center align-items-center"}
                                                 style={{background: '#fff', borderRadius: 5}}>
                                                <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center'}}
                                                   className="m-0">Добавить статистику продаж</p>
                                            </div>
                                    }

                                    {/*<div onClick={()=>{history.push(EDIT_CARS) }} className={s.block +" p-5 d-flex justify-content-center align-items-center  "}*/}
                                    {/*     style={{background: '#fff', borderRadius: 5}}>*/}
                                    {/*    <p style={{fontSize:20,fontWeight:500,textAlign:'center'}} className="m-0">Редактировать продаваемые модели</p>*/}
                                    {/*</div>*/}
                                    <div onClick={() => {
                                        history.push(SHOW_STATISTIC_ROUTE)
                                    }} className={s.block + " p-5 d-flex justify-content-center align-items-center "+s.blocked}
                                         style={{background: '#fff', borderRadius: 5,position:'relative'}}>
                                        <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center'}}
                                           className="m-0">Просмотр подачи данных статистики</p>
                                        <p className={s.text} >{errorText}</p>
                                    </div>
                                    <div onClick={() => {
                                        history.push(ALL_STATISTIC_ROUTE)
                                    }} className={s.block + " p-5 d-flex justify-content-center align-items-center "+s.blocked}
                                         style={{background: '#fff', borderRadius: 5,position:'relative'}}>
                                        <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center'}}
                                           className="m-0">Просмотр статистики всех участников рынка</p>
                                        <p className={s.text} >{errorText}</p>
                                    </div>
                                    <FeedBack variant={'light'}/>
                                </Container>
                            </div>
                        </div>
                        :
                        <div className='d-flex flex-column overflow-hidden'
                             // style={{backgroundColor: '#00000094', zIndex: '22'}}>
                             style={{backgroundColor: 'rgba(0, 0, 0, 0.38)', zIndex: '22'}}>
                            <Container className="d-flex" style={{
                                position: 'relative',
                                backgroundImage: `url(${img})`,
                                zIndex: -21,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                padding: '15px',
                                width: '100%',
                                height: 'calc(100vh - 70px) ',
                                filter: 'blur(0.4rem)'
                            }}>
                            </Container>
                            <div className={s.buttons}>
                                <Container style={{
                                    position: "absolute",
                                    top: (window.innerHeight / 2 - 70) / 2,
                                    left: window.innerWidth / 2 - 500,
                                    gridTemplateColumns: user.User.role !== 'admin_readonly' ? '1fr 1fr 1fr' : '1fr 1fr',
                                }}
                                           className={s.grid_menu}
                                >
                                    {
                                        user.User.role === 'admin_readonly' ?
                                            false
                                            :
                                            <div onClick={() => history.push(SET_STATISTIC_ROUTE)}
                                                 className={s.block + " p-5 d-flex justify-content-center align-items-center"}
                                                 style={{background: '#fff', borderRadius: 5}}>
                                                <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center'}}
                                                   className="m-0">Добавить статистику продаж</p>
                                            </div>
                                    }

                                    {/*<div onClick={()=>{history.push(EDIT_CARS) }} className={s.block +" p-5 d-flex justify-content-center align-items-center  "}*/}
                                    {/*     style={{background: '#fff', borderRadius: 5}}>*/}
                                    {/*    <p style={{fontSize:20,fontWeight:500,textAlign:'center'}} className="m-0">Редактировать продаваемые модели</p>*/}
                                    {/*</div>*/}
                                    <div onClick={() => {
                                        history.push(SHOW_STATISTIC_ROUTE)
                                    }} className={s.block + " p-5 d-flex justify-content-center align-items-center  "}
                                         style={{background: '#fff', borderRadius: 5}}>
                                        <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center'}}
                                           className="m-0">Просмотр подачи данных статистики</p>
                                    </div>
                                    <div onClick={() => {
                                        history.push(ALL_STATISTIC_ROUTE)
                                    }} className={s.block + " p-5 d-flex justify-content-center align-items-center"}
                                         style={{background: '#fff', borderRadius: 5}}>
                                        <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center'}}
                                           className="m-0">Просмотр статистики всех участников рынка</p>
                                    </div>
                                    <FeedBack variant={'light'}/>
                                </Container>
                            </div>
                        </div>
                    :
                    <Spinner animation={"grow"}/>
            }
        </>

    );
};

export default StatisticMenu;