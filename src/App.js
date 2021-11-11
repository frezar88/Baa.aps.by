import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './App.css';
import {observer} from "mobx-react-lite";

import {bands, carTypes} from "./http/brandAPI";
import {Context} from "./index";

import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";


const App =observer( () => {
    const {user, brandModel} = useContext(Context)

    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        let currentDate = Math.round(new Date()/1000)
        if (currentDate < localStorage.getItem('exp') && localStorage.getItem('token')){
            check(localStorage.getItem('refresh')).then(data=>{
                user.setIsAuth(true)
                user.setUser(data)
            }).finally(()=>setLoading(false))
        }else{
            return setLoading(false)
        }
    },[user])

    if (loading){
        return  <Spinner animation={"grow"}/>
    }


    bands().then((data) => brandModel.setBrand(data.data))
    if (user.IsAuth === true) {

        carTypes().then((data) => brandModel.setCarType(data.data))
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
