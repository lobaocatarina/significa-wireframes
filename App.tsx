import React, { useState } from 'react';
import { WireframeNavigation } from './components/wireframes/WireframeNavigation';
import { HomePage } from './components/wireframes/HomePage';
import { ServicesPage } from './components/wireframes/ServicesPage';
import { BlogIndexPage } from './components/wireframes/BlogIndexPage';
import { ProjectPage } from './components/wireframes/ProjectPage';
import { CareersPage } from './components/wireframes/CareersPage';
import { DeliverablesPage } from './components/wireframes/DeliverablesPage';
import { ProjectsIndexPage } from './components/wireframes/ProjectsIndexPage';
import { PlaygroundPage } from './components/wireframes/PlaygroundPage';
import { AboutPage } from './components/wireframes/AboutPage';
import { CXPage } from './components/wireframes/CXPage';
import { ExpertiseLandingPage } from './components/wireframes/ExpertiseLandingPage';
import { ExpertiseDetailPage } from './components/wireframes/ExpertiseDetailPage';
import { FAQPage } from './components/wireframes/FAQPage';
import { FinalConversionPage } from './components/wireframes/FinalConversionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Services':
        return <ServicesPage />;
      case 'Blog Index':
        return <BlogIndexPage />;
      case 'Project Page':
        return <ProjectPage />;
      case 'Careers':
        return <CareersPage />;
      case 'Deliverables':
        return <DeliverablesPage />;
      case 'Projects Index':
        return <ProjectsIndexPage />;
      case 'Playground':
        return <PlaygroundPage />;
      case 'About':
        return <AboutPage />;
      case 'CX':
        return <CXPage />;
      case 'Expertise Landing':
        return <ExpertiseLandingPage />;
      case 'Expertise Detail':
        return <ExpertiseDetailPage />;
      case 'FAQ':
        return <FAQPage />;
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