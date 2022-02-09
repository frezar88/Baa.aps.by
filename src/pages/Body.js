import React, {useContext, useEffect} from 'react';
import { Container} from "react-bootstrap";
import img from '../Screenshot_2.png'
import s from './Body.module.css'
import {useHistory} from "react-router-dom";
import {LOGIN_ROUTE,  STATISTIC_MENU} from "../utils/consts";
import {Context} from "../index";


const Body = () => {
    const history = useHistory()
    const {user}=useContext(Context)
    useEffect(()=>{
        if (user.IsAuth){
            history.push(STATISTIC_MENU)
        }
    },[user.IsAuth,history])
    return (
        <div className='d-flex flex-column overflow-hidden' style={{backgroundColor: '#00000094', zIndex: '22'}}>
            <Container className="d-flex" style={{
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
                <Container style={{position: "absolute", maxWidth:'620px', top: (window.innerHeight - 170) / 2, left: 'calc(50% - 320px)'}}
                           className="d-flex"
                >
                    <div onClick={()=>{history.push(LOGIN_ROUTE) }} className={s.block +" p-5 d-flex justify-content-center align-items-center"}
                         style={{background: '#fff', borderRadius: 5}}>
                        <p style={{fontSize:20,fontWeight:500 ,minWidth:190,textAlign:'center'}} className="m-0">Вход в аккаунт</p>
                    </div>
                    {/*<div onClick={()=>{history.push(REGISTRATION_ROUTE) }} className={s.block +" p-5 d-flex justify-content-center align-items-center  ms-4"}*/}
                    {/*     style={{background: '#fff', borderRadius: 5}}>*/}
                    {/*    <p style={{fontSize:20,fontWeight:500,minWidth:190,textAlign:'center'}} className="m-0">Регистрация</p>*/}
                    {/*</div>*/}

                </Container>
            </div>


        </div>

    );
};

export default Body;