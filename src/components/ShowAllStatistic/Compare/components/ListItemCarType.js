import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";


const ListItemCarType = (props) => {


    return (

        <li >
            <Form.Select
                onInput={(e) => {
                    props.setType(e.target.value)
                }} className={'compare_select_brand ps-4 pe-5'}
                style={{width: '100%'}}
                value={props.value}
            >
                <option disabled={true} value={''}>Выберите тип</option>
                <option value={''}>ВСЕ</option>
                <option value={1}>PC</option>
                <option value={2}>LCV</option>
                <option value={3}>MCV</option>

            </Form.Select>
            <div className={'justify-content-center align-items-center'}>

                <Form.Label className="d-flex align-items-center justify-content-between m-0 mt-3">Выбрать год
                    <Form.Check
                        onChange={(e)=>{props.setStateInputOldYear(e.target.checked)}}
                        style={{width: '32px'}}
                        className='ps-2'
                        type="checkbox"
                        value={props.stateInputOldYear}
                    />

                </Form.Label>

                {
                    props.stateInputOldYear ?
                        <Form.Select onChange={(e)=>props.setCurrentYear(e.target.value)} defaultValue={'1609448400,1640984400,2021'} style={{maxHeight:40,maxWidth:'100%',marginTop:20}}>
                            {/*<option value={'1609448400,1640984400,2021'} >2021</option>*/}
                            <option value={'1609448400,1640984400,2021'} >2021</option>
                            <option value={'1577826000,1609448400,2020'} >2020</option>
                            <option value={'1546290000,1577826000,2019'}>2019</option>
                            {/*<option value={'1640984400,1672520400,2022'} >2022</option>*/}
                        </Form.Select>
                        :
                        false
                }
                <Form.Label style={{fontSize:13,width:'100%'}} className="d-flex align-items-center justify-content-between  m-0 mt-3 ">Отобразить цифры на графике
                    <Form.Check
                        style={{width: '32px'}}
                        className='ps-2 mini'
                        type="checkbox"
                        onChange={props.showNumbers}
                        variatn
                    />
                </Form.Label>
            </div>



        </li>

    );
};

export default ListItemCarType;