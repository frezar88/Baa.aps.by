import React, {useContext, useEffect, useState} from 'react';
import {Card, Container, Form} from "react-bootstrap";


import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BrandBlock from "../components/EditCarsForStatistic/BrandBlock";
import {getCars} from "../http/brandAPI";
import {useHistory} from "react-router-dom";
import {STATISTIC_MENU} from "../utils/consts";



const EditCarsForStatistic = observer(() => {
    const {user} = useContext(Context)
    const [load,setLoad]=useState(false)
    const history=useHistory()

    useEffect(() => {
        getCars().then((data) => {
            user.setUserCars(data.data)
            setLoad(true)
            }
        )
    }, [user])


    return (
        <div onClick={(e)=>{

            if(e.target.className === 'd-flex flex-column overflow-hidden'){
                history.push(STATISTIC_MENU)
            }
        }}  className='d-flex flex-column overflow-hidden' style={{backgroundColor: '#00000094', height: '100%', minHeight: 'calc(100vh - 70px) '}}>
            <Container className="d-flex justify-content-center align-items-center">
                <Card style={{width: '100%', maxWidth: '100%',marginBottom:'5rem'}} className="p-4 mt-5 ">

                    <Form className={'car_in_stock'}>
                        <h3>Список автомобилей</h3>
                        <hr/>
                        {load ? <BrandBlock data={user.UserCars}/> : false}


                    </Form>
                </Card>


            </Container>
        </div>
    );
});

export default EditCarsForStatistic;