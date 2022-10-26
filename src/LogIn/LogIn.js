import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';



const LogIn = () => {
  const [error, setError] = useState('')
  const { signIn } =useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogIn = event =>{
    event.preventDefault()
    const form = event.target
    const email =form.email.value
    const password =form.password.value
    signIn(email,password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
        setError('')
        navigate(from, {replace: true})
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })

  }
  return (
    <div>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
        
        <div className='d-flex '>
          <Button className='me-2' variant="primary" type="submit">
            Log In
          </Button>
          <Link to='/signin'><p className='mt-2'>You have no account?Then Sign In!</p></Link>
        </div>
        <Form.Text className='text-danger  '>
          {error}
        </Form.Text>
        
      </Form>
    </div>
  );
};

export default LogIn;