import React, { useState } from 'react';
import { WireframeNavigation } from './components/wireframes/WireframeNavigation';
import { HomePage } from './components/wireframes/HomePage';
import { WhatWeDoPage } from './components/wireframes/WhatWeDoPage';
import { ServiceDetailPage } from './components/wireframes/ServiceDetailPage';
import { ServicesPage } from './components/wireframes/ServicesPage';
import { DeliverablesPage } from './components/wireframes/DeliverablesPage';
import { ExpertiseLandingPage } from './components/wireframes/ExpertiseLandingPage';
import { ExpertiseDetailPage } from './components/wireframes/ExpertiseDetailPage';
import { CXPage } from './components/wireframes/CXPage';
import { WorkWithUsPage } from './components/wireframes/WorkWithUsPage';
import { ContactPage } from './components/wireframes/ContactPage';
import { ProjectsIndexPage } from './components/wireframes/ProjectsIndexPage';
import { ProjectPage } from './components/wireframes/ProjectPage';
import { BlogIndexPage } from './components/wireframes/BlogIndexPage';
import { PlaygroundPage } from './components/wireframes/PlaygroundPage';
import { AboutPage } from './components/wireframes/AboutPage';
import { CareersPage } from './components/wireframes/CareersPage';
import { BCorporationPage } from './components/wireframes/BCorporationPage';
import { FAQPage } from './components/wireframes/FAQPage';
import { LegalPage } from './components/wireframes/LegalPage';
import { HandbookPage } from './components/wireframes/HandbookPage';
import { FinalConversionPage } from './components/wireframes/FinalConversionPage';

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
      case 'Expertise Landing':
        return <ExpertiseLandingPage />;
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
      <WireframeNavigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      <div id="wireframe-content">
        {renderPage()}
      </div>
    </div>
  );
}