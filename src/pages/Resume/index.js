import React from "react";
import { Button } from "react-bootstrap";

function Resume() {
  return (
    <section>
      <h2 className="m-3">Resume</h2>
      <Button className="m-3" href="https://docs.google.com/document/d/1qWDpYSf6VNXN8K_hC9Bdh4mf1sAgjskmVfTOeMv4wf0/edit?usp=sharing"
            target={`_blank`}>Link to Document
        </Button>
      <article id="resume">
        <h2 className="m-3">Skills</h2>

        <p>JavaScript</p>
        <p>ES6+</p>
        <p>HTML5</p>
        <p>Python</p>
        <p>SQL</p>
        <p>NoSQL</p>
        <p>React.js</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>MongoDB</p>
        <p>VBA</p>
        
      </article>
    </section>
  );
}

export default Resume;
