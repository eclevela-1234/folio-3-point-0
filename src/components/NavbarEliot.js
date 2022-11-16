import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import ContactForm from "../pages/Contact";
import NoMatch from "../pages/NoMatch";

function NavbarEliot() {
  return (
    <div id="header">
      <h1>{`< Eliot Cleveland />`}</h1>
      <Router>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link as={Link} to={"/"} className="text-light fw-bold">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to={"/portfolio"}
              className="text-light fw-bold"
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"/resume"} className="text-light fw-bold">
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"/contact"} className="text-light fw-bold">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavbarEliot;
