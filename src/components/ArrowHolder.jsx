import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  & :hover {
    cursor: pointer;
  }
`;

const ArrowHolder = ({ src, onClick, alt }) => {
  return (
    <Wrapper>
      <img
        className="scroll-button-updated"
        src={src}
        onClick={onClick}
        alt={alt}
      />
    </Wrapper>
  );
};

export default ArrowHolder;
