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
          <Route exact path='/elijah-monjardin' element={<Home/>}/>
          <Route path='/elijah-monjardin/about' element={<About/>}/>
          <Route path='/elijah-monjardin/contact' element={<Contact/>}/>
          <Route path='/elijah-monjardin/portfolio' element={<Portfolio/>}/>
          <Route path='/elijah-monjardin/resume' element={<Resume/>}/>
        </Routes>
        <Footer/>
      </div>
      
      </BrowserRouter>
  );
}

export default App;
