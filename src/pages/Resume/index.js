import React from "react";
import { Button } from "react-bootstrap";

function Resume() {
  return (
    <section>
      <h2 className="m-3">Resume</h2>
      <Button className="m-3" href="https://drive.google.com/file/d/1Orcn3yk_v56Zx1-WpE-JadRgaC8fWVyP/view?usp=sharing"
            target={`_blank`}>Link to Document
        </Button>
      <article id="resume">
        <h2 className="m-3">Skills</h2>

        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>

        
      </article>
    </section>
  );
}

export default Resume;
