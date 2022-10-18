import React, { useState } from "react";
// import Modal from "../Modal";

const PhotoList = ({ category }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      name: "Random Project Generator",
      category: "portfolio",
      repo: "https://github.com/eclevela-1234/Random-Project-Generator",
      app: "https://eclevela-1234.github.io/Random-Project-Generator" 
    },
    {
      name: "Express Note Taker",
      category: "portfolio",
      repo: "https://github.com/eclevela-1234/Express-Note-Taker",
      app: "https://agile-dawn-36237.herokuapp.com/"

    },
    {
      name: "Portfolio Designer",
      category: "portfolio",
      repo: "https://github.com/eclevela-1234/portfolio-designer-2",
      app: "https://peaceful-reef-87519.herokuapp.com/login"
    },
    {
      name: "My Team App",
      category: "portfolio",
      repo: "https://github.com/eclevela-1234/My-Team-App",
      app: ""
    },
    {
      name: "Reactions",
      category: "portfolio",
      repo: "https://github.com/eclevela-1234/Reactions",
      app: ""
    },
    {
      name: "Taskmaster Pro",
      category: "portfolio",
      repo: "https://github.com/eclevela-1234/taskmaster-pro",
      app: "https://eclevela-1234.github.io/taskmaster-pro/"
    },
  ]);
  
  const currentPhotos = photos.filter((photo) => photo.category === category);

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <div>
      {/* {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )} */}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          // <article onClick={() => toggleModal(image, i)}>
            <article>
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail"
            
            key={image.name}
          />
          <div className="caption">
          <h5>{image.name}</h5>
          {!image.app.length ? (
            <>
            <p><a href={image.repo}>Github Repo</a></p>
            </>
          ) : (
            <>
            <p><a href={image.repo} target={`_blank`}>Repo</a><span>|</span><a href={image.app} target={`_blank`}>App</a></p>
            </>
          )}
          
          </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
