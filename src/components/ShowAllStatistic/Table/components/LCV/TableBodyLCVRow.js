import React, {useContext, useEffect, useState} from 'react';
import s from "../../TableModel.module.css";
import {Context} from "../../../../../index";
import {CURRENT_YEAR_MONTH, PREVIOUS_YEAR_MONTH, YEAR_MONTH_2019, YEAR_MONTH_2020} from "../../../../../utils/consts";


const TableBodyLCVRow = ({data, car, key, load, setLoad,stateYear}) => {
    const {brandModel} = useContext(Context)
    let brandName = brandModel.IsBrand.find((item) => item.id === car.model.brand_id)
    const [type, setType] = useState('')

    const typef = (car) => {
        if (+car === 1) {
            return setType('PC')
        } else if (+car === 2) {
            return setType('LCV')
        } else {
            return setType('MCV')
        }
    }

    const [totalSum, setTotalSum] = useState(0)
    useEffect(() => {
        let sum = 0
        data.forEach(el => {

            let block = document.querySelector(`div.lcv[data-lcv-id="${el.car_id}"][data-mount-id="${el.date}"]`)
            if (block) {
                block.style.color = '#000'
                block.style.fontWeight = 500
                block.innerHTML = el.value
                sum += +el.value
            }


        })

        setTotalSum(sum)
        typef(car['car_type_id'])
        if (!load) {
            setLoad(true)
        }
    }, [stateYear])


    return (
        <>
            {
                stateYear === CURRENT_YEAR_MONTH.january
                    ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum,}}>
                        {/*<div className={s.table_body_wrapper} style={{order:'-'+totalSum,display:totalSum ===0? 'none':'false'}}>*/}
                        {/*<div data-lcv-id={car.id} className={s.body_item + ' lcv'}>{type}</div>*/}
                        <div data-lcv-id={car.id}
                             className={s.body_item + ' lcv-brand' + ' brand_name_block'}>{brandName.name}</div>
                        <div data-lcv-id={car.id}
                             className={s.body_item + ' lcv-model' + ' model_name_block'}>{car.name}</div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.january}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.february}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.march}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.april}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.may}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.june}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.july}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.august}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.september}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.october}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.november}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={car.id} data-mount-id={CURRENT_YEAR_MONTH.december}
                             className={s.body_item + ' lcv'}>0
                        </div>
                        <div data-lcv-id={'brand_id'} className={s.body_item + ' lcv-count-year'}>{totalSum}</div>

                    </div>
                    : ''
            }
            {
                stateYear === PREVIOUS_YEAR_MONTH.january
                    ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum,}}>
                        {/*<div className={s.table_body_wrapper} style={{order:'-'+totalSum,display:totalSum ===0? 'none':'false'}}>*/}
                        {/*<div data-lcv-id={car.id} className={s.body_item + ' lcv'}>{type}</div>*/}
                        <div data-lcv-id={car.id}
                             className={s.body_item + ' lcv-brand' + ' brand_name_block'}>{brandName.name}</div>
                        <div data-lcv-id={car.id} className={s.body_item + ' lcv-model' + ' model_name_block'}>{car.name}</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.january} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.february} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.march} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.april} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.may} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.june} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.july} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.august} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.september} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.october} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.november} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={PREVIOUS_YEAR_MONTH.december} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={'brand_id'} className={s.body_item + ' lcv-count-year'}>{totalSum}</div>
                    </div>
                    : ''
            }
            {
                stateYear === YEAR_MONTH_2020.january
                    ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum,}}>
                        {/*<div className={s.table_body_wrapper} style={{order:'-'+totalSum,display:totalSum ===0? 'none':'false'}}>*/}
                        {/*<div data-lcv-id={car.id} className={s.body_item + ' lcv'}>{type}</div>*/}
                        <div data-lcv-id={car.id}
                             className={s.body_item + ' lcv-brand' + ' brand_name_block'}>{brandName.name}</div>
                        <div data-lcv-id={car.id} className={s.body_item + ' lcv-model' + ' model_name_block'}>{car.name}</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.january} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.february} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.march} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.april} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.may} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.june} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.july} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.august} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.september} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.october} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.november} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2020.december} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={'brand_id'} className={s.body_item + ' lcv-count-year'}>{totalSum}</div>
                    </div>
                    : ''
            }
            {
                stateYear === YEAR_MONTH_2019.january
                    ?
                    <div className={s.table_body_wrapper} style={{order: '-' + totalSum,}}>
                        {/*<div className={s.table_body_wrapper} style={{order:'-'+totalSum,display:totalSum ===0? 'none':'false'}}>*/}
                        {/*<div data-lcv-id={car.id} className={s.body_item + ' lcv'}>{type}</div>*/}
                        <div data-lcv-id={car.id}
                             className={s.body_item + ' lcv-brand' + ' brand_name_block'}>{brandName.name}</div>
                        <div data-lcv-id={car.id} className={s.body_item + ' lcv-model' + ' model_name_block'}>{car.name}</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.january} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.february} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.march} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.april} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.may} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.june} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.july} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.august} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.september} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.october} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.november} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={car.id} data-mount-id={YEAR_MONTH_2019.december} className={s.body_item + ' lcv'}>0</div>
                        <div data-lcv-id={'brand_id'} className={s.body_item + ' lcv-count-year'}>{totalSum}</div>
                    </div>
                    : ''
            }


        </>

    );
};

export default TableBodyLCVRow;