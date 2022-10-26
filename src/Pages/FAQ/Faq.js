import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className='Text-center text-bold '>
      <h1>404,Page not found!</h1>
      <Link to='/'><Button>Go back to default page.</Button></Link>
    </div>
  );
};

export default Faq;