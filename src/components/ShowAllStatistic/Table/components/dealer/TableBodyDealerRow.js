import React, {useEffect, useState} from 'react';
import s from "../../TableDealer.module.css";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH, YEAR_MONTH_2019, YEAR_MONTH_2020} from "../../../../../utils/consts";


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
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum}}>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-name' + ' dealer_name_block'}>{props.dealer.name}</div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-brand' + ' model_name_block'}>{props.brand.name}</div>
                        {/*<div data-model-id={props.car.id} className={s.body_item + ' dealer'}>{props.car.name}</div>*/}
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.january} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.february} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.march} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.april} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.may} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.june} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.july} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.august} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.september} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.october} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.november} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={CURRENT_YEAR_MONTH.december} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' brand-count-year'}>{totalSum}</div>
                    </div>
                    : ''
            }
            {
                props.stateYear == PREVIOUS_YEAR_MONTH.january
                    ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum}}>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-name' + ' dealer_name_block'}>{props.dealer.name}</div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-brand' + ' model_name_block'}>{props.brand.name}</div>
                        {/*<div data-model-id={props.car.id} className={s.body_item + ' dealer'}>{props.car.name}</div>*/}
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.january} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.february} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.march} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.april} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.may} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.june} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.july} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.august} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.september} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.october} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.november} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={PREVIOUS_YEAR_MONTH.december} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' brand-count-year'}>{totalSum}</div>
                    </div>
                    : ''
            }
            {
                props.stateYear == YEAR_MONTH_2020.january
                    ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum}}>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-name' + ' dealer_name_block'}>{props.dealer.name}</div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-brand' + ' model_name_block'}>{props.brand.name}</div>
                        {/*<div data-model-id={props.car.id} className={s.body_item + ' dealer'}>{props.car.name}</div>*/}
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.january} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.february} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.march} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.april} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.may} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.june} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.july} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.august} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.september} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.october} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.november} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2020.december} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' brand-count-year'}>{totalSum}</div>
                    </div>
                    : ''
            }
            {
                props.stateYear == YEAR_MONTH_2019.january
                    ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum}}>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-name' + ' dealer_name_block'}>{props.dealer.name}</div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' dealer-brand' + ' model_name_block'}>{props.brand.name}</div>
                        {/*<div data-model-id={props.car.id} className={s.body_item + ' dealer'}>{props.car.name}</div>*/}
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.january} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.february} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.march} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.april} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.may} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.june} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.july} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.august} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.september} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.october} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.november} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id} data-brand-dealer-id={props.brand.id}
                             data-mount-id={YEAR_MONTH_2019.december} className={s.body_item + ' dealer'}>0
                        </div>
                        <div data-dealer-id={props.dealer.id}
                             className={s.body_item + ' brand-count-year'}>{totalSum}</div>
                    </div>
                    : ''
            }
        </>

    );
};

export default TableBodyDealerRow;