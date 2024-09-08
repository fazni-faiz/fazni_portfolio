import React from 'react';
import 'animate.css';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C# (.NET)", "PHP"]
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"]
  },
  {
    category: "Web Frameworks",
    skills: ["Next.js", "Vue.js", "React.js", "Laravel"]
  },
  {
    category: "Databases",
    skills: ["SQL", "MongoDB"]
  },
  {
    category: "Tools & Technologies",
    skills: ["GitHub", "WordPress", "LaTeX", "Microsoft Power BI", "Cisco Packet Tracer"]
  },
  {
    category: "Additional Skills",
    skills: [
      "Object-Oriented Programming",
      "Web Design & Development",
      "Software Testing & Debugging",
      "UI/UX Design",
      "Database Schema Design",
      "Graphic Design",
      "Problem Solving & Teamwork"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-200 text-gray-900 p-8 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {skillsData.map((category, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s overflow-hidden">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">{category.category}</h3>
              <ul className="list-disc list-inside ml-5 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-lg hover:text-blue-500 transition-colors duration-300">{skill}</li>
                ))}
              </ul>
              {/* Curve design for each box */}
              <svg className="absolute bottom-0 left-0 w-full h-12 text-gray-200" fill="currentColor" viewBox="0 0 1440 320">
                <path d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,85.3C672,85,768,107,864,117.3C960,128,1056,128,1152,106.7C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
