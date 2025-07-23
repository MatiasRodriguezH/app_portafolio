import React from "react";
import styled from "styled-components";
import Boton from "../elementos/Boton";
import PerfilComponent from "../elementos/Perfil";

const HeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(24, 24, 24, 0.4);
  backdrop-filter: blur(5px);
  z-index: 10;
  @media (max-width: 60rem) {
    /* 950px */
    justify-content: start;
  }
`;

const ContenedorHeader = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 60rem) {
    /* 950px */
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    & > div {
      display: flex;
      margin-bottom: 1.25rem; /* 20px */
      justify-content: end;
    }
  }
`;

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
  align-items: center;
`;

function Header() {
  const onClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderDiv>
      <ContenedorHeader>
        <PerfilComponent />
        <ContenedorBotones>
          <Boton onClick={(e) => onClick(e, "sobre-mi")}>Sobre Mi</Boton>
          <Boton onClick={(e) => onClick(e, "projectos")}>Proyectos</Boton>
          <Boton onClick={(e) => onClick(e, "contacto")}>Contacto</Boton>
        </ContenedorBotones>
      </ContenedorHeader>
    </HeaderDiv>
  );
}

export default Header;
