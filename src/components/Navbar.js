import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from 'react-router-dom'
import NavLogo from './icons/elijahLogoDark.svg'


function NavigationBar() {
  
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1">
  <div className="container ">
    <Link className="navbar-brand" to="/">
    <img
        src={NavLogo}
        class="me-2"
        height="40"
        alt="MDB Logo"
        loading="lazy"
      />
    <strong className="lead">ELIJAH MONJARDIN</strong></Link>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to={'/about'} className="nav-link">About me</Link>
        <Link to={'/portfolio'} className="nav-link">Portfolio</Link>
        {/* 
        <Link to={'/resume'} className="nav-link">Resume</Link>
        */}
        
        <Link to={'/contact'} className="nav-link">Contact</Link>
        
      </div>
    </div>
  </div>
</nav>
    )

}

export default NavigationBar