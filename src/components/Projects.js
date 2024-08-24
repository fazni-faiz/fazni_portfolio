import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-xl font-semibold">Customer Satisfaction System</h3>
            <p className="text-sm text-gray-700">Python, Open CV, TensorFlow, Pandas</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-xl font-semibold">Front End Web Application for Sally Sweets Shop</h3>
            <p className="text-sm text-gray-700">Vue.JS, Tailwind CSS, JavaScript, Photoshop CS6</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
