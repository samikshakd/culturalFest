import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import festivalregisteration from "./FestivalRegistration";

function Navratri() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor:"#e6e6ff", height:"700px"}}>
    <Card className="container" style={{boxShadow: "1px 1px 1px 0.5px #354052" , top:"20%", boxSizing: 'content-box' }}>
        <Card.Header> Coming Soon </Card.Header>
        <Card.Body>
          <Card.Title> Ganesh Chaturthi </Card.Title>
          <Card.Text>
            <p> Start Date: 26-09-2022 End Date: 05-10-2022 </p>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/festivalregistration")}>
          {" Festival Registeration "}
        </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Navratri;
