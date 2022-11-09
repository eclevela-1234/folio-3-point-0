import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Footer() {
  return (
    <footer>
      <Row>
        <Col>
        <div id="social">
        <div className="mx-1">
          <a
            href="https://www.linkedin.com/in/eliotcleveland/"
            target={`_blank`}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="mx-1">
          <a href="https://github.com/eclevela-1234" target={`_blank`}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="mx-1">
          <a href="https://www.facebook.com/eliot.cleveland/" target={`_blank`}>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div></div></Col>
      </Row>
    
      <h6 id="copy"><i className="fa-regular fa-copyright"></i>2022 Eliot CLeveland</h6>
    </footer>
  );
}

export default Footer;
