import React, { useRef } from "react";
import "./Contactme.css";
import emailjs from "@emailjs/browser";
import MapComponent from "../Map/Map";
import Footer from "../Footer/Footer";

const Contactme = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "malar_portfolio",
        "template_7mlqj75",
        refForm.current,
        "Zd7xoLDnsqdqx2i2b"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="contact-page">
        <div id="contact" className="container">
          <div className="left">
            <div className="text-zone">
              <h1>Contact Me</h1>
            </div>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul className="form">
                  <li className="list half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="list half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li className="list">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </li>
                  <li className="list">
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li className="list">
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <div>
          <MapComponent />
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
};

export default Contactme;
