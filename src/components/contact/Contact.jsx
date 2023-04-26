import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1h2yspf", "template_sim1dnh", form.current, "LHmSVv_fvGKN1Ev12").then(
      (result) => {
        window.location.reload();
        alert("Thank you for contacting me!!! I will get back to you shortly");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hrushi.dhar@gmail.com</h5>
            <a href="mailto:hrushi.dhar@gmail.com" target="_blank" rel="noopener noreferrer">
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone+16124538349" target="_blank" rel="noopener noreferrer">
              Send a message in Whatsapp
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone+16124538349" target="_blank" rel="noopener noreferrer">
              Send a message in Whatsapp
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
