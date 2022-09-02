import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavCompo from "./components/NavCompo";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Component } from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Details from "./components/Details";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import GaneshaFest from "./components/GaneshaFest";
import Navratri from "./components/Navratri";
import Diwali from "./components/Diwali";
import BreakLunch from "./components/BreakLunch";
import FestivalRegisteration from "./components/FestivalRegistration";
import Footer from "./components/Footer";
import "font-awesome/css/font-awesome.min.css";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavCompo/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/ganeshafest" element={<GaneshaFest/>}/>
            <Route path="/navratri" element={<Navratri/>}/>
            <Route path="/diwali" element={<Diwali/>}/>
            <Route path="/breaklunch" element={<BreakLunch/>} />
            <Route path="/festivalregistration" element={<FestivalRegisteration/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
