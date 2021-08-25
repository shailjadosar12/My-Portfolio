import React, { useContext } from "react";
import "./About.css";
import { Card, Button } from "react-bootstrap";
import ProfileContext from "../ContextData/ProfileContext";

const About = () => {
  const profile = useContext(ProfileContext);
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
                <i>{profile.name}</i>
              </h3>
              <h5>
                I'm a {profile.title}
               
              </h5>
            </Card.Title>
            
            <Card.Text>
              {profile.body}
            </Card.Text>
            <Button variant="primary">Go Home</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
