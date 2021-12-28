import React, {useEffect, useState} from 'react';
import s from "../../TableModel.module.css";

const TableFooterLCVRow = (props) => {

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



        useEffect( () => {

                if (props.load) {
                        function setSum(path, state) {
                                let block = document.querySelectorAll(path)

                                let totalSum = 0
                                block.forEach(el => {
                                        totalSum += +el.innerHTML

                                })

                                return state(totalSum)
                        }
                        setSum('.lcv_body div[data-mount-id="1609448400"]', setStateJanuary)
                        setSum('.lcv_body div[data-mount-id="1612126800"]', setStateFebruary)
                        setSum('.lcv_body div[data-mount-id="1614546000"]', setStateMarch)
                        setSum('.lcv_body div[data-mount-id="1617224400"]', setStateApril)
                        setSum('.lcv_body div[data-mount-id="1619816400"]', setStateMay)
                        setSum('.lcv_body div[data-mount-id="1622494800"]', setStateJune)
                        setSum('.lcv_body div[data-mount-id="1625086800"]', setStateJuly)
                        setSum('.lcv_body div[data-mount-id="1627765200"]', setStateAugust)
                        setSum('.lcv_body div[data-mount-id="1630443600"]', setStateSeptember)
                        setSum('.lcv_body div[data-mount-id="1633035600"]', setStateOctober)
                        setSum('.lcv_body div[data-mount-id="1635714000"]', setStateNovember)
                        setSum('.lcv_body div[data-mount-id="1638306000"]', setStateDecember)
                        setSum('.lcv_body div.lcv-count-year', setStateTotal)
                }

        }, [props.load])


        return (
            <div className={s.table_footer_wrapper}>
                    <div className={s.footer_item}></div>
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
                    <div className={s.footer_item}>{stateTotal ? stateTotal :
                        stateJanuary + stateFebruary + stateMarch + stateApril + stateMay + stateJune + stateJuly + stateAugust + stateSeptember + stateOctober + stateNovember + stateDecember

                    }</div>
            </div>
        );
};

export default TableFooterLCVRow;