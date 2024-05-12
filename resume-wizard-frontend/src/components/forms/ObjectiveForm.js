import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { IoMdAddCircleOutline } from "react-icons/io";

const ObjectiveForm = () => {
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
            <div className='fs-3 mb-4'>Tell Us About Your Career Objective</div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="careerObjective" className='mb-2'>
                        <Form.Label>Career Objective</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={4}
                            style={{ resize: 'none' }}
                            placeholder=""

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

export default ObjectiveForm;
