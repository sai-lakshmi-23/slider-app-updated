import React from "react";
import Telegram from "../assets/images/social-media-t.svg"; // Dog image
import Twitter from "../assets/images/social-media-x.svg"; // Dog image
import Dog from "../assets/images/social-media-dog.svg"; // Dog image
import styled from "styled-components";
import LogoHandler from "./LogoHandler";

const Header = styled.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  color: rgba(255, 168, 0, 1);
`;

const MediaWrapper = styled.div`
    width: 90%;
    margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageWrapper = styled.img``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialMediaAccounts = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30vh;
  border-radius: 2rem;
  box-shadow: 15px 15px 34.3px 0px rgba(0, 0, 0, 0.37);
  border: 8px solid rgba(5, 83, 200, 0.66);
  background: linear-gradient(137.69deg, #80b3ff 31.37%, #417df1 84.39%);
  align-items: center;
  justify-content: center;
  
`;

const SocialMedia = () => {
  return (
    <MediaWrapper>
      <Header>SOCIAL MEDIA</Header>
      <Header>LINKS</Header>

      {/* <div className="branch"></div> */}

      <Wrapper>
        <SocialMediaAccounts>
          <Container>
            <LogoHandler logo={Twitter} text={"Twitter Link"} />
            <LogoHandler logo={Telegram} text={"Telegram Link"} />
          </Container>
        </SocialMediaAccounts>
        <ImageWrapper src={Dog} alt="Dog" className="img5" />
      </Wrapper>
    </MediaWrapper>
  );
};

export default SocialMedia;
