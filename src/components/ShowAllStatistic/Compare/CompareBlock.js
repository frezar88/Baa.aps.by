import React, {useEffect, useState} from 'react';
import LineBarCompare from "../../ChartGraphics/LineBarCompare";
import CompareTopBlock from "./CompareTopBlock";

const CompareBlock = ({setLoadDataDone}) => {
    const [dataSet, setDataSet] = useState([])
    const [oldDataSet, setOldDataSet] = useState([])

    useEffect(()=>{
        setLoadDataDone(true)
    },[oldDataSet])
    return (
        <>
            <h3 style={{fontSize: '1.75rem', borderBottom: '1px solid grey',padding:'1rem 1rem 1rem 0'}} >
                Сравнение брендов
            </h3>
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
        </>

    );
};

export default CompareBlock;


