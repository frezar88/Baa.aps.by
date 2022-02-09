import {Bar} from "react-chartjs-2";

import React, {useEffect, useState} from 'react';
import { getAllStatisticForGraphicsMonth} from "../../http/brandAPI";


const BrandBar = (props) => {

    const [labels, setLabels] = useState()
    const [count, setCount] = useState()
    const [totalSum, setTotalSum] = useState(0)



    const data21 = {
        labels: labels,
        datasets: [{
            axis: 'y',
            label: 2021,
            data: count,
            fill: false,

            backgroundColor: [
                'red',
                'red',
                'red',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',

            ],
            borderColor: [
                'red',
                'red',
                'red',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
                'gray',
            ],
            borderWidth: 1
        }
        ]
    };

    useEffect(() => {
        props.setLoadBrand(true)
        if (props.from && props.from !== 'Thu Jan 01 1970 03:00:00 GMT+0300 (Moscow Standard Time)') {
            try {
                getAllStatisticForGraphicsMonth(props.from, props.to).then(data => {
                    console.log(new Date(props.from *1000))
                    console.log(new Date(props.to *1000))

                    console.log(data.data.data)

                    setTotalSum(0)
                    let temporary = 0
                    data.data.data.forEach(el => {
                        temporary += +el.value
                    })

                    setTotalSum(temporary)
                    data.data.data.sort(function (a, b) {
                        return a.value - b.value
                    }).reverse().forEach(el => {
                        if (labels.length < 10) {
                            labels.push(data.data.included.brands.find((b)=>b.id === el.brand_id).name)
                            count.push(el.value)
                        }

                    })


                }).finally(() => {
                    setLabels(labels)
                    setCount(count)
                })
            }catch (e) {

            }

        }
        let labels = []
        let count = []
    }, [props.from])


    return (
        <div className={"chart"} style={{background: '#fff', marginTop: 20, borderRadius: 5}}>
            <div>

                <Bar className='p-1' height={150} options={{

                    scale: {
                        font: {
                            size: 12
                        }
                    },
                    indexAxis: 'y',
                    layout: {
                        padding: {
                            top: 20,
                            left: 5,
                            right: 5
                        }
                    },
                    plugins: {
                        tooltip: {
                            displayColors: false,
                            titleColor: '#fff',
                            yAlign: 'center',
                            enabled: true,
                            callbacks: {
                                label: function (tooltipItems) {

                                    let numberTooltip = tooltipItems.formattedValue.replace(',', '').replace(/\s/g, '')
                                    let currentCount = "Общее количество: " + tooltipItems.formattedValue
                                    let interestCount = "Доля рынка: " + (+numberTooltip / totalSum * 100 + '').slice(0, 4) + '%'
                                    return [currentCount, interestCount]
                                },
                            }
                        },
                        datalabels: {
                            color: 'black',
                            fontWeight:'bold'
                        },
                        legend: {
                            display: true,
                            labels: {
                                color: 'black',
                                display: false,
                                font: {
                                    size: 0
                                },
                                boxHeight: false,
                                boxWidth: false,

                            },
                            title: {
                                display: true,
                                text: 'Топ 10 продаваемых брендов',
                                font: {
                                    size: 24
                                }
                            },

                        }
                    },
                }} data={data21}/>


            </div>


        </div>
    );
};

export default BrandBar;