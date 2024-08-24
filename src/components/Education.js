import React from 'react';

function Education() {
  return (
    <section id="education" style={sectionStyle}>
      <h2>Education</h2>
      <h3>BSc (Hons) Computer Science (Top-up)</h3>
      <p>Staffordshire University - APIIT Campus, Kandy (October 2023 - Present)</p>
      <h3>Pearson BTEC HND in Computing and Software Development</h3>
      <p>BCAS Campus, Kandy (July 2021 - February 2023)</p>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  margin: '10px 0'
};

export default Education;
