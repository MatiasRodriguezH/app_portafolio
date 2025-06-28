import React from "react";
import styled from "styled-components";

const TituloDiv = styled.div`
  background-color: #272a33;
  padding: 12rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Nombre = styled.h1`
  font-size: 45px;
  font-family: "Courier New", Courier, monospace;
`;

const Subtitulo = styled.h1`
  font-size: 38px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Titulo = () => {
  return (
    <TituloDiv>
      <Nombre>Matías Rodríguez</Nombre>
      <Subtitulo>Informático</Subtitulo>
    </TituloDiv>
  );
};

export default Titulo;
