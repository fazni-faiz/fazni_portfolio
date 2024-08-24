import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-white text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">BSc (Hons) Computer Science (Top-up)</h3>
            <p className="text-sm text-gray-600">Staffordshire University, APIIT Campus, Kandy (October 2023 – Present)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Pearson BTEC HND in Computing and Software Development (Software Engineer)</h3>
            <p className="text-sm text-gray-600">BCAS Campus, Kandy (July 2021 – February 2023)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
