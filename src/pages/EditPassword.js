import React, {useEffect, useState} from 'react';
import { Container} from "react-bootstrap";

import s from "./EditProfile.module.css";

import EditPasswordBlock from "../components/EditProfile/EditPasswordBlock";


const EditPassword= () => {

    return (
        <div className='d-flex flex-column overflow-hidden '
             style={{zIndex: '22', minHeight: 'calc(100vh - 70px)', background: 'rgb(8 8 8 / 30%)'}}>
            <div style={{marginTop: '3%'}}>
                <Container
                    style={{
                        maxWidth: 600,
                        width: '100%',
                        color: '#000',
                        backgroundColor: 'rgb(8 8 8 / 80%)',
                        marginTop: '222',
                        borderRadius: 10, padding: '10px 25px',
                    }}>
                    <div className={s.title}>
                        <h3 style={{textAlign: 'center'}}> Изменение пароля</h3>
                    </div>
                    <EditPasswordBlock/>


                </Container>
            </div>
        </div>
    );
};

export default EditPassword;

