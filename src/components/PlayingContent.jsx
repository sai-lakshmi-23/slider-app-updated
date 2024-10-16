import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  margin-top: 3rem;

  z-index: 1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const Header = styled.div`
  color: ${(props) => props.color};
  font-size: 1.5rem;
  font-weight: 600;
`;

const ExitButton = styled.button`
  width: 10%;
  border: 2px solid rgba(255, 255, 255, 1);
  background: transparent;
  color: rgba(255, 255, 255, 1);
  height: 3rem;
  border-radius: 2rem;
  font-weight: 600;

  &: hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  height: 15rem;
  overflow-y: scroll;
  width: 100%;
  line-height: 2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  span {
    color: ${(props) => props.color};
  }

  /* WebKit-based browsers (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 16px; /* Adjust the width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: rgba(217, 217, 217, 0.34); /* Scrollbar track background */
    border-radius: 1rem; /* Border radius for the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.color}; /* Scrollbar thumb color */
    border-radius: 1rem; /* Border radius for the scrollbar thumb */
    border: 3px solid rgba(217, 217, 217, 0.34); /* Optional border around thumb to give more visibility */
  }

  /* Firefox */
  scrollbar-width: thin; /* Makes the scrollbar thinner */
  scrollbar-color: ${(props) => props.color} rgba(217, 217, 217, 0.34); /* Thumb and track colors */
`;
const PlayingContent = ({ color = "rgba(144, 255, 174, 1)", setPlaying }) => {
  const text = `Explore a variety of landscapes, including [mountains], [forests], [deserts], and [ancient ruins].
    Use the Alabay's [abilities] to solve [puzzles] that involve moving objects, activating mechanisms, or finding hidden clues.
    Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.
    Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
    Challenge Modes:
    - [Time Trials]: Compete in special timed challenges where the Alabai must navigate through complex mazes or
    complete puzzles within a time limit.
    - [Exploration Mastery]: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
    uncovering all secrets.
    Explore a variety of landscapes, including [mountains], [forests], [deserts], and [ancient ruins].
    Use the Alabay's [abilities] to solve [puzzles] that involve moving objects, activating mechanisms, or finding hidden clues.
    Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.
    Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
    Challenge Modes:
    - [Time Trials]: Compete in special timed challenges where the Alabai must navigate through complex mazes or
    complete puzzles within a time limit.
    - [Exploration Mastery]: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
    uncovering all secrets.`;

  const parseText = (text) => {
    // Split text into sentences based on full stops, keep the period, and trim extra spaces
    const sentences = text.split(/(?<=\.)/g).map((sentence) => sentence.trim());

    return sentences.map((sentence, index) => (
      <div key={index}>
        {/* Split words inside square brackets and wrap them in spans */}
        {sentence.split(/(\[.*?\])/).map((part, subIndex) => {
          if (part.startsWith("[") && part.endsWith("]")) {
            return <span key={subIndex}>{part.slice(1, -1)}</span>;
          }
          return part;
        })}
      </div>
    ));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // Delay the visibility for better effect
    return () => clearTimeout(timer);
  }, []);

  const [visible, setVisible] = useState(false);

  return (
    <Wrapper className={visible ? "visible" : ""}>
      <Header color={color}>{"FEATURES"}</Header>
      <TextWrapper color={color}>{parseText(text)}</TextWrapper>
      <Container>
        <PlayButton
          color={"rgba(255, 255, 255, 1)"}
          onClick={() => setPlaying(false)}
        />
        <ExitButton onClick={() => setPlaying(false)}>{"Exit"}</ExitButton>
      </Container>
    </Wrapper>
  );
};

export default PlayingContent;
