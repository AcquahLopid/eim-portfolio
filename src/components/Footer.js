import React from "react";
import "./Footer.css";
import githubLogo from "../assets/github-logo.png";

function Footer(){
    return(
        <footer>
            <div className="myFooter">
                <a href="https://github.com/AcquahLopid">
                    <img
                      src={githubLogo}
                      className="my-2 githubButton"
                      href="https://github.com/AcquahLopid"
                      style={{ width: "4%" }}
                      alt="My Github"
                    />
                </a>
                <a href="https://github.com/AcquahLopid">
                    <img
                      src={githubLogo}
                      className="my-2 githubButton"
                      href="https://github.com/AcquahLopid"
                      style={{ width: "4%" }}
                      alt="My Github"
                    />
                </a>
                <a href="https://github.com/AcquahLopid">
                    <img
                      src={githubLogo}
                      className="my-2 githubButton"
                      href="https://github.com/AcquahLopid"
                      style={{ width: "4%" }}
                      alt="My Github"
                    />
                </a>
            </div>
        </footer>
    )
}

export default Footer;