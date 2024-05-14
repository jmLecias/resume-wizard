import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';

import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import homepagebg from '../../components/images/homepagebg.jpg'

const UserHome = () => {
    const navigate = useNavigate();

    return (
        <div className='user-main' style={{ backgroundImage: `url(${homepagebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
                <div className='d-flex flex-column justify-content-center align-items-center text-center w-75 custom-home-content rounded-5'>
                    <div className='custom-welcome-font text-primary fw-bold'>Welcome</div>
                    <div className='fs-3 text-primary mb-3'>To Resume Wizard</div>
                    <div className='text-secondary custom-secondary-home'>Leverage our resume wizard to generate professional, industry-validated resume templates that adhere strictly to the criteria employers seek. A user-friendly that enables you to create your resume in just a few minutes.
                    </div>
                    <Button className='p-2 rounded-5 w-25 mt-5 d-flex justify-content-center align-items-center gap-3' onClick={() => navigate('/create')}>
                        Create Resume
                        <FaArrowRightLong size={24} title='Arrow' />
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default UserHome;
