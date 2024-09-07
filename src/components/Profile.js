import React from 'react';
import fazniImage from '../img/fazni.jpeg'; // Adjust path as needed

const Profile = () => {
  return (
    <section id="profile" className="bg-gray-100 text-gray-900 p-6 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate__animated animate__fadeIn">
            Profile
          </h2>
          <p className="text-base md:text-xl leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            As an aspiring Computer Science Undergraduate, I am dedicated to developing my skills in coding, problem-solving, and data analytics. I am a quick learner, a team player, and have experience working with different programming languages and tools.
          </p>
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
