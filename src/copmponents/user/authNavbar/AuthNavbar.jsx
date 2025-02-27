import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

import style from './authNavbar.module.css';

export default function AuthNavbar() {
  return (
    <Navbar expand="lg" className={`${style.navbar} border-bottom bg-white`}>
    <Container>
      <Navbar.Brand className='d-flex align-items-center gap-3'>
        <Link to={'/auth/login'} className='d-flex align-items-center gap-1' onClick={()=>window.scroll(0,0)}>
          <div className={`${style.websiteName} position-relative`}>
            <span className='fw-bold'>Exclusive</span>
          </div>
        </Link>
    
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
     
    </Container>
  </Navbar>
  )
}
