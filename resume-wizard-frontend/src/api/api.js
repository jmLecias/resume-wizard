import axios from 'axios';
import StorageService from '../services/StorageService';

const ss = new StorageService();

const serverIp = '';
const laravelURL = `http://${((serverIp !== '')? serverIp: 'localhost')}:8000`;
const resumeWizardBaseUrl = laravelURL+'/api';

const ResumeWizardApi = axios.create({
    withCredentials: true,
    baseURL: resumeWizardBaseUrl,
    headers: {
        'bypass-tunnel-reminder': 'anyvalue',
    }
});

ResumeWizardApi.interceptors.request.use(
    config => {
        const token = ss.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers['bypass-tunnel-reminder'] = 'anyvalue';
        }
        return config;
    },
    error => Promise.reject(error)
);

ResumeWizardApi.interceptors.response.use(
    response => response,
    async error => {
        if(error.response.status === 401 ) { // FIX THISSSSS
            ss.removeItem('access_token');
            ss.removeItem('user');
        }

        const originalRequest = error.config;

        return Promise.reject(error);
    }
);

export default ResumeWizardApi;
export { resumeWizardBaseUrl};
