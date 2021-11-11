import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

const SetStatisticCarBlock = (props) => {
    console.log(props)
    return (
        <div data-id={props.id} className={`carsBlock ${props.id}`}>
            <Row className=" mb-0 d-flex align-items-end">
                <Form.Group style={{maxWidth: 200}} as={Col} >
                    <Form.Label>Бренд</Form.Label>
                    <Form.Control disabled={true} readOnly={true} value={props.model.brand.name} type="text" placeholder="Бренд"/>
                </Form.Group>

                <Form.Group style={{maxWidth: 200}} as={Col} >
                    <Form.Label>Модель</Form.Label>
                    <Form.Control disabled={true} data-id={props.model.id} readOnly={true} value={props.model.name} type="text" placeholder="Модель"/>
                </Form.Group>

                <Form.Group style={{maxWidth: 200}} as={Col} >
                    <Form.Label>Тип кузова</Form.Label>
                    <Form.Control disabled={true} readOnly={true} value={props.bodyType['ru_name']} type="text" placeholder="Тип кузова"/>
                </Form.Group>

                <Form.Group style={{maxWidth: 200}} as={Col} >
                    <Form.Label>Тип авто</Form.Label>
                    <Form.Control disabled={true} readOnly={true} value={props.carType.name} type="text" placeholder="Тип кузова"/>
                </Form.Group>
                {
                    props.carType['car_subtypes'] ? <Form.Group style={{maxWidth: 200}} as={Col} >
                        <Form.Label>Подтип</Form.Label>
                        <Form.Control disabled={true} readOnly={true} value={props.carType['car_subtypes'].name} type="text" placeholder="Тип кузова"/>
                    </Form.Group>
                        :
                        ''
                }

                <Form.Group style={{maxWidth: 200}} as={Col} >
                    <Form.Label>Количество</Form.Label>
                    <Form.Control  data-model-id={props.id} data-name={'input_count'}  defaultValue={0} type="number" placeholder="Количество"/>
                </Form.Group>
            </Row>
        </div>
    );
};

export default SetStatisticCarBlock;