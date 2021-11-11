import {Bar,} from "react-chartjs-2";

import React, {useEffect, useState} from 'react';
import {

    getAllStatisticLcvOrPcForGraphicsMonth

} from "../../http/brandAPI";


const PcBar = (props) => {

    const [labels, setLabels] = useState()
    const [count, setCount] = useState()
    const [totalSum,setTotalSum]= useState(0)

    const data21 = {
        labels: labels,
        datasets: [{
            axis: 'x',
            label: 2021,
            data: count,
            fill: true,
            fillColor: 'black',
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
        if (props.from && props.from !=='Thu Jan 01 1970 03:00:00 GMT+0300 (Moscow Standard Time)') {
            try {
                getAllStatisticLcvOrPcForGraphicsMonth(props.from, props.to).then(data => {

                    let temporary = 0
                    data.data.forEach(el=>{
                        temporary+=+el.value
                    })

                    setTotalSum(temporary)

                    data.data.filter(item => item.car['car_type'].name === 'PC').sort(function (a, b) {
                        return b.value - a.value
                    }).forEach(el => {
                        if (labels.length < 20) {

                            labels.push(el.car.model.brand.name + ' ' + el.car.name + ' ' + el.car['car_type'].name)


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

                <Bar className='p-1' height={200} options={{

                    scale: {
                        font: {
                            size: 12,

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
                        tooltip:{
                            displayColors: false,
                            titleColor:'#fff',
                            yAlign:'center',
                            enabled: true,
                            callbacks: {
                                label: function(tooltipItems) {
                                    let numberTooltip = tooltipItems.formattedValue.replace(',', '').replace(/\s/g, '')
                                    let currentCount = "Общее количество: " + tooltipItems.formattedValue
                                    let interestCount = "Доля рынка: " + (+numberTooltip / totalSum * 100 + '').slice(0, 4) + '%'
                                    return [currentCount,interestCount]
                                },

                            }

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
                                text: 'Топ 20 продаваемых легковых  моделей',
                                font: {
                                    size: 24
                                }
                            },
                        }
                    },

                }} data={labels ? data21 : false}/>
            </div>
        </div>
    );
};

export default PcBar;