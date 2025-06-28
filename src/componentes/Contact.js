import React from "react";
import styled from "styled-components";

const ContactoSection = styled.section`
  background: #f3f4f6;
  padding: 2rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const EmailLink = styled.a`
  color: #4f46e5;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Contacto() {
  return (
    <ContactoSection>
      <Title>Contacto</Title>
      <p>¿Quieres trabajar conmigo? Escríbeme:</p>
      <EmailLink href="mailto:ma.antoniorodriguez@gmail.com">
        ma.antoniorodriguez@gmail.com
      </EmailLink>
    </ContactoSection>
  );
}

export default Contacto;
