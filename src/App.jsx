import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import Work from './components/Work';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <Footer /> */}

      <Nav/>
      <Home/>
      <Header/>
      <Work/>
      <Skill/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
