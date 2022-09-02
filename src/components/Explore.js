import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {useNavigate} from "react-router-dom";



function Explore() {
    const navigate = useNavigate()
    return (
      <div className="fluid-container" style={{backgroundColor:"#e6e6ff", height:"700px"}}>
        <Carousel>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/Lord%20Ganesh%20(13).jpg"
              alt="Ganesha"
            />
            <Carousel.Caption>
              <h3
                style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
              >
                {" "}
                Ganehsa Chaturthi{" "}
                <Badge pill bg="warning" style={{ fontSize: "1rem" }}>
                  {" "}
                  Upcoming{" "}
                </Badge>
              </h3>
              <p> Event Start: 31-08-2022 Evenet End Date: 09-09-2022</p>
              <Button variant="outline-warning" onClick={()=>navigate("/register")}>
                {" "}
                Register{" "}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i0.wp.com/hindupad.com/wp-content/uploads/2013/09/Durga-Maa-Mata-Khanak-Charri-Yatra-2013-1.jpg?fit=970%2C711&ssl=1"
              alt=" Navaratri"
            />
            <Carousel.Caption>
              <h3
                style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
              >
                {" "}
                Navratri{" "}
              </h3>
              <p> Start Date: 26-09-2022 End Date: 05-10-2022 </p>
              <Button variant="primary" onClick={()=>navigate("/register")}> Register </Button>
            </Carousel.Caption>
          </Carousel.Item>
         
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.toiimg.com/photo/msid-66475760/66475760.jpg?952246"
              alt="Diwali"
            />
            <Carousel.Caption>
              <h3
                style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
              >
                {" "}
                Diwali{" "}
              </h3>
              <p>Start Date:24-10-2022 End Date:26-10-2022</p>
              <Button variant="primary" onClick={()=>navigate("/register")}> Register </Button>
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
  
        <div
          className="fluid-container"
          style={{ marginTop: 20 }}
        >
          <div className="row-2">
            <div className="col-md-40">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2015/06/23/05/23/fresh-jalebi-818316__480.jpg"
                    alt="Jalebi"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Breakfast{" "}
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                        textAlign: "center",
                        paddingTop: "160px",
                      }}
                    >
                      {" "}
                      Jalebi{" "}
                    </p>
                    <Button variant="warning"> Details </Button>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818__480.jpg"
                    alt="Idli"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Lunch{" "}
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Idli-sambar{" "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2013/07/06/13/44/food-143622__480.jpg"
                    alt="Samosa"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Breakfast{" "}
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Samosa{" "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Dahiwada"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Lunch{" "}
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Dahiwada{" "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=" https://cdn.pixabay.com/photo/2017/01/10/18/00/indian-1969797__480.jpg"
                    alt="Dhokla"
                  />
                  <Carousel.Caption>
                    <h2
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      
                      {" Breakfast"}
                    </h2>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      
                      {"Dhokla "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Explore
  
 