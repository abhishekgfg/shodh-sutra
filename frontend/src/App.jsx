import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
 import HomePage from './Home/HomePage';
import "./App.css"



function App() {
  return (
    <div>
      <Header />
      <HomePage /> {/* 🆕 Add video hero section below header */}
      <Footer />
    </div>
  );
}

export default App;
