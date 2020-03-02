import React, { useState, useEffect } from "react";
import "./style.css";
import M from 'materialize-css';
import { useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const [locationState, setLocationState] = useState("/");


  useEffect(() => {
    setLocationState(location.pathname);
  }, [location]);

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#ham-nav'),{edge:'right',closeOnClick: true});
  }, []);

  return (
  <>
    <div className="navbar-fixed">
      <nav className="cyan darken-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">Santiago MVO</a>
          <a href="#" data-target="ham-nav" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className={locationState === "/" ? "active" : "not-active"}><a href="/">About</a></li>
            <li className={locationState === "/projects" ? "active" : "not-active"}><a href="/projects">Projects</a></li>
            <li className={locationState === "/contact" ? "active" : "not-active"}><a href="/contant">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul className="sidenav right" id="ham-nav">
      <li className={locationState === "/" ? "active" : "not-active"}><a href="/">About</a></li>
      <li className={locationState === "/projects" ? "active" : "not-active"}><a href="/projects">Projects</a></li>
      <li className={locationState === "/contact" ? "active" : "not-active"}><a href="/contant">Contact</a></li>
    </ul>
  </>
  );
}

export default Nav;
