import React, { useEffect, useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './resume.css';
import resume from '../../static/matt-roth-resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [scale, setScale] = useState();

  const calculateScale = (page) => {
    const parentDiv = document.querySelector('#pdfDocument');
    let pageScale = parentDiv.clientWidth / page.originalWidth;

    // Adjust scale slightly to allow for some padding
    pageScale -= 0.25;

    if (pageScale > 1.4) {
      setScale(1.4);
    } else {
      setScale(pageScale);
    }
  };

  return (
    <div id="pdfDocument">
      <Document externalLinkTarget="_blank" file={resume}>
        <Page
          id="pdfPage"
          scale={scale}
          pageNumber={1}
          className="resume-page"
          onLoadSuccess={calculateScale}
        />
      </Document>
    </div>
  );
}

/* TODO: 
Add rotate device popup?
Or maybe media query to handle scaling on mobile
*/
