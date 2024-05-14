import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { IoMdAddCircleOutline } from "react-icons/io";
import { MdClear } from "react-icons/md";

import { useForm } from '../../hooks/useForm';

const WorkForm = React.forwardRef((props, ref) => {
    const {
        input,
        setInput,
        showValidation,
        handleDynamicChange,
        addRow,
        removeLast,
        handleSubmit,
        buttonRef
    } = useForm([
        { company: '', position: '', workYear: '' }
    ], ref);

    return (
        <div className='form-container'>
            <div className='fs-3 mb-4'>Work Experience</div>
            <Form ref={ref} noValidate validated={showValidation} onSubmit={handleSubmit}>
                {input.map((input, index) => (
                    <Row key={index} className="mb-3">
                        <Form.Group as={Col} md="5" className='mb-2'>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="company"
                                value={input.company}
                                onChange={(e) => handleDynamicChange(index, e)}
                                placeholder="Enter company name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a company name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="5" className='mb-2'>
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="position"
                                value={input.position}
                                onChange={(e) => handleDynamicChange(index, e)}
                                placeholder="Enter work position"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter previous position.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" className='mb-2'>
                            <Form.Label>Work Year</Form.Label>
                            <Form.Control
                                type="text"
                                name="workYear"
                                value={input.workYear}
                                onChange={(e) => handleDynamicChange(index, e)}
                                placeholder="YYYY"
                                pattern="\d{4}"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a year.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                ))}
                <button ref={buttonRef} type='submit' style={{ display: 'none' }}>submit</button>
                <div className='d-flex justify-content-end mt-4'>
                    {input.length > 1 && (
                        <Button onClick={removeLast} variant='danger' className='me-3'>
                            <div className='d-flex align-items-center'>
                                <MdClear size={20} />
                                <div className='ms-2'>Remove last</div>
                            </div>
                        </Button>
                    )}
                    <Button onClick={addRow} style={{ backgroundColor: 'var(--primary-color-light)', width: 'fit-content' }}>
                        <div className='d-flex align-items-center'>
                            <IoMdAddCircleOutline size={20} />
                            <div className='ms-2'>Add another</div>
                        </div>
                    </Button>
                </div>
            </Form>
        </div>
    );
});

export default WorkForm;
