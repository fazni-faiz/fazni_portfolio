import React from 'react';

function Projects() {
  return (
    <section id="projects" style={sectionStyle}>
      <h2>Projects</h2>
      <ul>
        <li>Customer Satisfaction System Through Facial Emotions Using Computer Vision in Super Markets.</li>
        <li>Front End Web Application for Sally Sweets Shop.</li>
        <li>SecureVote: A Block Chain Powered Framework for Secure and Transparent Voting System in Sri Lanka.</li>
      </ul>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  margin: '10px 0'
};

export default Projects;
