import React, {useEffect, useState} from 'react';
import {Modal, Button, Spinner} from "react-bootstrap";
import {num_of_days_to_send_stat} from "../../http/brandAPI";

const PopUpSendStatistic = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Сохранить?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <span style={{textDecoration: 'underline', fontSize: 16}}> Редактирование статистики после подачи запрещено.</span>
                    <br/>
                    <span style={{textDecoration: 'none'}}> Общее количество проданных автомобилей: <span
                        style={{fontWeight: 'bold'}}>{props.countAutoAndData.countCars}</span></span>
                </p>

            </Modal.Body>
            <Modal.Footer className={'d-flex justify-content-center'}>
                <Button variant={'primary'} style={{minWidth: 90}}
                        onClick={() => {
                            props.onHide()
                            props.sendData(props.countAutoAndData.data)
                        }}>Да</Button>
                <Button variant={'dark'}
                        style={{background: '#f58403', color: '#fff', borderColor: '#f58403', minWidth: 90}}
                        onClick={props.onHide}>Нет</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PopUpSendStatistic;