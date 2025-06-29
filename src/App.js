import React from "react";
import Header from "./componentes/Header";
import Projects from "./componentes/Projects";
import Contact from "./componentes/Contact";
import Titulo from "./componentes/Titulo";
import SobreMi from "./componentes/SobreMi";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #242221;
    color: white;
    position: relative;
  }
`;

const FondoEstrellas = styled.div`
  inset: 0;
  z-index: -1;
  background-color: #0a0a0f;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 200%;
    background: radial-gradient(white 1px, transparent 2px);
    background-size: 50px 50px;
    animation: parpadeo 6s linear infinite;
    opacity: 0.05;
  }

  @keyframes parpadeo {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-25px, -25px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const Cuerpo = styled.div`
  padding: 0 20%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <FondoEstrellas>
        <Header />
        <Titulo />
        <Cuerpo>
          <SobreMi />
          <Projects />
          <Contact />
        </Cuerpo>
      </FondoEstrellas>
    </>
  );
}

export default App;
