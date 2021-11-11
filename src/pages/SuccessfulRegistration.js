import React from 'react';
import {Button, Card, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {BODY_ROUTE} from "../utils/consts";


const SuccessfulRegistration = () => {
    const history = useHistory()
    return (
        <div style={{backgroundColor: '#00000094'}} >
            <Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 70}}>

                    <Card style={{width: 600}} className="p-5">
                        <h2 style={{color:'green',fontWeight:'bold'}}  className="m-auto">Данные отправлены</h2>
                        <p style={{textDecoration:'underline',fontWeight:500}} className="m-auto mt-3">Ожидайте подтверждения регистрации</p>
                        <Button onClick={()=>history.push(BODY_ROUTE)}  className={'mt-5'} variant={"primary"}>На главную</Button>
                    </Card>
            </Container>
        </div>
    );
};

export default SuccessfulRegistration;