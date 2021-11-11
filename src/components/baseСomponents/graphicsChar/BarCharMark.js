import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Container} from "react-bootstrap";

const BarCharMark = () => {
    return (
        <div>
            <Container className={'d-flex'} style={{boxSizing:'border-box'}}>
                <Bar
                    data={{
                        labels: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",],
                        datasets: [
                            {
                                label: 'LADA',
                                data: [23, 22, 22, 22],
                                fill: true,
                                backgroundColor: ['red']
                            }, {
                                label: 'Ниссан',
                                data: [13, 44, 2, 51],
                                fill: true,
                                backgroundColor: ['green']
                        }
                        ]
                    }}
                    width={'100%'}
                    height={'400px'}

                    options={{
                        maintainAspectRatio: false,
                        elements: {
                            bar: {
                                borderWidth: 2,
                            }
                        },

                    }}

                />
                <span style={{minWidth:'100px',fontWeight:'500'}}>Итого: <span style={{fontWeight:'bold'}}>1000</span></span>
            </Container>

        </div>
    );
};

export default BarCharMark;