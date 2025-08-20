import React from 'react';
import {
  ImagePlaceholder,
  SectionLabel,
  TitleDescription,
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  Metric,
  MainCTA,
  Hero
} from '../wireframe/WireframeComponents';

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">


      <Hero
        title="About Significa"
        description="We are a design and development agency building digital products that people love to use."
        variant="media"
        mediaHeight="h-[400px]"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Team */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <SectionLabel>Team</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
              Our team
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
              Meet the passionate individuals behind Significa. Our diverse team brings together expertise from design, development, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-16">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="text-center">
                <ImagePlaceholder width="200px" height="200px" className="mx-auto mb-4 rounded-full" />
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-1 text-center">Team Member Name</h3>
                <p className="text-[16px] text-black opacity-50 leading-[24px] mb-2">Position</p>
                <p className="text-[14px] text-black opacity-50 leading-[20px]">Location</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <WireframeButton variant="secondary" data-field="cta">View Full Team</WireframeButton>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Locations */}
      <div className=" py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Locations</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
              Where we work
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
              We're a global team with offices and remote workers around the world.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12 mb-16">
            {[
              { city: 'Porto', country: 'Portugal', description: 'Our main office and headquarters' },
              { city: 'New York', country: 'United States', description: 'North American operations hub' },
              { city: 'Remote', country: 'Global', description: 'Team members working from anywhere' }
            ].map((location, i) => (
              <div key={i} className="text-center">
                <ImagePlaceholder width="300px" height="200px" className="mx-auto mb-6" />
                <h3 className="text-[32px] font-medium text-black leading-[36px] mb-2 text-center">{location.city}</h3>
                <p className="text-[18px] text-black opacity-50 leading-[24px] mb-3 text-center">{location.country}</p>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">{location.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-16">
            <Metric value="3" label="Offices" />
            <Metric value="25+" label="Team Members" />
            <Metric value="12" label="Countries" />
            <Metric value="100%" label="Remote Friendly" />
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Values/Mission */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <SectionLabel>Values/Mission</SectionLabel>
          <div className="grid grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">Our mission</h2>
              <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8 text-center">
                We believe that great design and thoughtful development can transform businesses and improve people's lives. Our mission is to create digital experiences that are not just functional, but meaningful.
              </p>
            </div>
            <ImagePlaceholder height="300px" />
          </div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: 'User-Centered',
                description: 'We put users at the center of everything we create, ensuring their needs drive our design decisions.'
              },
              {
                title: 'Quality First',
                description: 'We maintain the highest standards in our work, from initial concept to final delivery.'
              },
              {
                title: 'Continuous Learning',
                description: 'We stay curious and keep evolving, embracing new technologies and methodologies.'
              }
            ].map((value, i) => (
              <div key={i}>
                <ImagePlaceholder width="80px" height="80px" className="mb-4" />
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">{value.title}</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Continuous Improvement */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Continuous Improvement</SectionLabel>
        <TitleDescription
          title="Always improving"
          description="We believe in continuous improvement, regularly gathering feedback and refining our processes to deliver even better results."
        />
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* B-Corp */}
      <div className=" py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>B-Corp</SectionLabel>
          <div className="grid grid-cols-2 gap-16 items-center">
            <ImagePlaceholder height="400px" />
            <div>
              <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">Certified B Corp</h2>
              <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8 text-center">
                We're proud to be a Certified B Corporation, meeting the highest standards of verified social and environmental performance, public transparency, and legal accountability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ImagePlaceholder width="24px" height="24px" />
                  <span className="text-[16px] text-black">Environmental responsibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <ImagePlaceholder width="24px" height="24px" />
                  <span className="text-[16px] text-black">Social impact focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <ImagePlaceholder width="24px" height="24px" />
                  <span className="text-[16px] text-black">Transparent governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Careers Teaser */}
      <MainCTA
        title="Join our team"
        description="Ready to be part of something special? Explore career opportunities and help us build the future of digital experiences."
        buttonText="View Open Positions"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>


    </div>
  );
}

