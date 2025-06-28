import React from "react";
import styled from "styled-components";
import Foto from "./../imagenes/foto.jpg";

const Perfil = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 1rem 1rem;
  border-radius: 8px;
  width: fit-content;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 14px;
`;

const PerfilInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PerfilNombre = styled.div`
  color: #e0e0e0;
  font-size: 20px;
  font-family: "Work Sans";
`;

const PerfilTitle = styled.div`
  color: #aaaaaa;
  font-size: 15px;
  font-family: "Montserrat", Arial, sans-serif;
`;

const PerfilComponent = () => (
  <Perfil>
    <Avatar src={Foto} alt={"Matias"} />
    <PerfilInfo>
      <PerfilNombre>Matías Rodríguez</PerfilNombre>
      <PerfilTitle>Ingeniero Informático</PerfilTitle>
    </PerfilInfo>
  </Perfil>
);

export default PerfilComponent;
