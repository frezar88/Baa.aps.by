import React, {useEffect, useState} from 'react';
import CompareTopBlockBrandsList from "./components/CompareTopBlockBrandsList";
import CompareTopBlockTypeBlock from "./components/CompareTopBlockTypeBlock";
import {
    getStatisticForCompare,
    getStatisticForCompareAndCarType,
    getStatisticForCompareModel
} from "../../../http/brandAPI";
import {CURRENT_YEAR_MONTH} from "../../../utils/consts";


const CompareTopBlock = (props) => {
    const [selectedBrands, setSelectedBrands] = useState([])
    const [valueType, setValueType] = useState('')
    const [stateInputOldYear, setStateInputOldYear] = useState(false)
    const [currentYear, setCurrentYear] = useState('1609448400,1640984400,2021')
    const [blockedButton, setBlockedButton] = useState(false)

    const btnSend = async () => {
        setBlockedButton(true)
        let dataForGraph = []
        let oldDataForGraph = []
        let lengthBrands = selectedBrands.length
        let responseLength = 0
        let responseOldLength = 0
        selectedBrands.forEach(el => {
                let arrDataValues = []
                let oldArrDataValues = []
                if (!valueType) {
                    let from = currentYear.split(',')[0].trim()
                    let to = currentYear.split(',')[1].trim()
                    if (!el.model_id){
                        getStatisticForCompare(CURRENT_YEAR_MONTH.january, '1672520400', el.brand_id).then(data => {
                            createData(dataForGraph, arrDataValues, el, data.data.data, responseLength, lengthBrands, false)
                        })
                    }else{
                        getStatisticForCompareModel(CURRENT_YEAR_MONTH.january, '1672520400', el.model_id).then(data => {

                            let dataModels = data.data.data

                            for (const dataKey in dataModels) {
                                dataModels[dataKey]= dataModels[dataKey].filter(item=>item.model_id === el.model_id)
                            }

                            createData(dataForGraph, arrDataValues, el, data.data.data, responseLength, lengthBrands, false)
                        })
                    }

                    if (stateInputOldYear) {
                        let currentYearSelect = currentYear.split(',')[2].trim()
                        if (!el.model_id){
                            getStatisticForCompare(from, to, el.brand_id).then(data => {
                                createData(oldDataForGraph, oldArrDataValues, el, data.data.data, responseOldLength, lengthBrands, currentYearSelect)
                            })
                        }else{
                            getStatisticForCompareModel(from, to, el.model_id).then(data => {

                                let dataModels = data.data.data

                                for (const dataKey in dataModels) {
                                    dataModels[dataKey]= dataModels[dataKey].filter(item=>item.model_id === el.model_id)
                                }

                                createData(dataForGraph, arrDataValues, el, data.data.data, responseLength, lengthBrands, false)
                            })
                        }

                    } else {
                        props.setOldDataSet('')
                    }
                } else {
                    let from = currentYear.split(',')[0].trim()
                    let to = currentYear.split(',')[1].trim()

                    getStatisticForCompareAndCarType(CURRENT_YEAR_MONTH.january, '1672520400', el.brand_id, valueType).then(data => {

                        createData(dataForGraph, arrDataValues, el, data.data.data, responseLength, lengthBrands, false)
                    })
                    if (stateInputOldYear) {
                        let currentYearSelect = currentYear.split(',')[2].trim()
                        getStatisticForCompareAndCarType(from, to, el.brand_id, valueType).then(data => {

                            createData(oldDataForGraph, oldArrDataValues, el, data.data.data, responseOldLength, lengthBrands, currentYearSelect)
                        })
                    } else {
                        props.setOldDataSet('')
                    }
                }

            }
        )
    }
    const createData = (arr, values, el, data, respLen, brandLen, year) => {
        for (const key in data) {
            console.log(data[key])
            if (data[key][0]){
                values.push(+data[key][0].value)
            }else{
                values.push(0)
            }
        }
        arr.push(
            {
                label:  year ? el.model_name ? el.model_name : el.brand_name + ' ' + year : el.model_name ? el.model_name : el.brand_name,
                backgroundColor: year ? el.color.slice(0, -2) + '20' : el.color.slice(0, -2),
                borderColor: year ? el.color.slice(0, -2) + '20' : el.color.slice(0, -2),
                fill: false,
                data: values,
                borderWidth: 4
            }
        )
        respLen = arr.length
        if (year) {
            if (respLen === brandLen) {

                props.setOldDataSet(arr)
            }
        } else {
            if (respLen === brandLen) {
                props.setDataSet(arr)
                setBlockedButton(false)
            }
        }

    }


    return (
        <div style={{display: 'flex', gridAutoFlow: 'column', justifyContent: 'space-between', gridGap: 20}}>
            <CompareTopBlockBrandsList
                setSelectedBrands={setSelectedBrands}
            />
            <CompareTopBlockTypeBlock
                showNumbers={props.showNumbers}
                blockedButton={blockedButton}
                setCurrentYear={setCurrentYear}
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