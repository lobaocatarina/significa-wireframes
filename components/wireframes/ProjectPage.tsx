import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  BlogCard, 
  ProjectCard,
  TitleDescription,
  WireframeButton,
  WireframeHeader,
  WireframeFooter
} from '../wireframe/WireframeComponents';

export function ProjectPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      {/* Hero */}
      <div className="flex flex-col items-center pt-24 pb-16">
        <SectionLabel>Hero</SectionLabel>
        <div className="max-w-[800px] text-center mb-8">
          <h1 className="text-[48px] font-medium text-black leading-[56px] mb-4">
            Project Title
          </h1>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-6">
            Brief project description highlighting the key challenge and solution we delivered.
          </p>
          <div className="flex justify-center gap-8 text-[16px] text-black opacity-50">
            <span>Industry: Technology</span>
            <span>Year: 2024</span>
            <span>Duration: 6 months</span>
          </div>
        </div>
        <ImagePlaceholder width="1200px" height="600px" />
      </div>

      {/* Project Content */}
      <div className="max-w-[800px] mx-auto px-5 py-16">
        <SectionLabel>Project Content</SectionLabel>
        
        <div className="space-y-16">
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6">
              The Challenge
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8">
              Detailed description of the business challenge, user problems, and technical constraints that needed to be addressed.
            </p>
            <ImagePlaceholder width="100%" height="400px" />
          </div>

          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6">
              Our Approach
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8">
              Explanation of our methodology, research process, and strategic decisions that guided the project.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <ImagePlaceholder height="300px" />
              <ImagePlaceholder height="300px" />
            </div>
          </div>

          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6">
              The Solution
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8">
              Overview of the final solution, key features, and how it addresses the original challenges.
            </p>
            <ImagePlaceholder width="100%" height="500px" />
          </div>

          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6">
              Results & Impact
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8">
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

      {/* Related Articles */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Related Articles</SectionLabel>
        <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">Related Reading</h2>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </div>

      {/* Conversion */}
      <div className="border border-[#e0e0e0] mx-auto max-w-[1400px] mb-16">
        <div className="flex flex-col items-center justify-center h-[316px] gap-6">
          <SectionLabel>Conversion</SectionLabel>
          <TitleDescription
            title="Like what you see?"
            description="Let's discuss how we can create something amazing for your business too."
          />
          <WireframeButton>Start a Project</WireframeButton>
        </div>
      </div>

      {/* Other Projects */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Other Projects</SectionLabel>
        <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">More Work</h2>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}