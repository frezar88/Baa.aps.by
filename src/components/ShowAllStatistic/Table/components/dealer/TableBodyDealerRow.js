import React, {useEffect, useState} from 'react';
import s from "../../TableDealer.module.css";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH} from "../../../../../utils/consts";


const TableBodyDealerRow = (props) => {
    const [totalSum,setTotalSum]=useState(0)


    useEffect(()=>{

        let sum=0
        props.data.forEach(el => {
                let block = document.querySelector(`div.dealer[data-dealer-id="${el.dealer_id}"][data-brand-dealer-id="${el.brand_id}"][data-mount-id="${el.date}"]`)
                if (block){
                    block.style.color = '#000'
                    block.style.fontWeight = 500
                    block.innerHTML = el.value
                    sum+= +el.value

                }
        })
        setTotalSum(sum)
    },[props.stateYear])


    return (
        <>
            {
                props.stateYear == CURRENT_YEAR_MONTH.january
                ?
                    <div className={s.table_body_wrapper} style={{order:'-'+totalSum}}>
                        <div data-dealer-id={props.dealer.id} className={s.body_item + ' dealer-name'+ ' dealer_name_block'}>{props.dealer.name}</div>
                        <div data-dealer-id={props.dealer.id}  className={s.body_item + ' dealer-brand'+ ' model_name_block'}>{props.brand.name}</div>
                        {/*<div data-model-id={props.car.id} className={s.body_item + ' dealer'}>{props.car.name}</div>*/}
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.january} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.february} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.march} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.april} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.may} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.june} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.july} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.august} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.september} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.october} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.november} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={CURRENT_YEAR_MONTH.december} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} className={s.body_item +' brand-count-year' }>{totalSum}</div>
                    </div>
                    :
                    <div className={s.table_body_wrapper} style={{order:'-'+totalSum}}>
                        <div data-dealer-id={props.dealer.id} className={s.body_item + ' dealer-name'+ ' dealer_name_block'}>{props.dealer.name}</div>
                        <div data-dealer-id={props.dealer.id}  className={s.body_item + ' dealer-brand'+ ' model_name_block'}>{props.brand.name}</div>
                        {/*<div data-model-id={props.car.id} className={s.body_item + ' dealer'}>{props.car.name}</div>*/}
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.january} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.february} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.march} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.april} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.may} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.june} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.july} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.august} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.september} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.october} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.november} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id} data-mount-id={PREVIOUS_YEAR_MONTH.december} className={s.body_item + ' dealer'}>0</div>
                        <div data-dealer-id={props.dealer.id} className={s.body_item +' brand-count-year' }>{totalSum}</div>
                    </div>
            }
        </>

    );
};

export default TableBodyDealerRow;