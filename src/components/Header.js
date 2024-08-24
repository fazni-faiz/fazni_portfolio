import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Mohamed Fais Mohamed Fazni</h1>
      <nav>
        <a href="#profile">Profile</a> | 
        <a href="#experience">Experience</a> | 
        <a href="#education">Education</a> | 
        <a href="#projects">Projects</a> | 
        <a href="#skills">Skills</a> | 
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center'
};

export default Header;
