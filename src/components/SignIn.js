import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./NavCompo.css"

function SignIn() {
  const navigate = useNavigate();
  return (
   
      <div className="d-flex justify-content-end "style={{backgroundColor:"#e6f5ff", height:"800px"}}>
      <img width="1500"  height="615" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000"/>
        <div className="left_data p-3" style={{ width: "100%" }}>
        <h1 className="text-center mb-2 pt-3 mt-5 font-weight:5" style={{fontFamily: "serif" , color:"#000080"}}> CulturOFest </h1>
        <h4 className="text-center mb-3 mt-1"> Welcome back! </h4>
          <h3 className="text-center mb-4"> Login </h3>         
          <Form>
            <Form.Group className="mb-4 text-center">
              <Form.Control name="email" size="lg" style={{boxShadow: "1px 1px 1px 0.5px #354052"}} placeholder="Enter your Email"/>
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control name="password" size="lg" style={{boxShadow: "1px 1px 1px 0.5px #354052"}} placeholder="Enter your Password"/>
            </Form.Group>
            
            <div className="d-grid gap-2"> 
            <Button variant="btn btn-outline-dark" style={{boxShadow: "1px 1px 1px 0.5px #354052"}} size="lg" type="submit" onClick={() => navigate("/festivalregistration")} >
              Login
            </Button>
            <p className="mb-3"> OR <span> <a href="/signin"> SignUp  </a></span></p>
            </div>
          </Form>
        </div>
      </div>
    
  );
}

export default SignIn;