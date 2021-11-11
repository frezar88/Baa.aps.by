// import React, {useContext, useEffect, useState} from 'react';
// import {Button, Card, Container, Form, Row} from "react-bootstrap";
//
// import SetStatisticCarBlock from "../components/setStatistic_old/setStatisticCarBlock";
// import {getCars, sendStatic} from "../http/brandAPI";
// import {Context} from "../index";
//
//
//
// const SetStatic_old = () => {
//     const {user} = useContext(Context)
//     const [car, setCar] = useState()
//
//     useEffect(() => {
//         getCars().then((data) => {
//             user.setUserCars(data.data)
//             setCar(data.data)
//         })
//     }, [])
//
//     const createSendData = async () => {
//         let dataResponse;
//         let data = {
//             "timestamp":"",
//             "data":[]
//         }
//         let countCars = document.querySelectorAll('.carsBlock input[data-name="input_count"]')
//         let selectMouth = document.querySelector('select.select_mouth')
//         data.timestamp = Number(selectMouth.value)
//         countCars.forEach(el=>{
//             data.data.push({
//                 'car_id':el.attributes['data-model-id'].value,
//                 'value':el.value
//             })
//         })
//         console.log(data)
//         try {
//             dataResponse =   await sendStatic(data)
//             console.log(dataResponse)
//             console.log('УРААА')
//         }
//         catch (e) {
//             console.log(e)
//         }
//     }
//
//     return (
//         <div style={{backgroundColor: '#00000094', height: '100%', minHeight: '90vh'}}>
//
//
//             <Container className="d-flex justify-content-center align-items-center">
//
//                 <Card style={{width: '100%', maxWidth: '100%'}} className="p-4 mt-5">
//                     <Form className={'sendStatic'}>
//                         <h3>Добавить статистику</h3>
//                         <hr/>
//                         <Row>
//                             <Form.Label style={{fontWeight: 600,fontSize:18,textDecoration:'underline'}}>Выберите месяц</Form.Label>
//                             <Form.Select style={{boxSizing: "border-box"}} className={'select_mouth'} defaultValue={''}>
//                                 <option disabled={true} value="">Выберите месяц</option>
//                                 <option value="1609459200">Январь</option>
//                                 <option value="1612137600">Февраль</option>
//                                 <option value="1614556800">Март</option>
//                                 <option value="1617235200">Апрель</option>
//                                 <option value="1619827200">Май</option>
//                                 <option value="1622505600">Июнь</option>
//                                 <option value="1625097600">Июль</option>
//                                 <option value="1627776000">Август</option>
//                                 <option value="1630454400">Сентябрь</option>
//                                 <option value="1633046400">Октябрь</option>
//                                 <option value="1635724800">Ноябрь</option>
//                                 <option value="1638316800">Декабрь</option>
//                             </Form.Select>
//                         </Row>
//                         <Row>
//                             <h4 className=" mt-3 mb-3">Ваши автомобили</h4>
//                             <hr/>
//                             {
//                                 car ? car.map(({id,model,body_type,car_type}) =>
//                                     <SetStatisticCarBlock key={id} id={id} model={model} bodyType={body_type} carType={car_type}/>
//                                 ) :
//                                     ''
//                             }
//                         </Row>
//
//                         <div className="d-flex mt-3">
//                             <Button onClick={(e)=> createSendData()} className="m-auto w-25 mt-3" variant="dark">
//                                 Отправить
//                             </Button>
//                         </div>
//
//                     </Form>
//                 </Card>
//
//
//             </Container>
//         </div>
//     );
// };
//
// export default SetStatic_old;