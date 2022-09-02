import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn.css";

const FestivalRegisteration = () => {
  const [userid, setuserid] = useState("");
  const [festivalid, setfestivalid] = useState("");
  const [noofpeople, setnoofpeople] = useState("");
  const [foodMenu, setfoodmenu] = useState("");
  const [foodQuantity, setfoodQuantity] = useState("");
  const [foodPrice, setfoodprice] = useState("");
  const [totalAmount, settotalAmount] = useState("");
  const [paymentMode, setpaymentMode] = useState("");

  const addFestivalRegistration = (event) => {
    event.preventDefault();
    console.log(
      userid,
      festivalid,
      noofpeople,
      foodMenu,
      foodQuantity,
      foodPrice,
      totalAmount,
      paymentMode
    );
  };

  return (
    <div className="d-flex justify-content-end " style={{ backgroundColor: "#e6e6ff", height: "700px" }}>
      <img width="1400" height="500" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000" />
      <div className="left_data p-1" style={{ width: "100%" }}>
        <div className="right_data" style={{ width: "100%" }}>
          <h3 className="mb-2 mt-10"> Festival Registeration </h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setuserid(event.target.value)}
                name="userid" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter your User Id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setfestivalid(event.target.value)}
                name="festivalid" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter your Festival Id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setnoofpeople(event.target.value)}
                name="noofpeople" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter No of People"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setfoodmenu(event.target.value)}
                name="foodMenu" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Food Menu"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setfoodQuantity(event.target.value)}
                name="foodQuantity" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter Food Quantity"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => setfoodprice(event.target.value)}
                name="foodPrice" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter FoodPrice"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => settotalAmount(event.target.value)}
                name="totalAmount" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter TotalAmount"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => setpaymentMode(event.target.value)}
                name="paymentMode" style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter PaymentMode"
              />
            </Form.Group>

            <div style={{ display: "flex" }}>
              <Button style={{ marginRight: "auto", boxShadow: "1px 1px 1px 0.5px #354052" }} onClick={addFestivalRegistration}>
                Confirm
              </Button>
            </div>
          </Form>
          <p className="mb-3">
            Go to
            <span>
              <a href="/">Home</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FestivalRegisteration;
