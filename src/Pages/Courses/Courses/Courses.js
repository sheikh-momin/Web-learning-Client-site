import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  console.log(categories)
  return (
    <div className='container '>
    {
        categories.map(course => 
          <Card className='mb-5 shadow text-center' key={course._id} style={{ width: '100%' }}>
            <Card.Img variant="top" src={course.img} />
            <Card.Body>
              <Card.Title className='mb-3'>{course.title}</Card.Title>
              <Button variant="primary">Enroll This Course</Button>
            </Card.Body>
          </Card>
        )
    }
      
    </div>
  );
};

export default Courses;