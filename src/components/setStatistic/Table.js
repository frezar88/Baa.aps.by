import React, { useState} from 'react';
import {Form} from "react-bootstrap";
import s from "../../pages/SetStatistic.module.css";
import TableThead from "./TableThead";
import TableTbody from "./TableTbody";
import BtnSaveStatistic from "./BtnSaveStatistic";
import { sendStatic} from "../../http/brandAPI";
import {SUCCESS_SEND_STATISTIC} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import PopUpBadRequest from "./PopUpBadRequest";
import PopUpSendStatistic from "./PopUpSendStatistic";


const Table = (props) => {

    const history = useHistory()
    const presentDate = new Date().toLocaleString('en', {year: "numeric"})
    let selectedYear = new Date(props.stateSelectYear * 1000).toLocaleString('en', {year: 'numeric'})
    const [filled, setFilled] = useState('')
    const [loadFilled, setLoadFilled] = useState(true)
    const [modalShow, setModalShow] = useState(false);
    const [modalShowSend, setModalShowSend] = useState(false);
    const [countAutoAndData,setCountAutoAndData]=useState({countCars:0,data:''})



    function sendFormData(e) {
        let inputsActive = document.querySelectorAll('.active input')
        let counter = {
            "timestamp": '',
            "brand_id": '',
            "data": []
        }
        if (inputsActive[0]) {
            inputsActive.forEach(el => {
                if (el.value) {

                    counter.data.push({
                        'car_id': el.attributes['data-model-id-set'].value,
                        value: el.value
                    })
                } else {
                    el.style.boxShadow = 'red 0px 0px 6px'
                    setTimeout(() => {
                        el.style.boxShadow = 'none'
                    }, 1000);
                }
            })
            if (counter.data.length !== inputsActive.length) {
                e.target.className = 'btn btn-danger'
                setTimeout(() => {
                    e.target.className = 'btn btn-success'
                }, 1000);
            } else {
                let count=0;
                inputsActive.forEach(el=>{
                    count+=+el.value

                })
                setCountAutoAndData({countCars:count,data:counter})
                counter.timestamp = inputsActive[0].attributes['data-mouth'].value
                counter.brand_id = inputsActive[0].attributes['data-brand-id-set'].value
                // sendData(counter).then()

                setModalShowSend(true)
            }
        }

    }

    const sendData = async (data) => {
        try {
            await sendStatic(data)
            history.push(SUCCESS_SEND_STATISTIC)
        } catch (e) {
            setModalShow(true)
        }
    }
    return (
        <>
            <PopUpSendStatistic countAutoAndData={countAutoAndData} show={modalShowSend} sendData={sendData} onHide={() => setModalShowSend(false)}/>
            <Form.Label style={{width: '100%'}}>
                <Form>
                    <div className={s.table + ' mt-4 pb-4'}>
                        <div style={{overflow: 'auto'}}>
                            <table className={s.table_block}>
                                <TableThead/>
                                <TableTbody
                                    filled={filled}
                                    loadFilled={loadFilled}
                                    allModel={props.allModel}
                                    brand_id={props.brand_id}
                                    allModelSalesValue={props.allModelSalesValue}
                                    stateSelectYear={props.stateSelectYear}
                                />
                            </table>
                        </div>
                    </div>
                    {
                        modalShow ?
                            <>
                                <PopUpBadRequest show={modalShow} onHide={() => setModalShow(false)}/>
                            </>

                            :
                            false
                    }
                    {
                        presentDate === selectedYear && !filled[0] && loadFilled ?
                            <BtnSaveStatistic callback={sendFormData}/>
                            :
                            false
                    }

                </Form>
            </Form.Label>

        </>

    );
};

export default Table;