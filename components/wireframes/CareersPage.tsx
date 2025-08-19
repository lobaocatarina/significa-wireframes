import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  TitleDescription, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  MainCTA
} from '../wireframe/WireframeComponents';

export function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      {/* Hero */}
      <div className="flex flex-col items-center pt-24 pb-16">
        <SectionLabel>Hero</SectionLabel>
        <TitleDescription
          title="Join our team"
          description="We're looking for talented individuals who share our passion for creating exceptional digital experiences."
        />
        <div className="mt-8">
          <ImagePlaceholder width="800px" height="400px" />
        </div>
      </div>

      {/* Life at Significa */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Life at Significa</SectionLabel>
        <div className="grid grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6">
              Life at Significa
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8">
              Our culture is built on collaboration, creativity, and continuous learning. We believe in work-life balance and creating an environment where everyone can thrive.
            </p>
          </div>
          <ImagePlaceholder height="400px" />
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {[
            'Remote-first culture',
            'Professional development',
            'Flexible hours',
            'Health benefits',
            'Team retreats',
            'Creative freedom'
          ].map((benefit, i) => (
            <div key={i} className="flex flex-col gap-4">
              <ImagePlaceholder width="80px" height="80px" />
              <h3 className="text-[18px] font-medium text-black leading-[24px]">{benefit}</h3>
              <p className="text-[16px] text-black opacity-50 leading-[24px]">
                Description of this benefit and how it contributes to our team culture.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Teams & Roles */}
      <div className="flex justify-center py-16">
        <TitleDescription
          title="Our teams"
          description="We're organized into collaborative teams that work together to deliver exceptional results."
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 pb-16">
        <SectionLabel>Teams & Roles</SectionLabel>
        <div className="grid grid-cols-4 gap-8">
          {['Design Team', 'Development Team', 'Strategy Team', 'Operations Team'].map((team, i) => (
            <div key={i} className="flex flex-col gap-4">
              <ImagePlaceholder height="200px" />
              <h3 className="text-[18px] font-medium text-black leading-[24px]">{team}</h3>
              <p className="text-[16px] text-black opacity-50 leading-[24px]">
                Overview of team responsibilities and typical roles within this department.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What Defines Us */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>What Defines Us</SectionLabel>
        <h2 className="text-[32px] font-medium text-black leading-[36px] mb-16 text-center">
          Our values
        </h2>
        <div className="grid grid-cols-3 gap-12">
          {[
            { title: 'Curiosity', description: 'We ask questions, explore possibilities, and never stop learning.' },
            { title: 'Collaboration', description: 'We work together, share knowledge, and support each other.' },
            { title: 'Craft', description: 'We take pride in our work and strive for excellence in everything we do.' }
          ].map((value, i) => (
            <div key={i} className="text-center">
              <ImagePlaceholder width="120px" height="120px" className="mx-auto mb-6" />
              <h3 className="text-[24px] font-medium text-black leading-[32px] mb-4">{value.title}</h3>
              <p className="text-[16px] text-black opacity-80 leading-[24px]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="flex justify-center py-16">
        <TitleDescription
          title="Benefits & perks"
          description="We offer comprehensive benefits and perks designed to support your wellbeing and growth."
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 pb-16">
        <SectionLabel>Benefits</SectionLabel>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <ImagePlaceholder width="60px" height="60px" />
              <div>
                <h4 className="text-[18px] font-medium text-black leading-[24px] mb-2">Health & Wellness</h4>
                <p className="text-[16px] text-black opacity-50 leading-[24px]">Comprehensive health insurance and wellness programs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ImagePlaceholder width="60px" height="60px" />
              <div>
                <h4 className="text-[18px] font-medium text-black leading-[24px] mb-2">Learning Budget</h4>
                <p className="text-[16px] text-black opacity-50 leading-[24px]">Annual budget for courses, conferences, and skill development.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ImagePlaceholder width="60px" height="60px" />
              <div>
                <h4 className="text-[18px] font-medium text-black leading-[24px] mb-2">Equipment</h4>
                <p className="text-[16px] text-black opacity-50 leading-[24px]">Top-tier equipment and tools to do your best work.</p>
              </div>
            </div>
          </div>
          <ImagePlaceholder height="300px" />
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Open Positions</SectionLabel>
        <h2 className="text-[32px] font-medium text-black leading-[36px] mb-12">
          Current openings
        </h2>
        <div className="space-y-6">
          {[
            { title: 'Senior Product Designer', type: 'Full-time', location: 'Remote' },
            { title: 'Frontend Developer', type: 'Full-time', location: 'Remote' },
            { title: 'Product Manager', type: 'Full-time', location: 'Porto, Portugal' },
            { title: 'UX Researcher', type: 'Contract', location: 'Remote' }
          ].map((job, i) => (
            <div key={i} className="border border-[#e0e0e0] p-6 flex justify-between items-center">
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">{job.title}</h3>
                <div className="flex gap-4 text-[16px] text-black opacity-50">
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <WireframeButton variant="secondary">View Details</WireframeButton>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[16px] text-black opacity-80 leading-[24px] mb-6">
            Don't see a role that fits? We're always looking for exceptional talent.
          </p>
          <WireframeButton variant="primary">Send us your CV</WireframeButton>
        </div>
      </div>

      {/* Final CTA */}
      <MainCTA 
        title="Ready to join us?"
        description="Start your journey with Significa and help us build the future of digital experiences."
        buttonText="View Open Roles"
      />

      <WireframeFooter />
    </div>
  );
}