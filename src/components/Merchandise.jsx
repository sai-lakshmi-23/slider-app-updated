import React, { useState } from "react";
import bg1 from "../assets/merch/black-hoodie-bck.png";
import pic1 from "../assets/merch/black-hoodie.png";
import bg2 from "../assets/merch/blue-cap-bck.png";
import pic2 from "../assets/merch/cap-mockup.png";
import bg3 from "../assets/merch/pink-tee-bck.png";
import pic3 from "../assets/merch/pink-tshirt.png";
import bg4 from "../assets/merch/yellow-tee-bck.png";
import pic4 from "../assets/merch/yellow-tshirt.png";
import styled from "styled-components";
import RightShirtArrow from "../assets/images/right-shirt-arrow.svg";
import LeftShirtArrow from "../assets/images/left-shirt-arrow.svg";
import Games from "./Games";

// Styling for the background wrapper
const Wrapper = styled.div`
  background: linear-gradient(191deg, transparent 50.5%, #fff 20%),
    linear-gradient(-7deg, transparent 72.5%, #fff 20%),
    radial-gradient(50% 13.19% at 50% 36.33%, #fff280 0%, #ffc700 100%);
  padding: 5rem 0;
`;

// Header styling
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "CHEESEBURGA", sans-serif;
  color: rgba(255, 168, 0, 1);
  font-size: 7rem;
  transform: translateY(-10rem);
`;

// Container for images with transition
const Container = styled.div`
  position: relative;
  border-radius: 2rem;
  width: 80%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

// Styled background image with transition effect
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  transform: ${({ direction }) =>
    direction === "left"
      ? "translateX(-30%)"
      : direction === "right"
      ? "translateX(30%)"
      : "translateX(0)"};
  opacity: ${({ direction }) => (direction ? 0 : 1)};
`;

// Styled product image with transition effect
const ProductImage = styled.img`
  border-radius: 10px;
  width: -webkit-fill-available;
  border-radius: 2rem;
  position: relative;
  z-index: 2;
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  transform: ${({ direction }) =>
    direction === "left"
      ? "translateX(-30%)"
      : direction === "right"
      ? "translateX(30%)"
      : "translateX(0)"};
  opacity: ${({ direction }) => (direction ? 0 : 1)};
`;

// Arrow button containers with positioning
const RightWrapper = styled.div`
  z-index: 5;
  position: absolute;
  right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const LeftWrapper = styled.div`
  z-index: 5;
  position: absolute;
  left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Merchandise = () => {
  const img = [pic1, pic2, pic3, pic4];
  const backgrounds = [bg1, bg2, bg3, bg4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Track the direction of the transition

  const handleNext = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img.length - 1 ? 0 : prevIndex + 1
      );
      setDirection(null);
    }, 800); // Sync with transition duration
  };

  const handlePrev = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? img.length - 1 : prevIndex - 1
      );
      setDirection(null);
    }, 800); // Sync with transition duration
  };

  return (
    <Wrapper>
      <Header>MERCHANDISE</Header>
      <div className="slide1">
        {/* Image Display Box */}
        <Container>
          <LeftWrapper>
            <img
              src={LeftShirtArrow}
              alt=""
              onClick={handlePrev}
              width={"50"}
            />
          </LeftWrapper>
          <BackgroundImage
            src={backgrounds[currentIndex]}
            alt={`Background ${currentIndex + 1}`}
            direction={direction}
          />
          <ProductImage
            src={img[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            direction={direction}
          />
          <RightWrapper>
            <img
              src={RightShirtArrow}
              alt=""
              onClick={handleNext}
              width={"50"}
            />
          </RightWrapper>
        </Container>

        {/* Navigation Buttons */}
      </div>
      <Games />
    </Wrapper>
  );
};

export default Merchandise;
