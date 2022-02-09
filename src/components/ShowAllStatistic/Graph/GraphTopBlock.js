import React from 'react';
import {Form, Spinner} from "react-bootstrap";

const GraphTopBlock = ({setYear,setMonth,setLoadBrand,setLoadModel,loadModel,year}) => {
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
    return (
        <div>
            <div>
                <div className='d-flex  justify-content-end '>
                    <div style={{width: '30%'}}>
                        <Form.Label style={{
                            marginTop:25,
                            fontWeight: 600,
                            fontSize: 16,
                            display: "flex",
                            alignItems: 'center',
                            flexBasis: '100%',
                            justifyContent: 'flex-end'
                        }}>
                            Выберите год
                            <Form.Select
                                style={{
                                    boxSizing: "border-box",
                                    maxWidth: 200,
                                    padding: '.05rem .25rem .10rem .75rem',
                                    marginLeft: '10px'
                                }}
                                // value={year}
                                disabled={loadModel}
                                defaultValue={'DEFAULT'}
                                className={'select_mouth'}
                                onInput={(e) => {
                                    setYear(e.target.value)
                                    setLoadBrand(false)
                                    setLoadModel(true)
                                }}
                            >
                                <option disabled={true} value={'DEFAULT'}>Выберите Год</option>
                                <option value={'2022'}>2022</option>
                                <option value={'2021'}>2021</option>
                                <option value={'2020'}>2020</option>
                                <option value={'2019'}>2019</option>

                            </Form.Select>
                        </Form.Label>
                        {
                            year ?
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
                                        // value={month}
                                        defaultValue={0}
                                        disabled={loadModel}
                                        className={'select_mouth'}
                                        onInput={(e) => {
                                            setMonth(e.target.value)
                                            setLoadBrand(false)
                                            setLoadModel(true)
                                        }}
                                    >
                                        <option disabled={false} value={0}>Выберите месяц
                                        </option>
                                        {
                                            monthArray[0] ? monthArray.map((({id, name, code}) =>
                                                        <option key={id} value={id}>{name}</option>
                                                ))
                                                :
                                                false
                                        }
                                    </Form.Select>
                                </Form.Label>
                                :
                                false
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphTopBlock;