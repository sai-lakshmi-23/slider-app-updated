import React from "react";
import image5 from "../assets/images/economy-dog.svg"; // Image path
import styled from "styled-components";
import CustomButton from "./CustomButton";

const Wrapper = styled.div`
  background: linear-gradient(188deg, transparent 67.5%, #fff 20%),
    linear-gradient(-7deg, transparent 88.5%, #fff 20%),
    radial-gradient(50% 13.19% at 50% 36.33%, #fff280 0%, #ffc700 100%);
  padding-top: 10rem;
`;

const Header = styled.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  width: 90%;
  color: white;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 90%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding-top: 5rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
`;
const Economy = () => {
  return (
    <Wrapper>
      <Header>TOCKNOMICS</Header>

      <Container>
        <ButtonWrapper>
          <CustomButton text1={"LIQUIDITY"} text2={"LOCKED"} />
          <CustomButton text1={"CONTRACT"} text2={"RENOUNCED"} />
          <CustomButton text1={"TAXES"} text2={"0%"} />
        </ButtonWrapper>
        <ImageWrapper>
          <img src={image5} alt="Dog" className="img5" />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default Economy;
