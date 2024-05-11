import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';

import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';

const LandingPage = ({ content }) => {
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

    return (
        <div>
            <ToastContainer />
            <LoginModal 
                show={showLogin}
                onHide={handleClose}
                onActionEnded={handleClose}
                onRegisterClick={handleShowRegister}
            />
            <RegisterModal 
                show={showRegister}
                onHide={handleClose}
                onActionEnded={handleClose}
                onLoginClick={handleShowLogin}
            />
            <div className="" >
                <Button onClick={handleShowLogin}>Log in</Button>
                <Button onClick={handleShowRegister}>Register</Button>
            </div>
        </div>
    );
}

export default LandingPage;
