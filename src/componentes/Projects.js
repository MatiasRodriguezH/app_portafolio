import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: rgba(40, 49, 77, 0.4);
  border-radius: 8px;
  padding: 2rem 3rem;
  margin: 3rem 0;
  font-family: "Fira Sans";
  position: relative;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  font-family: "Fira Sans";
  position: relative;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: orange;
  }

  @media (max-width: 1000px) {
    align-self: center;
    justify-content: center;
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Projects = styled.div`
  display: grid;
  max-width: 1500px;
  padding: 0;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  width: 90%;
  height: auto;
  min-height: 12rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectLink = styled.a`
  color: rgb(125, 120, 235);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const projectos = [
  {
    title: "Sistema de Inventario y Ventas",
    description:
      "App para manejar el flujo de ventas e inventario de un almacén.",
    link: "https://github.com/MatiasRodriguezH/Inventario",
  },
  {
    title: "App de Gastos",
    description: "Aplicación web para manejo de gastos.",
    link: "https://github.com/MatiasRodriguezH/app_lista_gastos",
  },
];

function Projectos() {
  return (
    <Section>
      <Title>Proyectos</Title>
      <Projects>
        {projectos.map((project, idx) => (
          <ProjectCard key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </ProjectLink>
          </ProjectCard>
        ))}
      </Projects>
    </Section>
  );
}

export default Projectos;
