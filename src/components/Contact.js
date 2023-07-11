import React, { useState } from "react";
import { validaitionEmail } from "../helpers";
import "./Contact.css";

function Contact() {
    const [message, setMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validaitionEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">

      <div className="contact-form">
        <h3>Contact Me</h3>
        <form className="form">
          <label htmlFor="contact-name">Name</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            id="contact-name"
            placeholder="Your Name"
          />

          <label htmlFor="contact-email">Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="contact-email"
            placeholder="Your Email"
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            id="contact-message"
            placeholder="Your Message"
          ></textarea>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;