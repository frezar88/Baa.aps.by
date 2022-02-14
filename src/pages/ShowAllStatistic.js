import React, {useEffect, useState} from 'react';
import {Container, Form, Spinner, Tab, Tabs} from "react-bootstrap";
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
import {getCarSubType, num_of_days_to_send_stat} from "../http/brandAPI";
import s from './ShowAllStatistic.module.css'
import Graph from "../components/ShowAllStatistic/Graph/Graph";



const ShowAllStatistic = () => {


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
                                        <Graph setLoadDataDone={setLoadDataDone} /> : false}
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