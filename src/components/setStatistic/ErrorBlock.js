import React from 'react';

const ErrorBlock = (props) => {
    return (
        <div className="mb-3 d-flex align-items-center justify-content-center"
             style={{
                 color: 'red',
                 fontSize: 25,
                 textDecoration: 'underline',
                 textDecorationColor: 'red'
             }}>
            <p>{props.errorText?props.errorText:false}</p>
        </div>
    );
};

export default ErrorBlock;