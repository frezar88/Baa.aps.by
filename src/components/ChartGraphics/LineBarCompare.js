import {Radar,Line} from "react-chartjs-2";

import React from 'react';



const LineBarCompare = (props) => {

      const data21 = {
        labels: ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'],
        datasets: props.oldDataSet[0]? props.dataSet.concat(props.oldDataSet) : props.dataSet
    };

    return (
        <div className={"chart"} style={{background: '#fff', marginTop: 20, borderRadius: 5}}>
            <div >
                <Line className='p-1'  options={{
                    fill:'true'
                }} data={data21}/>
            </div>
        </div>
    );
};

export default LineBarCompare;