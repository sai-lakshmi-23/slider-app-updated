import React, { useRef, useState } from "react";
import ArrowHolder from "./ArrowHolder";
import RightArrow from "../assets/images/right-arrow.svg";
import LeftArrow from "../assets/images/left-arrow.svg";

const ImageSlider = ({ activeTab = "All", images = [], videos = [] }) => {
  // const [activeTab, setActiveTab] = useState(currentActiveTab);
  const scrollContainerRef = useRef(null); // Reference to the horizontal scroll container

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Function to render content based on the selected tab
  const renderContent = () => {
    switch (activeTab) {
      case "Images":
        return (
          <div className="horizontal-gallery" ref={scrollContainerRef}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Images ${index + 1}`}
                className="gallery-item-updated"
              />
            ))}
          </div>
        );
      case "Videos":
        return (
          <div className="horizontal-gallery" ref={scrollContainerRef}>
            {videos.map((video, index) => (
              <video key={index} className="gallery-item-updated" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        );
      default: // "All"
        return (
          <div className="horizontal-gallery" ref={scrollContainerRef}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Images ${index + 1}`}
                className="gallery-item-updated"
              />
            ))}
            {videos.map((video, index) => (
              <video key={index} className="gallery-item-updated" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        );
    }
  };
  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <ArrowHolder src={LeftArrow} onClick={scrollLeft} alt="left arrow" />
      <div className="right-scroll">{renderContent()}</div>
      <ArrowHolder src={RightArrow} onClick={scrollRight} alt="right arrow" />
    </div>
  );
};

export default ImageSlider;
