import React from 'react';
import s from './RowForItemShowData.module.css'

const RowForItemShowData = (props) => {

    let unParseDate = new Date((props.date)*1000)
    let options = { year: 'numeric', month: 'long', day: 'numeric',time:'long',hour: 'numeric', minute: 'numeric', };
    let currentDate =unParseDate.toLocaleDateString("ru",options)


    return (
        <div>
            <div className={'p-2 ' + s.row} style={{
                borderBottom:'solid 1px grey',
                gridTemplateColumns:props.date ?'1fr 1fr 220px': '1fr 1fr'
            }}>
                <div>{props.brand}</div>
                <div>{props.dealer}</div>
                {
                    props.date ? <div>
                        {String(currentDate)}

                    </div> : false
                }

            </div>

        </div>
    );
};

export default RowForItemShowData;