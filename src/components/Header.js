import React from 'react';
import fazniImage from '../img/fazni.jpeg';

const Header = () => {
  return (
    <header className="bg-black text-white p-6 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Name and Navigation */}
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold"> FAZNI FAIZ</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#profile" className="hover:text-gray-400">Profile</a></li>
              <li><a href="#education" className="hover:text-gray-400">Education</a></li>
              <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>

        
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white">
          <img src={fazniImage} alt="Mohamed Fais Mohamed Fasni" className="w-full h-full object-cover"/>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </header>
  );
}

export default Header;
