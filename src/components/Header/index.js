import React from "react";
import Nav from "react-bootstrap/Nav"

function Header() {

    return (
      <div id="header">
    <h1>

    {`< Eliot Cleveland />`}

</h1>
      <Nav id="nav" variant="tabs" defaultActiveKey="/home" className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav></div>  
    );
  }
  
  export default Header;