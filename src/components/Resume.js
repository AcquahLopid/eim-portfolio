import React from "react";
import resume from "../assets/Emanuel-Molina resume 2021 OLD.pdf";
import "./Resume.css"
function Resume(){
    return (
        <div className="container">
        <div className="card">
          <div className="content">
            <p className="content is-medium">Emanuel Molina's Resume</p>
            <hr />
            <p className="content"></p>
          </div>
          <div className="download">
            <a
              className="button is-primary"
              href={resume}
              download="EmanuelResume.pdf"
            >
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

    );
}

export default Resume;
