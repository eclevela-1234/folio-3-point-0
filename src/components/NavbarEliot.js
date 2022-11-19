
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
      <a href="https://eclevela-1234.github.io/folio-3-point-0" id="headline"><h1>{`< Eliot Cleveland />`}</h1></a>
      <Router>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link as={Link} to={"folio-3-point-0"} className="text-light fw-bold" style={{textShadow: '0 0 8px black'}}>
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to={"folio-3-point-0/portfolio"}
              className="text-light fw-bold"
              style={{textShadow: '0 0 8px black'}}
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"folio-3-point-0/resume"} className="text-light fw-bold" style={{textShadow: '0 0 8px black'}}>
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"folio-3-point-0/contact"} className="text-light fw-bold" style={{textShadow: '0 0 8px black'}}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route path="folio-3-point-0" element={<About />} />
          <Route path="folio-3-point-0/portfolio" element={<Portfolio />} />
          <Route path="folio-3-point-0/resume" element={<Resume />} />
          <Route path="folio-3-point-0/contact" element={<ContactForm />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavbarEliot;
