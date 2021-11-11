import React from 'react';
import RowForItemShowData from "./RowForItemShowData";

const ItemForShowDataEnter = (props) => {

    return (
        <div>
            <div className={'p-2'} style={{borderBottom:'solid 1px grey'}} >
                <h5>Внесёные данные</h5>
            </div>
            {
                props.data? props.data.map(({brand,dealer,created_at})=>
                        <RowForItemShowData key={Math.random()*100} brand={brand.name} dealer={dealer.name} date={created_at}  />
                    )
                    :false
            }
        </div>

    );
};

export default ItemForShowDataEnter;