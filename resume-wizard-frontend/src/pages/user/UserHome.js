import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';

import { useNavigate } from 'react-router-dom';

const UserHome = () => {
    const navigate = useNavigate();

    return (
        <div className='user-main'>
            <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
                <div className='text-center w-75'>
                    <div className='fs-1 text-primary'>User Home</div>
                    <div className='fs-6 text-primary'>Use resume wizard to create professional field-tested resume templates that follow the exact 'resume-rules' employers look for. Easy to use and done within minutes - try now!</div>
                    <Button className='p-2' onClick={() => navigate('/create')}>
                        Create Resume
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default UserHome;
