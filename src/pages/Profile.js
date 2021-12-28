import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import s from './Profile.module.css'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {EDIT_PASSWORD, EDIT_PROFILE, STATISTIC_MENU} from "../utils/consts";



const Profile =observer( () => {
    const history=useHistory()
    const {user} = useContext(Context)
    return (
        <div className='d-flex flex-column overflow-hidden' style={{zIndex: '22', minHeight: 'calc(100vh - 70px)' ,background:'rgb(8 8 8 / 20%)'}}>
            <div style={{marginTop: '3%'}}>
                <Container
                    style={{
                        color: '#fff',
                        // backgroundColor: 'rgb(8 8 8 / 80%)',
                        backgroundColor: '#666666',
                        marginTop: '222', minHeight: 500,
                        borderRadius: 10, padding: '10px 25px',
                        maxWidth: 800,
                        width: '100%',
                    }}>

                    <div className={s.div}>
                        <div className={s.title}>
                            <h3 style={{textAlign: 'center'}}> Ваши персональные данные</h3>
                        </div>
                        <div className={s.list}>
                            <ul>
                                <li>ФИО</li>
                                <li>Телефон</li>
                                <li>Email</li>
                            </ul>
                            <ul>
                                <li>{user.User.name}</li>
                                <li>{user.User.phone ? user.User.phone : 'телефон'}</li>
                                <li>{user.User.email}</li>
                            </ul>
                        </div>
                        <div className={s.buttons + ' d-flex justify-content-between pb-2'}>
                            <div>
                                <Button variant={'primary'} className={' me-4'} onClick={()=>history.push(EDIT_PROFILE)} >Изменить личные данные</Button>
                                <Button variant={'primary'} className={''} onClick={()=>history.push(EDIT_PASSWORD)} >Изменить пароль</Button>
                            </div>

                            <Button variant={'warning'} style={{background:'#f58403',color:'#fff',borderColor:'#f58403'}} className={'btn-secondary'} onClick={()=>history.push(STATISTIC_MENU)}>Закрыть</Button>

                        </div>
                    </div>

                </Container>
            </div>
        </div>
    );
});

export default Profile;

