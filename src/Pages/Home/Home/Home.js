import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './home.png'


const Home = () => {
  return (
    <div>
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Compleat Website design!</Card.Title>
          <Card.Text>
            Design, Manage & Grow Your Online Presence with the Platform Trusted by 2M+ Users. Generate More Traffic with Powerful SEO Tools & Impress Users with a Stunning Website. Free multilingual fonts. SEO Setup Checklist. Traffic generation tools.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;