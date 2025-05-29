import React from 'react';
import "./contact-us-form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faPhone , faEnvelope , faClock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ContactUsForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <section className='contact-us-form'>
                <div className="custom-container container-fluid">
                    <div className="contact-us-form-contant d-flex justify-content-between align-items-center">
                        <div className="get-in-touch">
                            <span data-aos="fade-right">Keep close</span>
                            <h2 data-aos="fade-right">Get In Touch</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas temporibus alias amet similique, nisi vel veritatis ad natus. Voluptatem et adipisci accusantium unde porro quo tenetur ipsum voluptates! Saepe quos sit debitis molestiae corporis culpa similique! Libero alias labore facere dicta impedit, est iusto laborum quis, accusantium incidunt corrupti?</p>
                            <div className="contact-handles-wraper d-flex flex-wrap justify-content-between align-items-center">
                                <div className="contact-handle d-flex align-items-center">
                                    <div className="contact-handle-img-wraper">
                                        <FontAwesomeIcon icon={faLocationDot}  className='img-fluid'/>
                                    </div>
                                    <div className="contact-handle-text-wraper">
                                        <ul>
                                            <li><NavLink to='/'>Thoker Niaz Baig Lahore</NavLink></li>
                                            <li><NavLink to='/'>Gulberg Lahore</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contact-handle d-flex align-items-center">
                                    <div className="contact-handle-img-wraper">
                                        <FontAwesomeIcon icon={faPhone} className='img-fluid'/>
                                    </div>
                                    <div className="contact-handle-text-wraper">
                                        <ul>
                                            <li><NavLink to='tel: +92.13.4000099'>+92 313-4000099</NavLink></li>
                                            <li><NavLink to='tel: +92.13.4000099'>+92 313-4000099</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contact-handle d-flex align-items-center">
                                    <div className="contact-handle-img-wraper">
                                        <FontAwesomeIcon icon={faEnvelope} className='img-fluid'/>
                                    </div>
                                    <div className="contact-handle-text-wraper">
                                        <ul>
                                            <li><NavLink to='mailto:hnfn@gmail.com'>HnFn@gmail.com</NavLink></li>
                                            <li><NavLink to='mailto:reservation@hnfn.com'>Reservation@HnFn.com</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contact-handle d-flex align-items-center">
                                    <div className="contact-handle-img-wraper">
                                        <FontAwesomeIcon icon={faClock} className='img-fluid'/>
                                    </div>
                                    <div className="contact-handle-text-wraper">
                                        <ul>
                                            <li>Open at 4:00 pm</li>
                                            <li>Close at 1:00 am</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="form-heading">
                                <h2 data-aos="fade-left">Your Details</h2>
                                <p>Let us know how to get back to you</p>
                            </div>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="row mb-3">
                                    <Form.Group as={Col} md="6" sm="6" xs="12" controlId="validationCustom01">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" sm="6" xs="12" controlId="validationCustom02">
                                        <Form.Label>Enter Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="Email"
                                            placeholder="Enter Email"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="row mb-3">
                                    <Form.Group as={Col} md="12" sm="12" xs="12" controlId="validationCustom01">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Subject"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="row mb-3">
                                    <Form.Group as={Col} md="12" sm="12" xs="12" controlId="validationCustom03">
                                        <Form.Label>Comment / Question</Form.Label>
                                        <Form.Control type="text" placeholder="Comment" required />
                                    </Form.Group>
                                </Row>
                                <div className="button-wraper">
                                    <Button className='submit-btn' type="submit">Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsForm;