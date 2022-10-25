import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import img from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='mb-3'>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className='fw-bold fs-2' href="#home"><img style={{height:'60px',borderRadius:'50%'}} src={img} alt="" /> Web Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5 ">
              <Link className='text-decoration-none text-dark fw-semibold m-auto  me-3' to={'/'}>Home</Link>
              <Link className='text-decoration-none text-dark fw-semibold  m-auto me-3' to={'/categories'}>Courses</Link>
              <Link className='text-decoration-none text-dark fw-semibold m-auto  me-3' to={'/faq'}>FAQ</Link>
              <Link className='text-decoration-none text-dark fw-semibold m-auto  me-3' to={'/blog'}>Blog</Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;