import React, {useEffect, useState} from 'react';
import {Container, Form, Tab, Tabs} from "react-bootstrap";
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


const ShowAllStatistic = () => {
    const [month, setMonth] = useState()

    const [from, setFrom] = useState(startedYearForLoadComponent())
    const [to, setTo] = useState(Math.round(new Date() / 1000))


    let currentDate = new Date().toLocaleString('ru', {month: "numeric"})

    function startedYearForLoadComponent() {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;

        let previousDayMonth = new Date(y, m - 2, 1);
        return Math.round(new Date(previousDayMonth) / 1000)
    }

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
            let date = new Date(`${month + ' 1 21'}`);
            let y = date.getFullYear();
            let m = date.getMonth() + 1;


            let firstDayNextMonth = new Date(y, m, 1);


            let stringDate = firstDayNextMonth.toLocaleString('en', {
                year: '2-digit',
                month: 'numeric',
                day: 'numeric'
            }).replaceAll('/', ' ')
            console.log(stringDate)
            codeDateLastDay = Math.round(new Date(stringDate) / 1000)


            startDate = Math.round(new Date(`${month + ' 1 21'}`) / 1000)

        }
        setFrom(+startDate)
        setTo(+codeDateLastDay)


    }, [month])

    return (

        <div
            className='d-flex flex-column overflow-hidden' style={{zIndex: '22', minHeight: '100vh'}}>

            <div style={{marginTop: '3%'}}>
                <Container

                    style={{
                        color: '#fff',
                        backgroundColor: 'rgb(8 8 8 / 80%)',
                        marginTop: '222', minHeight: 500,
                        borderRadius: 10, padding: '10px 25px',
                        marginBottom: '100px'
                    }}>
                    <Tabs
                        defaultActiveKey="brand"
                        transition={true}
                        id="tabs"
                        className="mb-3"
                    >

                        <Tab eventKey="brand" title="Бренды">
                            <TableBrand/>
                        </Tab>
                        <Tab eventKey="model" title="Модели">
                            <Tabs
                                defaultActiveKey="all"
                                transition={true}
                                id="tabsModel"
                                className="mb-2"
                            >
                                <Tab eventKey="all" title="Все">
                                    <TableModel/>
                                </Tab>
                                <Tab eventKey="PC" title="PC">
                                    <TablePc/>
                                </Tab>
                                <Tab eventKey="LCV" title="LCV">
                                    <TableLCV/>
                                </Tab>
                            </Tabs>
                        </Tab>
                        <Tab eventKey="dealer" title="Дилеры">
                            <TableDealer/>
                        </Tab>
                        <Tab eventKey="market_share" title="Доля рынка">
                            <Tabs
                                defaultActiveKey="all"
                                transition={true}
                                id="tabsModel"
                                className="mb-2"
                            >
                                <Tab eventKey="all" title="Все">
                                    <TableMarketShareAll/>
                                </Tab>
                                <Tab eventKey="PC" title="PC">
                                    <TablePcMarketShare/>
                                </Tab>b
                                <Tab eventKey="LCV" title="LCV">
                                    <TableLCVMarketShare/>
                                </Tab>
                            </Tabs>
                        </Tab>

                        <Tab eventKey="graphics" title="Графики">
                            <div>
                                <Tabs
                                    defaultActiveKey="year"
                                    transition={true}
                                    id="ss"
                                    className="mb-2"
                                >
                                    <Tab eventKey="year" title="За год">
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr',
                                            gridGap: 20,
                                            overflow: 'auto'
                                        }}>
                                            <BrandBar from={'1609448400'} to={'1640984400'}/>
                                            <ModelPie from={'1609448400'} to={'1640984400'}/>
                                            <LcvBar from={'1609448400'} to={'1640984400'}/>
                                            <PcBar from={'1609448400'} to={'1640984400'}/>
                                        </div>

                                    </Tab>
                                    <Tab eventKey="mouth1" title="За  месяц">
                                        <div>
                                            <div className='d-flex  justify-content-end '>
                                                <Form.Label style={{
                                                    fontWeight: 600,
                                                    fontSize: 16,
                                                    display: "flex",
                                                    alignItems: 'center',
                                                    flexBasis: '100%',
                                                    justifyContent: 'flex-end'
                                                }}>
                                                    Выберите месяц
                                                    <Form.Select
                                                        style={{
                                                            boxSizing: "border-box",
                                                            maxWidth: 200,
                                                            padding: '.05rem .25rem .10rem .75rem',
                                                            marginLeft: '10px'
                                                        }}
                                                        value={month}
                                                        defaultValue={'DEFAULT'}
                                                        className={'select_mouth'}
                                                        onInput={(e) => {
                                                            setMonth(e.target.value)

                                                        }

                                                        }
                                                    >
                                                        <option disabled={true} value={'DEFAULT'}>Выберите месяц
                                                        </option>
                                                        {
                                                            monthArray[0] ? monthArray.slice(0, +currentDate - 1).map(((
                                                                        {
                                                                            id,
                                                                            name,
                                                                            code
                                                                        }
                                                                    ) =>
                                                                        <option key={id} value={id}>{name}</option>
                                                                ))
                                                                :
                                                                false
                                                        }

                                                    </Form.Select>
                                                </Form.Label>
                                            </div>
                                        </div>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr',
                                            gridGap: 20,
                                            overflow: 'auto'
                                        }}>
                                            <div>
                                                <BrandBar from={from} to={to}/>
                                            </div>
                                            <div>
                                                <ModelPie from={from} to={to}/>
                                            </div>
                                            <div>
                                                <LcvBar from={from} to={to}/>
                                            </div>
                                            <div>
                                                <PcBar from={from} to={to}/>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Tab>
                        <Tab eventKey="Compare" title="Сравнить брены">
                            <h4 style={{fontSize: '1.75rem',borderBottom: '1px solid grey'}} className='p-3'>Сравнение брендов</h4>
                            <CompareBlock/>
                        </Tab>
                    </Tabs>

                </Container>
            </div>
        </div>
    );
};

export default ShowAllStatistic;


