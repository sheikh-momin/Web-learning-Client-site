import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
  return (
    <div>
    <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className='d-none d-lg-block'><LeftSideNav></LeftSideNav></Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;