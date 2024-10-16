import React, { useEffect, useState } from "react";
import RightSlider from "./RightSlider";
import Home from "./Home";
import Vision from "./Vision";
import Economy from "./Economy";
import Merchandise from "./Merchandise";

const Slider = () => {
  const [scrollY, setScrollY] = useState(310);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("Scroll Y Values",window.scrollY)

      if(window.scrollY === 310) {
        setScrollY(20);
      }
      if(window.scrollY === 0) {
        setScrollY(310);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="scrollable-slider"
      style={{
        transform: `translateY(${scrollY}px)`,
      }}
    >
      <div className="wrapper">
        <Home />
        <RightSlider />
        <div className="head1-updated">project vision</div>
        <Vision />
        <Economy />
        <Merchandise />
      </div>
    </div>
  );
};

export default Slider;
