import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import s from './FeedBack.module.css'
import {sendFeedBack} from "../../http/brandAPI";
import {useHistory} from "react-router-dom";
import { SUCCESS_SEND_FEEDBACK} from "../../utils/consts";

const MyVerticallyCenteredModal = (props) => {
    const [value,setValue]=useState('')
    const history=useHistory()

    const send = async (data) => {
       try {
           sendFeedBack(data).then((data)=>{
               setValue('')
               let btn = document.querySelector('.close_modal')
               btn.click()
               history.push(SUCCESS_SEND_FEEDBACK)
           })
       }catch (e) {
           alert(e.response.data)

       }

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Служба поддержки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Введите текст сообщения</Form.Label>
                        <Form.Control value={value} onInput={e=>setValue(e.target.value)} className={s.textArea}  as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"dark"} onClick={
                    (e)=>send({text:value})}>Отправить</Button>
                <Button className='close_modal' variant={"outline-dark"} onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>


    );
};

const FeedBack = (props) => {
    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <Button style={{position:"fixed",bottom:20,right:20}} variant={props.variant} onClick={() => setModalShow(true)}>
                Нужна помощь?
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default FeedBack;