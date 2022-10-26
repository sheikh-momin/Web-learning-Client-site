import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';



const LogIn = () => {
  const { signIn } =useContext(AuthContext)
  const navigate = useNavigate()

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
        navigate('/')
      })
      .catch(error => console.error(error))

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
        
      </Form>
    </div>
  );
};

export default LogIn;