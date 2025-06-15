import React from "react";
import Header from "./componentes/Header";
import Projects from "./componentes/Projects";
import Contact from "./componentes/Contact";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: white;
    color: #1f2937;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
