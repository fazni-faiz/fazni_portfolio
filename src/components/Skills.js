import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside">
          <li>Java</li>
          <li>Python</li>
          <li>C# / .NET</li>
          <li>PHP</li>
          <li>HTML & CSS</li>
          <li>React.Js</li>
          
        </ul>
      </div>
    </section>
  );
}

export default Skills;
