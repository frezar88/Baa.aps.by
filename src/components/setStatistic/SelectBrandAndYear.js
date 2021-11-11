import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {getCars} from "../../http/brandAPI";

const SelectBrandAndYear = (props) => {
    const [userBrand, setUserBrand] = useState([])
    const [load, setLoad] = useState(false)
    const [defaultBrandValue, setDefaultBranValue] = useState()

    useEffect(() => {
        if (!load) {
            let checkArray = []
            let userBrand = []
            getCars().then(data => {
                    data.data.forEach(el => {
                        if (checkArray.indexOf(el.model.brand.name) === -1) {
                            checkArray.push(el.model.brand.name)
                            userBrand.push(el.model.brand)
                        }
                    })

                    setUserBrand(userBrand)
                    setLoad(true)
                    setDefaultBranValue(userBrand[0].id)
                    props.stateBrand(userBrand[0].id)
                }
            ).finally(()=>{
                props.loadComponents(true)
            })
        }

    }, [])


    return (
        <div style={{display: 'grid', gridTemplateColumns: '350px 1fr'}}>
            <div>
                <Form.Label style={{
                    fontWeight: 600,
                    fontSize: 16,
                    display: "flex",
                    alignItems: 'center',
                    color:'#fff'
                }}>
                    Выберите бренд
                    <Form.Select
                        style={{
                            boxSizing: "border-box",
                            maxWidth: 200,
                            padding: '.05rem .25rem .10rem .75rem',
                            marginLeft: '10px'
                        }}
                        className={'select_mouth'}
                        defaultValue={defaultBrandValue}
                        onChange={(e) => props.stateBrand(e.target['value'])}
                    >
                        {
                            userBrand ? userBrand.map((({id, name}) =>
                                        <option key={id} value={id}>{name}</option>
                                ))
                                : false
                        }
                    </Form.Select>
                </Form.Label>
            </div>
            <div>
                <Form.Label style={{
                    fontWeight: 600,
                    fontSize: 16,
                    display: "flex",
                    alignItems: 'center',
                    color:'#fff'

                }}>
                    год
                    <Form.Select
                        style={{
                            boxSizing: "border-box",
                            maxWidth: 200,
                            padding: '.05rem .25rem .10rem .75rem',
                            marginLeft: '12px'
                        }}
                        className={'select_mouth'}
                        defaultValue={'1609448400'}
                        onChange={(e) => props.stateYear(e.target['value'])}

                    >
                        <option value="1609448400">2021</option>
                        <option value="1640984400">2020</option>

                    </Form.Select>
                </Form.Label>
            </div>

        </div>
    );
};

export default SelectBrandAndYear;