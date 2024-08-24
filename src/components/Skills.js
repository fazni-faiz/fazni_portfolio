import React from 'react';

function Skills() {
  return (
    <section id="skills" style={sectionStyle}>
      <h2>Skills</h2>
      <ul>
        <li>Programming Languages: Java, Python, C#, PHP</li>
        <li>Web Technologies: HTML, CSS, Bootstrap, JavaScript</li>
        <li>Web Frameworks: Next.Js, Vue.Js, React.Js, Laravel</li>
        <li>Database: SQL</li>
        <li>Version Control: GitHub</li>
      </ul>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  margin: '10px 0'
};

export default Skills;
