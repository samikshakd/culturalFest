import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn.css";

const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addData = (event) => {
    event.preventDefault();
    console.log(name, mobile, email, password)
  }

  return (
    <div className="d-flex justify-content-end mt-3  padding-top:40px;">
    <img width="700" height="600" src="https://media.istockphoto.com/photos/businessman-logging-on-to-a-password-protected-website-picture-id1325306868?b=1&k=20&m=1325306868&s=612x612&w=0&h=hz2oZ-CfI_orVAnv4JRMCGJH4xjqAanjSHdqIqUZLDw="/>
      <div className="left_data p-1" style={{ width: "100%" }}>
      <h1 className="text-center mb-2 font-weight:5"> CulturOFest </h1>
      <h3 className="text-center mb-3 mt-1"> Create an Account </h3>
      <h3 className="text-center mb-4 "> SignUp </h3> 

          <Form>
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Control onChange={(event) => setName(event.target.value)} name="name" size="lg" placeholder="Enter your Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control onChange={(event) => setMobile(event.target.value)} name="mobile" size="lg"
                placeholder="Enter your Phone-No" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control onChange={(event) => setEmail(event.target.value)} size="lg" type="email" name="email" placeholder="Enter your Email-ID" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control size="lg" onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Password" />
            </Form.Group>

            <div className="d-grid gap-2"> 
            <Button variant="primary" size="lg" type="submit" onClick={addData} >
              SignUp
            </Button>
            </div>
            </Form>
            <p className="mb-3"> Already have an account?<span> <a href="/signin"> Login  </a></span></p>
          </div>
       
      </div>
    );
  };
  
  export default Register;