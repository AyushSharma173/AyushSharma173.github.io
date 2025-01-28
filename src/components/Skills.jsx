// AyushSharma173.github.io/my-portfolio/src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = ['React', 'Python', 'AWS', 'Git', 'Node.js'];

  return (
    <section id="skills" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>My Skills</h2>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ background: '#61dafb', padding: '1rem', borderRadius: '5px' }}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
