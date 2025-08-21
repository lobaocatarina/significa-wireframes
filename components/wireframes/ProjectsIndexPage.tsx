import React from 'react';
import {
  SectionLabel,
  ProjectCard,
  WireframeButton,
  MainCTA,
  Hero,
  BlogCard
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


      {/* Project List */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <SectionLabel>Projects</SectionLabel>
          <div className="flex gap-3 mb-8 justify-center">
            <WireframeButton data-field="cta">All Projects</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">E-commerce</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">SaaS</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">Mobile</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">B2B</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">Healthcare</WireframeButton>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8">
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

      {/* Blog / Insights */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Blog</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            Selected Articles
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6 mb-16">
            {[...Array(3)].map((_, i) => (
              <BlogCard key={i} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <WireframeButton variant="secondary" data-field="cta">View All Blog Posts</WireframeButton>
        </div>
      </div>




      {/* Main CTA */}
      <MainCTA
        title="We are ready to grow your business. Are you?"
        buttonText="Get in touch"
      />


    </div >
  );
}