import React from "react";
import "./About.css";
import { Card, Button } from "react-bootstrap";
const About = () => {
  return (
    <>
      <div className="card-wrapper col-sm-7">
        <Card className = "card-layout" >
          <Card.Img
            className="card-image"
            variant="top"
            src="https://source.unsplash.com/user/erondu/600x400"
          />
          <Card.Body className="card-body">
            <Card.Title>
              <h3>
                <i>Shailja Dosar</i>
              </h3>
              <h5>
                I'm a Developer
              </h5>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
