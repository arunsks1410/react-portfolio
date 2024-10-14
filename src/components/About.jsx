import React from "react";

const About = () => {
  // Function to handle the arrow click and navigate to the experience section
  const handleArrowClick = () => {
    window.location.href = './#experience';
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile pic"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                1.5+ years <br />
                Full-stack Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.E Bachelors of Engineering
                <br />
                Computer Science and Engineering
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm passionate Fullstack Developer with 1.5 years of experience
              specializing in the MERN stack (MongoDB, Express, React, and
              Node.js). I thrive on building scalable, efficient web
              applications and solving real-world problems through clean,
              maintainable code.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleArrowClick} // Updated to use the function
      />
    </section>
  );
};

export default About;
