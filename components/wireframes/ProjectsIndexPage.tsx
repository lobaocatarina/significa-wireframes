import React from 'react';
import { 
  SectionLabel, 
  ProjectCard, 
  TitleDescription, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  MainCTA
} from '../wireframe/WireframeComponents';

export function ProjectsIndexPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      {/* Hero */}
      <div className="flex flex-col items-center pt-24 pb-16">
        <SectionLabel>Hero</SectionLabel>
        <TitleDescription
          title="Our Work"
          description="A showcase of digital products we've designed and built for ambitious businesses worldwide."
        />
      </div>

      {/* Filters */}
      <div className="max-w-[1400px] mx-auto px-5 pb-8">
        <SectionLabel>Filters</SectionLabel>
        <div className="flex gap-3 mb-8">
          <WireframeButton>All Projects</WireframeButton>
          <WireframeButton variant="secondary">E-commerce</WireframeButton>
          <WireframeButton variant="secondary">SaaS</WireframeButton>
          <WireframeButton variant="secondary">Mobile</WireframeButton>
          <WireframeButton variant="secondary">B2B</WireframeButton>
          <WireframeButton variant="secondary">Healthcare</WireframeButton>
        </div>
        <div className="flex justify-between items-center text-[16px] text-black opacity-50">
          <span>Showing 24 projects</span>
          <select className="border border-[#e0e0e0] px-3 py-2 bg-white">
            <option>Most Recent</option>
            <option>Alphabetical</option>
            <option>Industry</option>
          </select>
        </div>
      </div>

      {/* Project List */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Project List (tiles)</SectionLabel>
        <div className="grid grid-cols-2 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <ProjectCard 
                title={`Project Title ${i + 1}`}
                description="Brief description of the project"
                industry="Industry"
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <WireframeButton variant="secondary">Load More Projects</WireframeButton>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <SectionLabel>Project Statistics</SectionLabel>
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-12">
            By the numbers
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-[40px] font-medium text-black leading-[40px] mb-2">150+</div>
              <div className="text-[16px] text-black opacity-50">Projects Delivered</div>
            </div>
            <div>
              <div className="text-[40px] font-medium text-black leading-[40px] mb-2">50+</div>
              <div className="text-[16px] text-black opacity-50">Happy Clients</div>
            </div>
            <div>
              <div className="text-[40px] font-medium text-black leading-[40px] mb-2">12</div>
              <div className="text-[16px] text-black opacity-50">Industries</div>
            </div>
            <div>
              <div className="text-[40px] font-medium text-black leading-[40px] mb-2">25+</div>
              <div className="text-[16px] text-black opacity-50">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion */}
      <MainCTA 
        title="Like what you see?"
        description="Let's create something amazing together. Start your project with Significa today."
        buttonText="Get Started"
      />

      <WireframeFooter />
    </div>
  );
}