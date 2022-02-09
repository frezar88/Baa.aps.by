import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {COLORS_COMPARE_BLOCK} from "../../../../utils/consts";
import reactCSS from "reactcss";
import {SwatchesPicker} from 'react-color'


const ListItemBrandSecond = (props) => {
    const [color, setColor] = useState(props.color)
    const [displayColorPicker, setDisplayColorPicker] = useState(false)

    useEffect(() => {
        let colorDefault = COLORS_COMPARE_BLOCK[Math.round(Math.random() * COLORS_COMPARE_BLOCK.length - 1)]
        setColor(colorDefault)
        props.setColor(colorDefault)

    }, [])

    const styles = reactCSS({
        'default': {
            color: {
                boxShadow: '0 0 0 2px rgba(0,0,0,.1)',
                border: 'solid 1px #00000069',
                width: '24px',
                height: '20px',
                borderRadius: '2px',
                background: color
            },
            swatch: {
                padding: '2px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
                maxWidth: '28px'
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {

                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        }
    });

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)

    }
    const handleClose = () => {
        setDisplayColorPicker(false)
    };
    const handleChange = (color) => {
        console.log(color.hex)
        props.setColor(color.hex)
        setColor(color.hex)
    };

    return (

        <li className={' align-items-center pb-2 '}
            style={{display: 'grid', gridGap: '10px', gridTemplateColumns: '40px 1fr 1fr'}}>
            <div className={'ms-0'} style={{
                display: 'grid',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gridTemplateColumns: '320px ',
                gridGap: '10px'
            }}>
                {
                    props.valueBrand
                        ?
                        <>
                            <div style={styles.swatch} onClick={handleClick}>
                                <div style={styles.color}/>
                            </div>
                            {displayColorPicker ? <div style={styles.popover}>
                                <div style={styles.cover} onClick={handleClose}/>
                                <SwatchesPicker width={290} color={color} onChange={handleChange}/>
                            </div> : null}
                        </>
                        :
                        false
                }
            </div>
            <Form.Select style={{maxWidth: '196px'}} value={props.valueBrand} className={'compare_select_brand ps-4 pe-5'}
                         onChange={(e) => {
                             props.setValueBrand(e.target.value)
                             props.setValueModel('')
                         }}
            >
                <option disabled={false} value={''}>Выберите бренд</option>
                {
                    props.brands
                        ?
                        props.brands.map((({id, name}) =>
                                <option key={id} value={id + ' ' + name}>{name}</option>
                        ))
                        :
                        false
                }
            </Form.Select>

            {
                props.valueBrand
                    ?
                    <Form.Select style={{maxWidth: '196px'}} value={props.valueModel}
                                 className={'compare_select_brand ps-4 pe-5'}
                                 onChange={(e) => props.setValueModel(e.target.value)}
                    >
                        <option disabled={false} value={''}>Выберите модель</option>
                        {
                            props.allModels
                                ?
                                props.allModels.map((({id, name,brand_id}) =>
                                        <option key={id} value={id + ' ' + name + ' ' +brand_id}>{name}</option>
                                ))
                                :
                                false
                        }
                    </Form.Select>
                    :
                    false
            }

        </li>
    );
};

export default ListItemBrandSecond;