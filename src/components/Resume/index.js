import React from "react";

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <article id="resume">
        <h2>Skills</h2>
        <ol>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ol>
        <p>
          <button>
            <a
              href="https://docs.google.com/document/d/1qWDpYSf6VNXN8K_hC9Bdh4mf1sAgjskmVfTOeMv4wf0/edit?usp=sharing"
              target={`_blank`}
            >
              Link to Document
            </a>
          </button>
        </p>
      </article>
    </section>
  );
}

export default Resume;
