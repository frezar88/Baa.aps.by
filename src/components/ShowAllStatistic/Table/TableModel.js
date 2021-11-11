import React, {useEffect, useState} from 'react';
import s from "./TableModel.module.css";
import TableHeadModelRow from "./components/model/TableHeadModelRow";
import TableBodyModelRow from "./components/model/TableBodyModelRow";
import {getAllStatisticModel, getAllStatisticModelValue} from "../../../http/brandAPI";
import {Button, Spinner} from "react-bootstrap";
import TableFooterModelRow from "./components/model/TableFooterModelRow";


const TableModel = () => {
    const [carList, setCarList] = useState([])
    const [carsValue, setCarsValue] = useState([])
    const [load1, setLoad1] = useState(false)
    const [load2, setLoad2] = useState(false)
    const [load, setLoad] = useState(false)
    useEffect(() => {
        getAllStatisticModel().then(data => {

            setCarList(data.data)
            setLoad1(true)
        })
    }, [])

    useEffect(() => {
        getAllStatisticModelValue().then(data => {
            let arr = []
            for (let dataKey in data.data) {
                data.data[dataKey].forEach(el => {
                    arr.push({
                        'date': dataKey,
                        'value': el.value,
                        'car_id': el['car']['id']
                    })

                })
            }
            setCarsValue(arr)
            setLoad2(true)
        })
    }, [])

    const download = () => {

        let objArray = [
            ['Тип', 'Бренд', 'Модель', 'янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.', 'ИТОГО',' '],

        ]
        carList.forEach(el => {
            objArray.push([el.car['car_type'].name, el.car.model.brand.name, el.car.name, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', el.car.id])
            let totalSum = 0
            carsValue.filter(item => item.car_id === el.car.id).forEach(el2 => {
                let numberMonth = new Date(+el2.date * 1000).toLocaleDateString('en', {month: 'numeric'})

                totalSum += +el2.value
                objArray.forEach(el3 => {
                    if (el3.indexOf(el2.car_id) !== -1 && el3.indexOf(el2.car_id) !== -1) {
                        el3[+numberMonth + 2] = el2.value
                        el3[15] = +totalSum
                    }
                })
            })
        })
        objArray.sort(function (a, b) {
            return b[15] - a[15]
        })
        let sortObjArray2 = []
        objArray.forEach(el => {
            sortObjArray2.push(el.slice(0, el.length - 1))
        })


            let array = typeof sortObjArray2 != 'object' ? JSON.parse(sortObjArray2) : sortObjArray2;
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
            a.setAttribute('download', 'ModelAll.csv');
            window.document.body.appendChild(a);
            a.click();
        }

        return (
            <div style={{marginTop: 20, paddingBottom: 20}}>
                <div className={s.table}>
                    <div style={{
                        borderBottom: 'solid 1px grey',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <h3 style={{paddingBottom: '10px', paddingLeft: `0 15`}}>Статистика всех моделей</h3>
                        <Button variant={"outline-light"} onClick={download}>Скачать стастистику</Button>
                    </div>
                    <TableHeadModelRow/>
                    <div className={s.table_body + ' model_body'} style={{display: 'grid'}}>
                        {
                            load1 && load2 ?
                                carList ? carList.map((({car}) =>
                                        <TableBodyModelRow
                                            key={car.id} car={car}
                                            data={carsValue.filter(item => item['car_id'] === car.id)}
                                            load={load} setLoad={setLoad}
                                        />
                                )) : <Spinner animation={'grow'}/>
                                : <Spinner animation={'grow'}/>


                        }


                    </div>
                    <div className={s.table_footer}>
                        <TableFooterModelRow load={load}/>
                    </div>
                </div>
            </div>
        );
    };

    export default TableModel;