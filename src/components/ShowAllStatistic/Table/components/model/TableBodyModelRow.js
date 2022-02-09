import React, {useContext, useEffect, useState} from 'react';
import s from "../../TableModel.module.css";
import {Context} from "../../../../../index";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH} from "../../../../../utils/consts";


const TableBodyModelRow = ({car, value, data, load, setLoad,stateYear}) => {

    const {brandModel} = useContext(Context)
    let brandName = brandModel.IsBrand.find((item) => (item.id === car.model.brand_id) && value)
    const [type, setType] = useState('')

    const typef = (car) => {
        if (+car === 1) {
            return setType('PC')
        } else if (+car === 2) {
            return setType('LCV')
        } else {
            return setType('MCV')
        }
    }

    const [totalSum, setTotalSum] = useState(0)
    useEffect(  () => {
       //  let allBlock = document.querySelectorAll(`div[data-model-id][data-mount-id]`)
       // await allBlock.forEach((el)=>{
       //      if (el.attributes['data-mount-id'].value !=='countYear'){
       //          el.innerHTML='0'
       //          el.style.color='grey'
       //      }
       //  })
        let sum = 0
        data.forEach(el => {
            let block = document.querySelector(`div[data-model-id="${el.car_id}"][data-mount-id="${el.date}"]`)
            if (block) {
                block.style.color = '#000'
                block.style.fontWeight = 500
                block.innerHTML = el.value
                sum += +el.value
            }

        })
        setTotalSum(sum)
        typef(car['car_type_id'])
        if (!load) {
            setLoad(true)
        }
    }, [stateYear])


    return (
        <>
            {
                stateYear == CURRENT_YEAR_MONTH.january
                ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum,}}>
                        <div data-model-id={car.id}
                             className={s.body_item + ' brand-name' + ' brand_name_block'}>{brandName.name}</div>
                        <div data-model-id={car.id} className={s.body_item + ' model-name' + ' model_name_block'}>{car.name}</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.january} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.february} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.march} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.april} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.may} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.june} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.july} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.august} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.september} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.october} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.november} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.december} className={s.body_item}>0</div>
                        <div data-model-id={'props.brand_id'}
                             className={s.body_item + ' model-count-year'}>{totalSum ? totalSum : 0}</div>
                    </div>
                    :
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum,}}>
                        <div data-model-id={car.id}
                             className={s.body_item + ' brand-name' + ' brand_name_block'}>{brandName.name}</div>
                        <div data-model-id={car.id} className={s.body_item + ' model-name' + ' model_name_block'}>{car.name}</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.january} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.february} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.march} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.april} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.may} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.june} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.july} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.august} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.september} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.october} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.november} className={s.body_item}>0</div>
                        <div data-model-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.december} className={s.body_item}>0</div>
                        <div data-model-id={'props.brand_id'} data-mount-id={'countYear'}
                             className={s.body_item + ' model-count-year'}>{totalSum ? totalSum : 0}</div>
                    </div>
            }
        </>




    );
};

export default TableBodyModelRow;