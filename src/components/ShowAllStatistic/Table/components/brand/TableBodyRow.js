import React, {useEffect, useState} from 'react';
import s from "../../TableBrand.module.css";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH} from "../../../../../utils/consts";


const TableBodyRow = (props) => {
    const [Sum, SetSum] = useState(0)

    useEffect(() => {
        // let allBlock = document.querySelectorAll(`div[data-brand-id][data-mount-id]`)
        // await allBlock.forEach((el)=>{
        //     if (el.attributes['data-mount-id'].value !=='countYear'){
        //         el.innerHTML='0'
        //         el.style.color='grey'
        //     }
        // })
        let count = 0
        if (props.data[0]) {
            let year = new Date(props.stateYear * 1000 ).getFullYear()
            let yearEnd = Math.round(new Date(`1,1,${+year+1}`)/1000)




            props.data.filter(({date}) => date >= props.stateYear && date < yearEnd).forEach(el => {
                    let currentBlock = document.querySelector(`div[data-brand-id="${el.brand_id}"][data-mount-id="${el.date}"]`)
                    if (currentBlock) {
                        currentBlock.innerHTML = el.value
                        currentBlock.style.fontWeight = '500'
                        currentBlock.style.color = '#000'
                    }
                    count += +el.value
                }
            )
        }
        SetSum(count)
        if (!props.load) {
            props.setLoad(true)
        }

    }, [props.data, props.stateYear])

    if ( props.stateYear == CURRENT_YEAR_MONTH.january){
        return (
            <div className={s.table_body_wrapper + ' wrap'} style={{order: Sum ? '-' + Sum : false,}}>
                <div data-brand-id={props.brand_id}
                     className={s.body_item + ' header-brand' + ' brand_name_block'}>{props.brand_name}</div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.january}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.february}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.march}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.april}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.may}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.june}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.july}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.august}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.september}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.october}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.november}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={CURRENT_YEAR_MONTH.december}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={'countYear'}
                     className={s.body_item + ' countYear'}>{Sum}</div>
            </div>
        )
    }
    if ( props.stateYear == 1577826000){
        return (
            <div className={s.table_body_wrapper + ' wrap'} style={{order: Sum ? '-' + Sum : false,}}>
                <div data-brand-id={props.brand_id}
                     className={s.body_item + ' header-brand' + ' brand_name_block'}>{props.brand_name}</div>
                <div data-brand-id={props.brand_id} data-mount-id={"1577826000"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1580504400"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1583010000"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1585688400"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1588280400"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1590958800"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1593550800"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1596229200"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1598907600"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1601499600"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1604178000"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1606770000"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={'countYear'}
                     className={s.body_item + ' countYear'}>{Sum}</div>
            </div>
        )
    }
    if ( props.stateYear == 1546290000){
        return (
            <div className={s.table_body_wrapper + ' wrap'} style={{order: Sum ? '-' + Sum : false,}}>
                <div data-brand-id={props.brand_id}
                     className={s.body_item + ' header-brand' + ' brand_name_block'}>{props.brand_name}</div>
                <div data-brand-id={props.brand_id} data-mount-id={"1546290000"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1548968400"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1551387600"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1554066000"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1556658000"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1559336400"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1561928400"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1564606800"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1567285200"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1569877200"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1572555600"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={"1575147600"}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={'countYear'}
                     className={s.body_item + ' countYear'}>{Sum}</div>
            </div>
        )
    }
    if ( props.stateYear == PREVIOUS_YEAR_MONTH.january){
        return (
            <div className={s.table_body_wrapper + ' wrap'} style={{order: Sum ? '-' + Sum : false,}}>
                <div data-brand-id={props.brand_id}
                     className={s.body_item + ' header-brand' + ' brand_name_block'}>{props.brand_name}</div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.january}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.february}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.march}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.april}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.may}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.june}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.july}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.august}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.september}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.october}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.november}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={PREVIOUS_YEAR_MONTH.december}
                     className={s.body_item}>0
                </div>
                <div data-brand-id={props.brand_id} data-mount-id={'countYear'}
                     className={s.body_item + ' countYear'}>{Sum}</div>
            </div>
        )
    }

};

export default TableBodyRow;