import React from "react";
import "./Portfolio.css";
import Emojify from "../assets/Emojify.gif";
 



function Portfolio() {
    return (
  <section>
      <h2 className="section-title secondary-border">Projects</h2>
      <div id="work" className="repository">
              <div className="repositoryInfo">
                <div className="repositoryImg">
                  <a href="https://github.com/samhiga/emojify.git">
                    <img
                      src={Emojify}
                      className="my-2 portfolioButton"
                      href="https://samhiga.github.io/emojify/"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                  </a>
                  <a href="https://github.com/samhiga/emojify.git">
                    <img
                      src={Emojify}
                      className="my-2 portfolioButton"
                      href="https://samhiga.github.io/emojify/"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                  </a>
                  <a href="https://github.com/samhiga/emojify.git">
                    <img
                      src={Emojify}
                      className="my-2 portfolioButton"
                      href="https://samhiga.github.io/emojify/"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                  </a>
                  <a href="https://github.com/samhiga/emojify.git">
                    <img
                      src={Emojify}
                      className="my-2 portfolioButton"
                      href="https://samhiga.github.io/emojify/"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                  </a>
                </div>
              </div>
            </div>
</section>


    );
  }
  

export default Portfolio;