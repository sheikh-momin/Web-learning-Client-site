import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
  const courseData= useLoaderData()
  console.log(courseData.img)
  return (
    <div>
      <h2>Course data: </h2>
      <img src={ courseData.img } alt="" />
    </div>
  );
};

export default Course;