import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import festivalregisteration from "./FestivalRegistration";

function Diwali() {
  const navigate = useNavigate();
  return (
    <div>
      <Card  className="container" style={{ paddingTop: '150px', boxSizing: 'content-box', content: 'TextCenter'}}>
        <Card.Header> Coming Soon </Card.Header>
        <Card.Body>
          <Card.Title> Diwali </Card.Title>
          <Card.Text>
          <p>Start Date:24-10-2022 End Date:26-10-2022</p>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/festivalregistration")}>
            {" Festival Registeration "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Diwali;
