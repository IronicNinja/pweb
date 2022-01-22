import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from '../media/Resume.pdf';
import MainNavbar from '../components/MainNavbar.js';
import { Container, Row, Button } from 'react-bootstrap';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../css-pages/Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    return (
      <Container>
        <Row><MainNavbar /></Row>
        <div className="ResumeHeader">
          <h1>My Résumé</h1>
          <Button href={ResumePDF} download='Evan_Zhang_Resume' variant="outline-success">Download</Button>
        </div>
        <div>
          <Document
            file={ResumePDF}
            className="Resume"
          >
            <Page 
            pageNumber={1} 
            width={1080}
            />
          </Document>
        </div>
      </Container>
    );
}