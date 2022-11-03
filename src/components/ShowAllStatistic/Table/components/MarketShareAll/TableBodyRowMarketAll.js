import React, {useEffect, useState} from 'react';
import s from "../../TableMarketShareAll.module.css";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH, YEAR_MONTH_2019, YEAR_MONTH_2020} from "../../../../../utils/consts";


const TableBodyRowMarketAll = (props) => {

    const [Sum, SetSum] = useState(0)

    useEffect(() => {

        let count = 0
        if (props.data[0]) {
            let year = new Date(props.stateYear * 1000 ).getFullYear()
            let yearEnd = Math.round(new Date(`1,1,${+year+1}`)/1000)
            props.data.filter(({date}) => date >= props.stateYear && date < yearEnd).forEach(el => {
                count += +el.value
            })
            props.data.filter(({date}) => date >= props.stateYear && date < yearEnd).forEach(el => {
                    let currentBlock = document.querySelector(`div[data-brand-id="${el.brand_id}"][data-mount-id="${el.date}"][data-market="${'true'}"]`)
                    if (currentBlock) {
                        let interest =+el.value / +props.countMonth[el.date] * 100?+el.value / +props.countMonth[el.date] * 100 +'':'0'
                        // currentBlock.innerHTML =interest.slice(0,4)+'%'
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
                props.stateYear == CURRENT_YEAR_MONTH.january
                    ?
                    <div className={s.table_body_wrapper + ' wrap'}
                         style={{order: String(Sum).replace('%', '') ? '-' + String(Sum).replace('%', '') : false}}>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             className={s.body_item + ' header-brand' + ' brand_name_block'}>{props.brand_name}</div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.january}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.february}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.march}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.april}
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
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.august}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.september}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.october}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.november}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             data-mount-id={CURRENT_YEAR_MONTH.december}
                             className={s.body_item}>0
                        </div>
                        <div data-brand-id={props.brand_id} data-mount-id={'countYear'}
                             // className={s.body_item + ' countYear'}>{(Sum / props.countMonth['allTime'] * 100 + '').slice(0, 4) + '%'}</div>
                             className={s.body_item + ' countYear'}>{(Sum / props.countMonth['allTime'] * 100 + '').slice(0, 4) + '%'}</div>

                    </div>
                    : ''
            }
            {
                props.stateYear == PREVIOUS_YEAR_MONTH.january
                    ?
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
                    : ''
            }
            {
                props.stateYear == YEAR_MONTH_2020.january
                    ?
                    <div className={s.table_body_wrapper + ' wrap'} style={{order: String(Sum).replace('%','') ? '-' + String(Sum).replace('%','') : false}}>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             className={s.body_item + ' header-brand'+' brand_name_block'}>{props.brand_name}</div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.january}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.february}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.march}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.april}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.may}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.june}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.july}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.august}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.september}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.october}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.november}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2020.december}
                             className={s.body_item}>0
                        </div>
                        <div data-brand-id={props.brand_id} data-mount-id={'countYear'} className={s.body_item + ' countYear'}>{(Sum/props.countMonth['allTime']*100+'').slice(0,4)+'%'}</div>

                    </div>
                    : ''
            }
            {
                props.stateYear == YEAR_MONTH_2019.january
                    ?
                    <div className={s.table_body_wrapper + ' wrap'} style={{order: String(Sum).replace('%','') ? '-' + String(Sum).replace('%','') : false}}>
                        <div data-market={'true'} data-brand-id={props.brand_id}
                             className={s.body_item + ' header-brand'+' brand_name_block'}>{props.brand_name}</div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.january}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.february}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.march}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.april}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.may}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.june}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.july}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.august}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.september}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.october}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.november}
                             className={s.body_item}>0
                        </div>
                        <div data-market={'true'} data-brand-id={props.brand_id} data-mount-id={YEAR_MONTH_2019.december}
                             className={s.body_item}>0
                        </div>
                        <div data-brand-id={props.brand_id} data-mount-id={'countYear'} className={s.body_item + ' countYear'}>{(Sum/props.countMonth['allTime']*100+'').slice(0,4)+'%'}</div>

                    </div>
                    : ''
            }


        </>

    );
};

export default TableBodyRowMarketAll;