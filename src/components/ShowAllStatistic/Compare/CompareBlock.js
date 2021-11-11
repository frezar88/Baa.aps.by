import React, {useEffect, useState} from 'react';
import LineBarCompare from "../../ChartGraphics/LineBarCompare";
import CompareTopBlock from "./CompareTopBlock";

const CompareBlock = () => {
    const [dataSet, setDataSet] = useState([])
    const [oldDataSet, setOldDataSet] = useState([])

    useEffect(()=>{
        console.log(oldDataSet)
    },[oldDataSet])
    return (
        <div>
            <CompareTopBlock setOldDataSet={setOldDataSet} setDataSet={setDataSet}/>
            {
                dataSet[0]
                    ?
                    <LineBarCompare oldDataSet={oldDataSet} dataSet={dataSet}/>
                    :
                    false
            }


        </div>
    );
};

export default CompareBlock;


