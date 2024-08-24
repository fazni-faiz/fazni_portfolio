import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
