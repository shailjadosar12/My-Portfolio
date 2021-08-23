import React from 'react'
import "./About.css";
import { Card, Button } from 'react-bootstrap';
const About = () => {
    return (
       <>
       <div className ="card-wrapper col-sm-7">
          
           <Card  style={{ width: '50rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some Custom text one can write here
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          
       </div>
        
       </>
    )
}

export default About
