import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ToastContainer, toast } from 'react-toastify';
import FormWizard from "react-form-wizard-component";

import { useNavigate } from 'react-router-dom';

import { MdOutlineSchool } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { LuGoal } from "react-icons/lu";

const FormStepper = ({ tabs, onNextClick, onBackClick, onFinish, onTabChange, currentTab, setCurrentTab }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const container = document.querySelector('.tab-icons-container');
        const handleResize = () => {
            const newWidth = container.offsetWidth;
            setWidth(newWidth);
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
        onTabChange(currentTab, tab);
    }

    const handleNextClick = () => {
        if (currentTab.index < tabs.length - 1) {
            setCurrentTab(tabs[currentTab.index + 1]);
            onTabChange(currentTab, tabs[currentTab.index + 1]);
            onNextClick();
        }
    }

    const handleBackClick = () => {
        if (currentTab.index > 0) {
            setCurrentTab(tabs[currentTab.index - 1]);
            onTabChange(currentTab, tabs[currentTab.index - 1]);
            onBackClick();
        }
    }

    const handleFinishClick = () => {
        if (currentTab.index === (tabs.length - 1)) {
            onFinish();
        }
    }

    const renderIcons = () => {
        return tabs.map((tab) => (
            <div key={tab.index} className='d-flex align-items-center justify-content-end'>
                {tab.index > 0 && (
                    <div
                        className='tab-line-prefix'
                        style={{ width: `${width * 0.13}px` }}
                    >
                    </div>
                )}
                <div className='tab-container' onClick={() => handleTabClick(tab)}>
                    <div
                        className='tab-icon-container'
                        style={{
                            backgroundColor: `${(tab.title === currentTab.title) ? 'var(--primary-color-light)' : ''} `,
                            color: `${(tab.title === currentTab.title) ? 'var(--light)' : ''} `
                        }}
                    >
                        {tab.icon}
                        <div
                            className='tab-title'
                            style={{width: `${width * 0.23}px`}}
                        >
                            {tab.title}
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    const renderForms = () => {
        return tabs.map((tab) => (
            <div key={tab.index} style={{ display: `${(tab.index === currentTab.index) ? '' : 'none'}` }}>
                {tab.content}
            </div>
        ));
    }

    return (
        <div className='w-100 mb-4'>
            <div className='tab-icons-container'>
                {renderIcons()}
            </div>
            <div className='tab-content-container'>
                {renderForms()}
            </div>
            <div className='w-100 d-flex align-items-center justify-content-between'>
                <div>
                    {currentTab.index > 0 && (
                        <Button
                            onClick={() => handleBackClick()}
                            style={{ backgroundColor: 'var(--primary-color-light)' }}
                        >Back</Button>
                    )}
                </div>
                <div>
                    {currentTab.index < (tabs.length - 1) && (
                        <Button
                            onClick={() => handleNextClick()}
                            style={{ backgroundColor: 'var(--primary-color-light)' }}
                        >Next</Button>
                    )}
                    {currentTab.index === (tabs.length - 1) && (
                        <Button
                            onClick={() => handleFinishClick()}
                            style={{ backgroundColor: 'var(--primary-color-light)' }}
                        >Finish</Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FormStepper;
