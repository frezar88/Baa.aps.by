import React from 'react';
import {Line} from 'react-chartjs-2';
import {Container} from "react-bootstrap";

const LineCharBodyCar = () => {
    return (
        <div>
            <Container className={'d-flex'}>
                <Line data={{
                    labels: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",],
                    datasets: [
                        {
                            label: 'Купе',
                            data: [43, 22, 22, 122],
                            fill: true,
                            borderColor: '#fd7e14'
                        }, {
                            label: 'Кабриолет',
                            data: [13, 44, 22, 51,44],
                            fill: true,
                            borderColor: '#495057',
                            color:'red'
                        },
                    ]
                }}
                      width={'100%'}
                      height={400}
                      options={{
                          maintainAspectRatio: false,

                      }}
                />
                <span style={{minWidth:'100px',fontWeight:'500'}}>Итого: <span style={{fontWeight:'bold'}}>1000</span></span>
            </Container>
        </div>
    );
};

export default LineCharBodyCar;