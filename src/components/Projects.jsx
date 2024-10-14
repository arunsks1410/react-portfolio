import React from "react";

const Projects = () => {
  // Function to handle button clicks
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Project One */}
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => handleClick("https://github.com/")}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => handleClick("https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* Project Two */}
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => handleClick("https://github.com/")}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => handleClick("https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* Project Three */}
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => handleClick("https://github.com/")}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => handleClick("https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow navigation */}
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => handleClick('./#contact')}
      />
    </section>
  );
};

export default Projects;
