import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultBackgroundImage from "../assets/images/alabay-heritage.svg";
import ExitContent from "./ExitContent";
import GamePreview1 from "../assets/images/game-preview-img1.svg";
import GamePreview2 from "../assets/images/game-preview-img2.svg";
import GamePreview3 from "../assets/images/game-preview-img3.svg";
import PlayingContent from "./PlayingContent";
import { useLocation } from "react-router-dom";

// Styled component to apply the background image
const GamePlayerWrapper = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Header = styled.div`
  font-family: "BaronKuffner", sans-serif;
  font-size: 5rem;
  color: rgba(255, 255, 255, 1);
  width: 90%;
  margin: auto;
`;

const Text = styled.div`
  color: ${(props) => props.color};
  font-size: 2rem;
  letter-spacing: 0.3rem;
  font-weight: 600;
  width: 90%;
  margin: auto;
`;

// Content div with transition effect from top to bottom
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const defaultImages = [
  GamePreview1,
  GamePreview2,
  GamePreview3,
  GamePreview1,
  GamePreview2,
  GamePreview3,
];

const GamePlayer = () => {

  const location = useLocation();
  const { gameData } = location.state || {};

  const {
    backgroundImage = DefaultBackgroundImage,
    color = "rgba(144, 255, 174, 1)",
    header = "ALABAY HERITAGE",
    text = "THE LOST ADVENTURE",
    images = defaultImages,
  } = gameData

  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // Delay the visibility for better effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <GamePlayerWrapper backgroundImage={backgroundImage}>
      <Content className={visible ? "visible" : ""}>
        <Header>{header}</Header>
        <Text color={color}>{text}</Text>
        {playing ? <PlayingContent color={color} setPlaying={setPlaying} /> : <ExitContent color={color} images={images} setPlaying={setPlaying} /> }
      </Content>
    </GamePlayerWrapper>
  );
};

export default GamePlayer;
