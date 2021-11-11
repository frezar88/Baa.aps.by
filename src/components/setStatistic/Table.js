import React, {useContext, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import s from "../../pages/SetStatistic.module.css";
import TableThead from "./TableThead";
import TableTbody from "./TableTbody";
import ErrorBlock from "./ErrorBlock";
import BtnSaveStatistic from "./BtnSaveStatistic";
import {getFillingStatistic, sendStatic} from "../../http/brandAPI";
import {SUCCESS_SEND_STATISTIC} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import {Context} from "../../index";


const Table = (props) => {
    const {user} = useContext(Context)
    const history = useHistory()
    const presentDate = new Date().toLocaleString('en', {year: "numeric"})
    let selectedYear = new Date(props.stateSelectYear * 1000).toLocaleString('en', {year: 'numeric'})
    const [filled, setFilled] = useState('')
    const [loadFilled, setLoadFilled] = useState(false)

    const [errorText, setErrorText] = useState('')

    useEffect(()=>{
        let dateNow = Math.round(new Date() / 1000)
        getFillingStatistic(dateNow).then((data) => {
            setFilled(data.data['filled'].filter(item => item.dealer.name === user.User.dealer && item.brand_id === props.brand_id))

            setLoadFilled(true)

        })
    },[])


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
                counter.timestamp = inputsActive[0].attributes['data-mouth'].value
                counter.brand_id = inputsActive[0].attributes['data-brand-id-set'].value
                sendData(counter).then()
            }
        }

    }

    const sendData = async (data) => {
        try {
            await sendStatic(data)
            history.push(SUCCESS_SEND_STATISTIC)
        } catch (e) {

            setErrorText(e.response.data)
            setTimeout(() => {
                setErrorText('')
            }, 2000);
        }

    }
    return (
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
                    errorText ?
                        <ErrorBlock errorText={errorText}/>
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
    );
};

export default Table;