import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';

import UserHeader from '../../components/headers/UserHeader';
import UserHome from './UserHome';

import { useAuth } from '../../hooks/useAuth';

const User = ({content}) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <ToastContainer />
            <div className="user-main-container" >
                <UserHeader isLoggedIn={true}/>
                <UserHome />
            </div>
        </div>
    );
}

export default User;
