import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
   
      <div className="d-flex justify-content-end mt-3">
      <img width="1500"  height="615" src="https://media.istockphoto.com/photos/user-typing-login-and-password-cyber-security-concept-picture-id1368151370?b=1&k=20&m=1368151370&s=612x612&w=0&h=PXIHZ2nugkRP3iZxLc4KtvF2zwJ8-O3HMidtoQVHoXA="/>
        <div className="left_data p-3" style={{ width: "100%" }}>
        <h1 className="text-center mb-2 font-weight:5"> CulturOFest </h1>
        <h4 className="text-center mb-3 mt-1"> Welcome back! </h4>
          <h3 className="text-center mb-4 "> Login </h3>         
          <Form>

            <Form.Group className="mb-3 text-center">
              <Form.Control name="email" size="lg" placeholder="Enter your Email"/>
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control name="password" size="lg" placeholder="Enter your Password"/>
            </Form.Group>
            
            <div className="d-grid gap-2"> 
            <Button variant="primary" size="lg" type="submit" onClick={() => navigate("/festivalregistration")} >
              Login
            </Button>
            </div>
          </Form>
        </div>
      </div>
    
  );
}

export default SignIn;
