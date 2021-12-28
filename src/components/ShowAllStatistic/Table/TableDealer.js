import React, {useEffect, useState} from 'react';
import s from "./TableDealer.module.css";
import {
    getAllStatisticDealers,
    getAllStatisticDealersValue,
} from "../../../http/brandAPI";
import {Button, Spinner} from "react-bootstrap";
import TableHeadDealerRow from "./components/dealer/TableHeadDealerRow";
import TableBodyDealerRow from "./components/dealer/TableBodyDealerRow";


const TableDealer = ({setLoadDataDone}) => {
    const [dealerList, setDealerList] = useState([])
    const [carsValue, setCarsValue] = useState([])

    useEffect(() => {
        getAllStatisticDealers().then(data => {
            let addBrand =data.data.data.map((el)=>({...el,brand: data.data.included.brands.find((b)=>el.brand_id === b.id)}))
            let result = addBrand.map((el)=>({...el,dealer: data.data.included.dealers.find((d)=>el.dealer_id === d.id)}))

                setDealerList(result)

        })
    }, [])
    useEffect(() => {
        getAllStatisticDealersValue().then(data => {
            let array = []
            for (let dataKey in data.data.data) {
                data.data.data[dataKey].forEach(el => {
                    array.push({
                        'date': dataKey,
                        'value': el.value,
                        'dealer_id': el['dealer_id'],
                        'brand_id': el['brand_id']
                    })
                })
            }
            setCarsValue(array)
            setLoadDataDone(true)
        })
    }, [])

    const download = () => {

        let objArray = [
            ['Дилер', 'Бренд', 'янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.', 'ИТОГО', ' ', ' '],

        ]
        dealerList.forEach(el => {
            objArray.push([el.dealer.name, el.brand.name, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', el.brand.id, el.dealer.id])
            let totalSum = 0
            carsValue.filter(item => item.brand_id === el.brand.id && item.dealer_id === el.dealer.id).forEach(el2 => {

                let numberMonth = new Date(+el2.date * 1000).toLocaleDateString('en', {month: 'numeric'})

                // console.log(objArray[0][numberMonth+1])
                totalSum += +el2.value
                objArray.forEach(el3 => {
                    if (el3.indexOf(el2.brand_id) !== -1 && el3.indexOf(el2.dealer_id) !== -1) {
                        el3[+numberMonth + 1] = el2.value
                        el3[14] = +totalSum
                    }
                })
            })
        })
        objArray.sort(function (a, b) {
            return b[14] - a[14]
        })
        let sortObjArray = []
        objArray.forEach(el => {
            sortObjArray.push(el.slice(0, el.length - 2))
        })

        let array = typeof sortObjArray != 'object' ? JSON.parse(sortObjArray) : sortObjArray;
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
        a.setAttribute('download', 'dealer.csv');
        window.document.body.appendChild(a);
        a.click();
    }

    return (
        <>
            {
                dealerList[0] ?
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
                                <h3 style={{paddingLeft: 0 ,marginBottom:0,}}>Полная статистика
                                    дилеров</h3>
                                <Button variant={"outline-light"} onClick={download}>Скачать стастистику</Button>
                            </div>

                            <TableHeadDealerRow/>
                            <div className={s.table_body} style={{display: 'grid'}}>
                                {
                                    dealerList ? dealerList.map((({dealer, brand}) =>
                                            <TableBodyDealerRow key={Math.random()} dealer={dealer} brand={brand}
                                                                car={'car'}
                                                                data={carsValue.filter(item => item['dealer_id'] === dealer.id && item['brand_id'] === brand.id)}/>
                                    )) : <Spinner animation={"grow"}/>
                                }

                            </div>
                            {/*<div className={s.table_footer}>*/}
                            {/*    <TableFooterModelRow />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    :
                    <Spinner animation={"grow"}/>
            }
        </>

    );
};

export default TableDealer;