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

export function FinalConversionPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      <Hero
        title="I have a project"
        description="Ready to bring your digital product vision to life? Let's discuss how we can work together to create something exceptional."
        variant="compact"
        showMedia={false}
      />

      {/* Contact Methods */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Contact Methods (form, email, call, locations)</SectionLabel>
        
        <div className="grid grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">Tell us about your project</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[16px] font-medium text-black leading-[24px] mb-2 block">First Name</label>
                  <div className="h-10 border border-[#e0e0e0] bg-[#f8f9fa]"></div>
                </div>
                <div>
                  <label className="text-[16px] font-medium text-black leading-[24px] mb-2 block">Last Name</label>
                  <div className="h-10 border border-[#e0e0e0] bg-[#f8f9fa]"></div>
                </div>
              </div>
              <div>
                <label className="text-[16px] font-medium text-black leading-[24px] mb-2 block">Email</label>
                <div className="h-10 border border-[#e0e0e0] bg-[#f8f9fa]"></div>
              </div>
              <div>
                <label className="text-[16px] font-medium text-black leading-[24px] mb-2 block">Company</label>
                <div className="h-10 border border-[#e0e0e0] bg-[#f8f9fa]"></div>
              </div>
              <div>
                <label className="text-[16px] font-medium text-black leading-[24px] mb-2 block">Project Budget</label>
                <div className="h-10 border border-[#e0e0e0] bg-[#f8f9fa]"></div>
              </div>
              <div>
                <label className="text-[16px] font-medium text-black leading-[24px] mb-2 block">Project Description</label>
                <div className="h-32 border border-[#e0e0e0] bg-[#f8f9fa]"></div>
              </div>
              <WireframeButton variant="primary" data-field="cta">Send Message</WireframeButton>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">Get in touch</h2>
            
            {/* Email */}
            <div className="mb-8">
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-4 text-center">Email us</h3>
              <div className="flex items-center gap-4 p-4 border border-[#e0e0e0] hover:border-[#1f1f1f] cursor-pointer transition-colors">
                <ImagePlaceholder width="40px" height="40px" />
                <div>
                  <p className="text-[16px] font-medium text-black leading-[24px]">hello@significa.co</p>
                  <p className="text-[14px] text-black opacity-50 leading-[20px]">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-4 text-center">Call us</h3>
              <div className="flex items-center gap-4 p-4 border border-[#e0e0e0] hover:border-[#1f1f1f] cursor-pointer transition-colors">
                <ImagePlaceholder width="40px" height="40px" />
                <div>
                  <p className="text-[16px] font-medium text-black leading-[24px]">+351 220 408 888</p>
                  <p className="text-[14px] text-black opacity-50 leading-[20px]">Monday to Friday, 9 AM - 6 PM CET</p>
                </div>
              </div>
            </div>

            {/* Calendly */}
            <div className="mb-8">
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-4 text-center">Schedule a call</h3>
              <div className="flex items-center gap-4 p-4 border border-[#e0e0e0] hover:border-[#1f1f1f] cursor-pointer transition-colors">
                <ImagePlaceholder width="40px" height="40px" />
                <div>
                  <p className="text-[16px] font-medium text-black leading-[24px]">Book a free consultation</p>
                  <p className="text-[14px] text-black opacity-50 leading-[20px]">30-minute discovery call</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">Our locations</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                city: 'Porto',
                country: 'Portugal',
                address: 'Rua da Torrinha, 75\n4050-611 Porto, Portugal',
                isMain: true
              },
              {
                city: 'New York',
                country: 'United States',
                address: '1 World Trade Center\nNew York, NY 10007',
                isMain: false
              },
              {
                city: 'Remote',
                country: 'Global',
                address: 'We work with clients\nworldwide',
                isMain: false
              }
            ].map((location, i) => (
              <div key={i} className="text-center p-6 border border-[#e0e0e0]">
                <ImagePlaceholder width="80px" height="80px" className="mx-auto mb-4" />
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2 text-center">
                  {location.city}
                  {location.isMain && <span className="text-[14px] opacity-50 ml-2">(HQ)</span>}
                </h3>
                <p className="text-[16px] text-black opacity-50 leading-[24px] mb-3 text-center">{location.country}</p>
                <p className="text-[14px] text-black opacity-50 leading-[20px] whitespace-pre-line text-center">
                  {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-16 bg-[#f8f9fa] p-8 text-center">
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">What happens next?</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'We review your request',
                description: 'Our team will review your project details and get back to you within 24 hours.'
              },
              {
                step: '2',
                title: 'Discovery call',
                description: 'We schedule a call to discuss your project in detail and answer any questions.'
              },
              {
                step: '3',
                title: 'Proposal & timeline',
                description: 'We provide a detailed proposal with timeline, budget, and next steps.'
              }
            ].map((step, i) => (
              <div key={i}>
                <div className="w-12 h-12 bg-[#1f1f1f] text-white flex items-center justify-center mx-auto mb-4 rounded-full">
                  <span className="text-[16px] font-medium">{step.step}</span>
                </div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">{step.title}</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}