import React, { Component } from "react";
import Header from "../../components/Header";
import About from "../../components/About/index";
import Skills from "../../components/Skills/index";
import Projs from "../../components/Projs/index";
import Contact from "../../components/Contact/index.jsx";
import NavBar from "../../components/NavBar.jsx";
import Footer from "../../components/Footer.jsx";
// import SearchBar from "../../components/Books/SearchBar";
// import BookList from "../../components/Books/BookList";
// import BookItem from "../../components/Books/BookItem";
// import SaveButton from "../../components/Books/SaveButton";
import API from "../../utils/API";
import "./style.css";
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
// Import Materialize
import M from "materialize-css";

class Home extends Component {


  state = {

  }


  render() {
    return (
      <React.Fragment>
        <div className="entire">
          <NavBar />
          <div className="bkg-img"></div>
          <div id="main-content-section" className="row" data-magellan-target="main-content-section">
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab"><a href="#about">About Me</a></li>
                <li className="tab"><a href="#skills">My Skills</a></li>
                <li className="tab"><a href="#portfolio">Portfolio</a></li>
                <li className="tab"><a href="#contact">Contact Me</a></li>
              </ul>
            </div>
            <div className="content-section">
              <div id="about" className="content-part col s8 offset-s2"><About/></div>
              <div id="skills" className="content-part col s8 offset-s2"><Skills/></div>
              <div id="portfolio" className="content-part col s8 offset-s2"><Projs/></div>
              <div id="contact" className="content-part col s8 offset-s2"><Contact/></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;