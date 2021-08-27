import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 my-1">
                <Link to="/" className="nav-link active" aria-current="page">{props.home}</Link>
            </li>
            <li className="nav-item mx-3 my-1">
              <Link to="/about" className="nav-link active" aria-current="page" >{props.abouttext}</Link>
            </li>
            <li className="nav-item mx-3 my-1">
              <Link className="nav-link active" aria-current="page" to="/Project" >
                {props.project}
              </Link>
            </li>
            <li className="nav-item mx-3 my-1">
              <Link className="nav-link active" aria-current="page" to="/Contact">
                {props.contact}
              </Link>
            </li>
          </ul> 

          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  abouttext: PropTypes.string.isRequired,
  project: PropTypes.string,
  contact: PropTypes.string,
};
