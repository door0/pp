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
      <div className="title">
        <h2>Webdev</h2>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
          <Routes> 
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/projects' element={<Projects/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/' element={<Home/>} />
          </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
