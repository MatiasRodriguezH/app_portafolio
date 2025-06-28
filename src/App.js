import React from "react";
import Header from "./componentes/Header";
import Projects from "./componentes/Projects";
import Contact from "./componentes/Contact";
import Titulo from "./componentes/Titulo";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #242221;
    color: white;
  }
`;

const Cuerpo = styled.div`
  padding: 2rem 25%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Titulo />
      <Cuerpo>
        <Projects />
        <Contact />
      </Cuerpo>
    </>
  );
}

export default App;
