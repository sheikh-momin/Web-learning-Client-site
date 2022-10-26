import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <div className='d-flex '>
          <Button className='me-2' variant="primary" type="submit">
            Log In
          </Button>
          <Link to='/signin'><p className='mt-2'>You have no account?Then Sign In!</p></Link>
        </div>
        
      </Form>
    </div>
  );
};

export default LogIn;