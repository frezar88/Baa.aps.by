import React, {useEffect, useState} from 'react';
import {bands} from "../../../../http/brandAPI";
import {Form} from "react-bootstrap";
import ListItemBrandFirst from "./ListItemBrandFirst";
import ListItemBrandSecond from "./ListItemBrandSecond";
import ListItemBrandThird from "./ListItemBrandThird";
import ListItemBrandFourth from "./ListItemBrandFourth";

const CompareTopBlockBrandsList = (props) => {

    const [firstItemValue, setFirstItemValue] = useState('')
    const [secondItemValue, setSecondItemValue] = useState('')
    const [thirdItemValue, setThirdItemValue] = useState('')
    const [fourthItemValue, setFourthItemValue] = useState('')

    const [firstColor, setFirstColor] = useState()
    const [secondColor, setSecondColor] = useState()
    const [thirdColor, setThirdColor] = useState()
    const [fourthColor, setFourthColor] = useState()

    const [allBrands, setAllBrands] = useState([])

    useEffect(() => {
        bands().then(data => {
            setAllBrands(data.data.data)
        })
    }, [])

    useEffect(() => {
        let currentBrands = [
            {
                brand_id: firstItemValue.slice(0,firstItemValue.indexOf(' ')),
                brand_name: firstItemValue.slice(firstItemValue.indexOf(' ') + 1,),
                color:firstItemValue.slice(firstItemValue.indexOf(' ') + 1,)? firstColor + '70':''
            },
            {
                brand_id: secondItemValue.slice(0,secondItemValue.indexOf(' ')),
                brand_name: secondItemValue.slice(secondItemValue.indexOf(' ') + 1,),
                color:secondItemValue.slice(secondItemValue.indexOf(' ') + 1,)? secondColor + '70':''
            },
            {
                brand_id: thirdItemValue.slice(0,thirdItemValue.indexOf(' ')),
                brand_name: thirdItemValue.slice(thirdItemValue.indexOf(' ') + 1,),
                color:thirdItemValue.slice(thirdItemValue.indexOf(' ') + 1,) ? thirdColor + '70':''
            },
            {
                brand_id: fourthItemValue.slice(0,fourthItemValue.indexOf(' ')),
                brand_name: fourthItemValue.slice(fourthItemValue.indexOf(' ') + 1,),
                color:fourthItemValue.slice(fourthItemValue.indexOf(' ') + 1,) ? fourthColor + '70' : ''
            }
        ]

        props.setSelectedBrands(currentBrands.filter(item => item.brand_name))



    }, [firstItemValue, secondItemValue, thirdItemValue, fourthItemValue, firstColor, secondColor, thirdColor, fourthColor])
    return (
        <div style={{padding:'0 16px'}}>
            <Form.Label style={{fontWeight: 600, fontSize: 14,}}> Сравниваемые бренды:
                <form>
                    <ul className='mt-3 p-0' style={{listStyle: 'none'}}>
                        <div>
                            <ListItemBrandFirst
                                color={firstColor}
                                setColor={setFirstColor}
                                brands={
                                    allBrands.filter(item =>
                                        +item.id !== +secondItemValue.slice(0, secondItemValue.indexOf(' '))
                                        && +item.id !== +thirdItemValue.slice(0, thirdItemValue.indexOf(' '))
                                        && +item.id !== +fourthItemValue.slice(0, fourthItemValue.indexOf(' '))
                                    )
                                }
                                setValue={setFirstItemValue}
                                value={firstItemValue}
                            />
                            <ListItemBrandSecond
                                color={secondColor}
                                setColor={setSecondColor}
                                brands={
                                    allBrands.filter(item =>
                                        +item.id !== +firstItemValue.slice(0, firstItemValue.indexOf(' '))
                                        && +item.id !== +thirdItemValue.slice(0, thirdItemValue.indexOf(' '))
                                        && +item.id !== +fourthItemValue.slice(0, fourthItemValue.indexOf(' '))
                                    )
                                }
                                setValue={setSecondItemValue}
                                value={secondItemValue}
                            />
                            <ListItemBrandThird
                                color={thirdColor}
                                setColor={setThirdColor}
                                brands={
                                    allBrands.filter(item =>
                                        +item.id !== +secondItemValue.slice(0, secondItemValue.indexOf(' '))
                                        && +item.id !== +firstItemValue.slice(0, firstItemValue.indexOf(' '))
                                        && +item.id !== +fourthItemValue.slice(0, fourthItemValue.indexOf(' '))
                                    )
                                }
                                setValue={setThirdItemValue}
                                value={thirdItemValue}
                            />
                            <ListItemBrandFourth
                                color={fourthColor}
                                setColor={setFourthColor}
                                brands={
                                    allBrands.filter(item =>
                                        +item.id !== +secondItemValue.slice(0, secondItemValue.indexOf(' '))
                                        && +item.id !== +thirdItemValue.slice(0, thirdItemValue.indexOf(' '))
                                        && +item.id !== +firstItemValue.slice(0, firstItemValue.indexOf(' '))
                                    )
                                }
                                setValue={setFourthItemValue}
                                value={fourthItemValue}
                            />
                        </div>
                    </ul>
                </form>
            </Form.Label>
        </div>

    );
};

export default CompareTopBlockBrandsList;