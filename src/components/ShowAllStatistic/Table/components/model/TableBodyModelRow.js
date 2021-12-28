import React, {useContext, useEffect, useState} from 'react';
import s from "../../TableModel.module.css";
import {Context} from "../../../../../index";


const TableBodyModelRow = ({car,value, data, load, setLoad,}) => {

    const {brandModel} = useContext(Context)
    let brandName = brandModel.IsBrand.find((item) => (item.id === car.model.brand_id) && value)
    const [type, setType] = useState('')

    const typef = (car) => {
        if (+car === 1) {
            return setType('PC')
        }else if(+car === 2){
            return setType('LCV')
        }else{
            return setType('MCV')
        }
    }

    const [totalSum, setTotalSum] = useState(0)
    useEffect(() => {
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
    }, [])


    return (
        <div className={s.table_body_wrapper} style={{order: '-' + totalSum,display:totalSum ===0? 'none':'grid'}}>
            <div data-model-id={car.id} className={s.body_item + ' type-name'}>{type}</div>

            <div data-model-id={car.id} className={s.body_item + ' brand-name'}>{brandName.name}</div>
            <div data-model-id={car.id} className={s.body_item + ' model-name'}>{car.model.name}</div>
            <div data-model-id={car.id} data-mount-id={'1609448400'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1612126800'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1614546000'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1617224400'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1619816400'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1622494800'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1625086800'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1627765200'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1630443600'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1633035600'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1635714000'} className={s.body_item}>0</div>
            <div data-model-id={car.id} data-mount-id={'1638306000'} className={s.body_item}>0</div>
            <div data-model-id={'props.brand_id'}
                 className={s.body_item + ' model-count-year'}>{totalSum ? totalSum : 0}</div>

        </div>
    );
};

export default TableBodyModelRow;