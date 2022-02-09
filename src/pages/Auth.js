import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Spinner} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    STATISTIC_MENU, SUCCESS,
} from "../utils/consts";
import {Context} from "../index";
import {addMaskFromInputCallBackForm, addSelect, validateEmail} from "../utils/functions";
import {login, registration} from "../http/userAPI";
import {bands} from "../http/brandAPI";
import img from '../Screenshot_2.png'



const Auth =  () => {
    const {brandModel} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [dealer, setDealer] = useState('')
    const [brand, setBrand] = useState('')
    const {user} = useContext(Context)
    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === REGISTRATION_ROUTE;
    console.log(isLogin)
    let brands = []
    const [errorRegisterText, setErrorRegisterText] = useState('')
    const [errorLoginText, setErrorLoginText] = useState('')

    const [loginEmail, setLoginEmail] = useState(false)
    const [loginPassword, setLoginPassword] = useState(false)

    const [emailLogin,setEmailLogin]= useState('')
    const [passwordLogin,setPasswordLogin]= useState('')

    let data;
    const singUp = async () => {
        try {
            await registration(name, email, password, phone.replace('+375', ''), dealer, brands)

            history.push(SUCCESS)
        } catch (e) {
            setErrorRegisterText(e.response.data)
            setTimeout(() => {
                setErrorRegisterText('')
            }, 2000)
        }
    }
    const singIn = async () => {
      try {
       data =   await login(emailLogin,passwordLogin)
          user.setIsAuth(true);
          history.push(STATISTIC_MENU)
          user.setUser(data)

      }
      catch (e) {
          setErrorLoginText(e.response.data)
          setTimeout(() => {
              setErrorLoginText('')
          }, 2000)
      }
    }
    const [brandR,setBrandR]=useState([])
    useEffect(()=>{
        bands().then((data) => {
            setBrandR(data.data.data)
        })
    },[])

    return (
        <div>
            {
                brandR[0]?
                    <>
                        <div style={{backgroundColor: '#00000094'}}>
                            <Container style={{
                                position:'absolute',
                                backgroundImage: `url(${img})`,
                                zIndex: -21,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                padding: '15px',
                                width: '100%',
                                height: 'calc(100vh - 70px) ',
                                filter: 'blur(0.4rem)',
                                left:'calc(50% - 660px)'
                            }}>

                            </Container>
                            <Container style={{zIndex:111111}} className="d-flex justify-content-center align-items-center"
                                       style={{height: window.innerHeight - 70}}>
                                { !isLogin ?
                                    <Card style={{width: 600 }} className="p-5 ">
                                        <h2 style={{textAlign: 'center', color: 'red', fontSize: '16px'}}>{errorLoginText}</h2>
                                        <h2 className="m-auto">{!isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                                        <Form onKeyDown={
                                            (e)=>{
                                                if(e.keyCode ===13){
                                                    let btnEnter = document.querySelector('button.enter')
                                                    btnEnter.click()
                                                }
                                            }
                                        } className="d-flex flex-column">
                                            <Form.Control
                                                value={emailLogin}
                                                autoComplete={'username'}
                                                onChange={(e) => {
                                                    setEmailLogin(e.target.value)
                                                    if (validateEmail(e.target.value)) {
                                                        e.target.style.boxShadow = 'none';
                                                        setLoginEmail(true)
                                                    } else {
                                                        e.target.style.boxShadow = 'red 0px 0px 6px';
                                                        setLoginEmail(false)
                                                    }
                                                }}
                                                className="mt-3"
                                                placeholder="Введите ваш email..."/>
                                            <Form.Control
                                                type={'password'}
                                                value={passwordLogin}
                                                autoComplete={'current-password'}
                                                onChange={(e) => {
                                                    setPasswordLogin(e.target.value)

                                                    if (e.target.value.length < 4) {
                                                        e.target.style.boxShadow = 'red 0px 0px 6px';
                                                        setLoginPassword(false)
                                                    } else {
                                                        e.target.style.boxShadow = 'none';
                                                        setLoginPassword(true)
                                                    }
                                                }}


                                                className="mt-3 "
                                                placeholder="Введите ваш пароль..."/>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                {/*<div style={{fontWeight: '500'}}>{isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}*/}
                                                    {/*<NavLink className="ms-2"*/}
                                                    {/*         to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>{isLogin ? 'Зарегистрируйтесь' : 'Войдите'}</NavLink>*/}
                                                {/*</div>*/}
                                                <Button disabled={loginEmail && loginPassword ? false : true} onClick={() => {
                                                    singIn().then()
                                                }} style={{marginLeft:'auto'}} className="mt-3 + enter" variant={errorLoginText ? 'danger' : "primary"}>Вход в аккаунт </Button>
                                            </div>
                                        </Form>
                                    </Card>
                                    :
                                    <Card style={{width: 600 ,overflow:"auto",maxHeight:'100%'}} className="p-5 ">
                                        <h2 style={{textAlign: 'center', color: 'red', fontSize: '16px'}}>{errorRegisterText}</h2>
                                        <h2 className="m-auto">{!isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                                        <Form onChange={() => {
                                            let input = document.getElementById('reg_phone')
                                            if (input) {
                                                addMaskFromInputCallBackForm(input, '+375_________')
                                            }
                                        }
                                        } className="form-register d-flex flex-column">
                                            <h6 className="mt-2">ФИО</h6>
                                            <Form.Control
                                                value={name}
                                                onInput={e => setName(e.target.value)}
                                                type='text'
                                                data-type='name'
                                                className="mt-0"
                                                placeholder='Имя, фамилия'/>

                                            <h6 className="mt-2">Телефон</h6>
                                            <Form.Control
                                                value={phone}
                                                onInput={e => {
                                                    setPhone(e.target.value)
                                                    if (e.target.value.length < 13) {
                                                        e.target.style.boxShadow = 'red 0px 0px 6px'
                                                    } else {
                                                        e.target.style.boxShadow = 'none'
                                                    }
                                                }}
                                                id="reg_phone"
                                                type='tel'
                                                data-type='phone'
                                                className="mt-0"
                                                placeholder='Введите ваш телефон...'/>

                                            <h6 className="mt-2">Email</h6>
                                            <Form.Control
                                                value={email}
                                                onInput={e => {
                                                    if (!validateEmail(e.target.value)) {
                                                        e.target.style.boxShadow = 'red 0px 0px 6px';
                                                        setEmail(e.target.value)

                                                    } else {
                                                        e.target.style.boxShadow = 'none'
                                                        setEmail(e.target.value)

                                                    }
                                                }}
                                                type='email'
                                                data-type='email'
                                                className="mt-0"
                                                placeholder='Допускается использование только корпоративных email'/>

                                            <h6 className="mt-2">Пароль</h6>
                                            <Form.Control
                                                value={password}
                                                onInput={e => {
                                                    setPassword(e.target.value)
                                                    if (e.target.value.length < 6) {
                                                        e.target.style.boxShadow = 'red 0px 0px 6px'
                                                    } else {
                                                        e.target.style.boxShadow = 'none'
                                                    }
                                                }}
                                                type='password'
                                                data-type='password'
                                                className="mt-0"
                                                placeholder='Придумайте пароль (минимум 6 символов)'/>

                                            <h6 className="mt-2">Дилер</h6>
                                            <Form.Control
                                                value={dealer}
                                                onInput={e => setDealer(e.target.value)}
                                                type='text'
                                                data-type='dealer'
                                                className="mt-0"
                                                placeholder='Укажите,название дилера, УНП'/>

                                            <div className={'brand'}>
                                                <h6 className="mt-2">Бренд</h6>
                                                <div className='for-select d-flex align-items-center'>
                                                    <Form.Select onChange={e => {
                                                        brands.push(e.target.value)
                                                        setBrand(e.target.value)
                                                    }} required aria-label="brand"
                                                                 className={'selectBrand'}>
                                                        <option value="">Выберите бренд</option>
                                                        {brandModel.IsBrand.map(({id, name}) =>
                                                            <option key={id} value={id}>{name}</option>
                                                        )}
                                                    </Form.Select>
                                                    <Button onClick={(e) => addSelect(e)} className={' ms-1'} variant={"success"}
                                                            style={{backgroundColor: '#00a200'}}>+
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div style={{fontWeight: '500'}}>{!isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
                                                    <NavLink className="ms-2"
                                                             to={!isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>{!isLogin ? 'Зарегистрируйтесь' : 'Войдите'}</NavLink>
                                                </div>

                                                <Button type={'submit'} disabled={
                                                    name.length && phone.length > 12 && validateEmail(email) && password.length > 5 && dealer.length && brand.length ? false : true

                                                } onClick={(e) => {
                                                    e.preventDefault();
                                                    let selects = document.querySelectorAll('select.selectBrand')
                                                    brands = []
                                                    selects.forEach(el => {
                                                        if (el.value) {
                                                            brands.push(el.value)
                                                        }
                                                    })
                                                    singUp().then();
                                                }} className="mt-3"
                                                        variant={errorRegisterText ? 'danger' : "primary"}>Зарегистрироваться</Button>
                                            </div>
                                        </Form>
                                    </Card>
                                }
                            </Container>

                        </div>
                    </>
                    :
                    <Spinner animation={"grow"}/>
            }

        </div>


    );
};

export default Auth;



