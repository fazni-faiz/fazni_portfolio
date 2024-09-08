import React from 'react';
import fazniImage from '../img/fazni.jpeg'; // Adjust path as needed
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const Profile = () => {
  return (
    <section id="profile" className="bg-gray-100 text-gray-900 p-6 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h2 className="text-4xl font-extrabold mb-8 text-left animate__animated animate__fadeIn animate__delay-1s">
            Profile
          </h2>
          <p className="text-base md:text-xl leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            A dedicated and results-oriented software engineering professional with a BSc (Hons) in Computer Science (2nd Class First Division) and a strong background in coding, problem-solving, and data analytics. Possesses experience across multiple programming languages, web technologies, and frameworks. Adept at collaborating in team environments, eager to contribute to innovative projects in software development and data analytics.
          </p>
          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4 animate__animated animate__fadeIn animate__delay-2s">
            <a href="http://www.linkedin.com/in/faznifaiz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/fazni-faiz" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors duration-300">
              <FaGithub size={30} />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={fazniImage} 
            alt="Mohamed Fais Mohamed Fasni" 
            className="w-3/4 md:w-1/2 h-auto rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
