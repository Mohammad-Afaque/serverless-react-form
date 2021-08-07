import React from "react";
import emailjs from "emailjs-com";


export default function form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_4qwgguz",
        e.target,
        "user_kKOJw2gTiTNkKSAcFLVsx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }

  return (
    <div className="page-section" id="contact">
      <div className="row">
        <div className="col-md-12">
          <h4 className="widget-title">PLACE TO TALK WITH ME</h4>
          <p>
            Vestibulum ac iaculis erat, in semper dolor. Maecenas et lorem
            molestie, maximus justo dignissim, cursus nisl. Nullam at ante quis
            ex pharetra pulvinar quis id dolor. Integer lorem odio, euismod ut
            sem sit amet, imperdiet condimentum diam.
          </p>
        </div>
      </div>
      <div className="row">
        <form
          action="#"
          method="post"
          className="contact-form"
          onSubmit={sendEmail}
        >
          <fieldset className="col-md-4 col-sm-6">
            <input
              type="text"
              id="your-name"
              placeholder="Your Name..."
              name="name"
            />
          </fieldset>
          <fieldset className="col-md-4 col-sm-6">
            <input
              type="email"
              id="email"
              placeholder="Your Email..."
              name="email"
            />
          </fieldset>
          <fieldset className="col-md-4 col-sm-12">
            <input
              type="text"
              id="your-subject"
              placeholder="Subject..."
              name="subject"
            />
          </fieldset>
          <fieldset className="col-md-12 col-sm-12">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              placeholder="Leave your message..."
            name="message"
            ></textarea>
          </fieldset>
          <fieldset className="col-md-12 col-sm-12">
            <input
              type="submit"
              className="button big default"
              value="Send Message"
            />
          </fieldset>
        </form>
      </div>
      {/* <!-- .contact-form --> */}
    </div>
  );
}
