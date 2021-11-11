import React, {useEffect, useState} from 'react';
import s from "../../TableModel.module.css";


const TableBodyLCVRow = (props) => {
    const [totalSum,setTotalSum]=useState(0)
    useEffect(()=>{
        let sum=0
        props.data.forEach(el => {

            let block = document.querySelector(`div.lcv[data-lcv-id="${el.car_id}"][data-mount-id="${el.date}"]`)
            if (block){
                block.style.color = '#000'
                block.style.fontWeight = 500
                block.innerHTML = el.value
                sum+= +el.value
            }


        })
        setTotalSum(sum)
        if (!props.load){
            props.setLoad(true)
        }
    },[])


    return (
        <div className={s.table_body_wrapper} style={{order:'-'+totalSum}}>
            <div data-lcv-id={props.car.id} className={s.body_item + ' lcv'}>{props.car['car_type'].name}</div>
            <div data-lcv-id={props.car.id} className={s.body_item + ' lcv-brand'}>{props.car.model.brand.name}</div>
            <div data-lcv-id={props.car.id} className={s.body_item + ' lcv-model'}>{props.car.name}</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1609448400'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1612126800'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1614546000'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1617224400'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1619816400'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1622494800'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1625086800'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1627765200'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1630443600'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1633035600'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1635714000'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.car.id} data-mount-id={'1638306000'} className={s.body_item + ' lcv'}>0</div>
            <div data-lcv-id={props.brand_id} className={s.body_item + ' lcv-count-year' }>{totalSum}</div>

        </div>
    );
};

export default TableBodyLCVRow;