import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import wishlist from '../../../assets/images/navbar/wishlist.svg';
import cart from '../../../assets/images/navbar/cart.svg';
import users from '../../../assets/images/navbar/user.svg';
import style from './navbar.module.css';
import { UserContext } from '../context/UserContext';
export default function CustomNavbar() {
  const navigate = useNavigate();
  const {user ,setUser} = useContext(UserContext);
  const logOut = () => {
    localStorage.removeItem('userToken');
    setUser(null);
    navigate('/auth/login');
  }
  return (
    <Navbar expand="lg" className={`${style.navbar} border-bottom bg-white`}>
    <Container>
      <Navbar.Brand className='d-flex align-items-center gap-3'>
        <Link to={'/'} className='d-flex align-items-center gap-1' onClick={()=>window.scroll(0,0)}>
          <div className={`${style.websiteName} position-relative`}>
            <span className='fw-bold'>Exclusive</span>
          </div>
        </Link>
    
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`${style.nav} ms-auto d-flex align-items-center gap-4 `}>
          <Nav.Link as={Link} to={'/'} onClick={()=>window.scroll(0,0)}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={'/about'} onClick={()=>window.scroll(0,0)}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to={'/products'} className={`${style.login} d-flex flex-column`} onClick={()=>window.scroll(0,0)}>
            Products
          </Nav.Link>
       
          <Nav.Link as={Link} to={'/contact'} onClick={()=>window.scroll(0,0)} >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`${style.navs} ms-auto d-flex align-items-center`}>
         
          <Nav.Link as={Link} to={'/'} className='position-relative'>
            <img src={wishlist}  className='d-lg-block d-none' />
            <span className='d-lg-none d-block'>Wishlist</span>
          </Nav.Link>
          <Nav.Link as={Link} to={'/cart'} className='position-relative' onClick={()=>window.scroll(0,0)}>
           <span className={`${style.cartCount} `}></span> 
            <img src={cart}  className='d-lg-block d-none' />
            <span className='d-lg-none d-block'>Cart</span>
          </Nav.Link>
          <Nav.Link as={Link} to={'/profile/info'} onClick={()=>window.scroll(0,0)} className='d-flex align-items-center '>
     
            <img src={users} className='d-none d-lg-block' />
            <span className='d-lg-none d-block'>Profile</span>
            <div >
           
          </div>
          <NavDropdown id="basic-nav-dropdown" className='d-lg-block d-none me-1'>
            <NavDropdown.Item onClick={()=>logOut()} >Log Out</NavDropdown.Item>
          </NavDropdown>
          </Nav.Link>
          <Nav.Link  className='d-lg-none d-block'>
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
