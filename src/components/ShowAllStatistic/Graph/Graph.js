import React, {useEffect} from 'react';
import {Form} from "react-bootstrap";
import BrandBar from "../../ChartGraphics/BrandBar";
import ModelPie from "../../ChartGraphics/ModelPie";
import LcvBar from "../../ChartGraphics/LcvBar";
import PcBar from "../../ChartGraphics/PcBar";

const Graph = ({setLoadDataDone,setYear,setMonth,monthArray,from,to}) => {
    useEffect(()=>{
        setLoadDataDone(true)
    },[])
    return (
        <div>
            <div>
                <div className='d-flex  justify-content-end '>
                    <div style={{width: '30%'}}>
                        <Form.Label style={{
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
                                defaultValue={'DEFAULT'}
                                className={'select_mouth'}
                                onInput={(e) => {
                                    setYear(e.target.value)
                                }}
                            >
                                <option disabled={true} value={'DEFAULT'}>Выберите Год</option>
                                <option value={'2021'}>2021</option>
                                <option value={'2020'}>2020</option>
                                <option value={'2019'}>2019</option>

                            </Form.Select>
                        </Form.Label>
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
                                defaultValue={'DEFAULT'}
                                className={'select_mouth'}
                                onInput={(e) => {
                                    setMonth(e.target.value)
                                }}
                            >
                                <option disabled={true} value={'DEFAULT'}>Выберите месяц
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
                    </div>
                </div>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridGap: 20,
                overflow: 'auto'
            }}>
                <BrandBar from={from} to={to}/>
                <ModelPie from={from} to={to}/>
                <LcvBar from={from} to={to}/>
                <PcBar from={from} to={to}/>
            </div>
        </div>
    );
};

export default Graph;