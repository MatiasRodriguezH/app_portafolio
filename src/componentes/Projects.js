import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const ProjectLink = styled.a`
  color: #4f46e5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const projectos = [
  {
    title: "Sistema de Inventario",
    description:
      "App para manejar el flujo de ventas e inventario de un almacén.",
    link: "https://github.com/tuusuario/outlier-detector",
  },
  {
    title: "App de Gastos",
    description: "Aplicación web para manejo de gastos.",
    link: "https://github.com/tuusuario/sales-dashboard",
  },
];

function Projectos() {
  return (
    <Section>
      <Title>Proyectos</Title>
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
    </Section>
  );
}

export default Projectos;
