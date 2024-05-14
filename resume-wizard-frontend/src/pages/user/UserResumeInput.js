import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ToastContainer, toast } from 'react-toastify';
import FormStepper from '../../components/forms/FormStepper';
import PdfDownloadModal from '../../components/modals/PdfDownloadModal';

import { useNavigate } from 'react-router-dom';

import PersonalForm from '../../components/forms/PersonalForm';
import EducationForm from '../../components/forms/EducationForm';
import WorkForm from '../../components/forms/WorkForm';
import CertificationForm from '../../components/forms/CertificationForm';
import ObjectiveForm from '../../components/forms/ObjectiveForm';

import { MdOutlineSchool } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { LuGoal } from "react-icons/lu";

const UserResumeInput = () => {
    const navigate = useNavigate();
    const personalFormRef = useRef(null);
    const educationFormRef = useRef(null);
    const workFormRef = useRef(null);
    const certificationFormRef = useRef(null);
    const objectiveFormRef = useRef(null);

    const [showDownload, setShowDownload] = useState(false);

    const [resumeDetails, setResumeDetails] = useState({
        personal: null,
        education: null,
        work: null,
        certification: null,
        objective: null,
    });

    useEffect(() => {
        console.log(resumeDetails);
    }, [resumeDetails]);

    const tabs = [
        {
            index: 0,
            name: 'personal',
            title: 'Personal Information',
            icon: <FaRegUser size={22} />,
            content: <PersonalForm ref={personalFormRef} />,
            ref: personalFormRef,
        },
        {
            index: 1,
            name: 'education',
            title: 'Education',
            icon: <MdOutlineSchool size={30} />,
            content: <EducationForm ref={educationFormRef} />,
            ref: educationFormRef,
        },
        {
            index: 2,
            name: 'work',
            title: 'Work',
            icon: <MdOutlineWorkOutline size={30} />,
            content: <WorkForm ref={workFormRef} />,
            ref: workFormRef,
        },
        {
            index: 3,
            name: 'certification',
            title: 'Certifications',
            icon: <GrCertificate size={27} />,
            content: <CertificationForm ref={certificationFormRef} />,
            ref: certificationFormRef,
        },
        {
            index: 4,
            name: 'objective',
            title: 'Career Objective',
            icon: <LuGoal size={30} />,
            content: <ObjectiveForm ref={objectiveFormRef} />,
            ref: objectiveFormRef,
        },
    ];

    const [currentTab, setCurrentTab] = useState(tabs[0]);


    const handleTabChange = (prevTab, currTab) => {
        if (resumeDetails[currTab.name]) {
            setCurrentTab(currTab);
            return;
        }

        if (prevTab.ref.current.checkValidity() === true) {
            tabs.map(tab => {
                if (resumeDetails[tab.name]) {
                    setResumeDetails((prev) => ({
                        ...prev,
                        [tab.name]: tab.ref.current.getInputs(),
                    }))
                }
            });

            setResumeDetails(prev => ({
                ...prev,
                [prevTab.name]: prevTab.ref.current.getInputs(),
            }));
            setCurrentTab(currTab);
        } else {
            setCurrentTab(prevTab);
        }
    };

    const handleFinishClick = () => {
        setShowDownload(true);
        const lastIndex = tabs.length - 1;
        if (tabs[lastIndex].ref.current.checkValidity() === true) {
            tabs.map(tab => {
                if (resumeDetails[tab.name]) {
                    setResumeDetails((prev) => ({
                        ...prev,
                        [tab.name]: tab.ref.current.getInputs(),
                    }))
                }
            });

            setResumeDetails(prev => ({
                ...prev,
                [tabs[lastIndex].name]: tabs[lastIndex].ref.current.getInputs(),
            }));
        }
    };

    const handleCloseModal = () => {
        setShowDownload(false);
    }

    return (
        <div
            className='user-main custom-scrollbar'
            style={{ backgroundImage: `url(/images/formpagebg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <FormStepper
                tabs={tabs}
                onTabChange={handleTabChange}
                onBackClick={() => { }}
                onNextClick={() => { }}
                onFinish={handleFinishClick}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <PdfDownloadModal
                show={showDownload}
                onHide={handleCloseModal}
                details={resumeDetails}
            />
        </div>
    );
}

export default UserResumeInput;
