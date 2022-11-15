import React from "react";
import Nav from "react-bootstrap/Nav"

function Header() {

    return (
      <div id="header">
    <h1>

    {`< Eliot Cleveland />`}

</h1>
      <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center">
        <Nav.Item>
          <Nav.Link className="dark" href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navtext" href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navtext" href="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navtext" href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav></div>  
    );
  }
  
  export default Header;