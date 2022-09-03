import { height } from "@mui/system";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import festivalregisteration from "./FestivalRegistration";

function GaneshaFest() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor:"#e6e6ff", height:"700px"}}>
      <Card className="container" style={{boxShadow: "1px 1px 1px 0.5px #354052" , top:"15%", boxSizing: 'content-box' }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title> Ganesh Chaturthi </Card.Title>
          <Card.Text>
          <p> Event Start: 31-08-2022 Evenet End Date: 09-09-2022</p>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/festivalregistration")}>
            {" Festival Registeration "}
          </Button>
        </Card.Body>
      </Card>
      </div>
    
  );
}

export default GaneshaFest;
