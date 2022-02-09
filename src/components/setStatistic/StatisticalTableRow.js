import React, {useEffect, useState} from 'react';
import s from "./StatisticalTableRow.module.css"


const StatisticalTableRow = ({stateSelectYear,sales_data,load,setload,modelName,presentDate,car_id,brand_id,activeState}) => {

    const [totalSum, setTotalSum] = useState(0)
    const [january, setJanuary] = useState('')
    const [february, setFebruary] = useState('')
    const [march, setMarch] = useState('')
    const [april, setApril] = useState('')
    const [may, setMay] = useState('')
    const [june, setJune] = useState('')
    const [july, setJuly] = useState('')
    const [august, setAugust] = useState('')
    const [september, setSeptember] = useState('')
    const [october, setOctober] = useState('')
    const [november, setNovember] = useState('')
    const [december, setDecember] = useState('')

    let selectYear = new Date(stateSelectYear * 1000).toLocaleString('ru', {year: 'numeric',})




    useEffect(() => {
        let valueSum = 0
        if (sales_data[0]) {

            sales_data.forEach(el => {
                let year = new Date(el.timestamp).toLocaleString('ru', {year: 'numeric',})
                let month = new Date(el.timestamp).toLocaleString('en', {month: 'long',})

                if (year === selectYear) {
                    valueSum += +el.value
                    switch (month) {
                        case 'January':
                            setJanuary(el.value)
                            break;
                        case 'February':
                            setFebruary(el.value)
                            break;
                        case 'March':
                            setMarch(el.value)
                            break;
                        case 'April':
                            setApril(el.value)
                            break;
                        case 'May':
                            setMay(el.value)
                            break;
                        case 'June':
                            setJune(el.value)
                            break;
                        case 'July':
                            setJuly(el.value)
                            break;
                        case 'August':
                            setAugust(el.value)
                            break;
                        case 'September':
                            setSeptember(el.value)
                            break;
                        case 'October':
                            setOctober(el.value)
                            break;
                        case 'November':
                            setNovember(el.value)
                            break;
                        case 'December':
                            setDecember(el.value)
                            break;
                        default :
                            break;
                    }
                } else {
                    setDecember('')
                    setNovember('')
                    setOctober('')
                    setSeptember('')
                    setAugust('')
                    setJuly('')
                    setJune('')
                    setMay('')
                    setApril('')
                    setMarch('')
                    setJanuary('')
                    setFebruary('')
                }

            })
            setTotalSum(valueSum)


        }
        if (!load) {
            setload(true)
        }
    }, [sales_data, stateSelectYear])


    function onlyNumber(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^0-9]/g, '');
    }

    return (

        <>
            {
                selectYear === '2021' ?
                    <tr>
                        <td>{modelName}</td>
                        <td >
                            <input onChange={(e) => setJanuary(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className={"mouth"}
                                   data-brand-id-set={brand_id}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "January 2022" : "January 2021"}
                                   data-mouth-number={'1'}
                                   placeholder={'-'}
                                   value={january}
                                   data-year={'2022'}
                                   data-mouth={'1640984400'} type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setFebruary(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1643662800'}
                                   placeholder={'-'}
                                   data-year={'2022'}
                                   value={february}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "February 2022" : "February 2021"}
                                   data-mouth-number={'2'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setMarch(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1646082000'}
                                   placeholder={'-'}
                                   data-year={'2022'}
                                   value={march}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "March 2022" : "March 2021"}
                                   data-mouth-number={'3'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setApril(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1648760400'}
                                   placeholder={'-'}
                                   value={april}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "April 2022" : "April 2021"}
                                   data-mouth-number={'4'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setMay(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1651352400'}
                                   placeholder={'-'}
                                   value={may}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "May 2022" : "May 2021"}
                                   data-mouth-number={'5'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setJune(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1654030800'}
                                   placeholder={'-'}
                                   value={june}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "June 2022" : "June 2021"}
                                   data-mouth-number={'6'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setJuly(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1656622800'}
                                   placeholder={'-'}
                                   value={july}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "July 2022" : "July 2021"}
                                   data-mouth-number={'7'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setAugust(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1659301200'}
                                   placeholder={'-'}
                                   value={august}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "August 2022" : "August 2021"}
                                   data-mouth-number={'8'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setSeptember(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1661979600'}
                                   placeholder={'-'}
                                   value={september}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "September 2022" : "September 2021"}
                                   data-mouth-number={'9'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setOctober(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1664571600'}
                                   placeholder={'-'}
                                   value={october}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "October 2022" : "October 2021"}
                                   data-mouth-number={'10'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setNovember(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1667250000'}
                                   placeholder={'-'}
                                   value={november}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "November 2022" : "November 2021"}
                                   data-mouth-number={'11'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setDecember(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1669842000'}
                                   placeholder={'-'}
                                   value={december}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "December 2022" : "December 2021"}
                                   data-mouth-number={'12'}
                                   type="text"/>
                        </td>
                        <td>
                            <span>{totalSum}</span>
                        </td>
                    </tr>
                    :
                    <tr>
                        <td>{modelName}</td>
                        <td >
                            <input onChange={(e) => setJanuary(e.target.value)}
                                   disabled={true} onInput={onlyNumber} data-model-id-set={car_id}
                                   className={"mouth"}
                                   data-brand-id-set={brand_id}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "January 2021" : "January 2022"}
                                   data-mouth-number={'1'}
                                   placeholder={'-'}
                                   value={january}
                                   data-year={'2022'}
                                   data-mouth={'1640984400'} type="text"
                            />

                        </td>
                        <td >
                            <input onChange={(e) => setFebruary(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1643662800'}
                                   placeholder={'-'}
                                   data-year={'2022'}
                                   value={february}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "February 2021" : "February 2022"}
                                   data-mouth-number={'2'}

                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setMarch(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1646082000'}
                                   placeholder={'-'}
                                   data-year={'2022'}
                                   value={march}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "March 2021" : "March 2022"}
                                   data-mouth-number={'3'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setApril(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1648760400'}
                                   placeholder={'-'}
                                   value={april}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "April 2021" : "April 2022"}
                                   data-mouth-number={'4'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setMay(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1651352400'}
                                   placeholder={'-'}
                                   value={may}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "May 2021" : "May 2022"}
                                   data-mouth-number={'5'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setJune(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1654030800'}
                                   placeholder={'-'}
                                   value={june}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "June 2021" : "June 2022"}
                                   data-mouth-number={'6'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setJuly(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1656622800'}
                                   placeholder={'-'}
                                   value={july}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "July 2021" : "July 2022"}
                                   data-mouth-number={'7'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setAugust(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1659301200'}
                                   placeholder={'-'}
                                   value={august}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "August 2021" : "August 2022"}
                                   data-mouth-number={'8'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setSeptember(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1661979600'}
                                   placeholder={'-'}
                                   value={september}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "September 2021" : "September 2022"}
                                   data-mouth-number={'9'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setOctober(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1664571600'}
                                   placeholder={'-'}
                                   value={october}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "October 2021" : "October 2022"}
                                   data-mouth-number={'10'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setNovember(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1667250000'}
                                   placeholder={'-'}
                                   value={november}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "November 2021" : "November 2022"}
                                   data-mouth-number={'11'}
                                   type="text"/>
                        </td>
                        <td >
                            <input onChange={(e) => setDecember(e.target.value)}
                                   disabled={true} onInput={onlyNumber}
                                   data-model-id-set={car_id} className="mouth"
                                   data-brand-id-set={brand_id}
                                   data-mouth={'1669842000'}
                                   placeholder={'-'}
                                   value={december}
                                   data-year={'2022'}
                                   data-mouth-str={stateSelectYear === '1609448400' ? "December 2021" : "December 2022"}
                                   data-mouth-number={'12'}
                                   type="text"/>
                        </td>
                        <td>
                            <span>{totalSum}</span>
                        </td>
                    </tr>
            }

        </>




















        // <>
        //     {
        //         selectYear === '2021' ? <tr>
        //                 <td>{modelName}</td>
        //                 <td >
        //                     <input onChange={(e) => setJanuary(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className={"mouth"}
        //                            data-brand-id-set={brand_id}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "January 2021" : "January 2022"}
        //                            data-mouth-number={'1'}
        //                            placeholder={'-'}
        //                            value={january}
        //                            data-year={'2021'}
        //                            data-mouth={'1609448400'} type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setFebruary(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1612126800'}
        //                            placeholder={'-'}
        //                            data-year={'2021'}
        //                            value={february}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "February 2021" : "February 2022"}
        //                            data-mouth-number={'2'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setMarch(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1614546000'}
        //                            placeholder={'-'}
        //                            data-year={'2021'}
        //                            value={march}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "March 2021" : "March 2022"}
        //                            data-mouth-number={'3'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setApril(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1617224400'}
        //                            placeholder={'-'}
        //                            value={april}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "April 2021" : "April 2022"}
        //                            data-mouth-number={'4'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setMay(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1619816400'}
        //                            placeholder={'-'}
        //                            value={may}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "May 2021" : "May 2022"}
        //                            data-mouth-number={'5'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setJune(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1622494800'}
        //                            placeholder={'-'}
        //                            value={june}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "June 2021" : "June 2022"}
        //                            data-mouth-number={'6'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setJuly(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1625086800'}
        //                            placeholder={'-'}
        //                            value={july}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "July 2021" : "July 2022"}
        //                            data-mouth-number={'7'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setAugust(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1627765200'}
        //                            placeholder={'-'}
        //                            value={august}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "August 2021" : "August 2022"}
        //                            data-mouth-number={'8'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setSeptember(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1630443600'}
        //                            placeholder={'-'}
        //                            value={september}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "September 2021" : "September 2022"}
        //                            data-mouth-number={'9'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setOctober(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1633035600'}
        //                            placeholder={'-'}
        //                            value={october}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "October 2021" : "October 2022"}
        //                            data-mouth-number={'10'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setNovember(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1635714000'}
        //                            placeholder={'-'}
        //                            value={november}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "November 2021" : "November 2022"}
        //                            data-mouth-number={'11'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setDecember(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1638306000'}
        //                            placeholder={'-'}
        //                            value={december}
        //                            data-year={'2021'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "December 2021" : "December 2022"}
        //                            data-mouth-number={'12'}
        //                            type="text"/>
        //                 </td>
        //                 {/*<td className={presentDate === 'December 2021' && !activeState[0]  ? s.active + ' active' : ''}>*/}
        //                 {/*    <input onChange={(e) => setDecember(e.target.value)}*/}
        //                 {/*           disabled={true} onInput={onlyNumber}*/}
        //                 {/*           data-model-id-set={car_id} className="mouth"*/}
        //                 {/*           data-brand-id-set={brand_id}*/}
        //                 {/*           data-mouth={'1638306000'}*/}
        //                 {/*           placeholder={'-'}*/}
        //                 {/*           value={december}*/}
        //                 {/*           data-year={'2021'}*/}
        //                 {/*           data-mouth-str={stateSelectYear === '1609448400' ? "December 2021" : "December 2022"}*/}
        //                 {/*           type="text"/>*/}
        //                 {/*</td>*/}
        //                 <td>
        //                     <span>{totalSum}</span>
        //                 </td>
        //             </tr>
        //             :
        //             <tr>
        //                 <td>{modelName}</td>
        //                 <td >
        //                     <input onChange={(e) => setJanuary(e.target.value)}
        //                            disabled={true} onInput={onlyNumber} data-model-id-set={car_id}
        //                            className={"mouth"}
        //                            data-brand-id-set={brand_id}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "January 2021" : "January 2022"}
        //                            data-mouth-number={'1'}
        //                            placeholder={'-'}
        //                            value={january}
        //                            data-year={'2022'}
        //                            data-mouth={'1609448400'} type="text"
        //                     />
        //
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setFebruary(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1612126800'}
        //                            placeholder={'-'}
        //                            data-year={'2022'}
        //                            value={february}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "February 2021" : "February 2022"}
        //                            data-mouth-number={'2'}
        //
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setMarch(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1614546000'}
        //                            placeholder={'-'}
        //                            data-year={'2022'}
        //                            value={march}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "March 2021" : "March 2022"}
        //                            data-mouth-number={'3'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setApril(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1617224400'}
        //                            placeholder={'-'}
        //                            value={april}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "April 2021" : "April 2022"}
        //                            data-mouth-number={'4'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setMay(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1619816400'}
        //                            placeholder={'-'}
        //                            value={may}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "May 2021" : "May 2022"}
        //                            data-mouth-number={'5'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setJune(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1622494800'}
        //                            placeholder={'-'}
        //                            value={june}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "June 2021" : "June 2022"}
        //                            data-mouth-number={'6'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setJuly(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1625086800'}
        //                            placeholder={'-'}
        //                            value={july}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "July 2021" : "July 2022"}
        //                            data-mouth-number={'7'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setAugust(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1627765200'}
        //                            placeholder={'-'}
        //                            value={august}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "August 2021" : "August 2022"}
        //                            data-mouth-number={'8'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setSeptember(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1630443600'}
        //                            placeholder={'-'}
        //                            value={september}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "September 2021" : "September 2022"}
        //                            data-mouth-number={'9'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setOctober(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1633035600'}
        //                            placeholder={'-'}
        //                            value={october}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "October 2021" : "October 2022"}
        //                            data-mouth-number={'10'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setNovember(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1635714000'}
        //                            placeholder={'-'}
        //                            value={november}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "November 2021" : "November 2022"}
        //                            data-mouth-number={'11'}
        //                            type="text"/>
        //                 </td>
        //                 <td >
        //                     <input onChange={(e) => setDecember(e.target.value)}
        //                            disabled={true} onInput={onlyNumber}
        //                            data-model-id-set={car_id} className="mouth"
        //                            data-brand-id-set={brand_id}
        //                            data-mouth={'1638306000'}
        //                            placeholder={'-'}
        //                            value={december}
        //                            data-year={'2022'}
        //                            data-mouth-str={stateSelectYear === '1609448400' ? "December 2021" : "December 2022"}
        //                            data-mouth-number={'12'}
        //                            type="text"/>
        //                 </td>
        //                 <td>
        //                     <span>{totalSum}</span>
        //                 </td>
        //             </tr>
        //     }
        //
        // </>


    );
};

export default StatisticalTableRow;