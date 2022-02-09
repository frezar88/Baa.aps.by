import React, {useContext, useEffect, useState} from 'react';
import s from './TablePcMarketShare.module.css'

import {Context} from "../../../index";
import {getAllStatistic, getAllStatisticPc} from "../../../http/brandAPI";
import TableBodyRowPcMarket from "./components/MarketPcShare/TableBodyRowPcMarket";
import TableHeadRowPcMarket from "./components/MarketPcShare/TableHeadRowPcMarket";
import {Button, Form, Spinner} from "react-bootstrap";
import {CURRENT_YEAR_MONTH} from "../../../utils/consts";


const TablePcMarketShare = ({setLoadDataDone}) => {
    const {brandModel} = useContext(Context)
    const [load, setLoad] = useState(false)
    const [countMonth, setCountMonth] = useState()
    const [stateYear, setStateYear] = useState(CURRENT_YEAR_MONTH.january)
    const [loadDateLocal, setLoadDateLocal] = useState(false)

    const [data, setData] = useState()
    useEffect(() => {
        getAllStatisticPc(stateYear).then((data1) => {

            let arr = []
            for (let dataKey in data1.data.data) {

                data1.data.data[dataKey].forEach(el => {
                    arr.push({
                        'date': dataKey,
                        'value': el.value,
                        'brand_id': el.brand_id,
                        'brand_name': data1.data.included.brands.find((b) => b.id === el.brand_id).name,
                    })
                })
            }
            let countForMonth = {
                '1640984400': 0,
                '1643662800': 0,
                '1646082000': 0,
                '1648760400': 0,
                '1651352400': 0,
                '1654030800': 0,
                '1656622800': 0,
                '1659301200': 0,
                '1661979600': 0,
                '1664571600': 0,
                '1667250000': 0,
                '1669842000': 0,
                'allTime': 0
            }
            let countForMonthPrev = {
                '1609448400': 0,
                '1612126800': 0,
                '1614546000': 0,
                '1617224400': 0,
                '1619816400': 0,
                '1622494800': 0,
                '1625086800': 0,
                '1627765200': 0,
                '1630443600': 0,
                '1633035600': 0,
                '1635714000': 0,
                '1638306000': 0,
                'allTime': 0
            }
            arr.forEach(el => {
                if (stateYear == CURRENT_YEAR_MONTH.january){
                    countForMonth[el['date']] += +el.value
                    countForMonth['allTime'] += +el.value
                }
                if(stateYear == '1609448400'){
                    if (+el['date']< 1640984400  ){
                        countForMonthPrev[el['date']] += +el.value
                        countForMonthPrev['allTime'] += +el.value
                    }
                }
            })
            setCountMonth(stateYear == CURRENT_YEAR_MONTH.january ? countForMonth: countForMonthPrev)
            setData(arr)
            setLoadDataDone(true)
            setLoadDateLocal(true)
        })
    }, [stateYear])

    const download = () => {

        let objArray = [
            ['Бренд', 'янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.', 'ИТОГО'],

        ]
        brandModel.IsBrand.forEach(el => {
            objArray.push([el.name, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',])
            let totalSum = 0
            data.filter(item => item.brand_name === el.name).filter(item=>stateYear == CURRENT_YEAR_MONTH.january? item: +item.date < 1640984400 ).forEach(el2 => {
                let numberMonth = new Date(+el2.date * 1000).toLocaleDateString('en', {month: 'numeric'})
                totalSum += +el2.value
                objArray.forEach(el3 => {
                    if (el3.indexOf(el2.brand_name) !== -1) {
                        el3[numberMonth] = +el2.value / countMonth[el2.date] * 100 ? String(+el2.value / countMonth[el2.date] * 100).slice(0, 4) + '%' : '0'
                        console.log(countMonth)
                        el3[13] = String(+totalSum / +countMonth.allTime * 100).slice(0, 7) + '%'
                    }
                })
            })
        })
        objArray.sort(function (a, b) {
            return +b[13].replace('%', '') - +a[13].replace('%', '')
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
        a.setAttribute('download', 'marketSharePC .csv');
        window.document.body.appendChild(a);
        a.click();
    }


    return (
        <>
            {
                data && brandModel.IsBrand
                    ?
                    <div style={{marginTop: 15}}>
                        <div style={{
                            borderBottom: 'solid 1px grey',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            alignItem: 'center',
                            paddingBottom: '15px'
                        }}>
                            <div>
                                <h3 style={{paddingLeft: 0, marginBottom: 0,}}>Процентная доля рынка PC брендов</h3>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gridGap: '20px'}}>
                                <Button variant={"outline-light"} onClick={download}>Скачать таблицу</Button>
                                <div>
                                    <Form>
                                        <Form.Select defaultValue={stateYear} onChange={(e) => {
                                            setStateYear(e.target.value)
                                            setLoadDateLocal(false)
                                        }
                                        }>
                                            <option value={CURRENT_YEAR_MONTH.january}>2022</option>
                                            <option value={'1609448400'}>2021</option>
                                        </Form.Select>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        {
                            loadDateLocal
                            ?
                                <div className={s.table}>
                                    <TableHeadRowPcMarket stateYear={stateYear}/>
                                    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr',}}>
                                        <div>
                                            {
                                                data ? brandModel.IsBrand.map((currElement, index) =>
                                                        <div style={{height: '45px', display: 'flex', alignItems: 'center'}}>
                                                            <p style={{margin: '0'}}>{index + 1}                                                </p>
                                                        </div>
                                                    )
                                                    : false
                                            }
                                        </div>
                                        <div className={s.table_body + ' brand_body'} style={{display: 'grid'}}>
                                            {
                                                data ? brandModel.IsBrand.map(({id, name}) =>
                                                    <TableBodyRowPcMarket countMonth={countMonth} load={load} setLoad={setLoad}
                                                                          key={id} brand_id={id} brand_name={name}
                                                                          data={data.filter(item => item.brand_id === id).filter(item=>stateYear == CURRENT_YEAR_MONTH.january? item: +item.date < 1640984400 )}
                                                                          stateYear={stateYear}
                                                    />
                                                ) : false
                                            }
                                        </div>
                                    </div>
                                </div>
                                :
                                <Spinner animation={"grow"}/>
                        }

                    </div>
                    :
                    <Spinner animation={"grow"}/>
            }
        </>


    );
};

export default TablePcMarketShare;