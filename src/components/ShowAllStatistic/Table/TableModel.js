import React, {useContext, useEffect, useState} from 'react';
import s from "./TableModel.module.css";
import TableHeadModelRow from "./components/model/TableHeadModelRow";
import TableBodyModelRow from "./components/model/TableBodyModelRow";
import {getAllStatisticModel, getAllStatisticModelValue} from "../../../http/brandAPI";
import {Button, Form, Spinner} from "react-bootstrap";
import TableFooterModelRow from "./components/model/TableFooterModelRow";
import {Context} from "../../../index";
import {CURRENT_YEAR_MONTH} from "../../../utils/consts";


const TableModel = ({setLoadDataDone, setStateModelAll, stateModelAll}) => {
    const {brandModel} = useContext(Context)
    const [carList, setCarList] = useState([])
    const [carsValue, setCarsValue] = useState([])
    const [load1, setLoad1] = useState(false)
    const [load2, setLoad2] = useState(false)
    const [load, setLoad] = useState(false)
    const [stateYear, setStateYear] = useState(CURRENT_YEAR_MONTH.january)
    const [loadDateLocal, setLoadDateLocal] = useState(false)

    const [electricState, setElectricState] = useState(false)

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
        getAllStatisticModelValue(stateYear).then(data => {

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
            setLoadDateLocal(true)
        })
    }, [stateYear,electricState])


    const typef = (car) => {
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
        carList.filter(item => item.value !== '0').filter(item => electricState ? +item.car['electro'] : item).forEach(el => {
            let brandName = brandModel.IsBrand.find((item) => item.id == el.car.model.brand_id)
            let totalSum = 0

            carsValue.filter(item => item.car_id === el.car.id)
                .filter(item => +item['date'] >= +stateYear && stateYear == CURRENT_YEAR_MONTH.january ? +item['date'] : +item['date'] <= 1638306000)
                .filter(item => item.value !== '0').forEach(el2 => {
                totalSum += +el2.value
                el[13] = +totalSum
            })
            objArray.push([typef(el.car['car_type_id']), brandName.name, el.car.name, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', totalSum, el.car.id])
        })
        carsValue.filter(item => +item['date'] >= +stateYear && stateYear == CURRENT_YEAR_MONTH.january ? +item['date'] : +item['date'] <= 1638306000).filter(item => item.value && item.value !== '0').forEach(el => {
            let numberMonth = new Date(+el.date * 1000).toLocaleDateString('en', {month: 'numeric'})
            objArray.forEach(el3 => {
                if (el3[16] == el.car_id) {
                    el3[+numberMonth + 2] = el.value
                }
            })
        })
        let tempArr = []
        objArray.sort(function (a, b) {
            return b[15] - a[15]
        })
        objArray.forEach(el => {
            tempArr.push(el.slice(0, el.length - 1))
        })

        let array = typeof tempArr != 'object' ? JSON.parse(tempArr) : tempArr;
        let x = 0
        array.forEach(el => {
            el.unshift(x++)
        })
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
    // carList.forEach((el)=>{
    //     if (+el.car.electro){
    //         console.log(el)
    //     }
    // })

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
                                paddingBottom: '15px',
                                order: '-3',

                            }}>
                                <div>
                                    <h3 style={{paddingLeft: 0, marginBottom: 0,}}>Статистика всех моделей</h3>
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
                                    <Form>
                                        <Form.Label
                                            className="d-flex align-items-center justify-content-between m-0 mt-0"
                                            style={{
                                                fontSize: 12,
                                                textAlign: 'end',
                                                lineHeight: '14px'
                                            }}>Электрические <br/> автомобили
                                            <Form.Check
                                                className='ps-2'
                                                type="checkbox"
                                                value={electricState}
                                                onChange={event => {
                                                    setElectricState(event.target.checked)
                                                    setLoadDateLocal(false)
                                                }
                                                }

                                            />
                                        </Form.Label>

                                    </Form>
                                </div>
                            </div>

                            {
                                loadDateLocal
                                    ?
                                    <>
                                        <div style={{order: -2}}>
                                            <TableHeadModelRow stateYear={stateYear}/>
                                        </div>
                                        <div style={{display: 'grid', gridTemplateColumns: '30px 1fr',}}>
                                            <div>
                                                {
                                                    load1 && load2 && carList[0] ?
                                                        carList.filter(item => item.value != '0').filter(item => electricState ? +item.car['electro'] : item).map((currElement, index) =>
                                                            <div style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                fontSize: '16px',
                                                                borderBottom: '1px solid rgb(102, 102, 102)',
                                                                padding: '10px 0'
                                                            }}>{index + 1}</div>
                                                        )
                                                        : false

                                                }
                                            </div>
                                            <div className={s.table_body + ' model_body'} style={{display: 'grid'}}>
                                                {
                                                    load1 && load2 && carList[0] ?

                                                        // carList.filter(item => item.value !== '0' && item.value ).map(({car, value}) =>
                                                        carList.filter(item => electricState ? +item.car['electro']!='0' : item).filter(item => item.value != '0')
                                                            .map(({car, value}) =>
                                                                <TableBodyModelRow
                                                                    stateYear={stateYear}
                                                                    key={car.id} car={car} value={value}
                                                                    data={carsValue.filter(item => item['car_id'] === car.id)
                                                                        .filter(item => stateYear == CURRENT_YEAR_MONTH.january ? item : +item.date < 1640984400)
                                                                    }
                                                                    load={load} setLoad={setLoad}
                                                                />
                                                            )
                                                        : <Spinner animation={'grow'}/>
                                                }
                                            </div>
                                        </div>
                                        <div className={s.table_footer}>
                                            <TableFooterModelRow stateYear={stateYear} load={load}/>
                                        </div>
                                    </>
                                    :
                                    <Spinner animation={"grow"}/>
                            }


                        </div>
                    </div>
                    :
                    <Spinner animation={"grow"}/>
            }
        </>

    );
};

export default TableModel;