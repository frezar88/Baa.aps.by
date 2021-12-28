import React, {useContext, useEffect, useState} from 'react';
import s from "../../TableModel.module.css";
import {Context} from "../../../../../index";


const TableBodyPcRow = ({car,data,key,load,setLoad}) => {
    const {brandModel} = useContext(Context)
    let brandName = brandModel.IsBrand.find((item) => item.id === car.model.brand_id)
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

    const [totalSum,setTotalSum]=useState(0)
    useEffect(()=>{
        let sum=0
        data.forEach(el => {
            let block = document.querySelector(`div.pc[data-pc-id="${el.car_id}"][data-mount-id="${el.date}"]`)
            if (block){
                block.style.color = '#000'
                block.style.fontWeight = 500
                block.innerHTML = el.value
                sum+= +el.value
            }

        })
        setTotalSum(sum)

        typef(car['car_type_id'])
        if (!load){
            setLoad(true)
        }



    },[])


    return (

        <div className={s.table_body_wrapper} style={{order:'-'+totalSum,display:totalSum ===0? 'none':'grid'}}>
            <div data-pc-id={car.id} className={s.body_item + ' pc'}>{type}</div>
            <div data-pc-id={car.id} className={s.body_item + ' pc-brand'}>{brandName.name}</div>
            <div data-pc-id={car.id} className={s.body_item + ' pc-model'}>{car.name}</div>
            <div data-pc-id={car.id} data-mount-id={'1609448400'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1612126800'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1614546000'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1617224400'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1619816400'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1622494800'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1625086800'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1627765200'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1630443600'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1633035600'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1635714000'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} data-mount-id={'1638306000'} className={s.body_item + ' pc'}>0</div>
            <div data-pc-id={car.id} className={s.body_item + ' pc-count-year' }>{totalSum}</div>

        </div>
    );
};

export default TableBodyPcRow;