import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useForm } from '../../hooks/useForm';

const ObjectiveForm = React.forwardRef((props, ref) => {
    const { input, setInput, showValidation, handleChange, handleSubmit, buttonRef } = useForm({
        careerObjective: '',
    }, ref);

    return (
        <div className='form-container'>
            <div className='fs-3 mb-4'>Tell Us About Your Career Objective</div>
            <Form ref={ref} noValidate validated={showValidation} onSubmit={handleSubmit}>
                <Form.Group as={Col} md="12" className='mb-2'>
                    <Form.Label>Career Objective</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        name="careerObjective"
                        value={input.careerObjective}
                        onChange={handleChange}
                        rows={4}
                        style={{ resize: 'none' }}
                        placeholder=""
                    />
                    <Form.Control.Feedback type="invalid">
                        Please write your career objectives.
                    </Form.Control.Feedback>
                </Form.Group>
                <button ref={buttonRef} type='submit' style={{ display: 'none' }} >submit</button>
            </Form>
        </div>
    );
});

export default ObjectiveForm;
