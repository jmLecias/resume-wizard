import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import { TiUpload } from "react-icons/ti";
import { IoNotifications } from "react-icons/io5";
import { IoMdMusicalNote } from "react-icons/io";

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const UserHeader = ({ isLoggedIn, onRegisterClick, onLoginClick }) => {
    const {logout} = useAuth()
    const navigate = useNavigate();

    const handleLogout = () => {
        logout().then((res) => {
            navigate('/');
        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <header className='user-header'>
            <span className='logo-text'>Resume Wizard</span>

            {!isLoggedIn && (
                <div className='d-flex align-items-center'>
                    <span className='header-text' onClick={() => onLoginClick()}>Login</span>
                    <span className='header-text' onClick={() => onRegisterClick()}>Register</span>
                </div>
            ) || (
                    <div className='d-flex align-items-center'>
                        <span className='header-text' onClick={() => handleLogout()}>Logout</span>
                        <Dropdown icon={<IoNotifications size={24} title='Notifications' />} title={"notifications"}>
                            <div className='custom-dropdown-item' onClick={() => { }}>
                                <IoNotifications size={24} title='Notifications' />
                                <span className='custom-dropdown-text'>Notifications</span>
                            </div>
                            <div></div>
                        </Dropdown>
                    </div>
                )}
        </header>
    );
}

export default UserHeader;
