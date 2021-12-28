import React, {useContext, useEffect, useState} from 'react';
import s from "./TableModel.module.css";
import TableHeadModelRow from "./components/model/TableHeadModelRow";
import TableBodyModelRow from "./components/model/TableBodyModelRow";
import {getAllStatisticModel, getAllStatisticModelValue} from "../../../http/brandAPI";
import {Button, Spinner} from "react-bootstrap";
import TableFooterModelRow from "./components/model/TableFooterModelRow";
import {Context} from "../../../index";


const TableModel = ({setLoadDataDone, setStateModelAll, stateModelAll}) => {
    const {brandModel} = useContext(Context)
    const [carList, setCarList] = useState([])
    const [carsValue, setCarsValue] = useState([])
    const [load1, setLoad1] = useState(false)
    const [load2, setLoad2] = useState(false)
    const [load, setLoad] = useState(false)
    useEffect(() => {
        getAllStatisticModel().then(data => {
            let cars = data.data.included.cars.map((c) => ({
                ...c, model: data.data.included.models.find((m) => c['model_id'] === m.id)
            }))
            let result = data.data.data.map((el) => ({...el, car: cars.find((c) => c.id === el.car_id)}))

            setCarList(result)
            setLoad1(true)

            let clone = Object.assign({}, stateModelAll)
            clone.carList = result
            // setStateModelAll(clone)

        })
    }, [])

    useEffect(() => {
        getAllStatisticModelValue().then(data => {

            let arr = []
            for (let dataKey in data.data.data) {
                data.data.data[dataKey].forEach(el => {
                    arr.push({
                        'date': dataKey,
                        'value': el.value,
                        'car_id': el['car_id']
                    })

                })
            }

            setCarsValue(arr)
            setLoad2(true)
            setLoadDataDone(true)
            let cloneArr = Object.assign({}, stateModelAll)
            cloneArr.carsValue = arr
            // setStateModelAll(cloneArr)
        })
    }, [])


    const typef = (car) => {
        console.log(car)
        if (+car === 1) {
            return 'PC'
        } else if (+car === 2) {
            return 'LCV'
        } else {
            return 'MCV'
        }
    }

    const download = () => {

        let objArray = [
            ['Тип', 'Бренд', 'Модель', 'янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.', 'ИТОГО', ' '],

        ]

        carList.forEach(el => {
            let brandName = brandModel.IsBrand.find((item) => item.id === el.car.model.brand_id)
            objArray.push([typef(el.car['car_type_id']), brandName.name, el.car.name, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', el.car.id])
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
        <>
            {
                (load1 && load2) || (stateModelAll.carList[0] && stateModelAll.carsValue[0])
                    ?
                    <div style={{marginTop: 15, paddingBottom: 20}}>
                        <div className={s.table}>
                            <div style={{
                                borderBottom: 'solid 1px grey',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                alignItem: 'center',
                                paddingBottom: '15px'
                            }}>
                                <h3 style={{paddingLeft: 0, marginBottom: 0,}}>Статистика всех моделей</h3>
                                <Button variant={"outline-light"} onClick={download}>Скачать стастистику</Button>
                            </div>
                            <TableHeadModelRow/>
                            <div className={s.table_body + ' model_body'} style={{display: 'grid'}}>
                                {
                                    load1 && load2 && carList[0] ?

                                        carList.filter(item=>item.value !=='0').map(({car,value}) =>
                                            <TableBodyModelRow
                                                key={car.id} car={car} value={value}
                                                data={carsValue.filter(item => item['car_id'] === car.id)}
                                                load={load} setLoad={setLoad}
                                            />
                                        )
                                        : <Spinner animation={'grow'}/>
                                }
                            </div>
                            <div className={s.table_footer}>
                                <TableFooterModelRow load={load}/>
                            </div>
                        </div>
                    </div>
                    :
                    <Spinner animation={"grow"}/>
            }
        </>

    );
};

export default TableModel;