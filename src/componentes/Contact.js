import React from "react";
import styled from "styled-components";

const ContactoSection = styled.section`
  background-color: rgba(40, 49, 77, 0.4);
  border-radius: 8px;
  padding: 2rem 3rem;
  margin: 3rem 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: orange;
  }
`;

const Texto = styled.p`
  font-family: Helvetica;
  font-size: 19px;
  margin-bottom: 1rem;
`;

const EmailLink = styled.a`
  color: orange;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: #ffc107;
  }
`;

function Contacto() {
  return (
    <ContactoSection>
      <Title>Contacto</Title>
      <Texto>¿Quieres trabajar conmigo? Escríbeme:</Texto>
      <EmailLink href="mailto:ma.antoniorodriguez@gmail.com">
        ma.antoniorodriguez@gmail.com
      </EmailLink>
    </ContactoSection>
  );
}

export default Contacto;
