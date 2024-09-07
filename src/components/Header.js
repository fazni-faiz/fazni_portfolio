import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Ensure you have the correct version

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close the menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black text-white p-4 md:p-6 shadow-lg relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Name and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-3xl md:text-4xl font-bold">FAZNI FAIZ</h1>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6"/> : <Bars3Icon className="w-6 h-6"/>}
          </button>
        </div>

        {/* Mobile Menu with Close Button */}
        <nav
          id="mobile-menu"
          className={`fixed inset-0 bg-black bg-opacity-90 md:static md:bg-transparent md:flex md:items-center md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}
        >
          <button
            className="absolute top-4 right-4 text-white md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <XMarkIcon className="w-8 h-8"/>
          </button>
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-lg">
            <li><a href="#profile" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Profile</a></li>
            <li><a href="#education" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#experience" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </header>
  );
}

export default Header;
