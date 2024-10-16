import React from "react";
import "./styles/app.css"; // Import your CSS file
import "./styles/home.css"
import "./styles/slider.css"
import "./styles/rightSlider.css"
import Slider from "./components/Slider";

const App = () => {
  
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="gradient-text">WELCOME TO ALBAY WORLD</h1>
        <div className="description">
          <span className="highlight">
            legendary Central Asian Shepherd Dog
          </span>{" "}
          meets a new-age adventure. <span className="highlight">Join us</span>{" "}
          in celebrating the <span className="highlight">strength</span>,{" "}
          <span className="highlight">loyalty</span>, and{" "}
          <span className="highlight">heritage</span> of the Alabay breed.
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default App;
