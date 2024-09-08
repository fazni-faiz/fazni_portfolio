import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    title: "BSc (Hons) Computer Science (Top-up)",
    institution: "Staffordshire University, APIIT Campus, Kandy",
    period: "October 2023 – Present",
    logo: "../img/su.png", // Replace with actual path
    icon: <FaUniversity className="text-blue-600" />
  },
  {
    title: "Pearson BTEC HND in Computing and Software Development (Software Engineer)",
    institution: "BCAS Campus, Kandy",
    period: "July 2021 – February 2023",
    logo: "../img/su.png", // Replace with actual path
    icon: <FaGraduationCap className="text-green-600" />
  },
  {
    title: "G.C.E Advanced Level – Engineering Technology, SFT & ICT",
    institution: "K/ Al-Manar National School",
    period: "2020",
    logo: "../img/su.png", // Replace with actual path
    icon: <FaGraduationCap className="text-yellow-600" />
  },
  {
    title: "Trainee-Full Stack Developer (Online)",
    institution: "University of Moratuwa",
    period: "2023",
    certificateCode: "qHzblB9nNE",
    logo: "../img/su.png", // Replace with actual path
    icon: <FaUniversity className="text-red-600" />
  },
  {
    title: "Certificate in Information Technology",
    institution: "BCAS Campus, Kandy",
    period: "2018",
    logo: "../img/su.png", // Replace with actual path
    icon: <FaGraduationCap className="text-purple-600" />
  },
  {
    title: "Diploma in English",
    institution: "BCAS Campus, Kandy",
    period: "2018",
    logo: "../img/su.png", // Replace with actual path
    icon: <FaGraduationCap className="text-orange-600" />
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-white text-gray-900 p-8">
      <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">Education</h2>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
                {item.certificateCode && (
                  <p className="text-sm text-gray-400">Certificate Code: {item.certificateCode}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
