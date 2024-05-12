import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import FormWizard from "react-form-wizard-component";

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

    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };
    const tabChanged = ({ prevIndex, nextIndex }) => {
        console.log("prevIndex", prevIndex);
        console.log("nextIndex", nextIndex);
    };

    return (
        <div className='user-main custom-scrollbar'>
            <FormWizard
                shape="circle"
                stepSize="sm"
                color="var(--primary-color-light)"
                onComplete={handleComplete}
                onTabChange={tabChanged}
            >
                <FormWizard.TabContent title="Personal Details" icon={<FaRegUser />}>
                    <PersonalForm />
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Education" icon={<MdOutlineSchool size={25} />}>
                    <EducationForm />
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Work" icon={<MdOutlineWorkOutline size={25} />}>
                    <WorkForm />
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Certifications" icon={<GrCertificate size={25} />}>
                    <CertificationForm />
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Career Objective" icon={<LuGoal size={25} />}>
                    <ObjectiveForm />
                </FormWizard.TabContent>
            </FormWizard>

            <style>
                {`
                    @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
                `}
            </style>
        </div>
    );
}

export default UserResumeInput;
