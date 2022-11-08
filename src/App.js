import React, { useState } from "react";
import Tabs from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { capitalizeFirstLetter } from "./utils/helpers";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="min-100-vh">
        
        <div className="container">

          <Tabs />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer/>
        </div>
        
      </div>
    </Router>
  )
  // const [categories] = useState([
  //   { name: "about Me", description: ""},
  //   { name: "portfolio",
  //     description:
  //       ""},
  //   { name: "resume", description: ""}

  // ]);
  // const [contactSelected, setContactSelected] = useState(false);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const renderPage = () => {
  //   console.log("currentCat", currentCategory);
  //   switch (currentCategory.name) {
  //     case "about Me":
  //       return <About currentCategory={currentCategory} />;
  //     case "portfolio":
  //       return <Portfolio currentCategory={currentCategory}/>;
  //     case "resume":
  //       return <Resume currentCategory={currentCategory}/>;
  //     default:
  //       return <About currentCategory={currentCategory}/>;
  //   }
  // };
  // return (
  //   <div>
  //     <Nav
  //       categories={categories}
  //       setCurrentCategory={setCurrentCategory}
  //       currentCategory={currentCategory}
  //       contactSelected={contactSelected}
  //       setContactSelected={setContactSelected}
  //     />
  //     <main>
  //       {!contactSelected ? (
  //         <>
  //     <div>{renderPage(currentCategory)}</div>
  //       </>
  //       ) : (<ContactForm/>)}
  //     </main>
  //     <Footer />
  //   </div>
  // );


}

export default App;
