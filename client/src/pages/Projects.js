import React from "react";
import { Col, Row, Container } from "../components/Grid";
import IframeCard from "../components/IframeCard"
import projectsImport from "./projects.json"

export function Projects() {
  var cardColSize="xl4 l6 m6 s12";
  let projects = projectsImport.filter(project=>!project.hidden);

  return (
    <Container>
      <Row>
        <h1 className="header center cyan-text">Projects</h1>
      </Row>
      <Row>
        {projects.map(project=>(
          <Col size={cardColSize}>
            <div
              key={project.title}
              title={project.title}
              linkPage={project.linkPage}
              linkGithub={project.linkGithub}
              content={project.content}
              image={`/assets/images/${project.image}`}
              size="small"
            />
            </Col>
        ))}
        <Col size={cardColSize}>
          <IframeCard
            src={"https://www.youtube.com/embed/cPa5_lww0o0"}
          />
        </Col>
       
       </Row>
    </Container>
  );
}