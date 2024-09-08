import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactMe from './components/contactme';
import 'animate.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Profile />

      <Experience />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
