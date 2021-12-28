import React, { useEffect, useState} from 'react';
import StatisticalTableRow from "./StatisticalTableRow";
import s from './TableTbody.module.css'



const TableTbody = (props) => {

    const presentDate = new Date().toLocaleString('en', {year: "numeric", month: 'long'})
    const [load, setLoad] = useState(false)

    useEffect(() => {

        let currentYear = props.allModelSalesValue.filter(item => item.timestamp.slice(0, 4) === '2021')
        let lastMouth = (getLastMothData(currentYear))
        let toDay = new Date().toLocaleString('en', {month: "numeric"})
        console.log(toDay, lastMouth)

        let currentMonthInput = document.querySelectorAll('td input')
        currentMonthInput.forEach(el => {
            if (+el.attributes['data-mouth-number'].value === +lastMouth+1 && +el.attributes['data-mouth-number'].value < toDay) {

                el.removeAttribute('disabled')
                el.setAttribute('placeholder', '')
                el.parentNode.className= s.active + ' active'
                console.log(el.parentNode)
            }
            // if (el.parentNode.className) {
            //     el.removeAttribute('disabled')
            //     el.setAttribute('placeholder', '')
            // } else {
            //     el.setAttribute('disabled', 'true')
            //     el.setAttribute('placeholder', '-')
            // }
        })

    }, [props.stateSelectYear, props.allModel, props.loadFilled])

    const getLastMothData = (data) => {
        let arr = []
        data.forEach(({timestamp}) => {

            if (arr.indexOf(timestamp.slice(5, 7)) === -1) {
                arr.push(timestamp.slice(5, 7))
            }
        })
        return arr.sort((a, b) => +b - +a)[0]
    }

    return (
        <tbody>

        {
            props.allModel.map((({id, model, name}) =>
                    <StatisticalTableRow
                        activeState={props.filled}
                        modelName={name}
                        presentDate={presentDate}
                        key={id}
                        car_id={id}
                        all_model_data={model}
                        brand_id={props.brand_id}
                        sales_data={props.allModelSalesValue.filter(item => item.car_id === id && item.timestamp.slice(0, 4) === '2021')}
                        stateSelectYear={props.stateSelectYear}
                        setload={setLoad}
                        load={load}
                        filled={props.filled}
                    />
            ))
        }
        </tbody>
    );
};

export default TableTbody;