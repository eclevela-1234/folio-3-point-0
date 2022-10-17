import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    // {
    //   name: "Cat green eyes",
    //   category: "portfolio",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Green parrot",
    //   category: "portfolio",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Yellow macaw",
    //   category: "portfolio",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Pug smile",
    //   category: "portfolio",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
  ]);
  
  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <article>
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
          <div className="caption">
          <h4>{image.name}</h4>
          
          </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
