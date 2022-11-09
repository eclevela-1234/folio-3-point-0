import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer>
      <div id="social" className="my-3">
        <div >
          <a
            href="https://www.linkedin.com/in/eliotcleveland/"
            target={`_blank`}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div >
          <a href="https://github.com/eclevela-1234" target={`_blank`}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div >
          <a href="https://www.facebook.com/eliot.cleveland/" target={`_blank`}>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <h4>
        &copy; {year} Eliot CLeveland
      </h4>
    </footer>
  );
}

export default Footer;
