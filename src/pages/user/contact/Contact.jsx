import React from 'react'
import phone from '../../../assets/images/contact/phone.svg'
import message from '../../../assets/images/contact/message.svg'
import style from './contact.module.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="d-flex gap-2 py-5">
                    <p className={style.home}>Home</p>
                    <p className={style.home}>/</p>
                    <p className={style.Contact}>Cantact</p>
                </div>
                <section className="contact">
                    <div className="d-flex gap-5 pb-5">
                        <div className=" d-flex flex-column gap-5">
                            <div className={`${style.contactLeftTop} d-flex flex-column gap-4 pb-5`}>
                                <div className={`${style.iconPhone} d-flex gap-3`}>
                                    <div className={style.red}>
                                        <img src={phone} />
                                    </div>
                                    <p>Call To Us</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p>We are available 24/7, 7 days a week.</p>
                                    <p>Phone: +8801611112222</p>
                                </div>
                            </div>
                            <div className={`${style.contactLeftBottom} d-flex flex-column gap-4`}>
                                <div className={`${style.iconPhone} d-flex gap-3`}>
                                    <div className={style.red}>
                                        <img src={message} />
                                    </div>
                                    <p>Call To Us</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p>Fill out our form and we will contact you within 24 hours.</p>
                                    <p>Emails: customer@exclusive.com</p>
                                    <p>Emails: support@exclusive.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-5">
                            <div className={`${style.inputTop} d-flex gap-5`}>
                                <input className="p-3" type="text" placeholder="Your Name" />
                                <input className="p-3" type="email" placeholder="Your Email" />
                                <input className="p-3" type="text" placeholder="Your Phone" />
                            </div>
                            <div className={`${style.inputBottom}`}>
                                
                                <FloatingLabel controlId="floatingTextarea2" label="Your Massage">
                                    <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        style={{ height: '200px' }}
                                    />
                                </FloatingLabel>
                             
                            </div>
                            <div className={`${style.buttonSend}`}>
                                <button>Send Massage</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}
