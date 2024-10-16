import React from "react";
import third from "../assets/third.png";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 5rem;
  width: 90%;
  margin: auto;
`;

const Header = styled.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  color: white;
`;

const BodyWrapper = styled.div`
  display: flex;
`;
const Typography = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  margin-top: 20px;
  color: rgba(255, 168, 0, 1);
`;

const ImageWrapper = styled.img`
  height: 500px;
  transform: translateY(-3rem);
`;

const RoadMap = () => {
  return (
    <Wrapper>
      <Header>ROAD MAP</Header>
      <BodyWrapper>
        <Container>
          <Typography>
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store.
            <TextWrapper>
              Join us as we grow and achieve new heights
            </TextWrapper>
          </Typography>
          <ImageWrapper src={third} alt="Dog" />
        </Container>
      </BodyWrapper>
    </Wrapper>
  );
};

export default RoadMap;
