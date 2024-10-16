import React from "react";
import second from "../assets/second.png";
import styled from "styled-components";
import RoadMap from "./RoadMap";
import Management from "./Management";

const Wrapper = styled.div`
  background: linear-gradient(190deg, transparent 54.5%, #fff 20%),
    linear-gradient(-11deg, transparent 81.5%, #fff 20%),
    radial-gradient(50% 13.19% at 50% 36.33%, #fff280 0%, #ffc700 100%);
`;

const Typography = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.87);
  margin: 2rem;
`;

const Vision = () => {
  return (
    <Wrapper>
      <div className="second">
        <img src={second} alt="Dog" className="second-img" />
      </div>
      <Typography>
        Our mission is to honor the heritage of the Alabay by creating a
        vibrant, loyal, and powerful community. Just as the Alabay protects its
        flock, we aim to build a pack that stands strong together.
      </Typography>
      <RoadMap />
      <Management />
    </Wrapper>
  );
};

export default Vision;
