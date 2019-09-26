import * as React from "react";

import "./Contact.scss"

const Contact: React.SFC = () => {
  return (
    <div className="container" id="contact">
      <div className="contact-card">
        <h3>contact</h3>
        <a
          href="https://www.linkedin.com/in/alexis-j-carr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/alexisjcarr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fab fa-github"></i>
        </a>
        <a
          href="https://medium.com/@acarr59"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fab fa-medium"></i>
        </a>
        <a href="mailto:acarr59@gmail.com">
          <i className="icon fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
