import React from "react";
import image1 from "../assets/images/building-dog.svg";
import image2 from "../assets/images/merchandise-dog.svg";
import image3 from "../assets/images/events-dog.svg";
import image4 from "../assets/images/expansion-dog.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;

  @media (min-width: 769px) {
    justify-content: space-between;
    flex-wrap: nowrap; /* Prevent wrapping on larger screens */
  }
`;

// Individual content box with image and text
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

    &:first-child {
    border-top-left-radius: 15px; /* Adjust value as needed */
  }

  /* Set top-right radius for last child */
  &:last-child {
    border-top-right-radius: 15px; /* Adjust value as needed */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`;

// Text styling
const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

// Image styling
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const Management = () => {
  return (
    <Wrapper>
      <ContentBox
        style={{
          background:
            "linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0) 100%)",
        }}
      >
        <Text>Community Building and Initial Launch</Text>
        <Image src={image1} alt="Dog Build" />
      </ContentBox>
      <ContentBox
        style={{
          background:
            "linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0) 100%)",
        }}
      >
        <Text>Merchandise Store Launch</Text>
        <Image src={image2} alt="Dog Merchandise" />
      </ContentBox>
      <ContentBox
        style={{
          background:
            "linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0) 100%)",
        }}
      >
        <Text>Community Events and Contests</Text>
        <Image src={image3} alt="Dog Events" />
      </ContentBox>
      <ContentBox
        style={{
          background:
            "linear-gradient(179.53deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0) 95.85%)",
        }}
      >
        <Text>Expansions and New Features</Text>
        <Image src={image4} alt="Dog Expansion" />
      </ContentBox>
    </Wrapper>
  );
};

export default Management;
