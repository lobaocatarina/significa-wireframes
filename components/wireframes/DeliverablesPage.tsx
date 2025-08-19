import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  ProjectCard, 
  BlogCard, 
  TitleDescription, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  Metric
} from '../wireframe/WireframeComponents';

export function DeliverablesPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      {/* Hero */}
      <div className="flex flex-col items-center pt-24 pb-16">
        <SectionLabel>Hero</SectionLabel>
        <TitleDescription
          title="What we deliver"
          description="Comprehensive deliverables that drive business results and user satisfaction."
        />
        <div className="mt-8">
          <ImagePlaceholder width="800px" height="400px" />
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Categories</SectionLabel>
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: 'Strategy & Research', items: ['User Research', 'Market Analysis', 'Product Strategy', 'Information Architecture'] },
            { title: 'Design & Prototyping', items: ['UI/UX Design', 'Design Systems', 'Prototypes', 'User Testing'] },
            { title: 'Development & Launch', items: ['Frontend Development', 'Backend Development', 'Testing & QA', 'Launch Support'] }
          ].map((category, i) => (
            <div key={i} className="flex flex-col gap-6">
              <ImagePlaceholder height="200px" />
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="text-[16px] text-black opacity-50 leading-[24px]">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics Callout */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-[1400px] mx-auto px-5">
          <SectionLabel>Success Metrics Callout</SectionLabel>
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-4">
              Proven results
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px]">
              Our deliverables consistently drive measurable business outcomes.
            </p>
          </div>
          <div className="flex justify-center gap-16">
            <Metric value="2.5x" label="Average ROI increase" />
            <Metric value="40%" label="Faster time to market" />
            <Metric value="95%" label="Client satisfaction" />
            <Metric value="25+" label="Awards won" />
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="flex justify-center py-16">
        <TitleDescription
          title="Our comprehensive approach"
          description="Every deliverable is crafted with precision, backed by research, and designed to achieve your business objectives. We don't just deliver files—we deliver solutions."
        />
      </div>

      {/* How We Approach */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>How We Approach</SectionLabel>
        <div className="grid grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6">
              Our methodology
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">1. Discovery & Research</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px]">
                  We start by understanding your business, users, and objectives through comprehensive research.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">2. Strategy & Planning</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px]">
                  Based on insights, we develop a strategic plan and roadmap for your project.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">3. Design & Development</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px]">
                  Our team creates and builds solutions that are both beautiful and functional.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">4. Testing & Optimization</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px]">
                  We validate and refine our work to ensure optimal performance and user experience.
                </p>
              </div>
            </div>
          </div>
          <ImagePlaceholder height="600px" />
        </div>
      </div>

      {/* Awards */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Awards</SectionLabel>
        <div className="text-center mb-12">
          <h2 className="text-[24px] font-medium text-black leading-[32px]">Recognition & Awards</h2>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <ImagePlaceholder width="100px" height="100px" />
              <p className="text-[14px] text-black text-center opacity-50">Award Name</p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Projects/Playground */}
      <div className="flex justify-center py-16">
        <TitleDescription
          title="See our work in action"
          description="Explore examples of our deliverables and the impact they've had on our clients' businesses."
          cta="View all projects →"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 pb-16">
        <SectionLabel>Selected Projects/Playground</SectionLabel>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Related Articles</SectionLabel>
        <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">Learn more</h2>
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
            title="Ready to see what we can deliver?"
            description="Let's discuss your project and explore how our deliverables can drive your business forward."
          />
          <WireframeButton>Start a Project</WireframeButton>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}