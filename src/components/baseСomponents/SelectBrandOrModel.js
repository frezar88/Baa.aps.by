import React from 'react';
import {Button, Form} from "react-bootstrap";
import {CARS} from "../../utils/carsJSON";



const SelectBrandOrModel = (props) => {
    let newList = []
    for (let key in CARS.list) {
        newList.push({id:key,name:key})
    }

    function removeSelectBlock(e) {
        e.currentTarget.parentNode.remove()
    }

    return (
        <div className='for-select d-flex align-items-center mt-2'>
            <Form.Select required aria-label="brand" className={'selectBrand'}>
                <option>Выберите {props.type}</option>
                {newList.map(({id, name}) =>
                    <option key={id} value={id}>{name}</option>
                )}
            </Form.Select>
            <Button onClick={(e)=>removeSelectBlock(e)}  style={{width:38,height:38}}  className={' ms-1'} variant={"danger"}>-
               </Button>
        </div>
    );
};

export default SelectBrandOrModel;