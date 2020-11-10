
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Examples extends React.Component {
  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="space-50" />
        <Container className="text-center">
        <h3 className="mb-4">React Native Project</h3>
          <Row>
            <Col sm="6">
              <Link >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/Screenshot (29).png")}
                  //
                />
              </Link>

              <Button
                className="btn-simple btn-round"
                color="primary"
                to="landing-page"
                href="http://160.153.251.70:3000/"
              >
                View Project
              </Button>
            </Col>
            <Col sm="6">
              <Link >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/Screenshot (30).png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="profile-page"
                href="https://ez-walkin.web.app/"
              >
                View Project
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Examples;
