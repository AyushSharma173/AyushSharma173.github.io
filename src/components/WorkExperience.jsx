// src/components/WorkExperience.jsx
import React from 'react';
import workExperiences from '../assets/WorkExperience.json';
import './WorkExperience.css';

export default function WorkExperience() {
  return (
    <section className="work-experience-section">
      <h2 className="work-experience-heading">Work Experience</h2>
      <div className="timeline">
        {workExperiences.map((experience) => (
          <div key={experience.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="experience-title">{experience.title}</h3>
              <p className="experience-company-location">
                {experience.company_url ? (
                  <a
                    href={experience.company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-company-link"
                  >
                    {experience.company}
                  </a>
                ) : (
                  experience.company
                )}{" "}
                | {experience.location}
              </p>
              <p className="experience-dates">{experience.dates}</p>
              <ul className="experience-description">
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
