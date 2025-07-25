import React from "react";
import styled from "styled-components";

const SobreMiDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: -3rem;
  position: relative;
  z-index: 2;
`;

const Titulo = styled.h1`
  font-family: "Work Sans", Courier, monospace;
  font-size: 35px;
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
