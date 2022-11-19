import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { send } from "emailjs-com";
import { Button } from "react-bootstrap";
import profileImage from "../../assets/images/profileimage.jpg";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateEmail(formState.email);
    if (isValid) {
      send(
        "service_457ye8d",
        "template_5rk1pqp",
        formState,
        "lCsjJd6yV07nOzYOq"
      ).then(
        (result) => {
          console.log(result.text);
          alert("Your message has been recieved. Thanks for reaching out!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }
  // console.log(formState);
  return (
    <div className="row">
      <h2 className="my-3">Contact me</h2>
      <section className="col-12 col-md-6 d-block">
      <img
        src={profileImage}
        id="profileImg"
        className="m-3 rounded-circle"
        style={{ width: "200px" }}
        alt="profile"
      /><br></br>
      
      <h2>Email Eliot</h2>
      <br></br>
      
      <a href="mailto:eliotclevelandmba@gmail.com"><Button className="text-light">eliotclevelandmba@gmail</Button></a>
      </section>
    <section className="col-12 col-md-6">
      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="label m-1" htmlFor="name">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="label m-1" htmlFor="email">
            Email address:
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="label m-1" htmlFor="name">
            Message:
          </label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )} 
        <br></br>
        <Button type="submit">Submit</Button>
       
      </form>
    </section>
    </div>
  );
}

export default ContactForm;
