import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';

const LandingPage = () => {
    return (
        <div className='user-main' style={{ backgroundImage: `url(/images/landingpagebg1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-100 h-100 d-flex align-items-center justify-content-center text-center'>
                <div className='text-center w-75 landing-content'>
                    <div className='fs-1 text-primary fw-bold'>Only 2% of resumes make it past the first round. Be in the top 2%</div>
                    <div className='text-secondary custom-secondary-landing'>Use resume wizard to create professional field-tested resume templates that follow the exact 'resume-rules' employers look for. Easy to use and done within minutes - try now!</div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;