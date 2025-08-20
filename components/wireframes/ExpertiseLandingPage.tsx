import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  TitleDescription, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  Hero
} from '../wireframe/WireframeComponents';

export function ExpertiseLandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      <Hero
        title="Industry Expertise"
        description="Deep industry knowledge combined with cutting-edge technology to deliver solutions that truly understand your business."
        showMedia={false}
      />

      {/* Categories */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <SectionLabel>Categories (industry cards)</SectionLabel>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: 'E-commerce & Retail',
              description: 'Building scalable platforms that drive sales and enhance customer experiences.',
              projects: '25+ projects',
              image: 'E-commerce platforms, retail apps, inventory management systems'
            },
            {
              title: 'Healthcare & Wellness',
              description: 'Secure, compliant solutions that improve patient outcomes and streamline operations.',
              projects: '15+ projects',
              image: 'Patient portals, telehealth platforms, medical device interfaces'
            },
            {
              title: 'Financial Services',
              description: 'Secure, user-friendly financial products that build trust and drive adoption.',
              projects: '20+ projects',
              image: 'Banking apps, investment platforms, payment solutions'
            },
            {
              title: 'SaaS & Technology',
              description: 'Intuitive interfaces and scalable architectures for software companies.',
              projects: '35+ projects',
              image: 'Dashboard interfaces, mobile apps, developer tools'
            },
            {
              title: 'Education & Learning',
              description: 'Engaging platforms that make learning accessible and effective.',
              projects: '12+ projects',
              image: 'Learning management systems, educational apps, course platforms'
            },
            {
              title: 'Manufacturing & Logistics',
              description: 'Digital solutions that optimize operations and supply chain management.',
              projects: '18+ projects',
              image: 'Inventory systems, logistics platforms, IoT dashboards'
            }
          ].map((industry, i) => (
            <div key={i} className="border border-[#e0e0e0] hover:border-[#1f1f1f] transition-colors cursor-pointer group">
              <ImagePlaceholder height="250px" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[18px] font-medium text-black leading-[24px] group-hover:opacity-70 transition-opacity text-center">
                    {industry.title}
                  </h3>
                  <span className="text-[14px] text-black opacity-50">{industry.projects}</span>
                </div>
                <p className="text-[16px] text-black opacity-80 leading-[24px] mb-4">
                  {industry.description}
                </p>
                <p className="text-[14px] text-black opacity-50 leading-[20px]">
                  {industry.image}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Industry Expertise Matters */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Why Industry Expertise Matters</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-4 text-center">
              Why expertise matters
            </h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] ">
              Every industry has unique challenges, regulations, and user expectations. Our deep sector knowledge ensures we build solutions that truly fit your business.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Compliance',
                description: 'We understand the specific regulations and standards that govern your industry.'
              },
              {
                title: 'User Behavior',
                description: 'Deep knowledge of how your customers interact with digital products in your sector.'
              },
              {
                title: 'Business Models',
                description: 'Understanding of revenue streams, KPIs, and success metrics specific to your industry.'
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <ImagePlaceholder width="100px" height="100px" className="mx-auto mb-4" />
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">{benefit.title}</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories by Industry */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <SectionLabel>Success Stories by Industry</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px]">Proven results across industries</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-16">
          {[
            {
              metric: '300%',
              description: 'Increase in online sales for retail clients',
              industry: 'E-commerce'
            },
            {
              metric: '85%',
              description: 'Reduction in patient wait times',
              industry: 'Healthcare'
            },
            {
              metric: '2.5M+',
              description: 'Users onboarded to fintech platforms',
              industry: 'Financial Services'
            },
            {
              metric: '40%',
              description: 'Improvement in user engagement',
              industry: 'SaaS & Technology'
            }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-[48px] font-medium text-black leading-[48px] mb-2">{stat.metric}</div>
              <p className="text-[18px] text-black leading-[24px] mb-1">{stat.description}</p>
              <span className="text-[14px] text-black opacity-50">{stat.industry}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="border border-[#e0e0e0] mx-auto max-w-[1400px] mb-16">
        <div className="flex flex-col items-center justify-center h-[316px] gap-6">
          <SectionLabel>Final CTA</SectionLabel>
          <TitleDescription
            title="Let's discuss your industry"
            description="Ready to work with experts who understand your specific business challenges and opportunities?"
          />
          <WireframeButton>Get Started</WireframeButton>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}