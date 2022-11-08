import React, { useState } from "react";
import Nav from "./components/Nav";
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
      <div className="flex-column justify-center min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/" element={<About />} />
          </Routes>
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
