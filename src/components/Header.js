import React from 'react';
import fazniImage from '../img/fazni.jpeg';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 md:p-6 shadow-lg relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Name and Navigation */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <h1 className="text-3xl md:text-4xl font-bold">FAZNI FAIZ</h1>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-lg">
              <li><a href="#profile" className="hover:text-gray-400">Profile</a></li>
              <li><a href="#education" className="hover:text-gray-400">Education</a></li>
              <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Right Side: Image */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white mt-4 md:mt-0">
          <img src={fazniImage} alt="Mohamed Fais Mohamed Fasni" className="w-full h-full object-cover"/>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </header>
  );
}

export default Header;
