import React from 'react';
import {Line} from 'react-chartjs-2';
import {Container} from "react-bootstrap";

const LineCharMadel = () => {
    return (
        <div>
            <Container className={'d-flex'}>
                <Line data={{
                    labels: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",],
                    datasets: [
                        {
                            label: 'XRay',
                            data: [23, 22, 22, 22],
                            fill: false,
                            borderColor: 'blue'
                        }, {
                            label: 'Vesta',
                            data: [13, 44, 2, 51],
                            fill: false,
                            borderColor: 'red'
                        }, {
                            label: 'X-trail',
                            data: [1, 22, 4, 6],
                            fill: false,
                            borderColor: 'yellow'
                        }
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

export default LineCharMadel;