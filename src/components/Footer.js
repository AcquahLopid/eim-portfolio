import React from "react";
import "./Footer.css";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin_logo_icon_181286.png";
import gitlabLogo from "../assets/gitlab_square_icon_236731.png";

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
                <a href="https://www.linkedin.com/in/emanuel-molina-65b84426b/">
                    <img
                      src={linkedinLogo}
                      className="my-2 githubButton"
                      href="https://github.com/AcquahLopid"
                      style={{ width: "4.5%" }}
                      alt="My Linkedin"
                    />
                </a>
                <a href="https://github.com/AcquahLopid">
                    <img
                      src={gitlabLogo}
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