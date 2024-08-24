import React from 'react';

function Footer() {
  return (
    <footer id="contact" style={footerStyle}>
      <h2>Contact</h2>
      <p>Email: faznifaiz6@gmail.com</p>
      <p>Phone: +94765638164</p>
      <p>Location: 101, Yahalatenna, Kandy</p>
      <a href="https://www.linkedin.com/in/faznifaiz" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
      <a href="https://github.com/fazni-faiz" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center'
};

export default Footer;
