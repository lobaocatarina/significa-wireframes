import React from 'react';
import {
  ImagePlaceholder,
  SectionLabel,
  ProjectCard,
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  Hero
} from '../wireframe/WireframeComponents';

export function PlaygroundPage() {
  return (
    <div className="bg-white min-h-screen">


      <Hero
        title="Playground"
        description="Where we experiment, learn, and contribute to the open-source community."
        variant="media"
        mediaHeight="h-[400px]"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Why Open Source */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Why We Open Source</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            Why we contribute
          </h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
            Open source is at the heart of what we do. We believe in giving back to the community that has given us so much.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Knowledge Sharing', description: 'We believe in sharing our learnings and discoveries with the broader development community.' },
              { title: 'Innovation', description: 'Open source drives innovation by allowing collaborative development and rapid iteration.' },
              { title: 'Community', description: 'Being part of the open source community helps us grow as developers and designers.' }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <ImagePlaceholder width="80px" height="80px" className="mx-auto mb-4" />
                <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center mb-4">{benefit.title}</h2>
                <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Projects */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Open Source Projects</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            Our contributions
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6 mb-16">
            {[...Array(6)].map((_, i) => (
              <ProjectCard key={i} title="Open Source Project" description="Community contribution" />
            ))}
          </div>
        </div>
        <div className="text-center">
          <WireframeButton variant="secondary" data-field="cta">View All Projects</WireframeButton>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Stats */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Open Source Stats</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            By the numbers
          </h2>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <div className="text-[40px] font-medium text-black leading-[40px] mb-2">150+</div>
            <div className="text-[16px] text-black opacity-50">Stars</div>
          </div>
          <div className="text-center">
            <div className="text-[40px] font-medium text-black leading-[40px] mb-2">25+</div>
            <div className="text-[16px] text-black opacity-50">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-[40px] font-medium text-black leading-[40px] mb-2">50+</div>
            <div className="text-[16px] text-black opacity-50">Contributors</div>
          </div>
          <div className="text-center">
            <div className="text-[40px] font-medium text-black leading-[40px] mb-2">5K+</div>
            <div className="text-[16px] text-black opacity-50">Downloads</div>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* GitHub Callout */}
      <div className="flex flex-col items-center py-16">
        <div className="flex flex-col items-center">
          <SectionLabel>GitHub Callout</SectionLabel>
          <ImagePlaceholder width="120px" height="120px" className="mx-auto mb-6" />
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
              Follow us on GitHub
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
              Stay up to date with our latest experiments and contributions. Star, fork, and contribute to our projects.
            </p>
          </div>
          <div className="text-center">
            <WireframeButton variant="secondary" data-field="cta">Follow on GitHub</WireframeButton>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>


    </div>
  );
}