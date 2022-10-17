import React from "react";

function Footer() {
  return (
    <footer>
      <div className=" footer flex-row my-2">
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
        </div>
      </div>
    
      <h6 id="copy"><i className="fa-regular fa-copyright"></i>2022 Eliot CLeveland</h6>
    </footer>
  );
}

export default Footer;
