import React from 'react';
import {
  SectionLabel,
  ProjectCard,
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  MainCTA,
  Hero
} from '../wireframe/WireframeComponents';

export function ProjectsIndexPage() {
  return (
    <div className="bg-white min-h-screen">

      <Hero
        title="Our Work"
        description="A showcase of digital products we've designed and built for ambitious businesses worldwide."
        variant="compact"
        showMedia={false}
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Filters */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <SectionLabel>Filters</SectionLabel>
          <div className="flex gap-3 mb-8">
            <WireframeButton data-field="cta">All Projects</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">E-commerce</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">SaaS</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">Mobile</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">B2B</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">Healthcare</WireframeButton>
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
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Project List */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
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
            <WireframeButton variant="secondary" data-field="cta">Load More Projects</WireframeButton>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Stats Section */}
      <div className=" py-16">

        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <SectionLabel>Project Statistics</SectionLabel>
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-12 text-center">
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

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Conversion */}
      <MainCTA
        title="Like what you see?"
        description="Let's create something amazing together. Start your project with Significa today."
        buttonText="Get Started"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

    </div>
  );
}