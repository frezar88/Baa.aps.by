import React, {useEffect, useState} from 'react';
import s from "../../TableBrand.module.css";


const TableBodyRow = (props) => {
    const [Sum, SetSum] = useState(0)

    useEffect(() => {
        let count = 0
        if (props.data[0]) {
            props.data.forEach(el => {
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
        if (!props.load){
            props.setLoad(true)
        }

    }, [props.data])
    return (
        <div className={s.table_body_wrapper + ' wrap'} style={{order: Sum ? '-' + Sum : false}}>
            <div data-brand-id={props.brand_id} className={s.body_item +' header-brand'}>{props.brand_name}</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1609448400'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1612126800'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1614546000'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1617224400'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1619816400'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1622494800'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1625086800'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1627765200'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1630443600'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1633035600'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1635714000'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'1638306000'} className={s.body_item}>0</div>
            <div data-brand-id={props.brand_id} data-mount-id={'countYear'} className={s.body_item + ' countYear'}>{Sum}</div>

        </div>
    );
};

export default TableBodyRow;