import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <Card text="black" className="mb-3" style={{ maxWidth: '18rem' }}>
      <Card.Header>BadBank Landing Module</Card.Header>
      <Card.Body>
        <Card.Title>Welcome to the bank</Card.Title>
        <Card.Text>You can move around using the navigation bar.</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
