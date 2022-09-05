import React, {useState} from 'react';
import s from "../../TableBrand.module.css";
import {CURRENT_YEAR_MONTH, HIGHT_LIGHT_BACKGROUDN_COLOR, PREVIOUS_YEAR_MONTH} from "../../../../../utils/consts";


const TableHeadRow = ({stateYear}) => {
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

    const sort = (e, mouth, str) => {
        let block;
        if (!str) {
            block = document.querySelectorAll('div[data-mount-id="' + mouth + '"][data-brand-id]')
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
        let allBlockMonth = document.querySelectorAll('div[data-brand-id]')
        let allBlockBrandName = document.querySelectorAll('div.brand_name_block')

        addHighLightArrow(e)
        removeHighLightBack(allBlockMonth, allBlockBrandName)
        if (mouth) {
            let block = document.querySelectorAll('div[data-mount-id="' + mouth + '"][data-brand-id]')

            addHighLightBack(block)
        } else {
            if (!e.target.attributes['data-type']) {
                let brandNameBlock = document.querySelectorAll('div.brand_name_block')
                if (brandNameBlock[0]) {
                    brandNameBlock.forEach((el) => {
                        el.style.background = HIGHT_LIGHT_BACKGROUDN_COLOR
                    })
                }
            }
        }
    }
    const removeHighLightBack = (allBlock, allBlockBrandName) => {
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

    }
    const addHighLightBack = (block) => {
        if (block[0]) {
            block.forEach((el) => {
                el.style.background = '#a5ffa5'
            })
        }
    }
    const addHighLightArrow = (e) => {
        let allHeaderBlock = document.querySelectorAll('div.brand_top_block')
        if (allHeaderBlock[0]) {

            allHeaderBlock.forEach(el => {
                console.log(el.innerHTML)
                el.innerHTML = el.innerHTML.replaceAll(' ↓', '')
            })
        }
        e.target.innerHTML += ' ↓'
    }

    if (stateYear == CURRENT_YEAR_MONTH.january) {
        return (
            <div className={s.table_head}>
                <div></div>
                <div onClick={(e) => {
                    sortString('div.header-brand')
                    highLightSortBlock('', e)
                }} className={s.head_item + ' brand_top_block'}>Бренд
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.january)
                    highLightSortBlock(CURRENT_YEAR_MONTH.january, e)
                }} className={s.head_item + ' brand_top_block'}>янв.
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.february)
                    highLightSortBlock(CURRENT_YEAR_MONTH.february, e)
                }} className={s.head_item + ' brand_top_block'}>фев.
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.march)
                    highLightSortBlock(CURRENT_YEAR_MONTH.march, e)
                }} className={s.head_item + ' brand_top_block'}>март
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.april)
                    highLightSortBlock(CURRENT_YEAR_MONTH.april, e)
                }} className={s.head_item + ' brand_top_block'}>апр.
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.may)
                    highLightSortBlock(CURRENT_YEAR_MONTH.may, e)
                }} className={s.head_item + ' brand_top_block'}>май
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.june)
                    highLightSortBlock(CURRENT_YEAR_MONTH.june, e)
                }} className={s.head_item + ' brand_top_block'}>июнь
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.july)
                    highLightSortBlock(CURRENT_YEAR_MONTH.july, e)
                }} className={s.head_item + ' brand_top_block'}>июль
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.august)
                    highLightSortBlock(CURRENT_YEAR_MONTH.august, e)
                }} className={s.head_item + ' brand_top_block'}>авг.
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.september)
                    highLightSortBlock(CURRENT_YEAR_MONTH.september, e)
                }} className={s.head_item + ' brand_top_block'}>сен.
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.october)
                    highLightSortBlock(CURRENT_YEAR_MONTH.october, e)
                }} className={s.head_item + ' brand_top_block'}>окт.
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.november)
                    highLightSortBlock(CURRENT_YEAR_MONTH.november, e)
                }} className={s.head_item + ' brand_top_block'}>ноя.
                </div>
                <div onClick={(e) => {
                    sort(e, CURRENT_YEAR_MONTH.december)
                    highLightSortBlock(CURRENT_YEAR_MONTH.december, e)
                }} className={s.head_item + ' brand_top_block'}>дек.
                </div>
                <div onClick={(e) => {
                    sort(e, 'countYear')
                    highLightSortBlock('', e)

                }} data-type={'total'} className={s.head_item + ' brand_top_block'}>ИТОГО
                </div>
            </div>
        )
    }
    if (stateYear == '1577826000') {
        return (
            <div className={s.table_head}>
                <div></div>
                <div onClick={(e) => {
                    sortString('div.header-brand')
                    highLightSortBlock('', e)
                }} className={s.head_item + ' brand_top_block'}>Бренд
                </div>
                <div onClick={(e) => {
                    sort(e, '1577826000')
                    highLightSortBlock('1577826000', e)
                }} className={s.head_item + ' brand_top_block'}>янв.
                </div>
                <div onClick={(e) => {
                    sort(e, '1580504400')
                    highLightSortBlock('1580504400', e)
                }} className={s.head_item + ' brand_top_block'}>фев.
                </div>
                <div onClick={(e) => {
                    sort(e, 1583010000)
                    highLightSortBlock(1583010000, e)
                }} className={s.head_item + ' brand_top_block'}>март
                </div>
                <div onClick={(e) => {
                    sort(e, 1585688400)
                    highLightSortBlock(1585688400, e)
                }} className={s.head_item + ' brand_top_block'}>апр.
                </div>
                <div onClick={(e) => {
                    sort(e, 1588280400)
                    highLightSortBlock(1588280400, e)
                }} className={s.head_item + ' brand_top_block'}>май
                </div>
                <div onClick={(e) => {
                    sort(e, 1590958800)
                    highLightSortBlock(1590958800, e)
                }} className={s.head_item + ' brand_top_block'}>июнь
                </div>
                <div onClick={(e) => {
                    sort(e, 1593550800)
                    highLightSortBlock(1593550800, e)
                }} className={s.head_item + ' brand_top_block'}>июль
                </div>
                <div onClick={(e) => {
                    sort(e, 1596229200)
                    highLightSortBlock(1596229200, e)
                }} className={s.head_item + ' brand_top_block'}>авг.
                </div>
                <div onClick={(e) => {
                    sort(e, 1598907600)
                    highLightSortBlock(1598907600, e)
                }} className={s.head_item + ' brand_top_block'}>сен.
                </div>
                <div onClick={(e) => {
                    sort(e, 1601499600)
                    highLightSortBlock(1601499600, e)
                }} className={s.head_item + ' brand_top_block'}>окт.
                </div>
                <div onClick={(e) => {
                    sort(e, 1604178000)
                    highLightSortBlock(1604178000, e)
                }} className={s.head_item + ' brand_top_block'}>ноя.
                </div>
                <div onClick={(e) => {
                    sort(e, 1606770000)
                    highLightSortBlock(1606770000, e)
                }} className={s.head_item + ' brand_top_block'}>дек.
                </div>
                <div onClick={(e) => {
                    sort(e, 'countYear')
                    highLightSortBlock('', e)

                }} data-type={'total'} className={s.head_item + ' brand_top_block'}>ИТОГО
                </div>
            </div>
        )
    }
    if (stateYear == 1546290000) {
        return (
            <div className={s.table_head}>
                <div></div>
                <div onClick={(e) => {
                    sortString('div.header-brand')
                    highLightSortBlock('', e)
                }} className={s.head_item + ' brand_top_block'}>Бренд
                </div>
                <div onClick={(e) => {
                    sort(e, 1546290000)
                    highLightSortBlock(1546290000, e)
                }} className={s.head_item + ' brand_top_block'}>янв.
                </div>
                <div onClick={(e) => {
                    sort(e, "1548968400")
                    highLightSortBlock("1548968400", e)
                }} className={s.head_item + ' brand_top_block'}>фев.
                </div>
                <div onClick={(e) => {
                    sort(e, "1551387600")
                    highLightSortBlock("1551387600", e)
                }} className={s.head_item + ' brand_top_block'}>март
                </div>
                <div onClick={(e) => {
                    sort(e, "1554066000")
                    highLightSortBlock("1554066000", e)
                }} className={s.head_item + ' brand_top_block'}>апр.
                </div>
                <div onClick={(e) => {
                    sort(e, "1556658000")
                    highLightSortBlock("1556658000", e)
                }} className={s.head_item + ' brand_top_block'}>май
                </div>
                <div onClick={(e) => {
                    sort(e, "1559336400")
                    highLightSortBlock("1559336400", e)
                }} className={s.head_item + ' brand_top_block'}>июнь
                </div>
                <div onClick={(e) => {
                    sort(e, "1561928400")
                    highLightSortBlock("1561928400", e)
                }} className={s.head_item + ' brand_top_block'}>июль
                </div>
                <div onClick={(e) => {
                    sort(e, "1564606800")
                    highLightSortBlock("1564606800", e)
                }} className={s.head_item + ' brand_top_block'}>авг.
                </div>
                <div onClick={(e) => {
                    sort(e, "1567285200")
                    highLightSortBlock("1567285200", e)
                }} className={s.head_item + ' brand_top_block'}>сен.
                </div>
                <div onClick={(e) => {
                    sort(e, "1569877200")
                    highLightSortBlock("1569877200", e)
                }} className={s.head_item + ' brand_top_block'}>окт.
                </div>
                <div onClick={(e) => {
                    sort(e, "1572555600")
                    highLightSortBlock("1572555600", e)
                }} className={s.head_item + ' brand_top_block'}>ноя.
                </div>
                <div onClick={(e) => {
                    sort(e, "1575147600")
                    highLightSortBlock("1575147600", e)
                }} className={s.head_item + ' brand_top_block'}>дек.
                </div>
                <div onClick={(e) => {
                    sort(e, 'countYear')
                    highLightSortBlock('', e)

                }} data-type={'total'} className={s.head_item + ' brand_top_block'}>ИТОГО
                </div>
            </div>
        )
    }
    if (stateYear == PREVIOUS_YEAR_MONTH.january) {
        return (
            <div className={s.table_head}>
                <div></div>
                <div onClick={(e) => {
                    sortString('div.header-brand')
                    highLightSortBlock('', e)
                }} className={s.head_item + ' brand_top_block'}>Бренд
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.january)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.january, e)
                }} className={s.head_item + ' brand_top_block'}>янв.
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.february)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.february, e)
                }} className={s.head_item + ' brand_top_block'}>фев.
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.march)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.march, e)
                }} className={s.head_item + ' brand_top_block'}>март
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.april)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.april, e)
                }} className={s.head_item + ' brand_top_block'}>апр.
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.may)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.may, e)
                }} className={s.head_item + ' brand_top_block'}>май
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.june)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.june, e)
                }} className={s.head_item + ' brand_top_block'}>июнь
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.july)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.july, e)
                }} className={s.head_item + ' brand_top_block'}>июль
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.august)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.august, e)
                }} className={s.head_item + ' brand_top_block'}>авг.
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.september)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.september, e)
                }} className={s.head_item + ' brand_top_block'}>сен.
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.october)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.october, e)
                }} className={s.head_item + ' brand_top_block'}>окт.
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.november)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.november, e)
                }} className={s.head_item + ' brand_top_block'}>ноя.
                </div>
                <div onClick={(e) => {
                    sort(e, PREVIOUS_YEAR_MONTH.december)
                    highLightSortBlock(PREVIOUS_YEAR_MONTH.december, e)
                }} className={s.head_item + ' brand_top_block'}>дек.
                </div>
                <div onClick={(e) => {
                    sort(e, 'countYear')
                    highLightSortBlock('', e)

                }} data-type={'total'} className={s.head_item + ' brand_top_block'}>ИТОГО
                </div>
            </div>
        )
    }

};

export default TableHeadRow;