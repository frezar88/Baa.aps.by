import React, {useState} from 'react';
import s from "../../TableMarketShareAll.module.css";


const TableHeadRowMarketAll = () => {
    let [status, setStatus] = useState()
    let statusSort = 0;

    function sortString(path) {
        let block = document.querySelectorAll(path)
        let arr = []
        block.forEach(el => {
            arr.push(el)
        })
        if (!statusSort) {
            arr.sort(function (a, b) {
                return a.innerHTML.localeCompare(b.innerHTML)
            })
            statusSort = 1
        } else {
            arr.sort(function (a, b) {
                return b.innerHTML.localeCompare(a.innerHTML)
            })
            statusSort = 0
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i].parentNode.style.order = i
        }
    }

    const sort = (e, mouth) => {

        let block = document.querySelectorAll('div[data-mount-id="' + mouth + '"][data-brand-id]')

        let arr = []
        block.forEach((el) => {
            arr.push(el)
        })

        if (!statusSort) {
            arr.sort(function (a, b) {
                return b.innerHTML.replace('%', '') - a.innerHTML.replace('%', '')
            })
            for (let i = 0; i < arr.length; i++) {
                arr[i].parentNode.style.order = i
            }
            statusSort = 1
        } else {
            arr.sort(function (a, b) {
                return a.innerHTML.replace('%', '') - b.innerHTML.replace('%', '')
            })
            for (let i = 0; i < arr.length; i++) {
                arr[i].parentNode.style.order = i
            }
            statusSort = 0
        }

        setStatus(e.target)
    }

    return (
        <div className={s.table_head}>
            <div onClick={(e) => {
                sortString('div.header-brand')
            }} className={s.head_item}>Бренд
            </div>
            <div onClick={(e) => {
                sort(e, '1609448400')
            }} className={s.head_item}>янв.
            </div>
            <div onClick={(e) => {
                sort(e, '1612126800')
            }} className={s.head_item}>фев.
            </div>
            <div onClick={(e) => {
                sort(e, '1614546000')
            }} className={s.head_item}>март
            </div>
            <div onClick={(e) => {
                sort(e, '1617224400')
            }} className={s.head_item}>апр.
            </div>
            <div onClick={(e) => {
                sort(e, '1619816400')
            }} className={s.head_item}>май
            </div>
            <div onClick={(e) => {
                sort(e, '1622494800')
            }} className={s.head_item}>июнь
            </div>
            <div onClick={(e) => {
                sort(e, '1625086800')
            }} className={s.head_item}>июль
            </div>
            <div onClick={(e) => {
                sort(e, '1627765200')
            }} className={s.head_item}>авг.
            </div>
            <div onClick={(e) => {
                sort(e, '1630443600')
            }} className={s.head_item}>сен.
            </div>
            <div onClick={(e) => {
                sort(e, '1633035600')
            }} className={s.head_item}>окт.
            </div>
            <div onClick={(e) => {
                sort(e, '1635714000')
            }} className={s.head_item}>ноя.
            </div>
            <div onClick={(e) => {
                sort(e, '1638306000')
            }} className={s.head_item}>дек.
            </div>
            <div onClick={(e) => {
                sort(e, 'countYear')
            }} className={s.head_item}>ИТОГО
            </div>

        </div>
    );
};

export default TableHeadRowMarketAll;