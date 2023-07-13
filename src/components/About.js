import React from "react";
import "./About.css";
import myPicture from "../assets/Emanuel-blossom.jpeg";

function About() {
    return (

    <body>
        <div className="container">
            <img src={myPicture} alt="Emanuel Molina" className="myself"></img>
            <h1 className="title">Full Stack Developer</h1>
        <div className="About-card">
            <h2 className="subtitle">About Me</h2>
            <p className="text">
            As a passionate and dedicated developer, I embarked on an intensive journey 
            to enhance my skills and accelerate my career through a rigorous bootcamp
            program. With great determination and unwavering commitment, I successfully
            earned a certificate that validated my expertise in the field. 
            This transformative experience equipped me with a solid foundation 
            in various programming languages, frameworks, and development methodologies.
            Through hands-on projects and collaborative learning, I honed my 
            problem-solving abilities and gained practical experience in building 
            robust and innovative software solutions. Armed with this certificate 
            and an insatiable thirst for knowledge, I am now ready to contribute
            my skills to the dynamic world of software development, eager to take
            on exciting challenges and make a meaningful impact in the industry. Please feel
            free to look at my past projects, resume, and portfolio, or reach out to me for
            more information.
            </p>
            </div>
        </div>
    </body>
    );
}

export default About;
