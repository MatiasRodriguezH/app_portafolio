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
    title: "Outlier Detector Web",
    description:
      "App que detecta valores atípicos en archivos CSV usando IQR y Z-score.",
    link: "https://github.com/tuusuario/outlier-detector",
  },
  {
    title: "Dashboard de Ventas",
    description:
      "Dashboard en React con gráficas de ventas y detección de anomalías.",
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
