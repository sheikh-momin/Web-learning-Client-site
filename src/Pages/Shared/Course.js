import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
  const courseData= useLoaderData()
  return (
    <div className='container'>
      <Card className='mb-5 shadow text-center' key={courseData._id} style={{ width: '100%' }}>
        <Card.Img  variant="top" src={courseData.img} />
        <Card.Body>
          <Card.Title className='mb-3'>{courseData.title}</Card.Title>
          
          <Button variant="primary">Enroll This Course</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;