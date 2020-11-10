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
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
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
      <div className="section section-tabs">
        {/* <div className="squares square7" />
        <div className="squares square3" /> */}
        <Container>
          <div className="title">
            <h1 className="mb-3">Education</h1>
          </div>
          <br />
          <br />
          <br />
         <br />
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="5">
              {/* <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With icons
                </small>
              </div> */}
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" 
                 
                        />
                        SSLC
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        HSC
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 3
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        UG-BE
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1"
                          //  data-container="body"
                          //  data-content="Go To HSC at the Top"
                          //  data-placement="top"
                          //  id="tooltip657685043"
                    >
                      
                      {/* <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p> */}
                     
                      <h3>     Percentage :  84.5 %</h3>
                    
                      <header>School Name : Nanjappa Municipal Boys Hr Sec School</header>
                      <header>Place : Tiruppur</header>
                    </TabPane>
                    <TabPane tabId="link2">
                      {/* <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p> */}
                       <h3>     Percentage :  75.5 %</h3>
                      <header>School Name : Nanjappa Municipal Boys Hr Sec School</header>
                      <header>Place : Tiruppur</header>
                    </TabPane>
                    <TabPane tabId="link3">
                      {/* <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p> */}
                       <h3>     Percentage :  7.93 %</h3>
                      <header>College Name : Bannari Amman Institute of Technology</header>
                      <header>Place : Sathyamangalam, Erode</header>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          <br />
          <br />
          <br />
   
          </Row>
          <br />
          <br />
         
        </Container>
      </div>
    );
  }
}

export default Tabs;
