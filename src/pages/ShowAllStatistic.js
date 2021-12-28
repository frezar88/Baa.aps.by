import React, {useEffect, useState} from 'react';
import {Container, Form, Spinner, Tab, Tabs} from "react-bootstrap";
import TableBrand from "../components/ShowAllStatistic/Table/TableBrand";
import TableModel from "../components/ShowAllStatistic/Table/TableModel";
import BrandBar from "../components/ChartGraphics/BrandBar";
import ModelPie from "../components/ChartGraphics/ModelPie";
import TablePc from "../components/ShowAllStatistic/Table/TablePC";
import TableLCV from "../components/ShowAllStatistic/Table/TableLCV";
import TableDealer from "../components/ShowAllStatistic/Table/TableDealer";
import LcvBar from "../components/ChartGraphics/LcvBar";
import PcBar from "../components/ChartGraphics/PcBar";
import TableMarketShareAll from "../components/ShowAllStatistic/Table/TableMarketShareAll";
import TablePcMarketShare from "../components/ShowAllStatistic/Table/TablePcMarketShare";
import CompareBlock from "../components/ShowAllStatistic/Compare/CompareBlock";
import TableLCVMarketShare from "../components/ShowAllStatistic/Table/TableLVCMarketShare";

import PopUpStatistic from "../components/setStatistic/PopUpSatistic";
import {getCarSubType, num_of_days_to_send_stat} from "../http/brandAPI";

import s from './ShowAllStatistic.module.css'
import Graph from "../components/ShowAllStatistic/Graph/Graph";
//
//
// const ShowAllStatistic = () => {
//     const [month, setMonth] = useState(1)
//     const [year, setYear] = useState()
//     const [from, setFrom] = useState(startedYearForLoadComponent())
//     const [to, setTo] = useState(Math.round(new Date() / 1000))
//     const [modalShow, setModalShow] = useState(true)
//     const [dayToSend,setDayToSend]=useState({day:0,time:'00:00'})
//
//
//     function startedYearForLoadComponent() {
//         let date = new Date();
//         let y = date.getFullYear();
//         let m = date.getMonth() + 1;
//         let previousDayMonth = new Date(y, m - 2, 1);
//         return Math.round(new Date(previousDayMonth) / 1000)
//     }
//
//
//     const monthArray = [
//         {id: 1, name: 'Январь', code: '1609448400'},
//         {id: 2, name: 'Февраль', code: '1612126800'},
//         {id: 3, name: 'Март', code: '1614546000'},
//         {id: 4, name: 'Апрель', code: '1617224400'},
//         {id: 5, name: 'Май', code: '1619816400'},
//         {id: 6, name: 'Июнь', code: '1622494800'},
//         {id: 7, name: 'Июль', code: '1625086800'},
//         {id: 8, name: 'Август', code: '1627765200'},
//         {id: 9, name: 'Сентябрь', code: '1630443600'},
//         {id: 10, name: 'Октябрь', code: '1633035600'},
//         {id: 11, name: 'Ноябрь', code: '1635714000'},
//         {id: 12, name: 'Декабрь', code: '1638306000'}
//     ]
//     useEffect(() => {
//         let startDate = '';
//         let codeDateLastDay = '';
//         if (month) {
//             let date = new Date(`${month + ' 1 ' + year}`);
//             let y = date.getFullYear();
//             let m = date.getMonth() + 1;
//             let firstDayNextMonth = new Date(y, m, 1);
//             let stringDate = firstDayNextMonth.toLocaleString('en', {
//                 year: '2-digit',
//                 month: 'numeric',
//                 day: 'numeric'
//             }).replaceAll('/', ' ')
//             codeDateLastDay = Math.round(new Date(stringDate) / 1000)
//             startDate = Math.round(new Date(`${month + ' 1 ' + year}`) / 1000)
//         }
//         setFrom(+startDate)
//         setTo(+codeDateLastDay)
//
//
//     }, [month, year])
//
//     return (
//         <>
//             {
//                 new Date().getDate() < dayToSend['day'] || (new Date().getDate() === dayToSend['day'] && (new Date().getHours() < +dayToSend['splitTime'][0] || +dayToSend['splitTime'][0] === new Date().getHours()
//                     && new Date().getMinutes() < +dayToSend['splitTime'][1]))
//                     ?
//                         <PopUpStatistic show={modalShow} day={dayToSend} onHide={() => setModalShow(false)}/>
//                     : false
//             }
//             <div
//                 className='d-flex flex-column overflow-hidden'
//                 style={{zIndex: '22', minHeight: 'calc(100vh - 70px)', background: 'rgb(8 8 8 / 20%)'}}>
//
//                 <div style={{marginTop: '3%'}}>
//                     <Container
//
//                         style={{
//                             color: '#fff',
//                             backgroundColor: 'rgb(8 8 8 / 80%)',
//                             marginTop: '222', minHeight: 500,
//                             borderRadius: 10, padding: '10px 25px',
//                             marginBottom: '100px'
//                         }}>
//                         <Tabs
//                             defaultActiveKey="brand"
//                             transition={true}
//                             id="tabs"
//                             className="mb-3"
//                         >
//                             <Tab eventKey="brand" title="Бренды">
//                                 <TableBrand/>
//                             </Tab>
//                             <Tab eventKey="model" title="Модели">
//                                 <Tabs
//                                     defaultActiveKey="all"
//                                     transition={true}
//                                     id="tabsModel"
//                                     className="mb-2"
//                                 >
//                                     <Tab eventKey="all" title="Все">
//                                         {/*<TableModel/>*/}
//                                     </Tab>
//                                     <Tab eventKey="PC" title="PC">
//                                         <TablePc/>
//                                     </Tab>
//                                     <Tab eventKey="LCV" title="LCV">
//                                         <TableLCV/>
//                                     </Tab>
//                                 </Tabs>
//                             </Tab>
//                             <Tab eventKey="dealer" title="Дилеры">
//                                 <TableDealer/>
//                             </Tab>
//                             <Tab eventKey="market_share" title="Доля рынка">
//                                 <Tabs
//                                     defaultActiveKey="all"
//                                     transition={true}
//                                     id="tabsModel"
//                                     className="mb-2"
//                                 >
//                                     <Tab eventKey="all" title="Все">
//                                         <TableMarketShareAll/>
//                                     </Tab>
//                                     <Tab eventKey="PC" title="PC">
//                                         <TablePcMarketShare/>
//                                     </Tab>
//                                     <Tab eventKey="LCV" title="LCV">
//                                         <TableLCVMarketShare/>
//                                     </Tab>
//                                 </Tabs>
//                             </Tab>
//
//                             <Tab eventKey="graphics" title="Графики">
//                                 <div>
//                                     <div>
//                                         <div className='d-flex  justify-content-end '>
//                                             <div style={{width: '30%'}}>
//                                                 <Form.Label style={{
//                                                     fontWeight: 600,
//                                                     fontSize: 16,
//                                                     display: "flex",
//                                                     alignItems: 'center',
//                                                     flexBasis: '100%',
//                                                     justifyContent: 'flex-end'
//                                                 }}>
//                                                     Выберите год
//                                                     <Form.Select
//                                                         style={{
//                                                             boxSizing: "border-box",
//                                                             maxWidth: 200,
//                                                             padding: '.05rem .25rem .10rem .75rem',
//                                                             marginLeft: '10px'
//                                                         }}
//                                                         // value={year}
//                                                         defaultValue={'DEFAULT'}
//                                                         className={'select_mouth'}
//                                                         onInput={(e) => {
//                                                             setYear(e.target.value)
//                                                         }}
//                                                     >
//                                                         <option disabled={true} value={'DEFAULT'}>Выберите Год</option>
//                                                         <option value={'2021'}>2021</option>
//                                                         <option value={'2020'}>2020</option>
//                                                         <option value={'2019'}>2019</option>
//
//                                                     </Form.Select>
//                                                 </Form.Label>
//                                                 <Form.Label style={{
//                                                     fontWeight: 600,
//                                                     fontSize: 16,
//                                                     display: "flex",
//                                                     alignItems: 'center',
//                                                     flexBasis: '100%',
//                                                     justifyContent: 'flex-end'
//                                                 }}>
//                                                     Выберите месяц
//                                                     <Form.Select
//                                                         style={{
//                                                             boxSizing: "border-box",
//                                                             maxWidth: 200,
//                                                             padding: '.05rem .25rem .10rem .75rem',
//                                                             marginLeft: '10px'
//                                                         }}
//                                                         // value={month}
//                                                         defaultValue={'DEFAULT'}
//                                                         className={'select_mouth'}
//                                                         onInput={(e) => {
//                                                             setMonth(e.target.value)
//                                                         }}
//                                                     >
//                                                         <option disabled={true} value={'DEFAULT'}>Выберите месяц
//                                                         </option>
//                                                         {
//                                                             monthArray[0] ? monthArray.map(((
//                                                                         {
//                                                                             id,
//                                                                             name,
//                                                                             code
//                                                                         }
//                                                                     ) =>
//                                                                         <option key={id} value={id}>{name}</option>
//                                                                 ))
//                                                                 :
//                                                                 false
//                                                         }
//                                                     </Form.Select>
//                                                 </Form.Label>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div style={{
//                                         display: 'grid',
//                                         gridTemplateColumns: '1fr',
//                                         gridGap: 20,
//                                         overflow: 'auto'
//                                     }}>
//                                         <BrandBar from={from} to={to}/>
//                                         <ModelPie from={from} to={to}/>
//                                         <LcvBar from={from} to={to}/>
//                                         <PcBar from={from} to={to}/>
//                                     </div>
//                                 </div>
//                             </Tab>
//                             <Tab eventKey="Compare" title="Сравнить брены">
//                                 <h4 style={{fontSize: '1.75rem', borderBottom: '1px solid grey'}}
//                                     className='p-3'>Сравнение
//                                     брендов</h4>
//                                 <CompareBlock/>
//                             </Tab>
//                         </Tabs>
//
//                     </Container>
//                 </div>
//             </div>
//
//         </>
//
//     );
// };
//
// export default ShowAllStatistic;


const ShowAllStatistic = () => {
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState()
    const [from, setFrom] = useState(startedYearForLoadComponent())
    const [to, setTo] = useState(Math.round(new Date() / 1000))
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

    function startedYearForLoadComponent() {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let previousDayMonth = new Date(y, m - 2, 1);
        return Math.round(new Date(previousDayMonth) / 1000)
    }

    useEffect(() => {
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


    const monthArray = [
        {id: 1, name: 'Январь', code: '1609448400'},
        {id: 2, name: 'Февраль', code: '1612126800'},
        {id: 3, name: 'Март', code: '1614546000'},
        {id: 4, name: 'Апрель', code: '1617224400'},
        {id: 5, name: 'Май', code: '1619816400'},
        {id: 6, name: 'Июнь', code: '1622494800'},
        {id: 7, name: 'Июль', code: '1625086800'},
        {id: 8, name: 'Август', code: '1627765200'},
        {id: 9, name: 'Сентябрь', code: '1630443600'},
        {id: 10, name: 'Октябрь', code: '1633035600'},
        {id: 11, name: 'Ноябрь', code: '1635714000'},
        {id: 12, name: 'Декабрь', code: '1638306000'}
    ]
    useEffect(() => {
        let startDate = '';
        let codeDateLastDay = '';
        if (month) {
            let date = new Date(`${month + ' 1 ' + year}`);
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            let firstDayNextMonth = new Date(y, m, 1);
            let stringDate = firstDayNextMonth.toLocaleString('en', {
                year: '2-digit',
                month: 'numeric',
                day: 'numeric'
            }).replaceAll('/', ' ')
            codeDateLastDay = Math.round(new Date(stringDate) / 1000)
            startDate = Math.round(new Date(`${month + ' 1 ' + year}`) / 1000)
        }
        setFrom(+startDate)
        setTo(+codeDateLastDay)


    }, [month, year])

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
                                        <Graph setLoadDataDone={setLoadDataDone} from={from} setMonth={setMonth}
                                               monthArray={monthArray} setYear={setYear} to={to}/> : false}
                                    {navBar.main === 'Compare' ?
                                        <CompareBlock setLoadDataDone={setLoadDataDone}/> : false}


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