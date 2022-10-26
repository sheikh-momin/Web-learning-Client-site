import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaEye } from 'react-icons/fa';

const Courses = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className='container '>
    {
        categories.map(course => 
          <Card className='mb-5 shadow text-center' key={course._id} style={{ width: '100%' }}>
            <Card.Img variant="top" src={course.img} />
            <Card.Body>
              <Card.Title className='mb-3'>{course.title}</Card.Title>
              <Button ><Link className='text-decoration-none text-light fw-semibold m-auto ' to={`/courses/${course.category_id}`} variant="warning">Course Details</Link></Button>
            </Card.Body>
          </Card>
        )
    }
      
    </div>
  );
};

export default Courses;