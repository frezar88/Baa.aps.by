import React, {useEffect, useState} from 'react';
import {Form, Spinner} from "react-bootstrap";
import BrandBar from "../../ChartGraphics/BrandBar";
import ModelPie from "../../ChartGraphics/ModelPie";
import LcvBar from "../../ChartGraphics/LcvBar";
import PcBar from "../../ChartGraphics/PcBar";
import GraphTopBlock from "./GraphTopBlock";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart} from "react-chartjs-2";


const Graph = ({setLoadDataDone}) => {
    Chart.register(ChartDataLabels)

    const [from, setFrom] = useState(startedYearForLoadComponent())
    const [to, setTo] = useState(Math.round(new Date() / 1000))
    const [month, setMonth] = useState(false)
    const [year, setYear] = useState()

    const [loadBrand, setLoadBrand] = useState(false)
    const [loadModel, setLoadModel] = useState(false)


    function startedYearForLoadComponent() {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let previousDayMonth = new Date(y, m - 2, 1);
        return Math.round(new Date(previousDayMonth) / 1000)
    }

    useEffect(() => {
        setLoadDataDone(true)
    }, [])
    useEffect(() => {
        let startDate = '';
        let codeDateLastDay = '';

        if (+year !== 2022) {
            if (!month || month === '0') {
                let date = new Date(`${'1' + ' 1 ' + year}`);
                let y = date.getFullYear();
                let m = date.getMonth() + 1;
                let firstDayNextMonth = new Date(y + 1, m - 1, 1);
                let stringDate = firstDayNextMonth.toLocaleString('en', {
                    year: '2-digit',
                    month: 'numeric',
                    day: 'numeric'
                }).replaceAll('/', ' ')

                codeDateLastDay = Math.round(new Date(stringDate) / 1000)
                startDate = Math.round(new Date(`${'1' + ' 1 ' + year}`) / 1000)

                setFrom(+startDate)
                setTo(+codeDateLastDay)
            } else {
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

                setFrom(+startDate)
                setTo(+codeDateLastDay)
            }
        } else {
            let date = Math.round(new Date(`${'1' + ' 1 ' + year}`) / 1000) ;
            setFrom(+date)
            setTo(+Math.round(new Date() / 1000))

        }


        setLoadBrand(true)

    }, [month, year])


    return (
        <div>
            <GraphTopBlock year={year} loadModel={loadModel} setLoadModel={setLoadModel} setLoadBrand={setLoadBrand}
                           setYear={setYear} setMonth={setMonth}/>


            {
                loadBrand ?
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gridGap: 20,
                        overflow: 'auto'
                    }}>

                        {
                            loadModel ?
                                <Spinner style={{marginLeft: 'auto'}} animation={"grow"}/>
                                :
                                false
                        }
                        <BrandBar setLoadBrand={setLoadBrand} from={from} to={to}/>
                        <ModelPie setLoadModel={setLoadModel} from={from} to={to}/>
                        <LcvBar from={from} to={to}/>
                        <PcBar from={from} to={to}/>
                    </div>
                    :
                    <Spinner animation={"grow"}/>
            }

        </div>
    );
};

export default Graph;


// const Graph = ({setLoadDataDone}) => {
//     Chart.register(ChartDataLabels)
//
//     const [from, setFrom] = useState(startedYearForLoadComponent())
//     const [to, setTo] = useState(Math.round(new Date() / 1000))
//     const [month, setMonth] = useState(1)
//     const [year, setYear] = useState()
//
//
//     function startedYearForLoadComponent() {
//         let date = new Date();
//         let y = date.getFullYear();
//         let m = date.getMonth() + 1;
//         let previousDayMonth = new Date(y, m - 2, 1);
//         return Math.round(new Date(previousDayMonth) / 1000)
//     }
//     useEffect(()=>{
//         setLoadDataDone(true)
//     },[])
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
//
//     return (
//         <div>
//             <GraphTopBlock setYear={setYear} setMonth={setMonth} />
//             <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr',
//                 gridGap: 20,
//                 overflow: 'auto'
//             }}>
//                 <BrandBar from={from} to={to}/>
//                 <ModelPie from={from} to={to}/>
//                 {/*<LcvBar from={from} to={to}/>*/}
//                 {/*<PcBar from={from} to={to}/>*/}
//             </div>
//         </div>
//     );
// };
//
// export default Graph;