import React from 'react';
import CarBlock from "./CarBlock";
import {Col, Nav, Row, Tab} from "react-bootstrap";


const BrandBlock = (props) => {
    let brandsTest = []
    props.data.forEach(el => {
        if (brandsTest.indexOf(el.model.brand.name) === -1) {
            brandsTest.push(el.model.brand.name)
        }
    })
    //----------
    //Create Models


    return (
        <div id={'editStatistic'}>
            <Tab.Container style={{display: 'grid'}} id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <p className="mt-2 mb-2">Бренд</p>
                        <Nav variant="pills" className="flex-column">
                            {brandsTest.map((value) =>
                                <Nav.Item  key={value}>
                                    <Nav.Link style={{marginTop:0}} eventKey={value}>{value}</Nav.Link>
                                </Nav.Item>
                            )}

                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {brandsTest.map((value) =>
                                <Tab.Pane key={value} eventKey={value}>
                                    {
                                        props.data.filter(item => item.model.brand.name === value)
                                            .map(({id, model, car_type, car_subtype, on_sale}) =>
                                                <CarBlock key={id} carId={id} model={model.name}
                                                          carType={car_type.name} subType={car_subtype} active={on_sale}
                                                />
                                            )
                                    }
                                </Tab.Pane>
                            )}

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    );
};

export default BrandBlock;