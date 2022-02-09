import React, {useEffect, useState} from 'react';
import s from "../../TableModel.module.css";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH} from "../../../../../utils/consts";

const TableFooterPCRow = (props) => {

    const [stateTotal, setStateTotal] = useState()
    const [stateJanuary, setStateJanuary] = useState()
    const [stateFebruary, setStateFebruary] = useState()
    const [stateMarch, setStateMarch] = useState()
    const [stateApril, setStateApril] = useState()
    const [stateMay, setStateMay] = useState()
    const [stateJune, setStateJune] = useState()
    const [stateJuly, setStateJuly] = useState()
    const [stateAugust, setStateAugust] = useState()
    const [stateSeptember, setStateSeptember] = useState()
    const [stateOctober, setStateOctober] = useState()
    const [stateNovember, setStateNovember] = useState()
    const [stateDecember, setStateDecember] = useState()


    useEffect(() => {
        if (props.load) {
            function setSum(path, state) {
                let block = document.querySelectorAll(path)

                let totalSum = 0
                block.forEach(el => {
                    totalSum += +el.innerHTML
                })

                return state(totalSum)
            }

            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.january  : PREVIOUS_YEAR_MONTH.january}"]`, setStateJanuary)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.february : PREVIOUS_YEAR_MONTH.february}"]`, setStateFebruary)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.march : PREVIOUS_YEAR_MONTH.march}"]`, setStateMarch)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.april : PREVIOUS_YEAR_MONTH.april}"]`, setStateApril)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.may : PREVIOUS_YEAR_MONTH.may}"]`, setStateMay)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.june : PREVIOUS_YEAR_MONTH.june}"]`, setStateJune)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.july : PREVIOUS_YEAR_MONTH.july}"]`, setStateJuly)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.august : PREVIOUS_YEAR_MONTH.august}"]`, setStateAugust)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.september : PREVIOUS_YEAR_MONTH.september}"]`, setStateSeptember)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.october : PREVIOUS_YEAR_MONTH.october}"]`, setStateOctober)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.november : PREVIOUS_YEAR_MONTH.november}"]`, setStateNovember)
            setSum(`.pc_body div[data-mount-id="${props.stateYear == CURRENT_YEAR_MONTH.january ? CURRENT_YEAR_MONTH.december : PREVIOUS_YEAR_MONTH.december}"]`, setStateDecember)
            setSum('.pc_body div.pc-count-year', setStateTotal)
        }

    }, [props.load])


    return (
        <div className={s.table_footer_wrapper}>
            <div></div>
            {/*<div className={s.footer_item}></div>*/}
            <div className={s.footer_item}></div>
            <div className={s.footer_item}></div>
            <div className={s.footer_item}>{stateJanuary}</div>
            <div className={s.footer_item}>{stateFebruary}</div>
            <div className={s.footer_item}>{stateMarch}</div>
            <div className={s.footer_item}>{stateApril}</div>
            <div className={s.footer_item}>{stateMay}</div>
            <div className={s.footer_item}>{stateJune}</div>
            <div className={s.footer_item}>{stateJuly}</div>
            <div className={s.footer_item}>{stateAugust}</div>
            <div className={s.footer_item}>{stateSeptember}</div>
            <div className={s.footer_item}>{stateOctober}</div>
            <div className={s.footer_item}>{stateNovember}</div>
            <div className={s.footer_item}>{stateDecember}</div>
            <div className={s.footer_item}>{stateJanuary+stateFebruary+stateMarch+stateApril+stateMay+stateJune+stateJuly+stateAugust+stateSeptember+stateOctober+stateNovember+stateDecember}</div>
        </div>
    );
};

export default TableFooterPCRow;