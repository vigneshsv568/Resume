
import React from "react";
// reactstrap components
import { UncontrolledAlert, Container } from "reactstrap";

class Notifications extends React.Component {
  render() {
    return (
      <div className="section section-notifications" id="notifications">
        <Container>
          <div className="space" />
          <h3>College Projects</h3>
          <UncontrolledAlert className="alert-with-icon" color="primary">
            <span data-notify="icon" className="tim-icons icon-coins" />
            <span>
              <b>Robotic process Automation-UiPath --</b>
                Presented – KGISL Coimbatore(Feb 2019)
            </span>
          </UncontrolledAlert>
          <UncontrolledAlert className="alert-with-icon" color="info">
            <span data-notify="icon" className="tim-icons icon-trophy" />
            <span>
              <b>Smart Store System -</b>
              Presented – BITS Pilani(Apr 2019)
            </span>
          </UncontrolledAlert>
          <UncontrolledAlert className="alert-with-icon" color="success">
            <span data-notify="icon" className="tim-icons icon-bell-55" />
            <span>
              <b>Train Ticket Management System -</b>
              Presented – IIT Delhi(2019)
            </span>
          </UncontrolledAlert>
          <UncontrolledAlert className="alert-with-icon" color="warning">
            <span data-notify="icon" className="tim-icons icon-bulb-63" />
            <span>
              <b>Health report Management -</b>
              Presented – IEEE Mysore(2019)
            </span>
          </UncontrolledAlert>
          <UncontrolledAlert className="alert-with-icon" color="danger">
            <span data-notify="icon" className="tim-icons icon-support-17" />
            <span>
              <b>Water Quality Monitoring System(IOT) -</b>
              Presented – Govt College of Aurangabad(Jan 2020)
            </span>
          </UncontrolledAlert>
          <UncontrolledAlert className="alert-with-icon" color="primary">
            <span data-notify="icon" className="tim-icons icon-coins" />
            <span>
              <b>Covid19 User Information -</b>
              Presented – Aatmanirbhar Online(Jun 2020)
            </span>
          </UncontrolledAlert>
          <UncontrolledAlert className="alert-with-icon" color="info">
            <span data-notify="icon" className="tim-icons icon-trophy" />
            <span>
              <b>iCare Health Monitoring and User Information -</b>
              Presented - #Code19 (Apr 2020)
            </span>
          </UncontrolledAlert>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      
      </div>
    );
  }
}

export default Notifications;
