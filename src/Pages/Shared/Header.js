import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import img from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';


const Header = () => {
  const {user, logout}= useContext(AuthContext)
  const handleSignOut =()=>{
    logout()
    .then(()=>{})
    .catch(error =>console.error(error))
  }
  return (
    <div className=''>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className='fw-bold fs-2 mt-1' href="#home"><img style={{ height: '60px', borderRadius: '50%' }} src={img} alt="" /><span className='text-light bg-warning rounded ms-2'> Web </span>Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5 ">
              <Link className='text-decoration-none text-dark fw-semibold m-lg-auto  me-lg-3' to={'/'}>Home</Link>
              <Link className='text-decoration-none text-dark fw-semibold  m-lg-auto me-lg-3' to={'/categories'}>Courses</Link>
              <Link className='text-decoration-none text-dark fw-semibold m-lg-auto  me-lg-3' to={'/faq'}>FAQ</Link>
              <Link className='text-decoration-none text-dark fw-semibold m-lg-auto  me-lg-3' to={'/blog'}>Blog</Link>
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
              <Nav.Link href="#deets">
              {user?.uid ? 
              <div>
                    <Link onClick={handleSignOut} className='text-decoration-none  fw-semibold m-lg-auto  me-lg-3' to='/login'><Button variant='outline-danger'>Log Out</Button></Link>
                    <span>{user?.displayName}</span>
              </div>
              :
              <div>
                    <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/login'><Button variant="outline-success">Log In</Button></Link>
                    <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/signin'> <Button variant="outline-secondary">Sign In</Button></Link>
              </div>
              }
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL ? 
                  <Image style={{ height: '25px' }} roundedCircle 
                  src={user?.photoURL}></Image>
                  : <FaUserCircle></FaUserCircle>
                    
                }
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