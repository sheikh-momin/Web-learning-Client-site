import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import img from './home.png'



const Home = () => {
  const { user,  } = useContext(AuthContext)
  return (
    <div className='container  mt-3'>
      <Card  style={{ width: '100%' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Compleat Website design!</Card.Title>
          <Card.Text>
            Design, Manage & Grow Your Online Presence with the Platform Trusted by 2M+ Users. Generate More Traffic with Powerful SEO Tools & Impress Users with a Stunning Website. Free multilingual fonts. SEO Setup Checklist. Traffic generation tools.
          </Card.Text>
          <div>
            {user?.uid ?
              <div>
                <p className='text-success'>You are log in successfully!</p>

              </div>
              :
              <div>
                <p className='text-danger'>For more information:</p>
                <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/login'><Button variant="outline-success">Log In</Button></Link>
                <Link className='text-decoration-none text-success fw-semibold m-lg-auto  me-lg-3' to='/signin'> <Button variant="outline-secondary">Sign In</Button></Link>
              </div>
            }
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;