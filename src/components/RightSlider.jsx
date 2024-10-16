import { useState } from "react";
import image1 from "../assets/image1.png"; // Image path
import image3 from "../assets/image3.png"; // Image path
import image4 from "../assets/image4.png"; // Image path
import image5 from "../assets/image5.png"; // Image path
import image2 from "../assets/image2.png";
import ImageSlider from "./ImageSlider";

const RightSlider = () => {
  const images = [image1, image2, image3, image4, image5];
  const videos = [image1, image2]; // as videos are of high mb replaced videos with images only

  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <div className="tab-section">
        <button
          onClick={() => setActiveTab("All")}
          className={`tab ${activeTab === "All" ? "active" : ""}`}
        >
          ALL
        </button>
        <button
          onClick={() => setActiveTab("Images")}
          className={`tab ${activeTab === "Images" ? "active" : ""}`}
        >
          IMAGES
        </button>
        <button
          onClick={() => setActiveTab("Videos")}
          className={`tab ${activeTab === "Videos" ? "active" : ""}`}
        >
          VIDEOS
        </button>
      </div>
      <ImageSlider videos={videos} images={images} activeTab={activeTab} />
    </>
  );
};

export default RightSlider;
