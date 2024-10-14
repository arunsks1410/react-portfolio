import React from 'react';

const Profile = () => {
  // Function to open the resume PDF
  const handleDownloadCV = () => {
    window.open('./assets/resume-example.pdf');
  };

  // Function to navigate to the contact section
  const handleContactInfo = () => {
    window.location.href = './#contact';
  };

  // Function to navigate to LinkedIn
  const handleLinkedInClick = () => {
    window.location.href = 'https://linkedin.com/in/arunsks98';
  };

  // Function to navigate to GitHub
  const handleGithubClick = () => {
    window.location.href = 'https://github.com/';
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/circle-profile-pic.png" alt='arunkumar' />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Arunkumar</h1>
        <p className="section__text__p2">Fullstack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={handleDownloadCV} // Call the function
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn profile"
            className="icon"
            onClick={handleLinkedInClick}
          />
          <img
            src="./assets/github.png"
            alt="Github profile"
            className="icon"
            onClick={handleGithubClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
