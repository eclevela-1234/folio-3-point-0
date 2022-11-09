import React from "react";
import Nav from "react-bootstrap/Nav"

function Header() {

    return (
      <div id="header">
    <h2>

    {`< Eliot Cleveland />`}

</h2>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav></div>  
    );
  }
  
  export default Header;