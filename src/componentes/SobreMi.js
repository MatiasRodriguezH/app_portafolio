import React from "react";
import styled from "styled-components";

const SobreMiDiv = styled.div`
  background-color: rgba(40, 49, 77, 0.4);
  border-radius: 8px;
  padding: 2rem 3rem;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

const Titulo = styled.h1`
  font-family: "Work Sans", Courier, monospace;
  font-size: 35px;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  align-self: flex-start;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: orange;
  }

  @media (max-width: 1000px) {
    align-self: center;
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Texto = styled.p`
  font-family: Helvetica;
  font-size: 19px;
  padding: 0;
  width: 80%;
`;

const PalabraClave = styled.span`
  color: orange;
  font-weight: bold;
`;

const SobreMi = () => {
  return (
    <SobreMiDiv>
      <Titulo>Sobre Mi</Titulo>
      <Texto>
        ¡Hola! Soy un estudiante de Ingeniería Civíl Informática en Chile.
        Apasionado por desarrollar aplicaciónes funcionales, atractivas y que
        ayuden a mi comunidad. Actualmente estudiando desarrollo web con{" "}
        <PalabraClave>React</PalabraClave> y{" "}
        <PalabraClave>Firebase</PalabraClave>.
      </Texto>
      <Texto>
        Me destaco por mis habilidades de comunicación, rápido aprendizaje y
        enseñanza. Actualmente estoy interesado en conocer equipos que me
        permitan aportar y crecer profesionalmente.
      </Texto>
    </SobreMiDiv>
  );
};

export default SobreMi;
