import React, {useContext, useEffect, useState} from 'react';
import s from './TableBrand.module.css'
import TableHeadRow from "./components/brand/TableHeadRow";
import TableBodyRow from "./components/brand/TableBodyRow";
import {Context} from "../../../index";
import {getAllStatistic} from "../../../http/brandAPI";
import TableFooterRow from "./components/brand/TableFooterRow";
import {Button} from "react-bootstrap";

const TableBrand = () => {
    const {brandModel} = useContext(Context)
    const [load, setLoad] = useState(false)

    const [data, setData] = useState()
    useEffect(() => {
        getAllStatistic().then((data) => {
            let arr = []
            for (let dataKey in data.data) {
                data.data[dataKey].forEach(el => {
                    arr.push({
                        'date': dataKey,
                        'value': el.value,
                        'brand_id': el.brand.id,
                        'brand_name': el.brand.name,
                    })
                })
            }
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
                        el3[numberMonth] = el2.value
                        el3[13]=+totalSum
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
        a.setAttribute('download', 'brand.csv');
        window.document.body.appendChild(a);
        a.click();


    }
    return (
        <div style={{marginTop: 20}}>
            <div style={{
                borderBottom: 'solid 1px grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h3 style={{paddingBottom: '10px', paddingLeft: 15}}>Полная статистика брендов</h3>
                <Button variant={"outline-light"} onClick={download}>Скачать стастистику</Button>
            </div>

            <div className={s.table}>
                <TableHeadRow/>
                <div className={s.table_body + ' brand_body'} style={{display: 'grid'}}>
                    {
                        data ? brandModel.IsBrand.map(({id, name}) =>
                            <TableBodyRow load={load} setLoad={setLoad} key={id} brand_id={id} brand_name={name}
                                          data={data.filter(item => item.brand_id === id)}/>
                        ) : false
                    }

                </div>

                <div className={s.table_footer}>
                    <TableFooterRow load={load}/>
                </div>
            </div>
        </div>

    );
};

export default TableBrand;