import React from 'react';
import {Button} from "react-bootstrap";

const BtnSaveStatistic = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <Button onClick={(e)=>props.callback(e)} variant={"success"}>Сохранить
                статистику</Button>
        </div>
    );
};

export default BtnSaveStatistic;