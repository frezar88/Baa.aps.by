import React, {useContext, useEffect, useState} from 'react';
import s from './TableBrand.module.css'
import TableHeadRow from "./components/brand/TableHeadRow";
import TableBodyRow from "./components/brand/TableBodyRow";
import {Context} from "../../../index";
import {getAllStatistic, getAllStatisticPc} from "../../../http/brandAPI";
import TableFooterRow from "./components/brand/TableFooterRow";
import {Button, Form, Spinner} from "react-bootstrap";
import {CURRENT_YEAR_MONTH} from "../../../utils/consts";

const TableBrandPC = ({setLoadDataDone, setStateBrand, stateBrand}) => {
    const {brandModel} = useContext(Context)
    const [load, setLoad] = useState(false)
    const [data, setData] = useState()
    const [counter] = useState(0)
    const [stateYear, setStateYear] = useState(CURRENT_YEAR_MONTH.january)
    const [loadDateLocal, setLoadDateLocal] = useState(false)

    useEffect(() => {

        getAllStatisticPc(stateYear).then((data) => {
            let arr = []
            for (let dataKey in data.data.data) {
                data.data.data[dataKey].forEach(el => {
                    arr.push({
                        'date': dataKey,
                        'value': el.value,
                        'brand_id': el['brand_id'],
                        'brand_name': data.data.included.brands.find((b) => b.id === el.brand_id).name,
                    })

                })
            }
            setData(arr)
            setLoadDataDone(true)
            setLoadDateLocal(true)
            // setStateBrand(arr)
            console.log(data)
        })

    }, [stateYear])

    const download = () => {

        let objArray = [
            ['Бренд', 'янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.', 'ИТОГО'],

        ]
        brandModel.IsBrand.forEach(el => {
            objArray.push([el.name, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',])
            let totalSum = 0

            let year = new Date(stateYear * 1000).getFullYear()
            let yearEnd = Math.round(new Date(`1,1,${+year + 1}`) / 1000)

            data.filter(item => item.brand_name === el.name).filter(({date}) => date >= stateYear && date < yearEnd).forEach(el2 => {
                let numberMonth = new Date(+el2.date * 1000).toLocaleDateString('en', {month: 'numeric'})
                totalSum += +el2.value
                objArray.forEach(el3 => {
                    if (el3.indexOf(el2.brand_name) !== -1) {
                        el3[numberMonth] = el2.value
                        el3[13] = +totalSum
                    }
                })
            })
        })
        objArray.sort(function (a, b) {
            return b[13] - a[13]
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
        a.setAttribute('download', 'brandPC.csv');
        window.document.body.appendChild(a);
        a.click();
    }

    return (
        <>
            {
                data && brandModel.IsBrand || stateBrand[0] ?

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
                                <h3 style={{paddingLeft: 0, marginBottom: 0,}}>Полная статистика брендов</h3>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gridGap: '20px'}}>
                                <Button variant={"outline-light"} onClick={download}>Скачать таблицу</Button>
                                <div>
                                    <Form>
                                        <Form.Select defaultValue={CURRENT_YEAR_MONTH.january} onChange={(e) => {
                                            setStateYear(e.target.value)
                                            setLoadDateLocal(false)
                                        }
                                        }>
                                            <option value={CURRENT_YEAR_MONTH.january}>2022</option>
                                            <option value={'1609448400'}>2021</option>
                                            <option value={'1577826000'}>2020</option>
                                            <option value={'1546290000'}>2019</option>
                                        </Form.Select>
                                    </Form>
                                </div>
                            </div>

                        </div>

                        {
                            loadDateLocal
                                ?
                                <div className={s.table}>
                                    <div style={{order: '-2'}}>
                                        <TableHeadRow stateYear={stateYear}/>
                                    </div>
                                    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr',}}>
                                        <div>
                                            {
                                                stateBrand ? brandModel.IsBrand.map((currElement, index) =>
                                                        <div
                                                            style={{height: '45px', display: 'flex', alignItems: 'center'}}>
                                                            <p
                                                                style={{margin: '0'}}>{index + 1}</p></div>
                                                    )
                                                    : false
                                            }
                                        </div>
                                        <div className={s.table_body + ' brand_body'} style={{display: 'grid'}}>

                                            {
                                                stateBrand[0] ?

                                                    stateBrand ? brandModel.IsBrand.map(({id, name}) =>
                                                        <TableBodyRow stateYear={stateYear} load={load}
                                                                      setLoad={setLoad}
                                                                      key={id} brand_id={id}
                                                                      brand_name={name}
                                                                      data={stateBrand.filter(item => item.brand_id === id)}/>
                                                    ) : false
                                                    :
                                                    data ? brandModel.IsBrand.map(({id, name}) =>
                                                            <TableBodyRow stateYear={stateYear} load={load}
                                                                          setLoad={setLoad}
                                                                          key={id} brand_id={id}
                                                                          brand_name={name}
                                                                          data={data.filter(item => item.brand_id === id).filter(item => stateYear == CURRENT_YEAR_MONTH.january ? item : +item.date < 1640984400)}/>
                                                        // data={data.filter(item => item.brand_id === id)}/>
                                                    ) : false
                                            }
                                        </div>
                                    </div>
                                    <div className={s.table_footer}>
                                        <TableFooterRow stateYear={stateYear} load={load}/>
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

export default TableBrandPC;