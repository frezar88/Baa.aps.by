import React, {useContext, useEffect, useState} from 'react';
import s from "./TablePc.module.css";
import {getAllStatisticModel, getAllStatisticModelValue} from "../../../http/brandAPI";
import {Button, Spinner} from "react-bootstrap";
import TableBodyLCVRow from "./components/LCV/TableBodyLCVRow";
import TableHeadLCVRow from "./components/LCV/TableHeadLCVRow";
import TableFooterLCVRow from "./components/LCV/TableFooterLCVRow";
import {Context} from "../../../index";


const TableLCV = ({setLoadDataDone,allSubTypeCar,loadInputSelectSubType,setLoadInputSelectSubType,selectSubType,setUniqSubType}) => {
    const {brandModel} = useContext(Context)
    const [carList, setCarList] = useState([])
    const [carsValue, setCarsValue] = useState([])
    const [load1, setLoad1] = useState(false)
    const [load2, setLoad2] = useState(false)
    const [load, setLoad] = useState(false)
    useEffect(() => {
        getAllStatisticModel().then(data => {
            let uniqSubArr=[]
            let cars = data.data.included.cars.map((c) => ({...c,model: data.data.included.models.find((m) => c['model_id'] === m.id)}))
            let result = data.data.data.map((el) => ({...el, car: cars.find((c) => c.id === el.car_id)}))

            let filterResult=result.filter(item => +item.car['car_type_id'] === 2)

            for (let filterKey in filterResult) {
                let valueSubTypeId=filterResult[filterKey].car['car_subtype_id']

                if (uniqSubArr.indexOf(valueSubTypeId) === -1){
                    uniqSubArr.push(valueSubTypeId)
                }
            }

            let sortUniqSubIdArr = uniqSubArr.sort((a,b)=>+a-+b).filter(item=>item)
            let giveNameToType = sortUniqSubIdArr.map((el)=>({id:el,name:allSubTypeCar.find((s)=>+s.id === +el).name}))
            setUniqSubType(giveNameToType)
            setCarList(result.filter(item => +item.car['car_type_id'] === 2).filter(item=> selectSubType? +item.car['car_subtype_id'] === +selectSubType : item))
            setLoad1(true)
            setLoadInputSelectSubType(true)
        })
    }, [selectSubType])

    useEffect(() => {
        getAllStatisticModelValue().then(data => {

            let array = []
            for (let dataKey in data.data.data) {
                data.data.data[dataKey].forEach(el => {
                    array.push({
                        'date': dataKey,
                        'value': el.value,
                        'car_id': el['car_id']
                    })
                })
            }
            setCarsValue(array)
            setLoad2(true)
            setLoadDataDone(true)
        })
    }, [])

    const typef = (car) => {
        console.log(car)
        if (+car === 1) {
            return 'PC'
        }else if(+car === 2){
            return 'LCV'
        }else{
            return 'MCV'
        }
    }

    const download = () => {

        let objArray = [
            ['Тип', 'Бренд', 'Модель', 'янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.', 'ИТОГО',' '],

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
        a.setAttribute('download', 'ModelLCV.csv');
        window.document.body.appendChild(a);
        a.click();
    }

    return (
        <>
            {
                load1 && load2 && loadInputSelectSubType ?
                <div style={{marginTop: 15, paddingBottom: 20}}>
                    <div className={s.table}>
                        <div style={{
                            borderBottom: 'solid 1px grey',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            alignItem:'center',
                            paddingBottom:'15px'
                        }}>
                            <h3 style={{paddingLeft: 0 ,marginBottom:0,}}>Статистика LCV моделей</h3>
                            <Button variant={"outline-light"} onClick={download}>Скачать стастистику</Button>
                        </div>
                        <TableHeadLCVRow/>
                        <div className={s.table_body + ' lcv_body'} style={{display: 'grid'}}>
                            {
                                load1 && load2 ?
                                    carList ? carList.map(({car})=>
                                            <TableBodyLCVRow
                                                key={car.id} car={car}
                                                data={carsValue.filter(item => item['car_id'] === car.id)}
                                                load={load} setLoad={setLoad}
                                            />
                                    ) : <Spinner animation={'grow'}/>
                                    : <Spinner animation={'grow'}/>
                            }
                        </div>
                        <div className={s.table_footer}>
                            <TableFooterLCVRow load={load}/>
                        </div>
                    </div>
                </div>
                    :
                    <Spinner animation={"grow"}/>

            }
        </>

    );
};

export default TableLCV;