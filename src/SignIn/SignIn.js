import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const SignIn = () => {

  const [error, setError] = useState('')
  const { googleSignIn, githubSignIn, createUser,user }=useContext(AuthContext)
  const [name , setName] = useState(user.displayName)

  const googleProvider= new GoogleAuthProvider()
  const handleGoogleSignIn=()=>{
    googleSignIn(googleProvider)
    .then(result=>{
      const user =result.user;
      console.log(user)
    })
    .catch(error=> console.error(error))
  }

  const githubProvider = new GithubAuthProvider()
  const handleGithubSignIN =() =>{
    githubSignIn(githubProvider)
    .then(result=>{
      const user = result.user
      console.log(user)
    })
    .catch(error => console.error(error))
  }

  const handleSubmit= event =>{
    event.preventDefault()
    const form =event.target;
    const name =form.name.value;
    const email =form.email.value;
    const password =form.password.value;

    createUser(email,password)
      .then(result => {
        const user = result.user
        console.log(user)
        setError('')
        form.reset()
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })
  }

  return (
    <div className='container'>
      <Form onSubmit={handleSubmit}> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control  name='name' type="text" placeholder="Enter email" />
          
        </Form.Group>
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
            Sign In
          </Button>
          <Link to='/login'><p className='mt-2'>You already have an account?Then Log In!</p></Link>
        </div>
        <Form.Text className='text-danger'>
          {error}
        </Form.Text>
        <div className='mt-3 d-flex justify-content-center'>
          <Button className='me-3' onClick={handleGoogleSignIn} variant="outline-success"><FaGoogle className='me-2'></FaGoogle>Log in With Google</Button>
          <Button onClick={handleGithubSignIN} variant="outline-secondary"><FaGithub className='me-2'></FaGithub>Log in with Github</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;