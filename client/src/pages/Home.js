import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Home() {

  return (
    <Container>
      <Row>
        <h1 className="header center">About</h1>
      </Row>
      <Row>
        <Col size="s12">
          <p className="left">
            Full Stack Web Developer with a background in motion graphics and 2D animation, 
            certified in Full Stack Development through a bootcamp imparted in conjunction by 
            Tecnológico de Monterrey and Trilogy Education Services. Strengths in responsive web design 
            and meeting deadlines. Great problem-solver with creative and quick solutions that 
            feel right to the end user. Looking forward to developing and improving on websites 
            and web-based applications as we evolve with web design.
          </p>
          <div class="row center">
            <a href="https://docs.google.com/document/d/1wVLOKYvdWzK5wsPri1TnOVKKDRv46IA1eJwwTIvHIA0/edit?usp=sharing" 
            className="btn-large waves-effect waves-light cyan" target="_blank" rel="noopener noreferrer">CV ENG</a>&nbsp;&nbsp;
            <a href="https://docs.google.com/document/d/1mT0pvUKIP9EwCIu72oahvS4pDSK8GUbndFSqGaFyHNk/edit?usp=sharing" 
            className="btn-large waves-effect waves-light cyan" target="_blank" rel="noopener noreferrer">CV ESP</a>
          </div>
        </Col>
      </Row>
      <Row>

      </Row>
    </Container>
  );
}
export default Home;