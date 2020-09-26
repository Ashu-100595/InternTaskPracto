import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar'
import LandingSection from './components/Landing Section/LandingSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <LandingSection/>
      <Footer/>   
    </div>
  );
}

export default App;
