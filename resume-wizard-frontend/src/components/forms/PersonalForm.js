import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const PersonalForm = () => {
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
            <div className='fs-3 mb-4'>Tell Us About Yourself</div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01" className='mb-2'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter first name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-2'>
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter middle name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername" className='mb-2'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="5" controlId="validationCustom03" className='mb-2'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="username@example.com" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom04 className='mb-2'">
                        <Form.Label>Phone </Form.Label>
                        <Form.Control type="text" placeholder="Phone number" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone number.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom05" className='mb-2'>
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="text" placeholder="www.example.com" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid website address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom03" className='mb-2'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04" className='mb-2'>
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05" className='mb-2'>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}

export default PersonalForm;