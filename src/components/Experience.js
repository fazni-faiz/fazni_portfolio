import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Web Developer - Intern",
    company: "Federation for Environment, Climate, and Technology",
    period: "June 2024 – Present",
    responsibilities: [
      "Instructing individuals on innovation engineering, nurturing creativity, and enhancing problem-solving abilities.",
      "Creating and evolving curriculum and lesson plans, with a special focus on Python programming.",
      "Offering hands-on training and mentorship on various IT and technology-related projects."
    ]
  },
  {
    title: "Technical Instructor",
    company: "Igniter Space (PVT) LTD",
    period: "February 2023 – Present",
    responsibilities: [
      "Instructing individuals on innovation engineering, nurturing creativity, and enhancing problem-solving abilities.",
      "Creating and evolving curriculum and lesson plans, with a special focus on Python programming.",
      "Offering hands-on training and mentorship on various IT and technology-related projects."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0">
                <FaBriefcase className="text-blue-500 text-4xl" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-lg text-gray-700 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
