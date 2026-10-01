import React from 'react';
import './App.css';
import LandingPageScreens from './screens/LandingPageScreens';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUsScreen from './screens/AboutUsScreen';
import Footer from './components/Footer/Footer';
import ContactUsScreen from './screens/ContactScreen'
import ServicesScreen from './screens/ServicesScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';





function App() {
  return (
    <div className= "App">
      <Header />

      <Routes>
        <Route path='/' element={<LandingPageScreens/>} />
        <Route path='/about-us' element={<AboutUsScreen />} />
        <Route path='/contact-us' element={<ContactUsScreen/>} />
        <Route path='/services' element={<ServicesScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='sign-up' element={<SignUpScreen/>} />


      </Routes>

      <Footer />

    </div>
  );
}

export default App
