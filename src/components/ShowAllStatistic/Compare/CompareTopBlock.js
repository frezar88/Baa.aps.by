import React, {useEffect, useState} from 'react';
import CompareTopBlockBrandsList from "./components/CompareTopBlockBrandsList";
import CompareTopBlockTypeBlock from "./components/CompareTopBlockTypeBlock";
import {getStatisticForCompare, getStatisticForCompareAndCarType} from "../../../http/brandAPI";


const CompareTopBlock = (props) => {
    const [selectedBrands, setSelectedBrands] = useState([])
    const [valueType, setValueType] = useState('')
    const [stateInputOldYear, setStateInputOldYear] = useState(false)

    const btnSend = async () => {
        let dataForGraph = []
        let oldDataForGraph = []
        let lengthBrands = selectedBrands.length
        let responseLength = 0
        let responseOldLength = 0
        selectedBrands.forEach(el => {
                let arrDataValues = []
                let oldArrDataValues = []
                if (!valueType) {
                    getStatisticForCompare('1609448400', '1640984400', el.brand_id).then(data => {
                        createData(dataForGraph, arrDataValues, el, data.data, responseLength, lengthBrands,false)

                    })
                    if (stateInputOldYear) {
                        getStatisticForCompare('1577826000', '1609448400', el.brand_id).then(data => {

                            createData(oldDataForGraph,oldArrDataValues,el,data.data,responseOldLength,lengthBrands,2020)
                        })
                    }else{
                        props.setOldDataSet('')
                    }
                } else {
                    getStatisticForCompareAndCarType('1609448400', '1640984400', el.brand_id, valueType).then(data => {
                        createData(dataForGraph, arrDataValues, el, data.data, responseLength, lengthBrands,false)
                    })
                    if (stateInputOldYear) {
                        getStatisticForCompareAndCarType('1577826000', '1609448400', el.brand_id, valueType).then(data => {
                            createData(oldDataForGraph,oldArrDataValues,el,data.data,responseOldLength,lengthBrands,2020)
                        })
                    }else{
                        props.setOldDataSet('')
                    }
                }

            }
        )
    }
    const createData = (arr, values, el, data, respLen, brandLen,year) => {



        for (const key in data) {
            values.push(+data[key][0].value)
        }
        arr.push(
            {
                label: year? el.brand_name + ' '+year:el.brand_name,
                backgroundColor:year?  el.color.slice(0, -2)+'20' : el.color.slice(0, -2),
                borderColor: year?  el.color.slice(0, -2)+'20' : el.color.slice(0, -2),
                fill: false,
                data: values,
                borderWidth: 4
            }
        )
        respLen = arr.length
        if (year){
            if (respLen === brandLen) {

                props.setOldDataSet(arr)
            }
        }else{
            if (respLen === brandLen) {
                props.setDataSet(arr)
            }
        }

    }


    return (
        <div style={{display: 'flex', gridAutoFlow: 'column', justifyContent: 'space-between', gridGap: 20}}>
            <CompareTopBlockBrandsList
                setSelectedBrands={setSelectedBrands}
            />
            <CompareTopBlockTypeBlock
                stateInputOldYear={stateInputOldYear}
                setStateInputOldYear={setStateInputOldYear}
                eventBtn={btnSend}
                selectedBrands={selectedBrands}
                valueType={valueType}
                setValueType={setValueType}
            />
        </div>
    );
};

export default CompareTopBlock;