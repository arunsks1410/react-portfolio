import React, { useState } from "react";
import "../src/style.css"; // Import your style.css file
import "../src/mediaqueries.css"; // Import your mediaqueries.css file
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("inside toggleMenu function!!!")
    setMenuOpen(!menuOpen); // Toggle the menu open state
  };

  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
