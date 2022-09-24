import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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