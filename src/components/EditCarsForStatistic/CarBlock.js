import React, {useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {sendActiveCar} from "../../http/brandAPI";



const CarBlock = (props) => {
    const [checkbox,setCheckbox]=useState()


    return (
        <div style={props.subType ? {order: -1} : {}} className=" align-items-end mt-2 justify-content-start">

            <Row className="mb-0 d-flex align-items-end">

                <Form.Group as={Col} controlId="model">
                    <Form.Label>Модель</Form.Label>
                    <Form.Control disabled={true} value={props.model} type="text" placeholder="Модель"/>
                </Form.Group>

                {/*<Form.Group as={Col} controlId="bodyCar">*/}
                {/*    <Form.Label>Тип кузова</Form.Label>*/}
                {/*    <Form.Control disabled={true} value={props.bodyType} type="text" placeholder="Тип кузова"/>*/}
                {/*</Form.Group>*/}

                <Form.Group as={Col} controlId="carTypes">
                    <Form.Label>Тип авто</Form.Label>
                    <Form.Control disabled={true} value={props.carType} type="text" placeholder="Тип кузова"/>
                </Form.Group>
                {
                    props.subType ? <Form.Group as={Col} controlId="carSubTypes">
                            <Form.Label>Подтип</Form.Label>
                            <Form.Control disabled={true} value={props.subType.name} type="text" placeholder="Подтип"/>
                        </Form.Group> :
                        false
                }
                <Form.Group as={Col} style={{maxWidth: 105}} id="formGridCheckbox">
                    <Form.Label className="d-flex">Продажа
                        <Form.Check
                            style={{
                                order: -1, marginRight: '5px'
                            }}
                            onChange={(e) => {
                                setCheckbox(e.target.checked)
                                 sendActiveCar(e.target.attributes['data-car'].value).then()
                            }}
                            data-car={props.carId}
                            checked={checkbox}
                            value={checkbox}
                            type="checkbox"/>
                    </Form.Label>
                </Form.Group>

            </Row>

        </div>
    );
};

export default CarBlock;