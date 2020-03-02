import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Collapsible, CollapsibleItem} from "../components/Collapsible";
import M from "materialize-css";

function Home() {

  useEffect(() => {
    M.Collapsible.init(document.querySelectorAll('.collapsible'));
  }, []);

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
        
        <Col size="l8 offset-l2 m10 offset-m1 s12">
          <p className="center">
            A widely preferred Stack, MERN gives a solid frame to any web application to build upon, 
            with both a back-end server and database, and a front-end responsive and single-page client.
            I utilize this Stack, upon which a front-end framework such as <a href="https://getbootstrap.com/" 
            target="_blank" rel="noopener noreferrer">Bootstrap</a> or <a href="https://materializecss.com/" 
            target="_blank" rel="noopener noreferrer">Materialize</a> can be added, or custom CSS be built
            for each specific project's necessities.
          </p>
          <h6 className="center">
            The MERN Stack is integrated by: 
          </h6>
          <Collapsible>
            <CollapsibleItem title="MongoDB" link="https://www.mongodb.com" content="A document-oriented noSQL database 
            using BSON, a JSON-based  structure that allows for quick data retrieval."/>
            <CollapsibleItem title="Express" link="https://expressjs.com/" content="A flexible framework designed for 
            serving web applications and APIs."/>
            <CollapsibleItem title="React" link="https://reactjs.org/" content="A JS library developed by Facebook for 
            building structured interfaces and single-page applications."/>
            <CollapsibleItem title="Node.js" link="https://nodejs.org/" content="A JS runtime enviroment that allows 
            for back-end servers to rely on JavaScript, unifying the Stack's development language."/>
          </Collapsible>
        </Col>
      </Row>

      <Row>
        <Col size="s12">
          <h3 className="header center cyan-text">Responsive Apps</h3>
        </Col>
        
        <Col size="l8 offset-l2 m10 offset-m1 s12">
          <p className="center">
            Aided by flexible grids, responsive web design aims for developed apps to accomodate to each user's screen
            size, allowing applications to be seen and interacted with on any device: from a small smart-phone, to a large
            desktop computer; with specific 'break-points' which change the layout and adapt to enhance the user's experience.
          </p>
        </Col>
      </Row>

    </Container>
  );
}
export default Home;