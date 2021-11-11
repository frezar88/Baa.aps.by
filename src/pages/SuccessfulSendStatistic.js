import React from 'react';
import {Button, Card, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {STATISTIC_MENU} from "../utils/consts";


const SuccessfulSendStatistic = () => {
    const history = useHistory()
    return (
        <div style={{backgroundColor: '#00000094'}} >
            <Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 70}}>

                    <Card style={{width: 600}} className="p-5">
                        <h2 style={{color:'black',fontWeight:'bold',}}  className="m-auto">Данные отправлены</h2>
                        <Button onClick={()=>history.push(STATISTIC_MENU)}  className={'mt-5'} variant={"dark"}>Вернуться в меню</Button>
                    </Card>
            </Container>
        </div>
    );
};

export default SuccessfulSendStatistic;