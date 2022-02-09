import React, {useEffect, useState} from 'react';
import {bands, getAllStatisticModelForGraphics} from "../../../../http/brandAPI";
import {Form} from "react-bootstrap";
import ListItemBrandFirst from "./ListItemBrandFirst";
import ListItemBrandSecond from "./ListItemBrandSecond";
import ListItemBrandThird from "./ListItemBrandThird";
import ListItemBrandFourth from "./ListItemBrandFourth";

const CompareTopBlockBrandsList = (props) => {

    const [firstItemValueBrand, setFirstItemValueBrand] = useState('')
    const [secondItemValueBrand, setSecondItemValueBrand] = useState('')
    const [thirdItemValueBrand, setThirdItemValueBrand] = useState('')
    const [fourthItemValueBrand, setFourthItemValueBrand] = useState('')

    const [firstItemValueModel, setFirstItemValueModel] = useState('')
    const [secondItemValueModel, setSecondItemValueModel] = useState('')
    const [thirdItemValueModel, setThirdItemValueModel] = useState('')
    const [fourthItemValueModel, setFourthItemValueModel] = useState('')

    const [firstColor, setFirstColor] = useState()
    const [secondColor, setSecondColor] = useState()
    const [thirdColor, setThirdColor] = useState()
    const [fourthColor, setFourthColor] = useState()

    const [allModels, setAllModels] = useState()

    const [allBrands, setAllBrands] = useState([])

    useEffect(() => {
        bands().then(data => {
            setAllBrands(data.data.data)
        })
        getAllStatisticModelForGraphics().then((data) => {

            let models = data.data.included.models.map((m) => ({
                ...m,
                brand: data.data.included.brands.find((b) => m.brand_id === b.id)
            }))

            setAllModels(models)
        })
    }, [])

    useEffect(() => {
            let currentBrands = [
                {
                    brand_id: firstItemValueBrand.slice(0, firstItemValueBrand.indexOf(' ')),
                    brand_name: firstItemValueBrand.slice(firstItemValueBrand.indexOf(' ') + 1,),
                    color: firstItemValueBrand.slice(firstItemValueBrand.indexOf(' ') + 1,) ? firstColor + '70' : '',
                    model_id:firstItemValueModel.slice(0, firstItemValueModel.indexOf(' ')),
                    model_name: firstItemValueModel.slice(firstItemValueModel.indexOf(' '),firstItemValueModel.lastIndexOf(' ')).trim(),
                },
                {
                    brand_id: secondItemValueBrand.slice(0, secondItemValueBrand.indexOf(' ')),
                    brand_name: secondItemValueBrand.slice(secondItemValueBrand.indexOf(' ') + 1,),
                    color: secondItemValueBrand.slice(secondItemValueBrand.indexOf(' ') + 1,) ? secondColor + '70' : '',
                    model_id:secondItemValueModel.slice(0, secondItemValueModel.indexOf(' ')),
                    model_name: secondItemValueModel.slice(secondItemValueModel.indexOf(' '),secondItemValueModel.lastIndexOf(' ')).trim(),

                },
                {
                    brand_id: thirdItemValueBrand.slice(0, thirdItemValueBrand.indexOf(' ')),
                    brand_name: thirdItemValueBrand.slice(thirdItemValueBrand.indexOf(' ') + 1,),
                    color: thirdItemValueBrand.slice(thirdItemValueBrand.indexOf(' ') + 1,) ? thirdColor + '70' : '',
                    model_id:thirdItemValueModel.slice(0, thirdItemValueModel.indexOf(' ')),
                    model_name: thirdItemValueModel.slice(thirdItemValueModel.indexOf(' '),thirdItemValueModel.lastIndexOf(' ')).trim(),

                },
                {
                    brand_id: fourthItemValueBrand.slice(0, fourthItemValueBrand.indexOf(' ')),
                    brand_name: fourthItemValueBrand.slice(fourthItemValueBrand.indexOf(' ') + 1,),
                    color: fourthItemValueBrand.slice(fourthItemValueBrand.indexOf(' ') + 1,) ? fourthColor + '70' : '',
                    model_id:fourthItemValueModel.slice(0, fourthItemValueModel.indexOf(' ')),
                    model_name: fourthItemValueModel.slice(fourthItemValueModel.indexOf(' '),fourthItemValueModel.lastIndexOf(' ')).trim(),

                }
            ]

            props.setSelectedBrands(currentBrands.filter(item => item.brand_name))
        console.log(currentBrands)
        },
        [
            firstItemValueBrand, secondItemValueBrand, thirdItemValueBrand, fourthItemValueBrand,
            firstColor, secondColor, thirdColor, fourthColor,
            firstItemValueModel, secondItemValueModel, thirdItemValueModel, fourthItemValueModel
        ]
    )

    return (
        <div style={{padding: '0 16px 0 0'}}>
            <Form.Label style={{fontWeight: 600, fontSize: 14,}}> Сравниваемые бренды:
                <form>
                    <ul className='mt-3 p-0' style={{listStyle: 'none'}}>
                        <div>
                            <ListItemBrandFirst
                                allModels={
                                    allModels ?
                                        allModels.filter(item => +item.id !== +secondItemValueModel.slice(0, secondItemValueModel.indexOf(' '))
                                            && +item.id !== +thirdItemValueModel.slice(0, thirdItemValueModel.indexOf(' '))
                                            && +item.id !== +fourthItemValueModel.slice(0, fourthItemValueModel.indexOf(' ')))
                                            .filter(item => item.brand_id === firstItemValueBrand.slice(0, firstItemValueBrand.indexOf(' ')))
                                        : false
                                }
                                color={firstColor}
                                setColor={setFirstColor}
                                brands={
                                    allBrands
                                    // allBrands.filter(item =>
                                    //     +item.id !== +secondItemValueBrand.slice(0, secondItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +thirdItemValueBrand.slice(0, thirdItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +fourthItemValueBrand.slice(0, fourthItemValueBrand.indexOf(' '))
                                    // )
                                }
                                setValueBrand={setFirstItemValueBrand}
                                valueBrand={firstItemValueBrand}
                                setValueModel={setFirstItemValueModel}
                                valueModel={firstItemValueModel}
                            />
                            <ListItemBrandSecond
                                allModels={
                                    allModels
                                        ?
                                        allModels.filter(item => +item.id !== +firstItemValueModel.slice(0, firstItemValueModel.indexOf(' '))
                                            && +item.id !== +thirdItemValueModel.slice(0, thirdItemValueModel.indexOf(' '))
                                            && +item.id !== +fourthItemValueModel.slice(0, fourthItemValueModel.indexOf(' ')))
                                            .filter(item => item.brand_id === secondItemValueBrand.slice(0, secondItemValueBrand.indexOf(' ')))
                                        :
                                        false
                                }
                                color={secondColor}
                                setColor={setSecondColor}
                                brands={
                                    allBrands
                                    // allBrands.filter(item =>
                                    //     +item.id !== +firstItemValueBrand.slice(0, firstItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +thirdItemValueBrand.slice(0, thirdItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +fourthItemValueBrand.slice(0, fourthItemValueBrand.indexOf(' '))
                                    // )
                                }
                                setValueBrand={setSecondItemValueBrand}
                                valueBrand={secondItemValueBrand}
                                setValueModel={setSecondItemValueModel}
                                valueModel={secondItemValueModel}
                            />
                            <ListItemBrandThird
                                allModels={
                                    allModels
                                        ?
                                        allModels.filter(item => +item.id !== +firstItemValueModel.slice(0, firstItemValueModel.indexOf(' '))
                                            && +item.id !== +secondItemValueModel.slice(0, secondItemValueModel.indexOf(' '))
                                            && +item.id !== +fourthItemValueModel.slice(0, fourthItemValueModel.indexOf(' ')))
                                            .filter(item => item.brand_id === thirdItemValueBrand.slice(0, thirdItemValueBrand.indexOf(' ')))
                                        :
                                        false
                                }
                                color={thirdColor}
                                setColor={setThirdColor}
                                brands={
                                    allBrands
                                    // allBrands.filter(item =>
                                    //     +item.id !== +secondItemValueBrand.slice(0, secondItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +firstItemValueBrand.slice(0, firstItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +fourthItemValueBrand.slice(0, fourthItemValueBrand.indexOf(' '))
                                    // )
                                }
                                setValueBrand={setThirdItemValueBrand}
                                valueBrand={thirdItemValueBrand}
                                setValueModel={setThirdItemValueModel}
                                valueModel={thirdItemValueModel}
                            />
                            <ListItemBrandFourth
                                allModels={
                                    allModels
                                        ?
                                        allModels.filter(item =>
                                            +item.id !== +firstItemValueModel.slice(0, firstItemValueModel.indexOf(' '))
                                            && +item.id !== +secondItemValueModel.slice(0, secondItemValueModel.indexOf(' '))
                                            && +item.id !== +thirdItemValueModel.slice(0, thirdItemValueModel.indexOf(' ')))
                                            .filter(item => item.brand_id === fourthItemValueBrand.slice(0, fourthItemValueBrand.indexOf(' ')))
                                        :
                                        false
                                }
                                color={fourthColor}
                                setColor={setFourthColor}
                                brands={
                                    allBrands
                                    // allBrands.filter(item =>
                                    //     +item.id !== +secondItemValueBrand.slice(0, secondItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +thirdItemValueBrand.slice(0, thirdItemValueBrand.indexOf(' '))
                                    //     && +item.id !== +firstItemValueBrand.slice(0, firstItemValueBrand.indexOf(' '))
                                    // )
                                }
                                setValueBrand={setFourthItemValueBrand}
                                valueBrand={fourthItemValueBrand}
                                setValueModel={setFourthItemValueModel}
                                valueModel={fourthItemValueModel}
                            />
                        </div>
                    </ul>
                </form>
            </Form.Label>
        </div>

    );
};

export default CompareTopBlockBrandsList;