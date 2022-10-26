import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const SignIn = () => {
  const { googleSignIn, githubSignIn }=useContext(AuthContext)

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

  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <div className='mt-3 d-flex justify-content-center'>
          <Button className='me-3' onClick={handleGoogleSignIn} variant="outline-success"><FaGoogle className='me-2'></FaGoogle>Log in With Google</Button>
          <Button onClick={handleGithubSignIN} variant="outline-secondary"><FaGithub className='me-2'></FaGithub>Log in with Github</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;