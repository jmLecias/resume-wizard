import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ToastContainer } from 'react-toastify';

import { useForm } from '../../hooks/useForm';

const PersonalForm = React.forwardRef((props, ref) => {
    const { input, setInput, showValidation, handleChange, handleSubmit, buttonRef } = useForm({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        website: '',
        country: '',
        stateProvince: '',
        city: '',
        zip: ''
    }, ref);

    return (
        <div className='form-container'>
            <div className='fs-3 mb-4'>Tell Us About Yourself</div>
            <Form ref={ref} noValidate validated={showValidation} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" className='mb-2'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="firstName"
                            value={input.firstName}
                            onChange={handleChange}
                            placeholder="Enter first name"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='mb-2'>
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="middleName"
                            value={input.middleName}
                            onChange={handleChange}
                            placeholder="Enter middle name"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='mb-2'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={input.lastName}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="5" className='mb-2'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            placeholder="username@example.com"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" className='mb-2'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone number"
                            pattern="[0-9]*"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Invalid number.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5" className='mb-2'>
                        <Form.Label>Website (optional)</Form.Label>
                        <Form.Control
                            type="URL"
                            name="website"
                            value={input.website}
                            onChange={handleChange}
                            placeholder="www.example.com"
                        />

                        <Form.Control.Feedback type="invalid">
                            Please provide a valid website address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="3" className='mb-2'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            name="country"
                            value={input.country}
                            onChange={handleChange}
                            placeholder="Country"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid country.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" className='mb-2'>
                        <Form.Label>State/Province</Form.Label>
                        <Form.Control
                            type="text"
                            name="stateProvince"
                            value={input.stateProvince}
                            onChange={handleChange}
                            placeholder="State"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state or province.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" className='mb-2'>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={input.city}
                            onChange={handleChange}
                            placeholder="City"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" className='mb-2'>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="zip"
                            value={input.zip}
                            onChange={handleChange}
                            placeholder="Zip code"
                            pattern="\d{4}"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <button ref={buttonRef} type='submit' style={{ display: 'none' }} >submit</button>
            </Form>
        </div>
    );
});

export default PersonalForm;