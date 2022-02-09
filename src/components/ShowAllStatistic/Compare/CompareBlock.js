import React, {useEffect, useState} from 'react';
import LineBarCompare from "../../ChartGraphics/LineBarCompare";
import CompareTopBlock from "./CompareTopBlock";


const CompareBlock = ({setLoadDataDone}) => {
    const [dataSet, setDataSet] = useState([])
    const [oldDataSet, setOldDataSet] = useState([])
    const [showNumbersGraph,setShowNumbersGraph] = useState(false)

    useEffect(()=>{
        setLoadDataDone(true)
    },[oldDataSet])

    const showNumbers = () => {
      if (showNumbersGraph){setShowNumbersGraph(false)}
      else{setShowNumbersGraph(true)}

    }
    return (
        <>


            <h3 style={{fontSize: '1.75rem', borderBottom: '1px solid grey',padding:'1rem 1rem 1rem 0'}} >
                Сравнение брендов
            </h3>
            <div>
                <CompareTopBlock showNumbers={showNumbers} setOldDataSet={setOldDataSet} setDataSet={setDataSet}/>

                {
                    dataSet[0]
                        ?
                        <div>

                            <LineBarCompare  showNumbersGraph={showNumbersGraph} oldDataSet={oldDataSet} dataSet={dataSet}/>

                        </div>

                        :
                        false
                }
            </div>
        </>

    );
};

export default CompareBlock;


