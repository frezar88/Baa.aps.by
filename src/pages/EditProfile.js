import React, {useContext,  useState} from 'react';
import {Button, Container, Form, FormLabel} from "react-bootstrap";
import s from "./EditProfile.module.css";
import {useHistory} from "react-router-dom";
import {PROFILE, SUCCESS_SEND_PERSONAL_DATA} from "../utils/consts";
import {Context} from "../index";
import { validateEmail} from "../utils/functions";
import {check, updateUserData} from "../http/userAPI";



const EditProfile = () => {
    const history=useHistory()
    const {user} = useContext(Context)
    const [name,setName]=useState(user.User.name)
    const [phone,setPhone]=useState(user.User.phone +'')
    const [email,setEmail]=useState(user.User.email)
    const [errorText,setErrorText]=useState('')



    const eventBtnSend = () => {
        let data = {
            "name": name,
            "phone": phone,
            "email": email
        }
        sendData(data).then()
    }

    const sendData = async (data) => {
        try {
            await updateUserData(data)
            history.push(SUCCESS_SEND_PERSONAL_DATA)
            check(localStorage.getItem('refresh')).then(data=>{
                user.setIsAuth(true)
                user.setUser(data)
            })
        } catch (e) {

         setErrorText(e.response.data)
        }
    }
    console.log(user.User)
    return (

        <div className='d-flex flex-column overflow-hidden '
             style={{zIndex: '22', minHeight: 'calc(100vh - 70px)', background: 'rgb(8 8 8 / 30%)'}}>
            <div style={{marginTop: '3%'}}>
                <Container
                    style={{
                        maxWidth: 600,
                        width: '100%',
                        color: '#000',
                        backgroundColor: 'rgb(8 8 8 / 80%)',
                        marginTop: '222', minHeight: 500,
                        borderRadius: 10, padding: '10px 25px',
                    }}>
                    <div className={s.title}>
                        <h3 style={{textAlign: 'center'}}> Изменение персональных данных</h3>
                    </div>
                    <Form style={{color:'#fff'}} onChange={()=>setErrorText('')}>
                        <FormLabel style={{width:'100%'}}>
                            <h6>ФИО</h6>
                            <Form.Control
                                type={'text'}
                            value={name}
                            onInput={(e)=>{
                                setName(e.target.value)
                                if (e.target.value.length > 4) {
                                    e.target.style.boxShadow = 'green 0px -1px 13px 1px';
                                } else {
                                    e.target.style.boxShadow = 'red 0px -1px 13px 1px';
                                }
                            }}
                            />
                        </FormLabel>
                        <FormLabel style={{width:'100%'}}>
                            <h6>Телефон</h6>
                            <Form.Control
                                type={'number'}
                                value={phone}
                                onInput={(e)=>{
                                    setPhone(e.target.value)
                                    if (e.target.value.length === 9) {
                                        e.target.style.boxShadow = 'green 0px -1px 13px 1px';
                                    } else {
                                        e.target.style.boxShadow = 'red 0px -1px 13px 1px';
                                    }
                                }}
                            />
                        </FormLabel>
                        <FormLabel style={{width:'100%'}}>
                            <h6>Email</h6>
                            <Form.Control
                                type={'email'}
                                value={email}
                                onInput={(e)=>{
                                    setEmail(e.target.value)
                                    if (validateEmail(e.target.value)) {
                                        e.target.style.boxShadow = 'green 0px -1px 13px 1px';
                                    } else {
                                        e.target.style.boxShadow = 'red 0px -1px 13px 1px';
                                    }
                                }}
                            />
                        </FormLabel>
                    </Form>
                    <div style={{textAlign:'center',color:'red',fontSize:14,minHeight:18,textDecoration:'underline',transition:'.3s'}}>{errorText}</div>
                    <div className={s.buttons + ' d-flex justify-content-center mt-5 mb-4'}>
                        <Button onClick={()=>{history.push(PROFILE)}} style={{marginRight:'auto'}} className={'btn-secondary'}>Назад</Button>
                        <Button
                           disabled={
                               !(validateEmail(email) && (name.length > 4 ) && phone.length ===9)
                           }
                           onClick={eventBtnSend}
                            variant={"success"}>Сохранить</Button>
                    </div>

                </Container>
            </div>
        </div>
    );
};

export default EditProfile;

