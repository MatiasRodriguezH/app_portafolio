import React from "react";
import styled from "styled-components";
import Foto from "./../imagenes/foto.jpg";

const TituloDiv = styled.div`
  background-color: rgba(40, 49, 77, 0.4);
  padding: 12rem 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
`;

const Texto = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0;
  margin: 0;
  gap: 0.1rem;

  h2,
  h1 {
    margin: 0;
    padding: 0;
  }
`;

const Imagenes = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 22rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 14px;
`;

const Nombre = styled.h1`
  color: rgb(244, 253, 113);
  font-size: 65px;
  font-family: "Courier New", Courier, monospace;
  padding: 0;
  margin: 0;
`;

const Subtitulo = styled.h1`
  font-size: 38px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Titulo = () => {
  return (
    <TituloDiv>
      <Texto>
        <h2>¡Hola! Soy</h2>
        <Nombre>Matías Rodríguez</Nombre>
        <Subtitulo>Desarrollador Software</Subtitulo>
      </Texto>
      <Imagenes>
        <Avatar src={Foto} alt={"Matias"} />
      </Imagenes>
    </TituloDiv>
  );
};

export default Titulo;
