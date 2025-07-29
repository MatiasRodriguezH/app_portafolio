import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Boton from "../elementos/Boton";
import PerfilComponent from "../elementos/Perfil";

const HeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ scroll }) =>
    scroll ? "rgba(24, 24, 24, 0.9)" : "rgba(24, 24, 24, 0.4)"};
  backdrop-filter: blur(5px);
  z-index: 10;
  padding: ${({ scroll }) => (scroll ? "0.5rem 0" : "1rem 0")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const ContenedorHeader = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    & > div {
      display: flex;
      margin-bottom: 1.25rem;
      justify-content: end;
    }
  }
`;

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
  align-items: center;

  @media (max-width: 1000px) {
    padding-top: 1rem;
    padding-left: 0;
    justify-content: space-between;
  }
`;

const PerfilDiv = styled.div`
  display: contents;

  @media (max-width: 1000px) {
    display: none;
    position: fixed;
  }
`;

function Header() {
  const [scroll, setScroll] = useState(false);
  const refHeader = useRef(null);

  useEffect(() => {
    const manejarScroll = () => {
      const scrolled = window.scrollY > 80;
      if (scrolled !== scroll) {
        setScroll(scrolled);
      }
    };

    document.addEventListener("scroll", manejarScroll);
    return () => {
      document.removeEventListener("scroll", manejarScroll);
    };
  }, [scroll]);

  const onClick = (e, id) => {
    e.preventDefault();
    const seccion = document.getElementById(id);
    if (seccion && refHeader.current) {
      const alturaHeader = refHeader.current.offsetHeight;
      const posicionSeccion =
        seccion.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: posicionSeccion - alturaHeader,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderDiv scroll={scroll} ref={refHeader}>
      <ContenedorHeader>
        <PerfilDiv>
          <PerfilComponent />
        </PerfilDiv>
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
