import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: rgba(53, 53, 53, 1);
  box-shadow: 16.62px 20.12px 35.77px 0px rgba(168, 125, 41, 1);
  width: 70%;
  height: 7rem;
  border-radius: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

const Text1 = styled.label`
  font-size: 1.5rem;
  font-weight: 900;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

const Text2 = styled.label`
  font-size: 2rem;
  font-weight: 900;
  text-align: left;
  color: rgba(255, 242, 128, 1);
`;

const CustomButton = ({ text1, text2 }) => {
  return (
    <Button>
      <Text1>{text1}</Text1>
      <Text2>{text2}</Text2>
    </Button>
  );
};

export default CustomButton;
