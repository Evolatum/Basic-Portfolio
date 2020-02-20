import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card"
import projectsImport from "./projects.json"

function Projects() {
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
            <Card
              key={project.title}
              title={project.title}
              linkPage={project.linkPage}
              linkGithub={project.linkGithub}
              content={project.content}
              image={`/images/${project.image}`}
              size="small"
            />
            </Col>
        ))}
        <Col size={cardColSize}>
          <div style={{marginTop: "20px", marginBottom: "20px", marginLeft:"auto", marginRight:"auto"}} className="center">
            <iframe src="https://www.youtube.com/embed/cPa5_lww0o0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
            width="260" height="300" frameborder="0"></iframe>
          </div>
        </Col>

      </Row>
    </Container>
  );
}
export default Projects;