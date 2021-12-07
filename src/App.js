import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <div className="header">
      <div className="nav-center">
        <div className="nav-title">
          <h2>WebDev</h2>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>          
          <Link to="/about">About</Link>         
          <Link to="/projects">Projects</Link>         
          <Link to="/contact">Contact</Link>
          <Routes> 
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/projects' element={<Projects/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/' element={<Home/>} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
