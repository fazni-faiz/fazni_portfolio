import React from 'react';

function Experience() {
  return (
    <section id="experience" style={sectionStyle}>
      <h2>Work Experience</h2>
      <h3>Technical Instructor - Igniter Space (PVT) LTD</h3>
      <p>February 2023 - Present</p>
      <ul>
        <li>Instructing individuals on innovation engineering, nurturing creativity, and enhancing problem-solving abilities.</li>
        <li>Creating and evolving curriculum with a focus on Python programming.</li>
        <li>Offering hands-on training and mentorship on IT and technology-related projects.</li>
      </ul>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  margin: '10px 0'
};

export default Experience;
