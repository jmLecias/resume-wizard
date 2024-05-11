import React from 'react';
import "react-h5-audio-player/src/styles.scss";
import './css/App.css';
import 'chart.js/auto'; // VERY IMPORTANT
import 'react-pro-sidebar/dist/css/styles.css'; // VERY IMPORTANT
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Landing from './pages/other/Landing';
import User from './pages/user/User';

import AuthenticatedRoute from './components/routes/AuthenticatedRoute';

import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user/*" element={
            <AuthenticatedRoute>
              <Routes>
                <Route path="" element={<User/>} />
                {/* <Route path="*" element={<User content={'not_found'} />} /> */}
              </Routes>
            </AuthenticatedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
