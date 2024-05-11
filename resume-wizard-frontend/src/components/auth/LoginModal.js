import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ValidationService from "../../services/ValidationService";

import { useAuth } from "../../hooks/useAuth";

const LoginModal = ({ show, onHide, onActionEnded, onRegisterClick }) => {
    const val = new ValidationService();
    const { login } = useAuth();

    const rules = {
        email: [['required', 'Email is required'], ['email', 'Email is not in a valid format']],
        password: [['required', 'Password is required'], ['password', 'Password must be at least 8 characters long and contain at least 1 special character']],
    };

    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [input, setInput] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const clearInput = () => {
        setInput({
            email: '',
            password: '',
            password_confirmation: ''
        })
    }

    const handleChange = (event) => {
        const field = event.target.name;
        setInput((prev) => ({ ...prev, [field]: event.target.value, }))
        setErrors((prev) => ({ ...prev, [field]: '', }))
    };

    const handleClose = () => {
        onHide();
        clearInput();
        setIsLoggingIn(false);
    }

    const handleSubmit = () => {
        if (!val.validateForm(input, rules, setErrors)) return;

        setIsLoggingIn(true);
        login(input).then(() => {
            onActionEnded();
            setIsLoggingIn(false);
        }).catch((error) => {
            setErrors(error.response.data.errors);
            setIsLoggingIn(false);
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
                    <div className="fs-3 mb-3">Log in</div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
                    </Form>
                    <div className="small mb-3">
                        Don't have an account?
                        <span className="fst-italic cursor-pointer text-primary ms-1" onClick={onRegisterClick}>
                            Create one
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
                            disabled={isLoggingIn}
                        >
                            {(isLoggingIn) ? 'Logging in...' : 'Log in'}
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;