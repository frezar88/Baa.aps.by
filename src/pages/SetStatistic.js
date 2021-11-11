import React, {useContext, useEffect, useState} from 'react';
import {Container, Spinner} from "react-bootstrap";


import {Context} from "../index";
import RepresentativeBlock from "../components/setStatistic/RepresentativeBlock";
import SelectBrandAndYear from "../components/setStatistic/SelectBrandAndYear";

import Table from "../components/setStatistic/Table";
import {getCars, getStatic} from "../http/brandAPI";
import {useHistory} from "react-router-dom";



const SetStatistic = () => {
    const {user} = useContext(Context)
    const history=useHistory()
    const [stateSelectYear, setSelectStateYear] = useState('1609448400')
    const [stateSelectBrand, setSelectStateBrand] = useState()
    const [loadSelect, setLoadSelect] = useState(false)
    const [allModel, setAllModel] = useState()
    const [allModelSalesValue, setAllModelSalesValue] = useState()
    useEffect(() => {
        if (loadSelect) {
            getCars().then(data => {

                setAllModel(data.data.filter(item => item.model.brand.id === +stateSelectBrand && item['on_sale']))
            })
            getStatic().then(data => {
                setAllModelSalesValue(data.data)
            })
        }
    }, [loadSelect,stateSelectBrand])


    return (
        <div className='d-flex flex-column overflow-hidden' style={{zIndex: '22', minHeight: '100vh'}}>
            <div style={{marginTop: '3%'}}>
                <Container
                    style={{
                        color: '#fff',
                        backgroundColor: 'rgb(8 8 8 / 80%)',
                        marginTop: '222', minHeight: 500,
                        borderRadius: 10, padding: '10px 25px',
                    }}>
                    <RepresentativeBlock dealer={user.User.dealer}/>
                    <SelectBrandAndYear loadComponents={setLoadSelect} stateBrand={setSelectStateBrand}
                                        stateYear={setSelectStateYear}/>

                    {
                        allModel && allModelSalesValue ?
                            <Table
                                brand_id={stateSelectBrand}
                                allModel={allModel}
                                allModelSalesValue={allModelSalesValue}
                                stateSelectYear={stateSelectYear}

                            />
                            :
                            <Spinner animation={"grow"}/>
                    }
                </Container>
            </div>
        </div>
    );
};

export default SetStatistic;

// const SetStatistic = () => {
//     const {user} = useContext(Context)
//     const [currentBrand, setCurrentBrand] = useState('')
//     const [currentYear, setCurrentYear] = useState('')
//     const [load, setLoad] = useState(false)
//     const [error, SetError] = useState('')
//     const history = useHistory()
//
//     const [currentValue, setCurrentValue] = useState([])
// //1609448400
//     useEffect(() => {
//         getStatistInAllTime(currentYear).then((data) => {
//                 let arr = []
//                 data.data.forEach(el => {
//
//                     arr.push({
//                         "timestamp": Math.round(new Date(el.timestamp) / 1000),
//                         "value": el.value,
//                         "car_id": el.car.id
//                     })
//                 })
//                 setCurrentValue(arr)
//             }
//         )
//     }, [currentYear])
//
//
//     useEffect(() => {
//         getCars().then((data) => {
//                 user.setUserCars(data.data)
//                 setLoad(true)
//             }
//         )
//     }, [user])
//
//
//     let brandsUsers = []
//     if (load) {
//         user.UserCars.forEach(el => {
//             if (brandsUsers.indexOf(el.model.brand.name) === -1) {
//                 brandsUsers.push(el.model.brand.name)
//             }
//         })
//
//     }
//     useEffect(() => {
//         let mouth = new Date().toLocaleString('en', {
//             month: 'long',
//             year:'numeric'
//         });
//
//         let inputMouth = document.querySelectorAll('input.mouth')
//         if (inputMouth) {
//             inputMouth.forEach(el => {
//
//                 if (el.attributes['data-mouth-str'].value === mouth) {
//                     el.parentNode.classList.add('activeTd')
//                     el.classList.add('active')
//                     el.setAttribute('placeholder', '')
//                     if (!el.value){
//                         el.removeAttribute('disabled')
//                     }
//                 }else{
//                     el.parentNode.classList.remove('activeTd')
//                     el.classList.remove('activeTd')
//                     el.setAttribute('placeholder', '-')
//                     el.setAttribute('disabled', 'true')
//                     el.value =''
//
//                 }
//             })
//         }
//     }, [currentBrand, currentYear])
//
//     const sendData = async (data) => {
//         try {
//             await sendStatic(data)
//             history.push(SUCCESS_SEND_STATISTIC)
//         } catch (e) {
//
//             SetError(e.response.data)
//             setTimeout(() => {
//                 SetError('')
//             }, 2000);
//         }
//
//     }
//
//     function sendFormData(e) {
//         let inputsActive = document.querySelectorAll('.activeTd input')
//
//         let counter = {
//             "timestamp": '',
//             "brand_id": '',
//             "data": []
//         }
//         inputsActive.forEach(el => {
//             if (el.value) {
//                 counter.data.push({
//                     'car_id': el.attributes['data-model-id'].value,
//                     value: el.value
//                 })
//             } else {
//                 el.style.boxShadow = 'red 0px 0px 6px'
//                 setTimeout(() => {
//                     el.style.boxShadow = 'none'
//                 }, 1000);
//             }
//         })
//         if (counter.data.length !== inputsActive.length) {
//             e.target.className = 'btn btn-danger'
//             setTimeout(() => {
//                 e.target.className = 'btn btn-success'
//             }, 1000);
//         } else {
//             counter.timestamp = inputsActive[0].attributes['data-mouth'].value
//             // counter.timestamp = '1614546000'
//             counter.brand_id = inputsActive[0].attributes['data-brand-id'].value
//             sendData(counter).then()
//         }
//     }
//
//     return (
//         <div onClick={(e) => {
//
//             if (e.target.className === 'd-flex flex-column overflow-hidden') {
//                 history.push(STATISTIC_MENU)
//             }
//         }} className='d-flex flex-column overflow-hidden' style={{zIndex: '22', minHeight: '100vh'}}>
//             <div style={{marginTop: '3%'}}>
//                 <Container
//                     style={{
//                         color: '#fff',
//                         backgroundColor: 'rgb(8 8 8 / 80%)',
//                         marginTop: '222', minHeight: 500,
//                         borderRadius: 10, padding: '10px 25px',
//                     }}>
//                     <p>
//                         <span style={{fontWeight: 500}}>Представитель </span>
//                         :
//                         <span style={{fontWeight: 'bold'}}> {user.User.dealer}</span>
//                     </p>
//                     <div>
//                         <div>
//                             <Form.Label style={{
//                                 fontWeight: 600,
//                                 fontSize: 16,
//                                 display: "flex",
//                                 alignItems: 'center',
//                             }}>
//                                 Выберите бренд
//                                 <Form.Select
//                                     style={{
//                                         boxSizing: "border-box",
//                                         maxWidth: 200,
//                                         padding: '.05rem .25rem .10rem .75rem',
//                                         marginLeft: '10px'
//                                     }}
//                                     className={'select_mouth'}
//                                     defaultValue={''}
//                                     onChange={e => {
//                                         setCurrentBrand(e.target.value)
//                                     }
//                                     }>
//                                     <option disabled={true} value="">Выберите бренд</option>
//                                     {brandsUsers ? brandsUsers.map((value) =>
//                                         <option key={value} value={value}>{value}</option>
//                                     ) : false}
//                                 </Form.Select>
//                             </Form.Label>
//                         </div>
//                         <div>
//                             <Form.Label style={{
//                                 fontWeight: 600,
//                                 fontSize: 16,
//                                 display: "flex",
//                                 alignItems: 'center',
//
//                             }}>
//                                 Выберите год
//                                 <Form.Select
//                                     style={{
//                                         boxSizing: "border-box",
//                                         maxWidth: 200,
//                                         padding: '.05rem .25rem .10rem .75rem',
//                                         marginLeft: '32px'
//                                     }}
//                                     className={'select_mouth'}
//                                     defaultValue={''}
//                                     onChange={(e) => {
//                                         setCurrentYear(e.target.value)
//                                     }
//                                     }
//                                 >
//                                     <option disabled={true} value="">Выберите год</option>
//                                     <option value="1609448400">2021</option>
//                                     <option value="1640984400">2022</option>
//
//                                 </Form.Select>
//                             </Form.Label>
//                         </div>
//
//                     </div>
//
//                     {
//                         currentBrand && currentYear ? <Form.Label style={{width: '100%'}}>
//                                 <Form>
//                                     <div className={s.table + ' mt-4 pb-4'}>
//                                         <div style={{overflow: 'auto'}}>
//                                             <table className={s.table_block}>
//                                                 <thead>
//                                                 <tr>
//                                                     <th>Модель:</th>
//                                                     <th>янв.</th>
//                                                     <th>фев.</th>
//                                                     <th>март</th>
//                                                     <th>апр.</th>
//                                                     <th>май</th>
//                                                     <th>июнь</th>
//                                                     <th>июль</th>
//                                                     <th>авг.</th>
//                                                     <th>сен.</th>
//                                                     <th>окт.</th>
//                                                     <th>ноя.</th>
//                                                     <th>дек.</th>
//                                                     <th>ИТОГО</th>
//                                                 </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                 {load ? user.UserCars.filter(item => item.model.brand.name === currentBrand)
//                                                     .filter(item => item['on_sale'] === 1).map(({id, model}) =>
//                                                         <StatisticalTableRow key={id} id={id} model={model}
//                                                                              year={currentYear}
//                                                                              select_state={currentBrand}
//                                                                              currentValue={currentValue.filter(item=>item['car_id'] === id)}
//                                                         />
//                                                     ) : false}
//                                                 </tbody>
//
//                                             </table>
//                                         </div>
//                                     </div>
//                                     {
//                                         error ? <div className="mb-3 d-flex align-items-center justify-content-center"
//                                                      style={{
//                                                          color: 'red',
//                                                          fontSize: 25,
//                                                          textDecoration: 'underline',
//                                                          textDecorationColor: 'red'
//                                                      }}>
//                                                 <p>{error}</p>
//                                             </div>
//                                             :
//                                             false
//                                     }
//
//                                     {
//                                         currentYear === '1609448400' ?  <div className="d-flex justify-content-center">
//                                             <Button onClick={(e) => sendFormData(e)} variant={error ? "danger" : "success"}>Сохранить
//                                                 статистику</Button>
//                                         </div>
//                                             :
//                                             false
//                                     }
//
//
//                                 </Form>
//                             </Form.Label>
//                             :
//                             false
//                     }
//
//                 </Container>
//             </div>
//         </div>
//     );
// };
//
// export default SetStatistic;