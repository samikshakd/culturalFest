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
    <div className="container mt-3 ">
      <section className="d-flex justify-content-center">
        <div className="right_data formBackground " style={{ width: "100%" }}>
          <h3 className="mb-3 w-25 "> Festival Registeration </h3>
          <Form>
            <Form.Group className="mb-3 w-25 text-center">
              <Form.Control
                onChange={(event) => setuserid(event.target.value)}
                name="userid"
                placeholder="Enter your User Id"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-25">
              <Form.Control
                onChange={(event) => setfestivalid(event.target.value)}
                name="festivalid"
                placeholder="Enter your Festival Id"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-25 ">
              <Form.Control
                onChange={(event) => setnoofpeople(event.target.value)}
                name="noofpeople"
                placeholder="Enter No of People"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-25">
              <Form.Control
                onChange={(event) => setfoodmenu(event.target.value)}
                name="foodMenu"
                placeholder="Food Menu"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-25 text-center">
              <Form.Control
                onChange={(event) => setfoodQuantity(event.target.value)}
                name="foodQuantity"
                placeholder="Enter Food Quantity"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-25 text-center">
              <Form.Control
                onChange={(event) => setfoodprice(event.target.value)}
                name="foodPrice"
                placeholder="Enter FoodPrice"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-25 text-center">
              <Form.Control
                onChange={(event) => settotalAmount(event.target.value)}
                name="totalAmount"
                placeholder="Enter TotalAmount"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-25 text-center">
              <Form.Control
                onChange={(event) => setpaymentMode(event.target.value)}
                name="paymentMode"
                placeholder="Enter PaymentMode"
              />
            </Form.Group>

            <div style={{ display: "flex" }}>
              <Button style={{ marginRight: "auto" }} onClick={addFestivalRegistration}>
                Confirm
              </Button>
              </div>
               </Form>
          <p className="mb-3 w-25 ">
            Go to 
            <span>
              <a href="/">Home</a>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FestivalRegisteration;
