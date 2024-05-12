import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { IoMdAddCircleOutline } from "react-icons/io";


const WorkForm = () => {
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
        <div className='form-container'>
            <div className='fs-3 mb-4'>Work Experience</div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="5" controlId="validationCustom01" className='mb-2'>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter company name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom02" className='mb-2'>
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter position"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustomUsername" className='mb-2'>
                        <Form.Label>Work Year</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="YYYY"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className='d-flex justify-content-end mt-4'>
                    <Button
                        style={{ backgroundColor: 'var(--primary-color-light)', width: 'fit-content' }}
                    >
                        <div className='d-flex align-items-center'>
                            <IoMdAddCircleOutline size={20} />
                            <div className='ms-2'>Add another</div>
                        </div>
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default WorkForm;