
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        {/* <div className="squares square8" /> */}
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">VIGNESH</h1>
            <h1 className="d-none d-sm-block">
              Web Developer | App Developer (Android & IOS) | Freelancer | Full Stack Developer 
            </h1>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
