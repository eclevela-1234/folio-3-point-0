import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import NoMatch from "./components/NoMatch/inidex";

function App() {
  return (
    <div className="App bg-light">
      <Container>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
