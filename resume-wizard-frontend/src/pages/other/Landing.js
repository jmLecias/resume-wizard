import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';

import UserHeader from '../../components/headers/UserHeader';
import LandingPage from './LandingPage';

import { useAuth } from '../../hooks/useAuth';

const Landing = () => {
    const { user} = useAuth();
    const navigate = useNavigate();

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
    }

    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    }

    const handleClose = () => {
        setShowRegister(false);
        setShowLogin(false);
    }

    const handleActionEnded = () => {
        handleClose();
        navigate("/home");
    }

    return (
        <div>
            <ToastContainer />
            <LoginModal
                show={showLogin}
                onHide={handleClose}
                onActionEnded={handleActionEnded}
                onRegisterClick={handleShowRegister}
            />
            <RegisterModal
                show={showRegister}
                onHide={handleClose}
                onActionEnded={handleActionEnded}
                onLoginClick={handleShowLogin}
            />
            <div className="user-main-container" >
                <UserHeader
                    isLoggedIn={false}
                    onRegisterClick={handleShowRegister}
                    onLoginClick={handleShowLogin}
                />
                <LandingPage />
            </div>
        </div>
    );
}

export default Landing;
