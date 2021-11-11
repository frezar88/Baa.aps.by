import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {COLORS_COMPARE_BLOCK} from "../../../../utils/consts";


const ListItemBrandSecond = (props) => {
    useEffect(() => {
        let colorDefault = COLORS_COMPARE_BLOCK[Math.round(Math.random() * COLORS_COMPARE_BLOCK.length - 1)]
        props.setColor(colorDefault)
    }, [])


    return (

        <li className={' align-items-center pb-2 '} style={{display: 'grid', gridAutoFlow: 'column'}}>
            <Form.Select style={{maxWidth: '196px'}} value={props.value} className={'compare_select_brand ps-4 pe-5'}
                         onChange={(e) => props.setValue(e.target.value)}
            >
                <option disabled={false} value={''}>Выберите бренд</option>
                {
                    props.brands
                        ?
                        props.brands.map((({id, name}) =>
                                <option key={id} value={id + ' ' + name}>{name}</option>
                        ))
                        :
                        false

                }

            </Form.Select>
            <div className={'ms-4'} style={{
                display: 'grid',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gridTemplateColumns: '320px ',
                gridGap: '10px'
            }}>
                {
                    props.value
                        ?
                        <input value={props.color ? props.color : 'false'}
                               onChange={(e) => props.setColor(e.target.value)}
                               style={{width: 30, height: 25}}
                               type={'color'}/>
                        :
                        false
                }
                {/*<Form.Label className="align-items-center m-0 ms-4" style={{display: 'grid', gridAutoFlow: 'column'}}>отобразить*/}
                {/*    <Form.Check onClick={(e) => alert('f')} className='ps-2' type="checkbox"/>*/}
                {/*</Form.Label>*/}
            </div>
        </li>
    );
};

export default ListItemBrandSecond;