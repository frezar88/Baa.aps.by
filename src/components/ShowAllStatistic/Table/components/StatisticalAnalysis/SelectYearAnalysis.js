import React from 'react';
import {Form} from "react-bootstrap";

const SelectYearAnalysis = ({value,setValue}) => {
    return (
        <div>
            <Form style={{display:'flex',gap:'20px',alignItems:'center'}}>
                <Form.Select value={value} onChange={(e)=>setValue(e.target.value)} style={{width:'100%',minWidth:120}} >
                    <option value={''}>Прошлый месяц</option>
                    <option value={'1640984400'}>январь</option>
                    <option value={'1643662800'}>февраль</option>
                    <option value={'1646082000'}>март</option>
                    <option value={'1648760400'}>апрель</option>
                    <option value={'1651352400'}>май</option>
                    <option value={'1654030800'}>июнь</option>
                    <option value={'1656622800'}>июль</option>
                    <option value={'1659301200'}>август</option>
                    <option value={'1661979600'}>сентабрь</option>
                    <option value={'1664571600'}>октябрь</option>
                    <option value={'1667250000'}>ноябрь</option>
                    <option value={'1669842000'}>декабрь</option>
                </Form.Select>
            </Form>
        </div>
    );
};

export default SelectYearAnalysis;