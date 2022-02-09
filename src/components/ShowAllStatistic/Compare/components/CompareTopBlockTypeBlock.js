import React, {useEffect, useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import ListItemCarType from "./ListItemCarType";

const CompareTopBlockTypeBlock = (props) => {

    return (
        <div style={{paddingRight:0,flexBasis:'20%'}}>
            {
                props.selectedBrands[1]
                ?
                    <div>

                        <Form.Label style={{fontWeight: 600, fontSize: 14,width:'100%'}}> Выберите тип авто:
                            <form>
                                <ul className='mt-3 p-0' style={{listStyle: 'none'}}>

                                    <ListItemCarType
                                        showNumbers={props.showNumbers}
                                        setCurrentYear={props.setCurrentYear}
                                        stateInputOldYear={props.stateInputOldYear}
                                        setStateInputOldYear={props.setStateInputOldYear}
                                        value={props.valueType}
                                        setType={props.setValueType}
                                    />

                                </ul>
                            </form>
                        </Form.Label>


                        <Button
                            disabled={props.blockedButton}
                            onClick={props.eventBtn}
                            className={'mt-4'}
                            variant={"primary"}
                            style={{display: 'block', width: '100%', height: '46px',}}>
                            {
                                props.blockedButton ? <Spinner animation={"grow"}/> : 'Сравнить'
                            }


                        </Button>
                    </div>

                :
                false
            }

        </div>
    );
};

export default CompareTopBlockTypeBlock;