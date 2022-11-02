import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/folio-3-point-0/">
           {`< Eliot Cleveland />`}
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li> */}
          
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {

                  setCurrentCategory(category);
                  console.log(category)
                  
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-1 ${contactSelected && "navActive"}`}>
            <span onClick={() => {setContactSelected(true); document.title = "Contact"}}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;