import React, {useEffect, useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import ListItemCarType from "./ListItemCarType";

const CompareTopBlockTypeBlock = (props) => {

    return (
        <div style={{paddingRight:16}}>
            {
                props.selectedBrands[1]
                ?
                    <div>
                        <Form.Label style={{fontWeight: 600, fontSize: 14,}}> Выберите тип авто:
                            <form>
                                <ul className='mt-3 p-0' style={{listStyle: 'none'}}>
                                    <ListItemCarType
                                        stateInputOldYear={props.stateInputOldYear}
                                        setStateInputOldYear={props.setStateInputOldYear}
                                        value={props.valueType}
                                        setType={props.setValueType}
                                    />
                                </ul>
                            </form>
                        </Form.Label>
                        <Button
                            onClick={props.eventBtn}
                            className={'mt-4'}
                            variant={"secondary"}
                            style={{display: 'block', width: '100%', height: '46px',}}>
                            {/*<Spinner animation={"grow"}/>*/} Сравнить
                        </Button>
                    </div>

                :
                false
            }

        </div>
    );
};

export default CompareTopBlockTypeBlock;