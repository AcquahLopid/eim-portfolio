import React from "react";
import "./Portfolio.css";
import Emojify from "../assets/Emojify.gif";
import Melore from "../assets/Melore gif.gif";
import SmallBusinessPortal from "../assets/Small Business portal.gif";
 

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
                      style={{ width: "100%", height: "82.7%"}}
                      alt="project"
                    />
                  </a>
                  <a href="https://github.com/austinzumbro/syncaethesia">
                    <img
                      src={Melore}
                      className="my-2 portfolioButton"
                      href="https://github.com/austinzumbro/syncaethesia"
                      style={{ width: "100%", height: "82.7%"}}
                      alt="project"
                    />
                  </a>
                  <a href="https://github.com/michellebaker1129/small-business-project">
                    <img
                      src={SmallBusinessPortal}
                      className="my-2 portfolioButton"
                      href="https://github.com/michellebaker1129/small-business-project"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                  </a>
                  {/* <a href="https://github.com/samhiga/emojify.git">
                    <img
                      src={Emojify}
                      className="my-2 portfolioButton"
                      href="https://samhiga.github.io/emojify/"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                  </a> */}
                </div>
              </div>
            </div>
</section>


    );
  }
  

export default Portfolio;