import React from 'react';
import "react-h5-audio-player/src/styles.scss";
import './css/App.css';
import 'chart.js/auto'; // VERY IMPORTANT
import 'react-pro-sidebar/dist/css/styles.css'; // VERY IMPORTANT
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LandingPage from './pages/other/LandingPage';

import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route index element={<LandingPage content={'explore'} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
