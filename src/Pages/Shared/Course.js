import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaEye } from 'react-icons/fa';
import Pdf from "react-to-pdf";
import { GrDocumentPdf } from "react-icons/gr";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ref = React.createRef();

const Course = () => {
  const {user} = useContext(AuthContext)
  const courseData= useLoaderData()
  const [click, seClick] = useState(false)
  const handleClick =()=>{
    seClick(true)
  }
  const { details, total_view, rating } = courseData
  return (
    <div className='container '>
      {
        click === false ? 
      <div>
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
                  <Button onClick={handleClick} className='mt-3' variant="warning">Get Premium</Button>
                </Card.Body>
              </Card>
            </div>
      </div>
      :
      <div className='text-center'>
            <h1 className='text-success'>Enroll {courseData.title} successfully!</h1>
            <div className='mb-5'>
              <h3>User details:</h3>
              <p>Name: {user?.displayName}</p>
              <p>Uid: {user?.uid}</p>
              <p>Email: {user?.email}</p>
              <img style={{height:'100px'}} src={user?.photoURL} alt="" />
            </div>
            <Link  to='/categories'>Get More Courses</Link>
      </div>
      }
    </div>
  );
};


export default Course;