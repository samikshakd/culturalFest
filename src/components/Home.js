import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import ganeshafest from "./GaneshaFest";
import { Card, CardGroup } from "react-bootstrap";
import explore from "./Explore";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: " #e6faff", paddingTop: "100px", marginBottom:"20px" }}>
      <div className="jumbotron jumbotron-fluid mx-5" style={{height:"350px"}}>
        <h1
          style={{
            color: "#000080",
            FontWeight: "4",
            fontSize: "4rem",
            marginTop: "30px",
            fontFamily: "serif",
          }}
          class="display-4 text-align: center"
        >
          {" "}
          Welcome to CulturOFest <i class="fa fa-ravelry" aria-hidden="true"/>
        </h1>
        <p style={{ paddingTop: "5px", fontFamily: "serif", fontSize: "2rem"}}>
          {" "}
          Collect moments , not things!
        </p>
        <hr className="my-3"/>
        <p style={{ textAlign: "match-parent", fontFamily: "serif" }}>
          {" "}
          The Event Planner team is made up of a mix of people. James and Ilona
          take care of corporate events. Josette is the wedding guru. Nicole is
          the creative one. Sergio is the merchandise expert. In addition to
          this group of people, a large support team helps out in everything the
          company does, in office work to on-site logistics planning.{" "}
        </p>
        <p class="lead">
          <a
            className="btn btn-outline-dark btn-lg  mx-2"  
            href="#"
            role="button"
            onClick={() => navigate("/ganeshafest")}
          >
            Upcoming Events
          </a>
          <a
            className="btn btn-outline-dark btn-lg  mx-2"
            href="#"
            role="button"
            onClick={() => navigate("/explore")}
          >
            {" "}
            Explore{" "}
          </a>
        </p>
          <CardGroup
            style={{ marginTop:"100px" }}>
            <Card className="mx-2" style={{ boxShadow: "1px 1px 1px 0.5px #354052", width: "90rem", height: "37rem" }}>
              <Card.Img onClick={()=> navigate("/ganeshafest")} 
                style={{ height: "25rem" }}
                src="https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
              />
              <Card.Body>
                <Card.Title> Ganesha Chaturthi </Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" onClick={() => navigate("/register")}>
                  {" "}
                  Register{" "}
                </Button>
              </Card.Body>
            </Card>
            <Card className="mx-2" style={{ boxShadow: "1px 1px 1px 0.5px #354052", width: "90rem", height: "37rem" }}>
              <Card.Img onClick={()=> navigate("/navratri")} 
                style={{ height: "25rem" }}
                src="https://images.unsplash.com/photo-1602772576751-f90059b6a8ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2aSUyMGR1cmdhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
              <Card.Body>
                <Card.Title> Navaratri </Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" onClick={() => navigate("/register")}>
                  {" "}
                  Register{" "}
                </Button>
              </Card.Body>
            </Card>
            <Card className="mx-2" style={{ boxShadow: "1px 1px 1px 0.5px #354052", width: "90rem", height: "37rem" }}>
              <Card.Img onClick={()=> navigate("/diwali")} 
                style={{ height: "25rem" }}
                src="https://images.unsplash.com/photo-1541955208104-805851060644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRpd2FsaSUyMGxpZ2h0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
              />
              <Card.Body>
                <Card.Title> Diwali </Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" onClick={() => navigate("/register")}>
                  {" "}
                  Register{" "}
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    
  );
}

export default Home;
