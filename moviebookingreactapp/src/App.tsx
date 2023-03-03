import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminLogin from './Pages/AdminLogin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Login" element={<AdminLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;
