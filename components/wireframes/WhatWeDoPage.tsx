import React from 'react';
import { ImagePlaceholder, WireframeButton, SectionLabel, TitleDescription, Hero, FAQItem, WireframeHeader, WireframeFooter } from '../wireframe/WireframeComponents';

export function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1f1f1f] text-white px-4 py-2">
        Skip to main content
      </a>

      <main id="content">
        <Hero
          title="What we do."
          description="Custom design and development services built to grow your business."
          variant="compact"
        />

        {/* Services Section */}
        <section data-block="what-we-do.services" className="py-16">

          <div className="max-w-[1200px] mx-auto px-6">
            <SectionLabel>Our Services</SectionLabel>
            <TitleDescription
              title="Strategy-led. Design-driven. Clean code."
              description="We combine strategy, design and engineering to build digital products that are intuitive, user-centred, and built to last."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mt-8">
              {[
                { name: 'Think', description: 'Strategy & Discovery' },
                { name: 'Design', description: 'Visual design & prototyping' },
                { name: 'Develop', description: 'Engineering & QA' },
                { name: 'Launch', description: 'Release & scalability' },
                { name: 'Grow', description: 'Measure & observability' }
              ].map((service, index) => (
                <div key={index} className="border p-6">
                  <h3 data-field="item-title" className="text-[24px] font-semibold text-[#1f1f1f] mb-3 text-center">
                    {service.name}
                  </h3>
                  <p data-field="item-excerpt" className="text-[16px] text-[rgba(0,0,0,0.8)] mb-4 text-center">
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
        <section data-block="what-we-do.deliverables" className="py-16">

          <div className="max-w-[1400px] mx-auto px-6">
            <SectionLabel>What We Build</SectionLabel>
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
        <section data-block="what-we-do.how-we-work" className="border-t border-[#e0e0e0]">

          <div className="flex flex-col items-center py-16">
            <SectionLabel>How We Work</SectionLabel>
            <div className="text-center mb-16">
              <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
                How we work.
              </h2>
              <p data-field="paragraph" className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
                We follow a hands-on collaborative approach that ensures your project delivers results.
              </p>
            </div>
            <div className="flex justify-center pb-16">
              <ImagePlaceholder width="800px" height="464px" />
            </div>

          </div>
        </section>

        {/* Expertise Section */}
        <section data-block="what-we-do.expertise" className="border-t border-[#e0e0e0] py-16">

          <div className="max-w-[1400px] mx-auto px-6">
            <SectionLabel>Industry Expertise</SectionLabel>
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
        <section data-block="global.faq-accordion" className="border-t border-[#e0e0e0] py-16">
          <div className="max-w-[800px] mx-auto px-6">
            <SectionLabel>FAQ</SectionLabel>
            <div className="text-center mb-16">
              <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">Frequently asked questions</h2>
            </div>
            <div className="space-y-4">
              <FAQItem question="How often do you collect client feedback?" />
              <FAQItem question="Who conducts the customer satisfaction surveys?" />
              <FAQItem question="Do you share negative feedback as well?" />
              <FAQItem question="How do you use this feedback to improve?" />
              <FAQItem question="Can I speak to previous clients?" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="border border-[#e0e0e0] mx-auto max-w-[1400px] mb-16">
          <div className="flex flex-col items-center justify-center h-[316px] gap-6">
            <SectionLabel>Conversion</SectionLabel>
            <TitleDescription
              title="Start a project."
              description="Let's discuss your project and explore how we can help bring your vision to life."
            />
            <WireframeButton variant="primary" data-field="cta">Get in touch</WireframeButton>
          </div>
        </div>
      </main>

      <WireframeFooter />
    </div>
  );
}