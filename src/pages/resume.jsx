import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { Button } from 'react-bootstrap';
import { ArrowLeft, Download } from 'react-bootstrap-icons';
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
    } else if (pageScale < 0.75) {
      setScale(0.75);
    } else {
      setScale(pageScale);
    }
  };

  return (
    <div id="pdfDocument">
      <div id="navbuttons" className="d-flex justify-content-between">
        <Button size="sm" onClick={() => navigate('/')}>
          <ArrowLeft /> Back to Portfolio Page
        </Button>
        <Button
          data-toggle="tooltip"
          data-placement="bottom"
          size="sm"
          download
          href="matt-roth-resume.pdf"
        >
          <Download /> Download a Copy
        </Button>
      </div>
      <Document externalLinkTarget="_blank" file={resume}>
        <Page
          id="pdfPage"
          scale={scale}
          pageNumber={1}
          className="resume-page"
          onLoadSuccess={calculateScale}
          error={
            <div style={{ color: 'white' }}>
              Failed to load PDF. Please refresh the page.
            </div>
          }
        />
      </Document>
    </div>
  );
}
