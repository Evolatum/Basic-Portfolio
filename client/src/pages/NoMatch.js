import React from "react";
import { Col, Row, Container } from "../components/Grid";

export function NoMatch() {
  return (
    <Container>
      <Row>
        <Col size="s12">
          <h1>404</h1>
        </Col>
      </Row>
    </Container>
  );
}
