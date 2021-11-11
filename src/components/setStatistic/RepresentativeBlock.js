import React from 'react';

const RepresentativeBlock = (props) => {
    return (
            <p>
                <span style={{fontWeight: 500,color:'#fff'}}>Представитель </span>
                :
                <span style={{fontWeight: 'bold',color:'#fff'}}> {props.dealer}</span>
            </p>
    );
};

export default RepresentativeBlock;