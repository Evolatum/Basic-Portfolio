import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Home() {

  return (
    <Container>

      <Row>
        <h1 className="header center cyan-text">About</h1>
      </Row>

      <Row>
      <Col size="l8 offset-l2 m10 offset-m1 s12">
          <p className="center">
            Full-stack web developer with a background in motion graphics and 2D animation.
            Strengths in responsive web design and meeting deadlines. Great problem-solver 
            with creative and quick solutions that feel right to the end user. Looking forward 
            to developing and improving on websites and web-based applications as we evolve with web design.
          </p>
        </Col>
      </Row>

      <Row>
        <Col size="s12">
          <div class="row center">
            <a href="https://docs.google.com/document/d/1wVLOKYvdWzK5wsPri1TnOVKKDRv46IA1eJwwTIvHIA0/edit?usp=sharing" 
            className="btn-large waves-effect waves-light cyan" target="_blank" rel="noopener noreferrer">CV ENG</a>&nbsp;&nbsp;
            <a href="https://docs.google.com/document/d/1mT0pvUKIP9EwCIu72oahvS4pDSK8GUbndFSqGaFyHNk/edit?usp=sharing" 
            className="btn-large waves-effect waves-light cyan" target="_blank" rel="noopener noreferrer">CV ESP</a>
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="s12">
          <h3 className="header center cyan-text">MERN Stack</h3>
        </Col>
        
        <Col size="l6 offset-l3 m8 offset-m2 s12">
          <p className="center">
            A widely preferred Stack, MERN gives a solid frame to any web application to build upon, 
            with both a back-end server and database, and a front-end responsive and single-page client.
            I utilize this Stack, upon which a front-end framework such as <a href="https://getbootstrap.com/" 
            target="_blank" rel="noopener noreferrer">Bootstrap</a> or <a href="https://materializecss.com/" 
            target="_blank" rel="noopener noreferrer">Materialize</a> can be added, or custom CSS be built
            for each specific project's necessities.
          </p>
        </Col>
      </Row>

      <Row>
        <Col size="l3 m6 s12">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 className="center">MongoDB</h5>
            <p className="light">MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.</p>
          </div>
        </Col>
        <Col size="l3 m6 s12">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 className="center">Express</h5>
            <p className="light">Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
          </div>
        </Col>
        <Col size="l3 m6 s12">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 className="center">React</h5>
            <p className="light">React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
          </div>
        </Col>
        <Col size="l3 m6 s12">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 className="center">Node</h5>
            <p className="light">Node.js is an open-source, cross-platform, JavaScript library that executes JavaScript code outside of a browser.</p>
          </div>
        </Col>
      </Row>

    </Container>
  );
}
export default Home;