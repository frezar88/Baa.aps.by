import React, {useEffect, useState} from 'react';
import {Modal, Button, Spinner} from "react-bootstrap";


const PopUpStatistic = (props) => {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Отображение статистики
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <p style={{textDecoration:'underline',fontSize:16}}>
                        Статистика за прошлый месяц будет доступна всем участникам рынка  после {props.day['day']}  числа
                    </p>
            </Modal.Body>
            <Modal.Footer className={'d-flex justify-content-center'}>
                <Button variant={'dark'} onClick={props.onHide}>Понятно</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PopUpStatistic;