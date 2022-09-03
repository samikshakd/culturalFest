import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const FestivalRegisteration = () => {
  const [userid, setuserid] = useState("");
  const [festivalid, setfestivalid] = useState("");
  const [noofpeople, setnoofpeople] = useState("");
  const [foodMenu, setfoodmenu] = useState("");
  const [foodQuantity, setfoodQuantity] = useState("");
  const [foodPrice, setfoodprice] = useState("");
  const [totalAmount, settotalAmount] = useState("");
  const [paymentMode, setpaymentMode] = useState("");

  const navigate = useNavigate();
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
    alert("successfully registered for an event!");
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-end "
      style={{ backgroundColor: "#e6f5ff", height: "800px" }}
    >
      <img
        width="1400"
        height="600"
        src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000"
      />
      <div className="left_data p-1" style={{ width: "100%" }}>
        <div className="right_data" style={{ width: "100%" }}>
          <h3 className="pt-3 mb-3 mt-10" style={{textAlign:"center"}}> Festival Registeration </h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setuserid(event.target.value)}
                name="userid"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter your User Id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setfestivalid(event.target.value)}
                name="festivalid"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter your Festival Id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Select style={{ boxShadow: "1px 1px 1px 0.5px #354052" }} value={noofpeople} onChange={(event) => setnoofpeople(event.target.value)}>
            <option value=""> Select no of people </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select style={{ boxShadow: "1px 1px 1px 0.5px #354052" }} value={foodMenu} onChange={(event) => setfoodmenu(event.target.value)}>
              <option value=""> Select food menu </option>  
              <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Select style={{ boxShadow: "1px 1px 1px 0.5px #354052" }} value={foodQuantity} onChange={(event) => setfoodQuantity(event.target.value)}>
            <option value=""> Select food quantity </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => setfoodprice(event.target.value)}
                name="foodPrice"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter FoodPrice"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => settotalAmount(event.target.value)}
                name="totalAmount"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter TotalAmount"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => setpaymentMode(event.target.value)}
                name="paymentMode"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter PaymentMode"
              />
            </Form.Group>

            <div style={{ display: "flex" }}>
              <Button  variant="btn btn-outline-dark"
                style={{  
                  marginRight: "auto",
                  boxShadow: "1px 1px 1px 0.5px #354052"
                }}
                onClick={addFestivalRegistration}
              >
                Confirm
              </Button>
              <p>
                Go to 
                <span>
                  <a href="/"> Home</a>
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FestivalRegisteration;
