// AyushSharma173.github.io/my-portfolio/src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'Description of Project 1', link: '#' },
    { name: 'Project 2', description: 'Description of Project 2', link: '#' },
    { name: 'Project 3', description: 'Description of Project 3', link: '#' },
  ];

  return (
    <section id="projects" style={{ padding: '2rem', background: '#f5f5f5' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', width: '300px', textAlign: 'center' }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
