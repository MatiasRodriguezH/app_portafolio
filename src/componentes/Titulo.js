import React from "react";
import styled from "styled-components";
import Foto from "./../imagenes/foto.jpg";

const TituloDiv = styled.div`
  background-color: rgba(40, 49, 77, 0.4);
  padding: 12rem 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 1;
  position: relative;
  margin-bottom: -2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 6rem 5%;
  }
`;

const Texto = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0;
  margin: 0;
  gap: 0.1rem;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
`;

const Imagenes = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 18rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 14px;
  @media (max-width: 1000px) {
    margin-top: 3rem;
    margin-bottom: -3rem;
    width: 12rem;
  }
`;

const Nombre = styled.h1`
  color: rgb(244, 253, 113);
  font-size: 3.5rem;
  font-family: "Courier New", Courier, monospace;
  padding: 0;
  margin: 0;
`;

const Subtitulo = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 2.3rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const Acciones = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const BotonDescarga = styled.a`
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #fff;
  background-color: #7f00ff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(127, 0, 255, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #4b00e0;
    box-shadow: 0px 15px 20px rgba(75, 0, 224, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Redes = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    fill: white;
    transition: fill 0.2s ease-in-out;
    width: 24px;
    height: 24px;
  }

  a:hover svg {
    fill: orange;
  }
`;

const Titulo = () => {
  return (
    <TituloDiv>
      <Texto>
        <h2>¡Hola! Soy</h2>
        <Nombre>Matías Rodríguez</Nombre>
        <Subtitulo>Desarrollador Software</Subtitulo>
        <Acciones>
          <BotonDescarga
            href="/Curriculum Vitae - Matias Rodríguez.pdf"
            download
          >
            Descargar CV
          </BotonDescarga>
          <Redes>
            <a
              href="https://github.com/MatiasRodriguezH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.102.81 2.222v3.293c0 .317.21.693.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mat%C3%ADas-rodr%C3%ADguez-hernandez-443855321/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M20.452 20.452h-3.555v-5.569c0-1.327-.025-3.036-1.85-3.036-1.852 0-2.135 1.445-2.135 2.938v5.667H9.355V9h3.414v1.561h.05c.476-.9 1.636-1.848 3.37-1.848 3.602 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM6.976 20.452H3.696V9h3.28v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </Redes>
        </Acciones>
      </Texto>
      <Imagenes>
        <Avatar src={Foto} alt={"Matias"} />
      </Imagenes>
    </TituloDiv>
  );
};

export default Titulo;
