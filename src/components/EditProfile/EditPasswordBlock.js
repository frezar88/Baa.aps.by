import React, {useState} from 'react';
import {Button, Form, FormLabel} from "react-bootstrap";
import s from "./EditPasswordBlock.module.css";
import {useHistory} from "react-router-dom";
import {PROFILE, SUCCESS_SEND_NEW_PASSWORD, SUCCESS_SEND_STATISTIC} from "../../utils/consts";
import {sendNewPassword} from "../../http/userAPI";


const EditPasswordBlock = () => {
    const history=useHistory()
    const [password,setPassword]=useState('')
    const [passwordTwo,setPasswordTwo]=useState('')
    const [errorText,setErrorText]=useState('')

    const checkAndSendNewPassword= ()=>{
        if ((password !== passwordTwo)  ){
            return setErrorText('Пароли не совпадают')
        }else{
            sendData(password).then()
        }
    }

    const sendData = async (data) => {
        try {
            await sendNewPassword(data)
            history.push(SUCCESS_SEND_NEW_PASSWORD)
        } catch (e) {
            setErrorText('Ошибка отправки данных (обратитесь в службу поддержки)')
        }
    }
    return (
        <div>
            <Form onChange={()=>{setErrorText('')}} style={{color:'#fff'}}>

                <div>
                    <FormLabel style={{maxWidth:'100%',width:'100%'}}>
                        <h6>Введите новый пароль (минимум 5 символов)</h6>
                        <Form.Control
                            value={password}
                            onInput={(e)=>setPassword(e.target['value'])}
                            type={'text'}
                            placeholder={'Введите новый пароль'}
                        />
                    </FormLabel>
                    <FormLabel style={{maxWidth:'100%',width:'100%'}}>
                        <Form.Control
                            value={passwordTwo}
                            onInput={(e)=>setPasswordTwo(e.target['value'])}
                            type={'text'}
                            placeholder={'Введите новый пароль'}
                        />
                    </FormLabel>
                </div>
                <div style={{textAlign:'center',color:'red',fontSize:14,minHeight:18,textDecoration:'underline',transition:'.3s'}}>{errorText}</div>
            </Form>
            <div className={s.buttons + ' d-flex justify-content-center mt-5 mb-4'}>
                <Button onClick={()=>{history.push(PROFILE)}} style={{marginRight:'auto'}} className={'btn-secondary'}>Назад</Button>
                <Button disabled={!(password.length >= 5 && passwordTwo.length >= 5)} onClick={checkAndSendNewPassword} variant={"success"}>Сохранить</Button>
            </div>

        </div>
    );
};

export default EditPasswordBlock;