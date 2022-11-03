import React, {useContext, useEffect, useState} from 'react';
import s from './TableStatisticalAnalysis.module.css'
import {Button} from "react-bootstrap";
import SelectYearAnalysis from "./components/StatisticalAnalysis/SelectYearAnalysis";
import ResultItem from "./components/StatisticalAnalysis/ResultItem";
import {getAllStatistic} from "../../../http/brandAPI";
import {Context} from "../../../index";
import ResultItemModel from "./components/StatisticalAnalysis/ResultItemModel";

const TableStatisticalAnalysis = ({
                                      data,
                                      dataModel,
                                      dataLCV,
                                      dataPC,
                                      monthState,
                                      setMonthState,
                                      toDayStat,
                                      dataModelPC,
                                      dataModelLCV
                                  }) => {
    function csvYear(data, name) {
        let objArray = [
            ['%', 'Brand', '2022', '2021', 'YoY'],
        ]
        data.allTime.data.forEach((el) => {
            objArray.push([el.inter + '%', el.brand, el['2022'], el['2021'], String(el.yoy).replace('.', ''),])
        })

        objArray.push(['', , 'Всего', data.allTime.total['2022'], data.allTime.total['2021'], String(data.allTime.total['yoy']).replace('.', '') + '%',])
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
        a.setAttribute('download', `${name}.csv`);
        window.document.body.appendChild(a);
        a.click();
    }

    function csvYearModel(data, name, slice, filter) {
        let objArray = [
            ['%', 'Brand', 'model', '2022', '2021', 'YoY'],
        ]
        data.allTime.data.filter((item) => filter ? item['car_type'] == filter : item).slice(0, slice).forEach((el) => {
            objArray.push([el.inter + '%', el.brand, el.car_name, el['2022'], el['2021'], String(el.yoy).replace('.', ''),])
        })

        objArray.push(['', '', 'Всего', data.allTime.total['2022'], data.allTime.total['2021'], String(data.allTime.total['yoy']).replace('.', '') + '%',])
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
        a.setAttribute('download', `${name}.csv`);
        window.document.body.appendChild(a);
        a.click();
    }

    function csvMonth(data, name) {
        let objArray = [
            ['%', 'Brand', '2022', '2021', 'YoY'],
        ]
        data.month.data.forEach((el) => {
            objArray.push([el.inter + '%', el.brand, el['2022'], el['2021'], String(el.yoy).replace('.', ''),])
        })
        objArray.push(['', , 'Всего', data.month.total['2022'], data.month.total['2021'], String(data.month.total['yoy']).replace('.', '') + '%',])
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
        a.setAttribute('download', `${name}.csv`);
        window.document.body.appendChild(a);
        a.click();
    }
    function csvMonthModel(data, name,slice,filter) {
        let objArray = [
            ['%', 'Brand', 'model', '2022', '2021', 'YoY'],
        ]
        data.month.data.filter((item) => filter ? item['car_type'] == filter : item).slice(0, slice).forEach((el) => {
            objArray.push([el.inter + '%', el.brand, el.car_name, el['2022'], el['2021'], String(el.yoy).replace('.', ''),])
        })
        objArray.push(['','' , 'Всего', data.month.total['2022'], data.month.total['2021'], String(data.month.total['yoy']).replace('.', '') + '%',])
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
        a.setAttribute('download', `${name}.csv`);
        window.document.body.appendChild(a);
        a.click();
    }

    const download = () => {
        csvYear(data, 'analyses_year')

        csvYear(dataPC, 'analyses_PC_year')

        csvYear(dataLCV, 'analyses_LCV_year')

        csvYearModel(dataModel, 'top_25_model_year', 25, )

        csvYearModel(dataModelPC, 'top_20_pc_year', 20, 1)

        csvYearModel(dataModelLCV, 'top_5_lcv_year', 5, 2)

        if (monthState){
            csvMonth(data, 'analyses_month')
            csvMonth(dataPC, 'analyses_PC_month')
            csvMonth(dataLCV, 'analyses_LCV_month')
            csvMonthModel(dataModel,'top_25_model_month', 25, )
            csvMonthModel(dataModelPC,'top_20_pc_month', 20, 1)
            csvMonthModel(dataModelLCV,'top_5_lcv_month', 5, 2)
        }
    }

    return (
        <div className={s.block}>
            <div style={{marginTop: 15}}>
                <div className={s.block_2}>
                    <div>
                        <h3 style={{paddingLeft: 0, marginBottom: 0,}}>Статистический анализ</h3>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gridGap: '20px'}}>
                        <Button variant={"outline-light"} onClick={download}>Скачать все таблицы</Button>
                        <SelectYearAnalysis value={monthState} setValue={setMonthState}/>
                    </div>
                </div>
                <div className={s.result} style={{gridTemplateColumns: monthState  ? '1fr 1fr' : '1fr',maxWidth:monthState?'unset':'850px',margin:monthState?'20px 0':'20px auto'}}>
                    {
                        data
                            ? <>
                                <ResultItem date_load={data} name={'analyses_year'} click={csvYear} data={data.allTime}
                                            title={`за 2022 год`}/>
                                {data.month?.data && monthState
                                    ?
                                    <ResultItem date_load={data} name={'analyses_month'} click={csvMonth} data={data.month}
                                                title={monthState ? `за ${new Date(monthState * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`
                                                    : `за ${new Date(toDayStat * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`}
                                    />
                                    : ''
                                }

                            </>
                            : ''
                    }
                    {
                        dataPC
                            ? <>
                                <ResultItem date_load={dataPC} name={'analyses_PC_year'} click={csvYear}
                                            data={dataPC.allTime} title={`PC за 2022 год`}/>
                                {dataPC.month?.data && monthState
                                    ? <ResultItem date_load={dataPC} name={'analyses_PC_month'} click={csvMonth}
                                                  data={dataPC.month}
                                                  title={monthState ? `PC за ${new Date(monthState * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`
                                                      : `PC за ${new Date(toDayStat * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`}
                                    />
                                    : ''
                                }

                            </>
                            : ''
                    }
                    {
                        dataLCV
                            ? <>
                                <ResultItem date_load={dataLCV} name={'analyses_LCV_year'} click={csvYear}
                                            data={dataLCV.allTime} title={`LCV за 2022 год`}/>
                                {dataLCV.month?.data && monthState
                                    ? <ResultItem date_load={dataLCV} name={'analyses_LCV_month'} data={dataLCV.month}
                                                  click={csvMonth}
                                                  title={monthState ? `LCV за ${new Date(monthState * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`
                                                      : `LCV за ${new Date(toDayStat * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`}
                                    />
                                    : ''
                                }

                            </>
                            : ''
                    }
                    {
                        dataModel
                            ? <>
                                <ResultItemModel filter={''} slice={25} date_load={dataModel} name={'top_25_model_year'}
                                                 click={csvYearModel} data={dataModel.allTime}
                                                 title={`Топ 25 моделей за 2022 год`}/>
                                {dataLCV.month?.data && monthState
                                    ? <ResultItemModel filter={''} slice={25} date_load={dataModel} name={'analyses_LCV_month'}
                                                       data={dataModel.month} click={csvMonthModel}
                                                       title={monthState ? `Топ 25 моделей за ${new Date(monthState * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`
                                                           : `Топ 25 моделей за ${new Date(toDayStat * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`}
                                    />
                                    : ''
                                }

                            </>
                            : ''
                    }
                    {
                        dataModel
                            ? <>
                                <ResultItemModel filter={1} slice={20} date_load={dataModelPC} name={'top_20_pc_year'}
                                                 click={csvYearModel} data={dataModelPC.allTime}
                                                 title={`Топ 20 PC за 2022 год`}/>
                                {dataLCV.month?.data && monthState
                                    ? <ResultItemModel filter={1} slice={20} date_load={dataModelPC} name={'top_20_pc_month'}
                                                       data={dataModelPC.month} click={csvMonthModel}
                                                       title={monthState ? `Топ 20 PC за ${new Date(monthState * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`
                                                           : `Топ 20 PC за ${new Date(toDayStat * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`}
                                    />
                                    : ''
                                }

                            </>
                            : ''
                    }
                    {
                        dataModel
                            ? <>
                                <ResultItemModel filter={2} slice={5} date_load={dataModelLCV} name={'top_5_lcv_year'}
                                                 click={csvYearModel} data={dataModelLCV.allTime}
                                                 title={`Топ 5 LCV за 2022 год`}/>
                                {dataLCV.month?.data && monthState
                                    ? <ResultItemModel filter={2} slice={5} date_load={dataModelLCV} name={'top_5_lcv_month'}
                                                       data={dataModelLCV.month} click={csvMonthModel}
                                                       title={monthState ? `Топ 5 LCV за ${new Date(monthState * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`
                                                           : `Топ 5 LCV за ${new Date(toDayStat * 1000).toLocaleDateString('ru', {month: 'long'})} 2022`}
                                    />
                                    : ''
                                }

                            </>
                            : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default TableStatisticalAnalysis;