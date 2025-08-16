import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './home/HomePage';
import "./App.css";
import AboutUs from './about/AboutUs';
import WhyPursuie from './about/WhyPursuie';
import Process from './pages/Process';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path="/whyprusuie" element={<WhyPursuie />} />
          <Route path="/process" element={<Process />}  />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
