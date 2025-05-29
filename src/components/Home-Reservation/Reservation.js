import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./reservation.css";

const Reservation = () => {
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
            <section className='reservation-table'>
                <div className="container-small container-fluid">
                    <div className="table-card">
                        <div className="card-heading">
                            <h2>Reserve A Table</h2>
                        </div>
                        <div className="card-form">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" sm="6" xs="6" controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="No of guests"
                                            aria-describedby="inputGroupPrepend"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" sm="6" xs="6" controlId="validationCustom02">
                                        <Form.Control
                                            required
                                            type="Date"
                                            placeholder="Date"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" sm="6" xs="6" controlId="validationCustomUsername">
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                type="Time"
                                                placeholder="Time"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" sm="6" xs="6" controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            aria-describedby="inputGroupPrepend"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" sm="6" xs="6" controlId="validationCustom02">
                                        <Form.Control
                                            required
                                            type="Phone"
                                            placeholder="Phone Number"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

export default Reservation;