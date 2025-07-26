import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 3rem 0;
  font-family: "Fira Sans";
  position: relative;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: "Fira Sans";
  display: flex;

  @media (max-width: 1000px) {
    justify-content: center;
    border-bottom: 2px solid #ddd;
  }
`;

const Projects = styled.div`
  display: grid;
  max-width: 1500px;
  padding: 0 1rem 0 1rem;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  width: 90%;
  height: 29rem;
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
