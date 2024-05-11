import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ValidationService from "../../services/ValidationService";

import { useAuth } from "../../hooks/useAuth";

const RegisterModal = ({ show, onHide, onActionEnded, onLoginClick }) => {
    const val = new ValidationService();
    const { register } = useAuth();

    const rules = {
        email: [['required', 'Email is required'], ['email', 'Email is not in a valid format']],
        password: [['required', 'Password is required'], ['password', 'Password must at least have 8 characters and 1 special character']],
        password_confirmation: [['required', 'Confirm password'], ['match', 'Passwords do not match', 'password']],
    };


    const [isRegistering, setIsRegistering] = useState(false);
    const [input, setInput] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    });

    const clearInput = () => {
        setInput({
            email: '',
            password: '',
            password_confirmation: ''
        })
    }

    const handleClose = () => {
        onHide();
        clearInput();
        setIsRegistering(false);
    }

    const handleChange = (event) => {
        const field = event.target.name;
        setInput((prev) => ({ ...prev, [field]: event.target.value, }))
        setErrors((prev) => ({ ...prev, [field]: '', }))
    };

    const handleSubmit = () => {
        if (!val.validateForm(input, rules, setErrors)) return;

        setIsRegistering(true);
        register(input).then(() => {
            onActionEnded();
            setIsRegistering(false);
        }).catch((error) => {
            setErrors(error.response.data.errors);
            setIsRegistering(false);
        });
    }

    return (
        <Modal
            data-bs-theme="light"
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Body>
                <div className="p-1">
                    <div className="fs-3 mb-3">Create Account</div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="username@example.com"
                                value={input.email}
                                onChange={handleChange}
                            />
                            {errors.email && (<div className="small mb-1 text-danger">{errors.email}</div>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={input.password}
                                onChange={handleChange}
                            />
                            {errors.password && (<div className="small mb-1 text-danger">{errors.password}</div>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                name="password_confirmation"
                                type="password"
                                placeholder="Password"
                                value={input.password_confirmation}
                                onChange={handleChange}
                            />
                            {errors.password_confirmation && (<div className="small mb-1 text-danger">{errors.password_confirmation}</div>)}
                        </Form.Group>
                    </Form>
                    <div className="small mb-3">
                        Already have an account?
                        <span className="fst-italic cursor-pointer text-primary ms-1" onClick={onLoginClick}>
                            Log in
                        </span>
                    </div>

                    <div className="d-flex align-items-center justify-content-end mt-5">
                        <Button
                            variant="secondary"
                            onClick={() => { handleClose() }}
                            className="me-2"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => { handleSubmit() }}
                            disabled={isRegistering}
                        >
                            {(isRegistering) ? 'Registering...' : 'Register'}
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModal;