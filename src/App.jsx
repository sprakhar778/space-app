import React from 'react';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
useEffect(() => {
  AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: false, // allow animations to run again
    mirror: true, 
  });

  AOS.refresh();
}, []);


  return (
    <div className="">
      <HomePage />
    
    </div>
  );
}

export default App;