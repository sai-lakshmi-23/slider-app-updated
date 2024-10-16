import React from "react";
import PlayIcon from "../assets/images/play-button.svg";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the span */
  width: 10%;
  height: 3rem;
  border-radius: 1.5rem;

  img {
    width: 2rem;
  }

  span {
    flex: 1; /* Allows the span to take up the remaining space and center itself */
    text-align: center;
    font-weight: 700;
    margin: auto;
  }

  &: hover {
    cursor: pointer;
  }
`;

const PlayButton = ({ color, onClick }) => {
  return (
    <Button color={color} onClick={onClick}>
      <img src={PlayIcon} alt={"Play Button"} />
      <span>{"PLAY"}</span>
    </Button>
  );
};

export default PlayButton;
