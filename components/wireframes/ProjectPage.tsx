import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  BlogCard, 
  ProjectCard,
  TitleDescription,
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  Hero
} from '../wireframe/WireframeComponents';

export function ProjectPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      <Hero
        title="Project Title"
        description="Brief project description highlighting the key challenge and solution we delivered."
        variant="media-metrics"
        mediaHeight="h-[600px]"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Project Content */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Project Content</SectionLabel>
        <div className="max-w-[800px] mx-auto px-6 w-full">
        
        <div className="space-y-16">
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              The Challenge
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8 text-center">
              Detailed description of the business challenge, user problems, and technical constraints that needed to be addressed.
            </p>
            <ImagePlaceholder width="100%" height="400px" />
          </div>

          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              Our Approach
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8 text-center">
              Explanation of our methodology, research process, and strategic decisions that guided the project.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <ImagePlaceholder height="300px" />
              <ImagePlaceholder height="300px" />
            </div>
          </div>

          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              The Solution
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8 text-center">
              Overview of the final solution, key features, and how it addresses the original challenges.
            </p>
            <ImagePlaceholder width="100%" height="500px" />
          </div>

          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              Results & Impact
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8 text-center">
              Metrics, feedback, and measurable outcomes that demonstrate the project's success.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-[40px] font-medium text-black leading-[40px] mb-2">+150%</div>
                <div className="text-[16px] text-black opacity-50">User Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-[40px] font-medium text-black leading-[40px] mb-2">-40%</div>
                <div className="text-[16px] text-black opacity-50">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-[40px] font-medium text-black leading-[40px] mb-2">95%</div>
                <div className="text-[16px] text-black opacity-50">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Related Articles */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
        <SectionLabel>Related Articles</SectionLabel>
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">Related Reading</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Conversion */}
      <div className="border border-[#e0e0e0] mx-auto max-w-[1400px] mb-16">
        <div className="flex flex-col items-center justify-center h-[316px] gap-6">
          <SectionLabel>Conversion</SectionLabel>
          <TitleDescription
            title="Like what you see?"
            description="Let's discuss how we can create something amazing for your business too."
          />
          <WireframeButton variant="primary" data-field="cta">Start a Project</WireframeButton>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Other Projects */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
        <SectionLabel>Other Projects</SectionLabel>
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">More Work</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      <WireframeFooter />
    </div>
  );
}