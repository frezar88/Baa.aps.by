import React, {useEffect, useState} from 'react';
import s from "../../TableMarketShareAll.module.css";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH} from "../../../../../utils/consts";


const TableBodyRowMarketAll = (props) => {
    const [Sum, SetSum] = useState(0)

    useEffect(() => {

        let count = 0
        if (props.data[0]) {
            props.data.forEach(el => {
                count += +el.value
            })
            props.data.forEach(el => {
                    let currentBlock = document.querySelector(`div[data-brand-id="${el.brand_id}"][data-mount-id="${el.date}"][data-market="${'true'}"]`)
                    if (currentBlock) {
                        console.log()
                        let interest =+el.value / +props.countMonth[el.date] * 100?+el.value / +props.countMonth[el.date] * 100 +'':'0'
                        currentBlock.innerHTML =interest.slice(0,4)+'%'

                        currentBlock.style.fontWeight = '500'
                        currentBlock.style.color = '#000'
                    }
                }
            )
        }
        SetSum(count)
        if (!props.load) {
            props.setLoad(true)
        }

    }, [props.data,props.stateYear])
    return (
        <>
            {
                props.stateYear ==CURRENT_YEAR_MONTH.january
                ?
                    <div className={s.table_body_wrapper + ' wrap'} style={{order: String(Sum).replace('%','') ? '-' + String(Sum).replace('%','') : false}}>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             className={s.body_item + ' header-brand'+' brand_name_block'}>{props.brand_name}</div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.january}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.february}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.march}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.april}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.may}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.june}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.july}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.august}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.september}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.october}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.november}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.december}
                             className={s.body_item}>0
                        </div>
                        <div data-brand-id={props.brand_id} data-mount-id={'countYear'} className={s.body_item + ' countYear'}>{(Sum/props.countMonth['allTime']*100+'').slice(0,4)+'%'}</div>

                    </div>
                    :
                    <div className={s.table_body_wrapper + ' wrap'} style={{order: String(Sum).replace('%','') ? '-' + String(Sum).replace('%','') : false}}>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             className={s.body_item + ' header-brand'+' brand_name_block'}>{props.brand_name}</div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.january}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.february}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.march}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.april}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.may}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.june}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.july}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.august}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.september}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.october}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.november}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.december}
                             className={s.body_item}>0
                        </div>
                        <div data-brand-id={props.brand_id} data-mount-id={'countYear'} className={s.body_item + ' countYear'}>{(Sum/props.countMonth['allTime']*100+'').slice(0,4)+'%'}</div>

                    </div>
            }
        </>

    );
};

export default TableBodyRowMarketAll;