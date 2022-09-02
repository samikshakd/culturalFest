import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import "./NavCompo.css"
import ganeshafest from "./GaneshaFest"
import {Card,CardGroup} from "react-bootstrap"
import explore from "./Explore"

function Home() {
  const navigate = useNavigate();
  return (
    <div className="jumbotron jumbotron-fluid " style={{backgroundColor:" #e6faff", height:"700px",paddingTop: '100px', paddingLeft: "40px", boxSizing: 'content-box' }}>
      <h1 style={{ color: 'blue', FontWeight: '4', fontSize: '4rem', marginTop: "30px" ,fontFamily:"verdana" }} class="display-4 text-align: center"> Welcome to CulturOFest </h1>
      <p style={{paddingTop: "5px"}}> Collect movements,not things!</p>
      <hr class="my-9"></hr>
      <p style={{ textAlign: "match-parent" }}> The Event Planner team is made up of a mix of people. James and Ilona take care of corporate events.
        Josette is the wedding guru. Nicole is the creative one. Sergio is the merchandise expert. In addition to
        this group of people, a large support team helps out in everything the company does, in office work to
        on-site logistics planning. </p>
      <p class="lead">
        <a className="btn btn-outline-primary btn-lg  mr:15px br: 15%" href="#" role="button" onClick={() => navigate("/ganeshafest")}>Upcoming Events</a>
        <a className="btn btn-outline-primary btn-lg  mr: 15px br: 15%" href="#" role="button" onClick={() => navigate("/explore")}> Explore </a>
      </p>
  
      <div>
    
        <CardGroup style={{ paddingTop: '120px'}}>
          <Card style={{ width: '90rem', height: '10rem' }}>
            <Card.Img style={{ height: '40rem' }} src="https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/register")}>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img style={{ height: '40rem' }} src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/register")}>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img style={{ height: '40rem' }} src="https://images.pexels.com/photos/13041629/pexels-photo-13041629.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/register")}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardGroup>

      </div>
    </div>


  );
}

export default Home;
