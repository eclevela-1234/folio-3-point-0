import React from "react";
import { Modal, Button } from "react-bootstrap";

function AppModal(props){
//  const image = props.image;
 const handleClose = props.handleClose;
//  const i = props.i;
console.log(props);
 return (
<Modal>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  {/* <Modal.Body>
    <img
      className="w-100 thumbnail"
      src={require(`../assets/images/${i}.png`)}
      alt={image.name}
    />
    <p>{image.description}</p>
  </Modal.Body> */}
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

)

}

export default AppModal;