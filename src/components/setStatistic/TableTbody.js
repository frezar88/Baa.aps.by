import React, {useContext, useEffect, useState} from 'react';
import StatisticalTableRow from "./StatisticalTableRow";
import {getFillingStatistic} from "../../http/brandAPI";
import {Context} from "../../index";


const TableTbody = (props) => {

    const presentDate = new Date().toLocaleString('en', {year: "numeric", month: 'long'})
    const [load, setLoad] = useState(false)



    useEffect(() => {
        let currentMonthInput = ''
        currentMonthInput = document.querySelectorAll('td input')
        currentMonthInput.forEach(el => {
            if (el.parentNode.className) {
                el.removeAttribute('disabled')
                el.setAttribute('placeholder', '')
            } else {
                el.setAttribute('disabled', 'true')
                el.setAttribute('placeholder', '-')
            }
        })

    }, [ props.stateSelectYear, props.allModel,props.loadFilled])


    return (
        <tbody>
        {
            props.loadFilled?
            props.allModel.map((({id, model, name}) =>
                    <StatisticalTableRow
                        activeState={props.filled}
                        modelName={name}
                        presentDate={presentDate}
                        key={id}
                        car_id={id}
                        all_model_data={model}
                        brand_id={props.brand_id}
                        sales_data={props.allModelSalesValue.filter(item => item.car.id === id)}
                        stateSelectYear={props.stateSelectYear}
                        setload={setLoad}
                        load={load}
                        filled={props.filled}
                    />

            )):
                false
        }


        </tbody>
    );
};

export default TableTbody;