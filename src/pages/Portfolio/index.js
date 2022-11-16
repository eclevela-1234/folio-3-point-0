import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
  const photos = [
    {
      name: "Sub-Atomic",
      repo: "https://github.com/eclevela-1234/Substitute-Finder",
      app: "https://sub-atomic-mern.herokuapp.com/",
    },
    {
      name: "Random Project Generator",
      repo: "https://github.com/eclevela-1234/Random-Project-Generator",
      app: "https://eclevela-1234.github.io/Random-Project-Generator",
    },
    {
      name: "Express Note Taker",
      repo: "https://github.com/eclevela-1234/Express-Note-Taker",
      app: "https://agile-dawn-36237.herokuapp.com/",
    },
    {
      name: "Portfolio Designer",
      repo: "https://github.com/eclevela-1234/portfolio-designer-2",
      app: "https://peaceful-reef-87519.herokuapp.com/login",
    },
    {
      name: "My Team App",
      repo: "https://github.com/eclevela-1234/My-Team-App",
      app: "",
    },
    {
      name: "Reactions",
      repo: "https://github.com/eclevela-1234/Reactions",
      app: "",
    },
    {
      name: "Taskmaster Pro",
      repo: "https://github.com/eclevela-1234/taskmaster-pro",
      app: "https://eclevela-1234.github.io/taskmaster-pro/",
    },
  ];
  return (
    <div>
      <h2 className="m-3">Portfolio</h2>
      <Carousel variant="dark">
        {photos.map((image, i) => 
        <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 thumbnail"
          src={require(`../../assets/images/${i}.png`)}
          alt={image.name}
        />
        <Carousel.Caption className="bg-light bg-opacity-75 border border-dark rounded">
          <h3 className="fw-bold">{image.name}</h3>
          {!image.app.length ? (
                <>
                  <h4>
                    <a href={image.repo}>Repo</a>
                  </h4>
                </>
              ) : (
                <>
                  <h4>
                    <a href={image.repo} target={`_blank`}>
                      Repo
                    </a>
                    <span>|</span>
                    <a href={image.app} target={`_blank`}>
                      App
                    </a>
                  </h4>
                </>
              )}
        </Carousel.Caption>
      </Carousel.Item>)}
      
    </Carousel>
    </div>
  );
}

export default Portfolio;
