import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import NavbarEliot from "./components/NavbarEliot";

function App() {
  return (
    <div className="App bg-light">
      <Container>
        <NavbarEliot />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
