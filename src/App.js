import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    { name: "about Me"},
    { name: "portfolio",
      description:
        "Her are some of my best projects to date!"},
    { name: "resume"}

  ]);
  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    switch (currentCategory) {
      case "about Me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <ContactForm />;
      case "resume":
        return <Resume />;

      default:
        return <About />;
    }
  };
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
      <div>{renderPage(currentCategory)}</div>
        </>
        ) : (<ContactForm/>)}
      </main>
    </div>
  );
}

export default App;
