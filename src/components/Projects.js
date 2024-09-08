import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Customer Satisfaction System Through Facial Emotions Using Computer Vision in Super Markets",
    description: "A system that uses computer vision to analyze facial emotions for customer satisfaction in supermarkets.",
    tech: "Python, Open CV, TensorFlow, React",
    link: "https://github.com/yourusername/customer-satisfaction-system",
  },
  {
    title: "Front End Web Application for Sally Sweets Shop",
    description: "A responsive front-end application for a sweet shop using modern web technologies.",
    tech: "Vue.JS, Tailwind CSS, JavaScript, Photoshop CS6",
    link: "https://github.com/yourusername/sally-sweets-shop",
  },
  {
    title: "IEEE Article on “SecureVote: A Block Chain Powered Framework for Secure and Transparent Voting System in Sri Lanka”",
    description: "An article detailing a blockchain-powered framework for secure and transparent voting.",
    tech: "Blockchain",
    link: "https://github.com/yourusername/securevote-article",
  },
  {
    title: "Full-Stack Web Application Development for Aquantrica Aquarium",
    description: "A full-stack web application for an aquarium, integrating various web technologies.",
    tech: "PHP, HTML/CSS/Bootstrap, JavaScript, Photoshop CS6",
    link: "https://github.com/yourusername/aquantrica-aquarium",
  },
  {
    title: "Desktop Application for Textiles",
    description: "A desktop application for managing textiles, using Microsoft Access and other tools.",
    tech: "Microsoft Access 2019, SQL, Axure RP, Wondershare E-Draw Max",
    link: "https://github.com/yourusername/textiles-application",
  },
  {
    title: "Front-end Website for Crown Bicycle Shop",
    description: "A front-end website for a bicycle shop, showcasing products and services.",
    tech: "HTML, CSS & Bootstrap, JavaScript, Photoshop CS6, Visio",
    link: "https://github.com/yourusername/crown-bicycle-shop",
  },
  {
    title: "Analytical Interface - National Cancer Control Program (NCCP)",
    description: "An analytical interface to support the National Cancer Control Program using Power BI.",
    tech: "Microsoft Power BI",
    link: "https://github.com/yourusername/nccp-analytical-interface",
  },
  {
    title: "Computing Research on “Effectiveness of Remote Consultancy for Pregnancy”",
    description: "Research on the effectiveness of remote consultancy for pregnancy.",
    tech: "Remote Consultancy",
    link: "https://github.com/yourusername/remote-consultancy-research",
  },
  {
    title: "Network Design for V-Tech IT Solutions",
    description: "A network design project for IT solutions using Cisco Packet Tracer.",
    tech: "Cisco Packet Tracer Software",
    link: "https://github.com/yourusername/network-design-vtech",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 p-8">
      <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-sm text-gray-700 mb-2">{project.tech}</p>
              <p className="text-sm text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
