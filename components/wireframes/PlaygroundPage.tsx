import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  ProjectCard, 
  TitleDescription, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter
} from '../wireframe/WireframeComponents';

export function PlaygroundPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      {/* Hero */}
      <div className="flex flex-col items-center pt-24 pb-16">
        <SectionLabel>Hero</SectionLabel>
        <TitleDescription
          title="Playground"
          description="Where we experiment, learn, and contribute to the open-source community."
        />
        <div className="mt-8">
          <ImagePlaceholder width="800px" height="400px" />
        </div>
      </div>

      {/* Why Open Source */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Why We Open Source</SectionLabel>
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6">
              Why we contribute
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px]">
                Open source is at the heart of what we do. We believe in giving back to the community that has given us so much.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">Knowledge Sharing</h3>
                  <p className="text-[16px] text-black opacity-80 leading-[24px]">
                    We share our learnings and tools to help other developers and designers.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">Innovation</h3>
                  <p className="text-[16px] text-black opacity-80 leading-[24px]">
                    Experimenting with new ideas and technologies keeps us at the forefront.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">Community</h3>
                  <p className="text-[16px] text-black opacity-80 leading-[24px]">
                    Building relationships and learning from the global developer community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ImagePlaceholder height="500px" />
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Projects List</SectionLabel>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] font-medium text-black leading-[36px]">Our experiments</h2>
          <div className="flex gap-3">
            <WireframeButton>All</WireframeButton>
            <WireframeButton variant="secondary">React</WireframeButton>
            <WireframeButton variant="secondary">Design Tools</WireframeButton>
            <WireframeButton variant="secondary">Utilities</WireframeButton>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {[
            { 
              title: 'React Component Library', 
              description: 'A collection of reusable React components',
              type: 'Library',
              stars: '1.2k',
              language: 'TypeScript'
            },
            { 
              title: 'Design System Generator', 
              description: 'Tool to generate design tokens',
              type: 'Tool',
              stars: '856',
              language: 'JavaScript'
            },
            { 
              title: 'SVG Icon Pack', 
              description: 'Open-source icon collection',
              type: 'Assets',
              stars: '2.3k',
              language: 'SVG'
            },
            { 
              title: 'Form Validation Hook', 
              description: 'React hook for form validation',
              type: 'Hook',
              stars: '445',
              language: 'TypeScript'
            },
            { 
              title: 'Color Palette Generator', 
              description: 'Generate accessible color palettes',
              type: 'Tool',
              stars: '678',
              language: 'React'
            },
            { 
              title: 'Animation Utils', 
              description: 'CSS animation utility classes',
              type: 'Library',
              stars: '321',
              language: 'CSS'
            }
          ].map((project, i) => (
            <div key={i} className="border border-[#e0e0e0] p-6 hover:border-[#1f1f1f] transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[14px] text-black opacity-50">{project.type}</div>
                <div className="flex items-center gap-1 text-[14px] text-black opacity-50">
                  <span>⭐</span>
                  <span>{project.stars}</span>
                </div>
              </div>
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">{project.title}</h3>
              <p className="text-[16px] text-black opacity-80 leading-[24px] mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-black opacity-50">{project.language}</span>
                <div className="flex gap-2">
                  <WireframeButton variant="secondary">View</WireframeButton>
                  <WireframeButton variant="secondary">GitHub</WireframeButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <WireframeButton variant="secondary">View All on GitHub</WireframeButton>
        </div>
      </div>

      {/* GitHub Callout */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <SectionLabel>GitHub Callout</SectionLabel>
          <ImagePlaceholder width="120px" height="120px" className="mx-auto mb-6" />
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-4">
            Follow us on GitHub
          </h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8">
            Stay up to date with our latest experiments and contributions. Star, fork, and contribute to our projects.
          </p>
          <div className="flex justify-center gap-4">
            <WireframeButton>Follow on GitHub</WireframeButton>
            <WireframeButton variant="secondary">View Organization</WireframeButton>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-[32px] font-medium text-black leading-[32px] mb-2">150+</div>
              <div className="text-[16px] text-black opacity-50">Repositories</div>
            </div>
            <div>
              <div className="text-[32px] font-medium text-black leading-[32px] mb-2">5.2k</div>
              <div className="text-[16px] text-black opacity-50">Total Stars</div>
            </div>
            <div>
              <div className="text-[32px] font-medium text-black leading-[32px] mb-2">1.8k</div>
              <div className="text-[16px] text-black opacity-50">Followers</div>
            </div>
          </div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}