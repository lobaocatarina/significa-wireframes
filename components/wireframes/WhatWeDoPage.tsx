import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, WireframeCTA, SectionLabel, TitleDescription } from '../wireframe/WireframeComponents';

export function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1f1f1f] text-white px-4 py-2">
        Skip to main content
      </a>
      
      <header data-block="global.site-header">
        <WireframeHeader />
      </header>

      <main id="content">
        {/* Hero Section */}
        <section data-block="global.hero" data-variant="compact" className="border-b border-[#e0e0e0] py-12">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-[800px]">
              <h1 data-field="heading" className="text-[48px] leading-[52px] font-bold text-[#1f1f1f] mb-6">
                What we do.
              </h1>
              <p data-field="lead" className="text-[18px] leading-[28px] text-[#7A7A7A] mb-8">
                Custom design and development services built to grow your business.
              </p>
            </div>
            <figure className="media" data-field="media-label">
              <ImagePlaceholder className="w-full h-[300px]" />
              <figcaption className="sr-only">What we do hero image</figcaption>
            </figure>
          </div>
        </section>

        {/* Services Section */}
        <section data-block="what-we-do.services" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <TitleDescription 
              title="Our Services"
              description="Five core services that drive your business forward"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { name: 'Think', description: 'Strategy & Discovery' },
                { name: 'Design', description: 'Visual design & prototyping' },
                { name: 'Develop', description: 'Engineering & QA' },
                { name: 'Launch', description: 'Release & scalability' },
                { name: 'Grow', description: 'Measure & observability' }
              ].map((service, index) => (
                <div key={index} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[24px] font-semibold text-[#1f1f1f] mb-3">
                    {service.name}
                  </h3>
                  <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                    {service.description}
                  </p>
                  <figure className="media" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[120px]" />
                    <figcaption className="sr-only">{service.name} service illustration</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section data-block="what-we-do.deliverables" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <TitleDescription 
              title="What We Build"
              description="Digital products tailored to your needs"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                'Websites',
                'Mobile App', 
                'Web App',
                'Watch App',
                'Desktop App',
                'E-commerce'
              ].map((deliverable, index) => (
                <div key={index} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                    {deliverable}
                  </h3>
                  <figure className="media" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[140px]" />
                    <figcaption className="sr-only">{deliverable} example</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section data-block="what-we-do.how-we-work" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
              How we work.
            </h2>
            <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-8 max-w-[600px]">
              We follow a hands-on collaborative approach that ensures your project delivers results.
            </p>
            <figure className="media" data-field="media-label">
              <ImagePlaceholder className="w-full h-[300px]" />
              <figcaption className="sr-only">Our collaborative work process</figcaption>
            </figure>
          </div>
        </section>

        {/* Expertise Section */}
        <section data-block="what-we-do.expertise" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <TitleDescription 
              title="Industry Expertise"
              description="Deep experience across diverse sectors"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {[
                'Health & Wellness',
                'Hospitality', 
                'Sports & Entertainment',
                'Finance',
                'Commerce',
                'Education',
                'Real estate',
                'Sustainability',
                'Mobility',
                'HR & Communication',
                'Art & Culture'
              ].map((expertise, index) => (
                <div key={index} className="border border-[#e0e0e0] p-4 text-center">
                  <span data-field="item-title" className="text-[16px] text-[#1f1f1f]">
                    {expertise}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section data-block="global.faq-accordion" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-[#e0e0e0] p-6">
                  <p data-field="item-title" className="text-[18px] font-medium text-[#1f1f1f]">
                    FAQ Question {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section data-block="global.final-cta" className="py-16">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
              Start a project.
            </h2>
            <WireframeButton variant="primary" data-field="cta">Get in touch</WireframeButton>
            <figure className="media mt-8" data-field="media-label">
              <ImagePlaceholder className="w-full h-[200px]" />
              <figcaption className="sr-only">Get in touch call-to-action visual</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer data-block="global.site-footer">
        <WireframeFooter />
      </footer>
    </div>
  );
}