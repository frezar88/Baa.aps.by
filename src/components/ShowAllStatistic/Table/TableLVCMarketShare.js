import React, { useContext, useEffect, useState } from 'react';
import s from './TablePcMarketShare.module.css'

import { Context } from "../../../index";
import {getAllStatistic, getAllStatisticLcv, getAllStatisticPc} from "../../../http/brandAPI";
import TableBodyRowPcMarket from "./components/MarketPcShare/TableBodyRowPcMarket";
import TableHeadRowPcMarket from "./components/MarketPcShare/TableHeadRowPcMarket";
import TableBodyRowLCVMarket from "./components/MarketLCVShare/TableBodyRowLCVMarket";
import {Button} from "react-bootstrap";


const TableLCVMarketShare = () => {
    const { brandModel } = useContext(Context)
    const [load,setLoad]=useState(false)
    const [countMonth,setCountMonth]=useState()

    const [data, setData] = useState()
    useEffect(() => {
        getAllStatisticLcv().then((data1) => {

            let arr = []
            for (let dataKey in data1.data) {
                data1.data[dataKey].forEach(el => {
                    arr.push({
                        'date': dataKey,
                        'value': el.value,
                        'brand_id': el.brand.id,
                        'brand_name': el.brand.name,
                    })
                })
            }
            let countForMonth={
                '1609448400':0,
                '1612126800':0,
                '1614546000':0,
                '1617224400':0,
                '1619816400':0,
                '1622494800':0,
                '1625086800':0,
                '1627765200':0,
                '1630443600':0,
                '1633035600':0,
                '1635714000':0,
                '1638306000':0,
                'allTime':0

            }
            arr.forEach(el=>{
                countForMonth[el['date']] +=+el.value
                countForMonth['allTime'] +=+el.value
            })
            setCountMonth(countForMonth)
            setData(arr)
        })
    }, [])

    const download = () => {

        let objArray = [
            ['Бренд', 'янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.', 'ИТОГО'],

        ]
        brandModel.IsBrand.forEach(el => {
            objArray.push([el.name, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',])
            let totalSum=0
            data.filter(item => item.brand_name === el.name).forEach(el2 => {
                let numberMonth = new Date(+el2.date * 1000).toLocaleDateString('en', {month: 'numeric'})
                totalSum+= +el2.value
                objArray.forEach(el3 => {
                    if (el3.indexOf(el2.brand_name) !== -1){
                        el3[numberMonth] = +el2.value/countMonth[el2.date]*100 ? String(+el2.value/countMonth[el2.date]*100).slice(0,4)+'%':'0'
                        console.log(countMonth)
                        el3[13]=String(+totalSum/+countMonth.allTime*100).slice(0,7)+'%'
                    }
                })
            })
        })
        objArray.sort(function (a, b) {
            return +b[13].replace('%','') - +a[13].replace('%','')
        })
        let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        for (let i = 0; i < array.length; i++) {
            let line = [];
            for (let index in array[i]) {
                line.push('"' + array[i][index] + '"');
            }
            str += line.join(';');
            str += '\r\n';
        }
        const universalBOM = "\uFEFF";
        let a = window.document.createElement('a');
        a.setAttribute('href', 'data:text/csv; charset=utf-8,' + encodeURIComponent(universalBOM + str));
        a.setAttribute('download', 'marketShareLCV .csv');
        window.document.body.appendChild(a);
        a.click();
    }


    return (
        <div style={{ marginTop: 20 }}>
            <div style={{
                borderBottom: 'solid 1px grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h3 style={{ paddingBottom: '10px', paddingLeft: 15 }} >Процентная доля рынка LCV  брендов</h3>
                <Button variant={"outline-light"} onClick={download}>Скачать стастистику</Button>
            </div>
            <div className={s.table}>
                <TableHeadRowPcMarket />
                <div className={s.table_body + ' brand_body'} style={{ display: 'grid' }}>
                    {
                        data ? brandModel.IsBrand.map(({ id, name }) =>
                            <TableBodyRowLCVMarket countMonth={countMonth} load={load} setLoad={setLoad} key={id} brand_id={id} brand_name={name} data={data.filter(item => item.brand_id === id)} />
                        ) : false
                    }

                </div>

            </div>

        </div>

    );
};

export default TableLCVMarketShare;