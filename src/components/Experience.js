import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Technical Instructor</h3>
            <p className="text-sm text-gray-600">Igniter Space (PVT) LTD (February 2023 – Present)</p>
            <ul className="list-disc list-inside">
              <li>Instructing individuals on innovation engineering, nurturing creativity, and enhancing problem-solving abilities.</li>
              <li>Creating and evolving curriculum and lesson plans, with a special focus on Python programming.</li>
              <li>Offering hands-on training and mentorship on various IT and technology-related projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
