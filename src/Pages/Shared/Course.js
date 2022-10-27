import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { FaStar, FaEye } from 'react-icons/fa';
import Pdf from "react-to-pdf";
import { GrDocumentPdf } from "react-icons/gr";

const ref = React.createRef();

const Course = () => {
  const courseData= useLoaderData()
  const [allData, setAllData]=useState([])
  const showAllData=()=>{
    setAllData(courseData)
  }
  const { details, total_view, rating } = allData
  return (
    <div className='container '>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button className='bg-danger mb-3' onClick={toPdf}><GrDocumentPdf className=' me-2'></GrDocumentPdf>Generate Pdf</Button>}
      </Pdf>
      <div ref={ref}>
        <Card className='mb-5 shadow text-center' key={courseData._id} style={{ width: '100%' }}>
          <Card.Img variant="top" src={courseData.img} />
          <Card.Body>
            <Card.Title className='mb-3'>{courseData.title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <div className='d-flex justify-content-between'>
              <p><FaEye className='me-2'></FaEye>{total_view}</p>
              <p><FaStar className='text-warning me-2'></FaStar>{rating}</p>
            </div>
            <Button className='mt-3' onClick={showAllData} variant="warning">Enroll This Course</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};


export default Course;