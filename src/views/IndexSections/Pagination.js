/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

class PaginationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-pagination">
        <img alt="..." className="path" src={require("assets/img/path4.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
        <Container>
          <Row>
            <Col md="6">
            
              
              <h3 className="mb-4">Skills</h3>
              <div className="progress-container progress-info" >
                
                <span className="progress-badge">React Native</span>
                <Progress max="100" value="90">
                  <span className="progress-value">85%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">ReactJs</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Angular</span>
                <Progress max="100" value="75">
                  <span className="progress-value">75%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Spring Boot</span>
                <Progress max="100" value="50">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Java</span>
                <Progress max="100" value="80">
                  <span className="progress-value">80%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">C</span>
                <Progress max="100" value="75">
                  <span className="progress-value">75%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">MongoDB</span>
                <Progress max="100" value="50">
                  <span className="progress-value">50%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">MYSql</span>
                <Progress max="100" value="65">
                  <span className="progress-value">65%</span>
                </Progress>
              </div>   <div className="progress-container progress-info">
                <span className="progress-badge">SQL</span>
                <Progress max="100" value="65">
                  <span className="progress-value">65%</span>
                </Progress>
              </div>   <div className="progress-container progress-info">
                <span className="progress-badge">Docker</span>
                <Progress max="100" value="50">
                  <span className="progress-value">50%</span>
                </Progress>
              </div>   <div className="progress-container progress-info">
                <span className="progress-badge">Firebase</span>
                <Progress max="100" value="75">
                  <span className="progress-value">75%</span>
                </Progress>
              </div>   <div className="progress-container progress-info">
                <span className="progress-badge">AWS</span>
                <Progress max="100" value="50">
                  <span className="progress-value">50%</span>
                </Progress>
              </div>
              <br />
              {/* <h3 className="mb-5">Navigation Pills</h3> */}
              {/* <Nav className="nav-pills-info nav-pills-icons" pills>
                <NavItem>
                  <NavLink
                    className={classnames({
                      "active show": this.state.pills === 1
                    })}
                    onClick={e => this.toggleTabs(e, "pills", 1)}
                    href="#pablo"
                  >
                    <i className="tim-icons icon-atom" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      "active show": this.state.pills === 2
                    })}
                    onClick={e => this.toggleTabs(e, "pills", 2)}
                    href="#pablo"
                  >
                    <i className="tim-icons icon-chat-33" />
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      "active show": this.state.pills === 3
                    })}
                    onClick={e => this.toggleTabs(e, "pills", 3)}
                    href="#pablo"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                    Settings
                  </NavLink>
                </NavItem>
              </Nav> */}
            </Col>
            <Col md="6">
              {/* <h3 className="mb-5">Pagination</h3> */}
              {/* <Pagination
                className="pagination pagination-info"
                listClassName="pagination-info"
              >
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
              </Pagination> */}
              {/* <Pagination
                className="pagination pagination-info"
                listClassName="pagination-info"
              >
                <PaginationItem>
                  <PaginationLink
                    aria-label="Previous"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="tim-icons icon-double-left"
                      />
                    </span>
                  </PaginationLink>
                </PaginationItem> */}
                {/* <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem> */}
                {/* <PaginationItem>
                  <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="tim-icons icon-double-right"
                      />
                    </span>
                  </PaginationLink>
                </PaginationItem> */}
              {/* </Pagination> */}
              <br />
              {/* <h3 className="mb-5">Labels</h3>
              <Badge className="badge-default">Default</Badge>
              <Badge color="primary">Primary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="info">Info</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge className="badge-neutral">Neutral</Badge> */}
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

export default PaginationSection;
