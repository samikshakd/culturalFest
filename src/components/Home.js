import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
      <div className="fluid-container">
       
        {/* <Carousel>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/Lord%20Ganesh%20(13).jpg"
        //       alt="Ganesha"
        //     />
        //     <Carousel.Caption>
        //       <h3
        //         style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
        //       >
        //         {" "}
        //         Ganehsa Chaturthi{" "}
        //         <Badge pill bg="warning" style={{ fontSize: "1rem" }}>
        //           {" "}
        //           Upcoming{" "}
        //         </Badge>
        //       </h3>
        //       <p> Event Start: 31-08-2022 Evenet End Date: 09-09-2022</p>
        //       <Button
        //         variant="warning"
        //         onClick={() => navigate("/register")}
        //       >
        //         {" "}
        //         Register{" "}
        //       </Button>
        //     </Carousel.Caption>
        //   </Carousel.Item>

        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="https://i0.wp.com/hindupad.com/wp-content/uploads/2013/09/Durga-Maa-Mata-Khanak-Charri-Yatra-2013-1.jpg?fit=970%2C711&ssl=1"
        //       alt=" Navaratri"
        //     />
        //     <Carousel.Caption>
        //       <h3
        //         style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
        //       >
        //         {" "}
        //         Navratri{" "}
        //       </h3>
        //       <p> Start Date: 26-09-2022 End Date: 05-10-2022 </p>
        //       <Button variant="primary" onClick={() => navigate("/register")}>
        //         {" "}
        //         Register{" "}
        //       </Button>
        //     </Carousel.Caption>
        //   </Carousel.Item>

        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="https://static.toiimg.com/photo/msid-66475760/66475760.jpg?952246"
        //       alt="Diwali"
        //     />
        //     <Carousel.Caption>
        //       <h3
        //         style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
        //       >
        //         {" "}
        //         Diwali{" "}
        //       </h3>
        //       <p>Start Date:24-10-2022 End Date:26-10-2022</p>
        //       <Button variant="primary" onClick={() => navigate("/register")}>
        //         {" "}
        //         Register{" "}
        //       </Button>
        //     </Carousel.Caption>
        //   </Carousel.Item>
  </Carousel>*/}
      </div>
     
   
  );
}

export default Home;
