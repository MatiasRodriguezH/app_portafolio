import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
  background-color: #4f46e5;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
`;

function Header() {
  return (
    <HeaderSection>
      <Title>Matías Rodríguez</Title>
      <Subtitle>Desarrollador Front-End & Data Enthusiast</Subtitle>
    </HeaderSection>
  );
}

export default Header;
