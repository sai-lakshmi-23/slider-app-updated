import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
`;

const Text = styled.label`
  color: rgba(255, 255, 255, 1);
  font-size: 1.5rem;
  font-weight: 900;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
`;

const LogoHandler = ({ logo = "", text = "", href = "#" }) => {
  return (
    <Wrapper href={href}>
      <Icon src={logo} alt="Dog" />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default LogoHandler;
