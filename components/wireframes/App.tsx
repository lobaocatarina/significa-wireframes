import React, { useState } from 'react';
import { HomePage } from './HomePage';
import { WhatWeDoPage } from './WhatWeDoPage';
import { ServiceDetailPage } from './ServiceDetailPage';
import { ServicesPage } from './ServicesPage';
import { DeliverablesPage } from './DeliverablesPage';
import { ExpertiseDetailPage } from './ExpertiseDetailPage';
import { CXPage } from './CXPage';
import { WorkWithUsPage } from './WorkWithUsPage';
import { ContactPage } from './ContactPage';
import { ProjectsIndexPage } from './ProjectsIndexPage';
import { ProjectPage } from './ProjectPage';
import { BlogIndexPage } from './BlogIndexPage';
import { PlaygroundPage } from './PlaygroundPage';
import { AboutPage } from './AboutPage';
import { CareersPage } from './CareersPage';
import { BCorporationPage } from './BCorporationPage';
import { FAQPage } from './FAQPage';
import { LegalPage } from './LegalPage';
import { HandbookPage } from './HandbookPage';
import { FinalConversionPage } from './FinalConversionPage';
import { WireframeFooter, WireframeHeader } from '../wireframe/WireframeComponents';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'What We Do':
        return <WhatWeDoPage />;
      case 'Service Detail':
        return <ServiceDetailPage serviceName="Think" serviceDescription="Strategy & Discovery" />;
      case 'Services':
        return <ServicesPage />;
      case 'Deliverables':
        return <DeliverablesPage />;
      case 'Expertise Detail':
        return <ExpertiseDetailPage />;
      case 'CX':
        return <CXPage />;
      case 'Work With Us':
        return <WorkWithUsPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Projects Index':
        return <ProjectsIndexPage />;
      case 'Project Page':
        return <ProjectPage />;
      case 'Blog Index':
        return <BlogIndexPage />;
      case 'Playground':
        return <PlaygroundPage />;
      case 'About':
        return <AboutPage />;
      case 'Careers':
        return <CareersPage />;
      case 'B Corporation':
        return <BCorporationPage />;
      case 'FAQ':
        return <FAQPage />;
      case 'Legal':
        return <LegalPage pageTitle="Privacy Policy" pageType="privacy" />;
      case 'Handbook':
        return <HandbookPage />;
      case 'Final Conversion':
        return <FinalConversionPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="size-full">
      <WireframeHeader onPageChange={setCurrentPage} />
      <div id="wireframe-content">
        {renderPage()}
      </div>
      <WireframeFooter onPageChange={setCurrentPage} />
    </div>
  );
}