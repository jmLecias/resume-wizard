import { createContext, useContext, useMemo, useEffect, useState } from "react";
import StorageService from "../services/StorageService";
import ResumeWizardApi, { resumeWizardBaseUrl } from "../api/api";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const ss = new StorageService();

    var user = ss.getItem('user');

    if (user) {
        user = JSON.parse(user);
    }

    const [home, setHome] = useState("/");

    const login = async (credentials) => {
        const response = await ResumeWizardApi.post('/login', credentials);

        if (response.status === 200) {
            const accessToken = response.data.access_token;
            const user = response.data.user;

            console.log(user);

            ss.storeItem('access_token', accessToken);
            ss.storeItem('user', JSON.stringify(user));

            return true;
        } else {
            return false;
        }
    };

    const register = async (credentials) => {
        const response = await ResumeWizardApi.post('/register', credentials);

        if (response.status === 200) {
            const accessToken = response.data.access_token;
            const user = response.data.user;

            ss.storeItem('access_token', accessToken);
            ss.storeItem('user', JSON.stringify(user));
            return true;
        } else {
            return false;
        }
    };

    const logout = async () => {
        const response = await ResumeWizardApi.post('/logout');

        ss.removeItem('access_token');
        ss.removeItem('user');

        if (response.status === 200) {

            return true;
        } else {
            return false;
        }
    };

    const value = useMemo(
        () => ({
            user,
            home,
            login,
            register,
            logout,
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};