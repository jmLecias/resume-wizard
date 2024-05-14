import React from 'react';
import "react-h5-audio-player/src/styles.scss";
import './css/App.css';
import 'chart.js/auto'; // VERY IMPORTANT
import 'react-form-wizard-component/dist/style.css';
import 'react-pro-sidebar/dist/css/styles.css'; // VERY IMPORTANT
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Landing from './pages/other/Landing';
import User from './pages/user/User';

import AuthenticatedRoute from './components/routes/AuthenticatedRoute';

import { AuthProvider } from './hooks/useAuth';
import { ResumeProvider } from './hooks/useResume';

function App() {
  return (
    <Router>
      <AuthProvider>
      <ResumeProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={
            <Routes>
              <Route path="home" element={<User content="home" />} />
              <Route path="create" element={<User content="create" />} />
              {/* <Route path="*" element={<User content={'not_found'} />} /> */}
            </Routes>
          } />
        </Routes>
      </ResumeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
