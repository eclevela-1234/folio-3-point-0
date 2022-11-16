import React from "react";
import Nav from "react-bootstrap/Nav"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {

    // const title = ["About", "Portfolio", "Resume", "Contact"];


    return (
      <div id="header">
    <h1>

    {`< Eliot Cleveland />`}

</h1>
      <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center"
      onSelect={(selectedKey) => document.title = selectedKey}>
        <Nav.Item>
          <Nav.Link href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Portfolio" href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Resume" href="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Contact Me" href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav></div>  
    );
  }
  
  export default Header;