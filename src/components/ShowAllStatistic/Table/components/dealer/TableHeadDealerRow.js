import React, {useState} from 'react';
import s from "../../TableDealer.module.css";
import {
    CURRENT_YEAR_MONTH,
    HIGHT_LIGHT_BACKGROUDN_COLOR,
    PREVIOUS_YEAR_MONTH,
    YEAR_MONTH_2019, YEAR_MONTH_2020
} from "../../../../../utils/consts";

const TableHeadDealerRow = ({stateYear}) => {
    let [status, setStatus] = useState()
    let statusSort = 0;

    function sortString(path) {

        let block = document.querySelectorAll(path)
        let arr = []
        block.forEach(el => {
            arr.push(el)
        })
        if (!statusSort) {
            arr.sort(function (a, b) {
                return a.innerHTML.localeCompare(b.innerHTML)
            })
            statusSort = 1
        } else {
            arr.sort(function (a, b) {
                return b.innerHTML.localeCompare(a.innerHTML)
            })
            statusSort = 0
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i].parentNode.style.order = i
        }
    }

    function sortDealer(path) {
        let block = document.querySelectorAll(path)
        let arr = []
        block.forEach(el => {
            arr.push(el)
        })
        if (!statusSort) {

            arr.sort(function (a, b) {
                let x =a.innerHTML.replaceAll('"', '').slice(0,6).toLocaleLowerCase().localeCompare(b.innerHTML.replaceAll('"', '').slice(0,6).toLocaleLowerCase())

                return x
            })
            statusSort = 1
        } else {
            arr.sort(function (a, b) {
                return b.innerHTML.replaceAll('"', '').slice(0,6).toLocaleLowerCase().localeCompare(a.innerHTML.replaceAll('"', '').slice(0,6).toLocaleLowerCase())
            })
            statusSort = 0
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i].parentNode.style.order = i
        }
    }

    const sort = (e, mouth, str) => {


        let block;
        if (!str) {
            block = document.querySelectorAll('div[data-mount-id="' + mouth + '"][data-dealer-id]')
        } else {
            block = document.querySelectorAll('div.' + mouth)
        }
        let arr = []
        block.forEach((el) => {
            arr.push(el)
        })
        if (!str) {
            if (!statusSort) {
                arr.sort(function (a, b) {
                    return b.innerHTML - a.innerHTML
                })
                for (let i = 0; i < arr.length; i++) {
                    arr[i].parentNode.style.order = i
                }
                statusSort = 1
            } else {
                arr.sort(function (a, b) {
                    return a.innerHTML - b.innerHTML
                })
                for (let i = 0; i < arr.length; i++) {
                    arr[i].parentNode.style.order = i
                }
                statusSort = 0
            }
        } else {
            if (!statusSort) {
                arr.sort(function (a, b) {

                    return a.innerHTML - b.innerHTML
                })
                for (let i = 0; i < arr.length; i++) {
                    arr[i].parentNode.style.order = i
                }
                statusSort = 1
            } else {
                arr.sort(function (a, b) {
                    return a.innerHTML - b.innerHTML
                })
                for (let i = 0; i < arr.length; i++) {
                    arr[i].parentNode.style.order = '-' + i
                }
                statusSort = 0
            }
        }
        setStatus(e.target)
    }

    const highLightSortBlock = (mouth, e) => {
        let allBlockMonth = document.querySelectorAll('div[data-dealer-id]')
        let allBlockBrandName = document.querySelectorAll('div.dealer_name_block')
        let allBlockModelName = document.querySelectorAll('div.model_name_block')


        removeHighLightBack(allBlockMonth, allBlockBrandName, allBlockModelName)
        addHighLightArrow(e)
        if (mouth) {
            let block = document.querySelectorAll('div[data-mount-id="' + mouth + '"][data-dealer-id]')

            addHighLightBack(block)
        } else {

            if (!e.target.attributes['data-type']) {
                let dealerNameBlock = document.querySelectorAll('div.dealer_name_block')
                let allBlockModelName = document.querySelectorAll('div.model_name_block')
                if(e.target.attributes['data-name']){
                    if (e.target.attributes['data-name'].value === 'dealer_name_block') {
                        if (dealerNameBlock[0])
                            dealerNameBlock.forEach((el) => {
                                el.style.background = HIGHT_LIGHT_BACKGROUDN_COLOR
                            })
                    }
                    if (e.target.attributes['data-name'].value === 'model_name_block') {
                        if (allBlockModelName[0]) {
                            allBlockModelName.forEach((el) => {
                                el.style.background = HIGHT_LIGHT_BACKGROUDN_COLOR
                            })
                        }
                    }
                }

            }
        }
    }

    const removeHighLightBack = (allBlock, allBlockBrandName, allBlockModelName) => {
        allBlock.forEach((el) => {
            if (el.attributes['data-mount-id']) {
                if (el.attributes['data-mount-id'].value !== 'countYear') {
                    el.style.background = '#fff'
                }
            }
        })
        allBlockBrandName.forEach((el) => {
            el.style.background = '#fff'
        })
        allBlockModelName.forEach((el) => {
            el.style.background = '#fff'
        })


    }
    const addHighLightBack = (block) => {
        if (block[0]) {
            block.forEach((el) => {
                el.style.background = '#a5ffa5'
            })
        }
    }
    const addHighLightArrow = (e) => {
        let allHeaderBlock = document.querySelectorAll('div.dealer_top_block')
        if (allHeaderBlock[0]) {

            allHeaderBlock.forEach(el => {

                el.innerHTML = el.innerHTML.replaceAll(' ↓', '')
            })
        }
        e.target.innerHTML += ' ↓'
    }
    return (
        <>
            {
                stateYear == CURRENT_YEAR_MONTH.january
                ?
                    <div className={s.table_head}>
                        <div></div>
                        <div onClick={(e) => {
                            sortDealer('div.dealer-name')
                            highLightSortBlock('',e)
                        }}data-name={'dealer_name_block'} className={s.head_item + ' dealer_top_block'}>Дилер
                        </div>
                        <div onClick={(e) => {
                            sortString('div.dealer-brand')
                            highLightSortBlock('',e)
                        }}data-name={'model_name_block'} className={s.head_item + ' dealer_top_block'}>Бренд
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.january)
                            highLightSortBlock(CURRENT_YEAR_MONTH.january,e)
                        }} className={s.head_item + ' dealer_top_block'}>янв.
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.february)
                            highLightSortBlock(CURRENT_YEAR_MONTH.february,e)
                        }} className={s.head_item + ' dealer_top_block'}>фев.
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.march)
                            highLightSortBlock(CURRENT_YEAR_MONTH.march,e)
                        }} className={s.head_item + ' dealer_top_block'}>март
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.april)
                            highLightSortBlock(CURRENT_YEAR_MONTH.april,e)
                        }} className={s.head_item + ' dealer_top_block'}>апр.
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.may)
                            highLightSortBlock(CURRENT_YEAR_MONTH.may,e)
                        }} className={s.head_item + ' dealer_top_block'}>май
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.june)
                            highLightSortBlock(CURRENT_YEAR_MONTH.june,e)
                        }} className={s.head_item + ' dealer_top_block'}>июнь
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.july)
                            highLightSortBlock(CURRENT_YEAR_MONTH.july,e)
                        }} className={s.head_item + ' dealer_top_block'}>июль
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.august)
                            highLightSortBlock(CURRENT_YEAR_MONTH.august,e)
                        }} className={s.head_item + ' dealer_top_block'}>авг.
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.september)
                            highLightSortBlock(CURRENT_YEAR_MONTH.september,e)
                        }} className={s.head_item + ' dealer_top_block'}>сен.
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.october)
                            highLightSortBlock(CURRENT_YEAR_MONTH.october,e)
                        }} className={s.head_item + ' dealer_top_block'}>окт.
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.november)
                            highLightSortBlock(CURRENT_YEAR_MONTH.november,e)
                        }} className={s.head_item + ' dealer_top_block'}>ноя.
                        </div>
                        <div onClick={(e) => {
                            sort(e, CURRENT_YEAR_MONTH.december)
                            highLightSortBlock(CURRENT_YEAR_MONTH.december,e)
                        }} className={s.head_item + ' dealer_top_block'}>дек.
                        </div>
                        <div onClick={(e) => {
                            sort(e, 'brand-count-year', 1)
                            highLightSortBlock('',e)
                        }} className={s.head_item + ' dealer_top_block'}>ИТОГО
                        </div>
                    </div>
                    :''
            }
            {
                stateYear == PREVIOUS_YEAR_MONTH.january
                    ?
                    <div className={s.table_head}>
                        <div></div>
                        <div onClick={(e) => {
                            sortDealer('div.dealer-name')
                            highLightSortBlock('',e)
                        }}data-name={'dealer_name_block'} className={s.head_item + ' dealer_top_block'}>Дилер
                        </div>
                        <div onClick={(e) => {
                            sortString('div.dealer-brand')
                            highLightSortBlock('',e)
                        }}data-name={'model_name_block'} className={s.head_item + ' dealer_top_block'}>Бренд
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.january)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.january,e)
                        }} className={s.head_item + ' dealer_top_block'}>янв.
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.february)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.february,e)
                        }} className={s.head_item + ' dealer_top_block'}>фев.
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.march)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.march,e)
                        }} className={s.head_item + ' dealer_top_block'}>март
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.april)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.april,e)
                        }} className={s.head_item + ' dealer_top_block'}>апр.
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.may)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.may,e)
                        }} className={s.head_item + ' dealer_top_block'}>май
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.june)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.june,e)
                        }} className={s.head_item + ' dealer_top_block'}>июнь
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.july)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.july,e)
                        }} className={s.head_item + ' dealer_top_block'}>июль
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.august)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.august,e)
                        }} className={s.head_item + ' dealer_top_block'}>авг.
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.september)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.september,e)
                        }} className={s.head_item + ' dealer_top_block'}>сен.
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.october)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.october,e)
                        }} className={s.head_item + ' dealer_top_block'}>окт.
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.november)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.november,e)
                        }} className={s.head_item + ' dealer_top_block'}>ноя.
                        </div>
                        <div onClick={(e) => {
                            sort(e, PREVIOUS_YEAR_MONTH.december)
                            highLightSortBlock(PREVIOUS_YEAR_MONTH.december,e)
                        }} className={s.head_item + ' dealer_top_block'}>дек.
                        </div>
                        <div onClick={(e) => {
                            sort(e, 'brand-count-year', 1)
                            highLightSortBlock('',e)
                        }} className={s.head_item + ' dealer_top_block'}>ИТОГО
                        </div>
                    </div>
                    :''
            }
            {
                stateYear == YEAR_MONTH_2020.january
                    ?
                    <div className={s.table_head}>
                        <div></div>
                        <div onClick={(e) => {
                            sortDealer('div.dealer-name')
                            highLightSortBlock('',e)
                        }}data-name={'dealer_name_block'} className={s.head_item + ' dealer_top_block'}>Дилер
                        </div>
                        <div onClick={(e) => {
                            sortString('div.dealer-brand')
                            highLightSortBlock('',e)
                        }}data-name={'model_name_block'} className={s.head_item + ' dealer_top_block'}>Бренд
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.january)
                            highLightSortBlock(YEAR_MONTH_2020.january,e)
                        }} className={s.head_item + ' dealer_top_block'}>янв.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.february)
                            highLightSortBlock(YEAR_MONTH_2020.february,e)
                        }} className={s.head_item + ' dealer_top_block'}>фев.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.march)
                            highLightSortBlock(YEAR_MONTH_2020.march,e)
                        }} className={s.head_item + ' dealer_top_block'}>март
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.april)
                            highLightSortBlock(YEAR_MONTH_2020.april,e)
                        }} className={s.head_item + ' dealer_top_block'}>апр.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.may)
                            highLightSortBlock(YEAR_MONTH_2020.may,e)
                        }} className={s.head_item + ' dealer_top_block'}>май
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.june)
                            highLightSortBlock(YEAR_MONTH_2020.june,e)
                        }} className={s.head_item + ' dealer_top_block'}>июнь
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.july)
                            highLightSortBlock(YEAR_MONTH_2020.july,e)
                        }} className={s.head_item + ' dealer_top_block'}>июль
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.august)
                            highLightSortBlock(YEAR_MONTH_2020.august,e)
                        }} className={s.head_item + ' dealer_top_block'}>авг.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.september)
                            highLightSortBlock(YEAR_MONTH_2020.september,e)
                        }} className={s.head_item + ' dealer_top_block'}>сен.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.october)
                            highLightSortBlock(YEAR_MONTH_2020.october,e)
                        }} className={s.head_item + ' dealer_top_block'}>окт.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.november)
                            highLightSortBlock(YEAR_MONTH_2020.november,e)
                        }} className={s.head_item + ' dealer_top_block'}>ноя.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2020.december)
                            highLightSortBlock(YEAR_MONTH_2020.december,e)
                        }} className={s.head_item + ' dealer_top_block'}>дек.
                        </div>
                        <div onClick={(e) => {
                            sort(e, 'brand-count-year', 1)
                            highLightSortBlock('',e)
                        }} className={s.head_item + ' dealer_top_block'}>ИТОГО
                        </div>
                    </div>
                    :''
            }
            {
                stateYear == YEAR_MONTH_2019.january
                    ?
                    <div className={s.table_head}>
                        <div></div>
                        <div onClick={(e) => {
                            sortDealer('div.dealer-name')
                            highLightSortBlock('',e)
                        }}data-name={'dealer_name_block'} className={s.head_item + ' dealer_top_block'}>Дилер
                        </div>
                        <div onClick={(e) => {
                            sortString('div.dealer-brand')
                            highLightSortBlock('',e)
                        }}data-name={'model_name_block'} className={s.head_item + ' dealer_top_block'}>Бренд
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.january)
                            highLightSortBlock(YEAR_MONTH_2019.january,e)
                        }} className={s.head_item + ' dealer_top_block'}>янв.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.february)
                            highLightSortBlock(YEAR_MONTH_2019.february,e)
                        }} className={s.head_item + ' dealer_top_block'}>фев.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.march)
                            highLightSortBlock(YEAR_MONTH_2019.march,e)
                        }} className={s.head_item + ' dealer_top_block'}>март
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.april)
                            highLightSortBlock(YEAR_MONTH_2019.april,e)
                        }} className={s.head_item + ' dealer_top_block'}>апр.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.may)
                            highLightSortBlock(YEAR_MONTH_2019.may,e)
                        }} className={s.head_item + ' dealer_top_block'}>май
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.june)
                            highLightSortBlock(YEAR_MONTH_2019.june,e)
                        }} className={s.head_item + ' dealer_top_block'}>июнь
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.july)
                            highLightSortBlock(YEAR_MONTH_2019.july,e)
                        }} className={s.head_item + ' dealer_top_block'}>июль
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.august)
                            highLightSortBlock(YEAR_MONTH_2019.august,e)
                        }} className={s.head_item + ' dealer_top_block'}>авг.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.september)
                            highLightSortBlock(YEAR_MONTH_2019.september,e)
                        }} className={s.head_item + ' dealer_top_block'}>сен.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.october)
                            highLightSortBlock(YEAR_MONTH_2019.october,e)
                        }} className={s.head_item + ' dealer_top_block'}>окт.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.november)
                            highLightSortBlock(YEAR_MONTH_2019.november,e)
                        }} className={s.head_item + ' dealer_top_block'}>ноя.
                        </div>
                        <div onClick={(e) => {
                            sort(e, YEAR_MONTH_2019.december)
                            highLightSortBlock(YEAR_MONTH_2019.december,e)
                        }} className={s.head_item + ' dealer_top_block'}>дек.
                        </div>
                        <div onClick={(e) => {
                            sort(e, 'brand-count-year', 1)
                            highLightSortBlock('',e)
                        }} className={s.head_item + ' dealer_top_block'}>ИТОГО
                        </div>
                    </div>
                    :''
            }


        </>

    );
};

export default TableHeadDealerRow;