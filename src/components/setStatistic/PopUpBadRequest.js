import React, {useEffect, useState} from 'react';
import {Modal, Button, Spinner} from "react-bootstrap";
import {num_of_days_to_send_stat} from "../../http/brandAPI";

const PopUpBadRequest = (props) => {
    const [dayToSend,setDayToSend]=useState('')
    useEffect(()=>{
        num_of_days_to_send_stat().then(data=>{
            setDayToSend(data.data['num_of_days_to_send_stat'])
        })
    },[])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Ошибка отправки данных
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { dayToSend ?
                    <p style={{textDecoration:'underline',fontSize:16}}>
                        Статистику за данный месяц можно подать с 1 по {dayToSend+1} число следующего месяца
                    </p>:
                    <Spinner animation={"grow"}/>

                }

            </Modal.Body>
            <Modal.Footer className={'d-flex justify-content-center'}>
                <Button variant={'dark'} onClick={props.onHide}>Понятно</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PopUpBadRequest;