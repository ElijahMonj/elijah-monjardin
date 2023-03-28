import React, {Component} from 'react';

import './App.css';
import {Link, NavLink} from 'react-router-dom'
import {BrowserRouter, Route,Routes} from 'react-router-dom';

import NavigationBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar/>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
        <Footer/>
      </div>
      
      </BrowserRouter>
  );
}

export default App;
