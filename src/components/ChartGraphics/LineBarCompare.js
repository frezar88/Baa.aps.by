import {Line, Chart} from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import React from 'react';


const LineBarCompare = (props) => {
    Chart.register(ChartDataLabels)

    const data21 = {
        labels: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
        datasets: props.oldDataSet[0] ? props.dataSet.concat(props.oldDataSet) : props.dataSet
    };

    return (
        <div className={"chart"} style={{background: '#fff', marginTop: 20, borderRadius: 5}}>
            <div>
                <Line className='p-1' options={{
                    plugins: {
                        datalabels: {
                            display:props.showNumbersGraph,
                            color: 'black',
                            align:'top',
                            anchor:'top'
                        }
                    },
                    // tension:0.1
                }

                } data={data21}/>
            </div>
        </div>
    );
};

export default LineBarCompare;