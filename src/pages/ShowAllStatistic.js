import React, {useEffect, useState} from 'react';
import {Container, Form, Spinner} from "react-bootstrap";
import TableBrand from "../components/ShowAllStatistic/Table/TableBrand";
import TableModel from "../components/ShowAllStatistic/Table/TableModel";
import TablePc from "../components/ShowAllStatistic/Table/TablePC";
import TableLCV from "../components/ShowAllStatistic/Table/TableLCV";
import TableDealer from "../components/ShowAllStatistic/Table/TableDealer";
import TableMarketShareAll from "../components/ShowAllStatistic/Table/TableMarketShareAll";
import TablePcMarketShare from "../components/ShowAllStatistic/Table/TablePcMarketShare";
import CompareBlock from "../components/ShowAllStatistic/Compare/CompareBlock";
import TableLCVMarketShare from "../components/ShowAllStatistic/Table/TableLVCMarketShare";
import PopUpStatistic from "../components/setStatistic/PopUpSatistic";
import {
    getAllStatistic,
    getAllStatisticLcv,
    getAllStatisticModelValue,
    getAllStatisticPc,
    getCarSubType,
    num_of_days_to_send_stat
} from "../http/brandAPI";
import s from './ShowAllStatistic.module.css'
import Graph from "../components/ShowAllStatistic/Graph/Graph";
import TableStatisticalAnalysis from "../components/ShowAllStatistic/Table/TableStatisticalAnalysis";
import {MONTH_OBJECT, PREVIOUS_YEAR_MONTH} from "../utils/consts";


const ShowAllStatistic = () => {

    const [carsDataAnalysis, setCarsDataAnalysis] = useState({allTime: '', month: ''})
    const [carsDataAnalysisLCV, setCarsDataAnalysisLCV] = useState({allTime: '', month: ''})
    const [carsDataAnalysisPC, setCarsDataAnalysisPC] = useState({allTime: '', month: ''})
    const [modelsDataAnalysis, setModelsCarsDataAnalysis] = useState({allTime: '', month: ''})
    const [modelsPCDataAnalysis, setModelsPCCarsDataAnalysis] = useState({allTime: '', month: ''})
    const [modelsLCVDataAnalysis, setModelsLCVCarsDataAnalysis] = useState({allTime: '', month: ''})

    const [monthState, setMonthState] = useState()


    const [modalShow, setModalShow] = useState(true)
    const [dayToSend, setDayToSend] = useState({day: 0, time: '00:00'})
    const [navBar, setNavBar] = useState({main: 'brand', second: 'ALL'})
    const [loadDataDone, setLoadDataDone] = useState(true)

    const [uniqSubType, setUniqSubType] = useState([])

    const [allSubTypeCar, setAllSubTypeCar] = useState([])

    const [selectSubType, setSelectSubType] = useState()

    const [stateBrand, setStateBrand] = useState([])
    const [stateModelAll, setStateModelAll] = useState({carList: '', carsValue: ''})
    const [stateModelPC, setStateModelPC] = useState({carList: '', carsValue: ''})

    const [loadInputSelectSubType, setLoadInputSelectSubType] = useState(true)

    const [toDayStat, setToDatStat] = useState()


    useEffect(() => {
        let lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth());

        let date = Math.round(new Date(`${lastMonth.getMonth()}.01.22`) / 1000)
        setToDatStat(date)

        num_of_days_to_send_stat().then(data => {
            setDayToSend({
                day: data.data['num_of_days_to_send_stat'],
                time: data.data['time_to_send_stat'],
                splitTime: data.data['time_to_send_stat'].split(':')
            })
        })
        getCarSubType().then(data => {
            setAllSubTypeCar(data.data.data)
        })
    }, [])


    const clickToNavBarMain = (e) => {
        setLoadDataDone(true)
        if (loadDataDone) {
            if (e.target.attributes['data-type'] || e.target.attributes['data-type-second']) {
                setSelectSubType('')
                setLoadDataDone(false)
                let items = e.currentTarget.querySelectorAll(`.${s.item}`)
                let main = e.target.attributes['data-type']
                let second = e.target.attributes['data-type-second']
                items.forEach(el => {
                    el.className = s.item
                })
                e.target.className = s.item + ' ' + s.active
                let clone = Object.assign({}, navBar)
                if (main) {
                    clone.main = main.value

                    setNavBar(clone)
                }
                if (second) {
                    clone.second = second.value
                    setNavBar(clone)
                }
            }
        }
    }

    function collectDataToAnalysisToYear(data, setState) {
        let arrData = []
        let newDate = {...data.data.data}
        for (let key in newDate) {
            newDate[key].map((el) => {
                el.brand = data.data.included.brands.find((b) => el['brand_id'] === b.id).name
                el.date = key

            })
            newDate[key].forEach((el2) => {
                arrData.push(el2)
            })
        }
        let objData = {total: {'2022': 0, '2021': 0, 'yoy': 0}, data: []}
        data.data.included.brands.forEach((el) => {
            objData.data.push({brand_id: el.id, brand: el.name, inter: '', '2022': 0, '2021': 0, 'yoy': 0})
        })
        let arrDateTo2022 = arrData.filter((item) => item.date >= 1640984400 && item.date <= 1669842000)
        let arrDateTo2021 = arrData.filter((item) => item.date >= 1609448400 && item.date <= 1638306000)
        objData.data.forEach((el) => {
            arrDateTo2022.forEach((el2) => {
                if (el.brand === el2.brand) {
                    el['2022'] = +el['2022'] + +el2.value
                    objData.total["2022"] = +objData.total["2022"] + +el2.value
                }
            })
            arrDateTo2021.forEach((el2) => {
                if (el.brand === el2.brand) {
                    el['2021'] = +el['2021'] + +el2.value
                    objData.total["2021"] = +objData.total["2021"] + +el2.value
                }
            })
            if (el['2021']) {
                if (+el['2022'] <= +el['2021']) {
                    el.yoy = Math.round((el['2022'] - el['2021']) / el['2021'] * 100) + '%'
                }
                if (+el['2022'] >= +el['2021']) {
                    el.yoy = Math.round((+el['2022'] / +el['2021'] * 100) - 100) + '%'
                }
            } else {
                el.yoy = '-'
            }
        })

        objData.data.forEach((el, index) => {
            el.inter = String((+el['2022'] / +objData.total["2022"]) * 100).slice(0, 4)
        })
        if (+objData.total["2022"] < +objData.total["2021"]) {
            objData.total.yoy = String((objData.total["2022"] - objData.total["2021"]) / objData.total["2021"] * 100).slice(0, 4)
        }
        if (+objData.total["2022"] > +objData.total["2021"]) {
            objData.total.yoy = Math.round((+objData.total["2022"] / +objData.total["2021"] * 100) - 100)
        }
        //////-----------------------------------------------------------------///////
        let arrDataMonth1 = []
        let newDate1 = {...data.data.data}
        for (let key in newDate1) {
            newDate1[key].map((el) => {
                el.brand = data.data.included.brands.find((b) => el['brand_id'] === b.id).name
                el.date = key

            })
            newDate1[key].forEach((el2) => {
                arrDataMonth1.push(el2)
            })
        }
        let objData1 = {total: {'2022': 0, '2021': 0, 'yoy': 0}, data: [],}
        data.data.included.brands.forEach((el) => {
            objData1.data.push({brand_id: el.id, brand: el.name, inter: '', '2022': 0, '2021': 0, 'yoy': 0})
        })

        let lastMonth1 = new Date();
        lastMonth1.setMonth(lastMonth1.getMonth());
        let date = Math.round(new Date(`${lastMonth1.getMonth()}.01.22`) / 1000)

        let arrCurrentMonth = []
        let arrPrevMonth = []
        if (!monthState) {
            arrCurrentMonth = arrDataMonth1.filter((item) => item.date === date)
            arrPrevMonth = arrDataMonth1.filter((item) => +item.date === +MONTH_OBJECT[date])
        } else {
            arrCurrentMonth = arrDataMonth1.filter((item) => item.date === monthState)
            arrPrevMonth = arrDataMonth1.filter((item) => +item.date === +MONTH_OBJECT[monthState])
        }

        objData1.data.forEach((el) => {
            arrCurrentMonth.forEach((el2) => {
                if (el.brand === el2.brand) {
                    el['2022'] = +el['2022'] + +el2.value
                    objData1.total["2022"] = +objData1.total["2022"] + +el2.value
                }
            })
            arrPrevMonth.forEach((el2) => {
                if (el.brand === el2.brand) {
                    el['2021'] = +el['2021'] + +el2.value
                    objData1.total["2021"] = +objData1.total["2021"] + +el2.value
                }
            })
            if (el['2021']) {
                if (+el['2022'] <= +el['2021']) {
                    el.yoy = Math.round((el['2022'] - el['2021']) / el['2021'] * 100) + '%'
                }
                if (+el['2022'] >= +el['2021']) {
                    el.yoy = Math.round((+el['2022'] / +el['2021'] * 100) - 100) + '%'
                }
            } else {
                el.yoy = '-'
            }
        })
        objData1.data.forEach((el, index) => {
            if (+el['2022']) {
                el.inter = String((+el['2022'] / +objData1.total["2022"]) * 100).slice(0, 4)
            } else {
                el.inter = 0
            }

        })
        if (+objData1.total["2022"] < +objData1.total["2021"]) {
            objData1.total.yoy = String((objData1.total["2022"] - objData1.total["2021"]) / objData1.total["2021"] * 100).slice(0, 4)
        }
        if (+objData1.total["2022"] > +objData1.total["2021"]) {
            objData1.total.yoy = Math.round((+objData1.total["2022"] / +objData1.total["2021"] * 100) - 100)
        }

        setState({allTime: objData, month: objData1})
    }

    function collectDataToAnalysisToModel(data, setState,filter) {
        let arrData2 = []
        let newDate2 = {...data.data.data}

        for (let key in newDate2) {
            newDate2[key].map((el) => {
                el.car = data.data.included.cars.find((b) => el['car_id'] === b.id)
                el.date = key
            })
            newDate2[key].forEach((el2) => {
                arrData2.push(el2)
            })
        }
        arrData2.map((el) => {
            el.model = data.data.included.models.find((m) => el.car['model_id'] === m.id)
        })
        arrData2.map((el) => {
            el.brand = data.data.included.brands.find((b) => el.model['brand_id'] === b.id)
        })

        let objData2 = {total: {'2022': 0, '2021': 0, 'yoy': 0}, data: [],}
        data.data.included.cars.forEach((el) => {
            objData2.data.push({
                car_id: el.id,
                brand_id: '',
                model_id: el.model_id,
                model_name: '',
                brand: '',
                car_name: el.name,
                car_type: el['car_type_id'],
                car_sub_type: el['car_subtype_id'],
                inter: '',
                '2022': 0,
                '2021': 0,
                'yoy': 0
            })
        })
        objData2.data.map((el) => {
            el.model_name = data.data.included.models.find((m) => el['model_id'] === m.id).name
            el.brand_id = data.data.included.models.find((m) => el['model_id'] === m.id).brand_id
            el.brand = data.data.included.brands.find((b) => el['brand_id'] === b.id).name
        })

        let arrDateTo2022 = arrData2.filter((item) => item.date >= 1640984400 && item.date <= 1669842000)
        let arrDateTo2021 = arrData2.filter((item) => item.date >= 1609448400 && item.date <= 1638306000)

        objData2.data.forEach((el) => {
            arrDateTo2022.forEach((el2) => {
                if (el.car_id === el2.car_id) {
                    el['2022'] = +el['2022'] + +el2.value
                    if (!filter){
                        objData2.total["2022"] = +objData2.total["2022"] + +el2.value
                    }else{
                        if (el.car_type == filter){
                            objData2.total["2022"] = +objData2.total["2022"] + +el2.value
                        }
                    }

                }
            })
            arrDateTo2021.forEach((el2) => {
                if (el.car_id === el2.car_id) {
                    el['2021'] = +el['2021'] + +el2.value
                    if (!filter) {
                        objData2.total["2021"] = +objData2.total["2021"] + +el2.value
                    }else{
                        if (el.car_type == filter){
                            objData2.total["2021"] = +objData2.total["2021"] + +el2.value
                        }
                    }
                }
            })
            if (el['2021']) {
                if (+el['2022'] <= +el['2021']) {
                    el.yoy = Math.round((el['2022'] - el['2021']) / el['2021'] * 100) + '%'
                }
                if (+el['2022'] >= +el['2021']) {
                    el.yoy = Math.round((+el['2022'] / +el['2021'] * 100) - 100) + '%'
                }
            } else {
                el.yoy = '-'
            }
        })


        objData2.data.forEach((el, index) => {
            el.inter = String((+el['2022'] / +objData2.total["2022"]) * 100).slice(0, 4)
        })
        if (+objData2.total["2022"] < +objData2.total["2021"]) {
            objData2.total.yoy = String((objData2.total["2022"] - objData2.total["2021"]) / objData2.total["2021"] * 100).slice(0, 4)
        }
        if (+objData2.total["2022"] > +objData2.total["2021"]) {
            objData2.total.yoy = Math.round((+objData2.total["2022"] / +objData2.total["2021"] * 100) - 100)
        }

        ///---------------------------------------------------------------------///////
        let arrData3 = []
        let newDate3 = {...data.data.data}

        for (let key in newDate3) {
            newDate3[key].map((el) => {
                el.car = data.data.included.cars.find((b) => el['car_id'] === b.id)
                el.date = key
            })
            newDate3[key].forEach((el2) => {
                arrData3.push(el2)
            })
        }
        arrData3.map((el) => {
            el.model = data.data.included.models.find((m) => el.car['model_id'] === m.id)
        })
        arrData3.map((el) => {
            el.brand = data.data.included.brands.find((b) => el.model['brand_id'] === b.id)
        })

        let objData3 = {total: {'2022': 0, '2021': 0, 'yoy': 0}, data: [],}
        data.data.included.cars.forEach((el) => {
            objData3.data.push({
                car_id: el.id,
                brand_id: '',
                model_id: el.model_id,
                model_name: '',
                brand: '',
                car_name: el.name,
                car_type: el['car_type_id'],
                car_sub_type: el['car_subtype_id'],
                inter: '',
                '2022': 0,
                '2021': 0,
                'yoy': 0
            })
        })
        objData3.data.map((el) => {
            el.model_name = data.data.included.models.find((m) => el['model_id'] === m.id).name
            el.brand_id = data.data.included.models.find((m) => el['model_id'] === m.id).brand_id
            el.brand = data.data.included.brands.find((b) => el['brand_id'] === b.id).name
        })

        let lastMonth1 = new Date();
        lastMonth1.setMonth(lastMonth1.getMonth());
        let date = Math.round(new Date(`${lastMonth1.getMonth()}.01.22`) / 1000)

        let arrCurrentMonth = []
        let arrPrevMonth = []
        if (!monthState) {
            arrCurrentMonth = arrData3.filter((item) => item.date === date)
            arrPrevMonth = arrData3.filter((item) => +item.date === +MONTH_OBJECT[date])
        } else {
            arrCurrentMonth = arrData3.filter((item) => item.date === monthState)
            arrPrevMonth = arrData3.filter((item) => +item.date === +MONTH_OBJECT[monthState])
        }

        objData3.data.forEach((el) => {
            arrCurrentMonth.forEach((el2) => {
                if (el.car_id === el2.car_id) {
                    el['2022'] = +el['2022'] + +el2.value
                    if (!filter) {
                        objData3.total["2022"] = +objData3.total["2022"] + +el2.value
                    }else{
                        if (el.car_type == filter){
                            objData3.total["2022"] = +objData3.total["2022"] + +el2.value
                        }
                    }

                }
            })
            arrPrevMonth.forEach((el2) => {
                if (el.car_id === el2.car_id) {
                    el['2021'] = +el['2021'] + +el2.value
                    if (!filter) {
                        objData3.total["2021"] = +objData3.total["2021"] + +el2.value
                    }else{
                        if (el.car_type == filter){
                            objData3.total["2021"] = +objData3.total["2021"] + +el2.value
                        }
                    }
                }
            })
            if (el['2021']) {
                if (+el['2022'] <= +el['2021']) {
                    el.yoy = Math.round((el['2022'] - el['2021']) / el['2021'] * 100) + '%'
                }
                if (+el['2022'] >= +el['2021']) {
                    el.yoy = Math.round((+el['2022'] / +el['2021'] * 100) - 100) + '%'
                }
            } else {
                el.yoy = '-'
            }
        })

        objData3.data.forEach((el, index) => {
            if (+el['2022']) {
                el.inter = String((+el['2022'] / +objData3.total["2022"]) * 100).slice(0, 4)
            } else {
                el.inter = 0
            }

        })
        if (+objData3.total["2022"] < +objData3.total["2021"]) {
            objData3.total.yoy = String((objData3.total["2022"] - objData3.total["2021"]) / objData3.total["2021"] * 100).slice(0, 4)
        }
        if (+objData3.total["2022"] > +objData3.total["2021"]) {
            objData3.total.yoy = Math.round((+objData3.total["2022"] / +objData3.total["2021"] * 100) - 100)
        }

        setState({allTime: objData2, month: objData3})
    }

    useEffect(() => {
        getAllStatistic(PREVIOUS_YEAR_MONTH.january).then((data) => {
            collectDataToAnalysisToYear(data, setCarsDataAnalysis)
        })
        getAllStatisticLcv(PREVIOUS_YEAR_MONTH.january).then((data) => {
            collectDataToAnalysisToYear(data, setCarsDataAnalysisLCV)
        })
        getAllStatisticPc(PREVIOUS_YEAR_MONTH.january).then((data) => {
            collectDataToAnalysisToYear(data, setCarsDataAnalysisPC)
        })
        getAllStatisticModelValue(PREVIOUS_YEAR_MONTH.january).then((data) => {
            collectDataToAnalysisToModel(data, setModelsCarsDataAnalysis,)
            collectDataToAnalysisToModel(data, setModelsPCCarsDataAnalysis,1)
            collectDataToAnalysisToModel(data, setModelsLCVCarsDataAnalysis,2)
        })


    }, [monthState])


    return (
        <>
            {
                allSubTypeCar[0] ?
                    <>
                        {
                            new Date().getDate() < dayToSend['day'] || (new Date().getDate() === dayToSend['day'] && (new Date().getHours() < +dayToSend['splitTime'][0] || +dayToSend['splitTime'][0] === new Date().getHours()
                                && new Date().getMinutes() < +dayToSend['splitTime'][1]))
                                ?
                                <PopUpStatistic show={modalShow} day={dayToSend} onHide={() => setModalShow(false)}/>
                                : false
                        }
                        <div className='d-flex flex-column overflow-hidden'
                            // style={{zIndex: '22', minHeight: 'calc(100vh - 70px)', background: 'rgb(8 8 8 / 20%)'}}>
                             style={{zIndex: '22', minHeight: 'calc(100vh - 70px)', background: '#fff'}}>

                            <div style={{marginTop: '3%'}}>
                                <Container
                                    style={{
                                        color: '#fff',
                                        backgroundColor: '#666666',
                                        marginTop: '222', minHeight: 500,
                                        borderRadius: 10, padding: '10px 25px',
                                        marginBottom: '100px'
                                    }}>
                                    <div className={s.nav_bar}>
                                        <ul onClick={(e) => clickToNavBarMain(e)}
                                            className={s.list}>
                                            <li data-type={'brand'} className={s.item + ' ' + s.active}>Бренд</li>
                                            <li data-type={'model'} className={s.item}>Модели</li>
                                            <li data-type={'dealer'} className={s.item}>Дилеры</li>
                                            <li data-type={'market_share'} className={s.item}>Доля рынка</li>
                                            <li data-type={'graph'} className={s.item}>Графики</li>
                                            <li data-type={'Compare'} className={s.item}>Сравнить бренды</li>
                                            <li data-type={'analysis'} className={s.item}>Статистический анализ (beta)
                                            </li>
                                        </ul>
                                        <div className={'d-flex align-items-center justify-content-between ' + s.line}
                                             style={{gridGup: '10px'}}>
                                            <ul onClick={(e) => loadDataDone ? clickToNavBarMain(e) : false}
                                                className={s.list}
                                                style={{
                                                    paddingTop: 0,
                                                    display: navBar.main === 'model' || navBar.main === 'market_share' ? 'flex' : 'none'
                                                }}>
                                                <li data-type-second={'ALL'} className={s.item + ' ' + s.active}>Все
                                                </li>
                                                <li data-type-second={'PC'} className={s.item}>PC</li>
                                                <li data-type-second={'LCV'} className={s.item}>LCV</li>

                                            </ul>
                                            {
                                                navBar.main === 'model' && (navBar.second === 'PC' && allSubTypeCar[0] || navBar.main === 'model' && navBar.second === 'LCV')
                                                    ?
                                                    <Form>
                                                        <Form.Select defaultValue={''} value={selectSubType}
                                                                     onChange={(e) => {
                                                                         setSelectSubType(e.target.value)
                                                                         setLoadInputSelectSubType(false)
                                                                     }
                                                                     }
                                                        >
                                                            <option value={''}>Все классы</option>
                                                            {
                                                                uniqSubType.map(({id, name}) =>
                                                                    <option key={id} value={id}>{name}</option>
                                                                )
                                                            }
                                                        </Form.Select>
                                                    </Form>
                                                    :
                                                    false
                                            }
                                        </div>
                                    </div>
                                    {navBar.main === 'brand' ?
                                        <TableBrand stateBrand={stateBrand} setStateBrand={setStateBrand}
                                                    setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'model' && navBar.second === 'ALL' ?
                                        <TableModel stateModelAll={stateModelAll} setStateModelAll={setStateModelAll}
                                                    setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'model' && navBar.second === 'PC' ?
                                        <TablePc
                                            uniqSubType={uniqSubType}
                                            setLoadInputSelectSubType={setLoadInputSelectSubType}
                                            loadInputSelectSubType={loadInputSelectSubType}
                                            selectSubType={selectSubType}
                                            allSubTypeCar={allSubTypeCar}
                                            setUniqSubType={setUniqSubType}
                                            stateModelPC={stateModelPC}
                                            setStateModelPC={setStateModelPC}
                                            setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'model' && navBar.second === 'LCV' ?
                                        <TableLCV
                                            setLoadInputSelectSubType={setLoadInputSelectSubType}
                                            loadInputSelectSubType={loadInputSelectSubType}
                                            selectSubType={selectSubType}
                                            allSubTypeCar={allSubTypeCar}
                                            setUniqSubType={setUniqSubType}
                                            setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'dealer' ?
                                        <TableDealer setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'market_share' && navBar.second === 'ALL' ?
                                        <TableMarketShareAll setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'market_share' && navBar.second === 'PC' ?
                                        <TablePcMarketShare setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'market_share' && navBar.second === 'LCV' ?
                                        <TableLCVMarketShare setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'graph' ?
                                        <Graph setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'Compare' ?
                                        <CompareBlock setLoadDataDone={setLoadDataDone}/> : false}
                                    {navBar.main === 'analysis' ?
                                        <TableStatisticalAnalysis
                                            dataModelPC={modelsPCDataAnalysis}
                                            dataModelLCV={modelsLCVDataAnalysis}
                                            dataModel={modelsDataAnalysis}
                                            toDayStat={toDayStat}
                                            setMonthState={setMonthState}
                                            monthState={monthState}
                                            data={carsDataAnalysis}
                                            dataLCV={carsDataAnalysisLCV}
                                            dataPC={carsDataAnalysisPC}
                                        /> : false}
                                </Container>
                            </div>
                        </div>
                    </>
                    :
                    <Spinner animation={"grow"}/>
            }


        </>
    );
};

export default ShowAllStatistic;