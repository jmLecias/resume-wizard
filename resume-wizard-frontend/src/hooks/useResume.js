import { createContext, useContext, useMemo, useEffect, useState } from "react";
import ResumeWizardApi, { resumeWizardBaseUrl } from "../api/api";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "./useAuth";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {

    const {user} = useAuth();

    const [resumes, setResumes] = useState([]);

    const getUserResumes = async (userId) => {
        try {
            const response = await ResumeWizardApi.get(`/resumes/${userId}`);

            const userResumes = response.data.resumes;

            setResumes(userResumes);
        } catch (error) {
            console.error('Error fetching user resumes: ', error);
        }
    }

    const createResume = async (details) => {
        const resumeData = new FormData();
        resumeData.append('user_id', user.id);
        resumeData.append('first_name', details.personal.firstName);
        resumeData.append('middle_name', details.personal.middleName);
        resumeData.append('last_name', details.personal.lastName);
        resumeData.append('email', details.personal.email);
        resumeData.append('phone_number', details.personal.phoneNumber);
        resumeData.append('website', details.personal.website);
        resumeData.append('country', details.personal.country);
        resumeData.append('state_province', details.personal.stateProvince);
        resumeData.append('city', details.personal.city);
        resumeData.append('zip_code', details.personal.zip);
        resumeData.append('objective', details.objective.careerObjective);

        details.education.forEach(education => {
            Object.keys(education).forEach(key => {
                resumeData.append(`educations[${key}]`, education[key]);
            });
        });
    
        details.work.forEach(work => {
            Object.keys(work).forEach(key => {
                resumeData.append(`works[${key}]`, work[key]);
            });
        });
    
        details.certification.forEach(certification => {
            Object.keys(certification).forEach(key => {
                resumeData.append(`certificates[${key}]`, certification[key]);
            });
        });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        const response = await ResumeWizardApi.post('/resume/create', resumeData, config);

        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    }

    const value = useMemo(
        () => ({
            resumes,
            setResumes,
            getUserResumes,
            createResume,
        }),
        [resumes]
    );
    return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};

export const useResume = () => {
    return useContext(ResumeContext);
};