import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Ensure that the PDF worker is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewAndDownloadCV = () => {
  const [numPages, setNumPages] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section id="cv" className="bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My CV</h2>
        
        {/* CV Viewer */}
        <div className="pdf-viewer mb-8">
          <Document
            file="./img/faznicv.pdf"  // Replace with the actual path of your CV in the public folder
            onLoadSuccess={onDocumentLoadSuccess}
            className="inline-block"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>

        {/* Download CV Button */}
        <a
          href="./img/faznicv.pdf"  // Replace with the actual path of your CV in the public folder
          download="Fazni_Faiz_CV.pdf"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default ViewAndDownloadCV;
