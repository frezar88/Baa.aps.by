import React from 'react';
import RowForItemShowData from "./RowForItemShowData";

const ItemForShowDataWait = (props) => {


    return (
        <div>
            <div className={'p-2'} style={{borderBottom:'solid 1px grey'}} >
                <h5>Ожидаются данные</h5>
            </div>
            {
                props.data? props.data.map(({brand,dealer})=>
                    <RowForItemShowData key={Math.random()*100} brand={brand.name} dealer={dealer.name} />
                )
                    :false
            }
        </div>

    );
};

export default ItemForShowDataWait;