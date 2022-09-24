import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        handleShow();

        emailjs.sendForm('service_6uhqknf', 'template_7c4ijjn', form.current, 'ibW3v1409oUCBJEmE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div id='contact-page' className='box-container center-content'>
                <h2>Contact Me</h2>
                <div id='contact-content-box' className='horizontal-flex-box'>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Message Sent!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Thank you for your message, I will try to get back to you soon.</Modal.Body>
                    </Modal>

                    <img src={require("../../images/contact.png")} alt="contact image" id="contact-image" />
                    <form className='vertical-flex-box' ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <div id='contact-last-line' className='horizontal-flex-box'>
                            <input id='submit-message-btn' type="submit" value="Send" />
                            <p id='email-address-text'>Email: younkyu2004@gmail.com</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;