import React, {useContext, useEffect, useState} from 'react';
import s from "../../TableModel.module.css";
import {Context} from "../../../../../index";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH} from "../../../../../utils/consts";


const TableBodyPcRow = ({car,data,key,load,setLoad,stateYear}) => {
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



    },[stateYear])


    return (
        <>
            {
                stateYear === CURRENT_YEAR_MONTH.january
                    ?

                    <div className={s.table_body_wrapper} style={{order:'-'+totalSum}}>
                        {/*<div data-pc-id={car.id} className={s.body_item + ' pc'}>{type}</div>*/}
                        <div data-pc-id={car.id} className={s.body_item + ' pc-brand'+ ' brand_name_block'}>{brandName.name}</div>
                        <div data-pc-id={car.id} className={s.body_item + ' pc-model'+ ' model_name_block'}>{car.name}</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.january} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.february} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.march} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.april} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.may} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.june} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.july} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.august} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.september} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.october} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.november} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.december} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} className={s.body_item + ' pc-count-year' }>{totalSum}</div>

                    </div>
                    :
                    <div className={s.table_body_wrapper} style={{order:'-'+totalSum}}>
                        {/*<div data-pc-id={car.id} className={s.body_item + ' pc'}>{type}</div>*/}
                        <div data-pc-id={car.id} className={s.body_item + ' pc-brand'+ ' brand_name_block'}>{brandName.name}</div>
                        <div data-pc-id={car.id} className={s.body_item + ' pc-model'+ ' model_name_block'}>{car.name}</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.january} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.february} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.march} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.april} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.may} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.june} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.july} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.august} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.september} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.october} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.november} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.december} className={s.body_item + ' pc'}>0</div>
                        <div data-pc-id={car.id} className={s.body_item + ' pc-count-year' }>{totalSum}</div>

                    </div>
            }
        </>



    );
};

export default TableBodyPcRow;