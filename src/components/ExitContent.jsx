import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import ImageSlider from "./ImageSlider";

const Paragraph = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 1rem;
  width: 20%;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  margin: auto;
  z-index: 1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Label = styled.label`
  color: ${({ color = "red" }) => color};
  padding: 0.3rem;
  font-weight: 600;
  font-size: 1.5rem;
`;

const ExitContent = ({ color, images = [], setPlaying }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // Delay the visibility for better effect
    return () => clearTimeout(timer);
  }, []);
  return (
    <Wrapper className={visible ? "visible" : ""}>
      <Paragraph>
        {
          "Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors."
        }
      </Paragraph>
      <PlayButton color={color} onClick={() => setPlaying(true)} />
      <div>
        <Label color={color}>GAME</Label>
        <Label color="rgba(255, 255, 255, 1)">PREVIEW</Label>
      </div>
      <ImageSlider images={images} />
    </Wrapper>
  );
};

export default ExitContent;
