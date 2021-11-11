import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";


const ListItemCarType = (props) => {


    return (

        <li >
            <Form.Select
                onInput={(e) => {
                    props.setType(e.target.value)
                }} className={'compare_select_brand ps-4 pe-5'}
                style={{width: 195}}
                value={props.value}
            >
                <option disabled={true} value={''}>Выберите тип</option>
                <option value={''}>ВСЕ</option>
                <option value={1}>PC</option>
                <option value={2}>LCV</option>
                <option value={3}>MCV</option>

            </Form.Select>
            <Form.Label className="d-flex align-items-center m-0 mt-3">Данные за прошлый год
                <Form.Check
                    onChange={(e)=>{props.setStateInputOldYear(e.target.checked)}}
                    style={{width: '20px'}}
                    className='ps-2'
                    type="checkbox"
                    value={props.stateInputOldYear}
                />
            </Form.Label>
        </li>

    );
};

export default ListItemCarType;