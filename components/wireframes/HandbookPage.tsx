import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, WireframeButton, TitleDescription } from '../wireframe/WireframeComponents';

export function HandbookPage() {
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
                Handbook.
              </h1>
              <p data-field="lead" className="text-[18px] leading-[28px] text-[#7A7A7A] mb-8">
                Everything you need to know about working with Significa, our processes, and our approach.
              </p>
            </div>
            <figure className="media" data-field="media-label">
              <ImagePlaceholder className="w-full h-[300px]" />
              <figcaption className="sr-only">Handbook and documentation</figcaption>
            </figure>
          </div>
        </section>

        {/* Overview Section */}
        <section data-block="handbook.overview" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
              Working with Significa
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-6">
                  Our handbook is a living document that outlines how we work, our processes, values, and everything you need to know about collaborating with our team.
                </p>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-8">
                  From project kickoff to final delivery, we've documented our proven methodologies to ensure transparency and successful outcomes.
                </p>
                <div className="space-y-4">
                  {[
                    'Project Discovery & Strategy',
                    'Design & Development Process',
                    'Communication & Collaboration',
                    'Quality Assurance & Testing',
                    'Launch & Post-Launch Support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#1f1f1f] rounded-full"></div>
                      <span data-field="item-title" className="text-[16px] text-[#1f1f1f]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <figure className="media" data-field="media-label">
                <ImagePlaceholder className="w-full h-[350px]" />
                <figcaption className="sr-only">Working with Significa process overview</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Billing Section */}
        <section data-block="handbook.billing" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <TitleDescription 
              title="Billing & Invoicing"
              description="Transparent pricing and payment processes"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  Pricing Structure
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  Fixed-price projects with clear milestones and deliverables. No hidden fees or surprises.
                </p>
                <ul className="space-y-2 text-[14px] text-[#7A7A7A]">
                  <li>• Project-based pricing</li>
                  <li>• Milestone-based payments</li>
                  <li>• Transparent cost breakdown</li>
                  <li>• Change request process</li>
                </ul>
                <figure className="media mt-4" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">Pricing structure visualization</figcaption>
                </figure>
              </div>
              
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  Payment Terms
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  Flexible payment schedules aligned with project milestones and deliverables.
                </p>
                <ul className="space-y-2 text-[14px] text-[#7A7A7A]">
                  <li>• 30% upfront payment</li>
                  <li>• Milestone-based invoicing</li>
                  <li>• Net 15 payment terms</li>
                  <li>• Multiple payment methods</li>
                </ul>
                <figure className="media mt-4" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">Payment terms illustration</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* All Sections */}
        <section data-block="handbook.links" className="py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8">
              All sections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Getting Started',
                  description: 'Project kickoff, discovery, and initial planning processes.',
                  sections: ['Project Discovery', 'Stakeholder Alignment', 'Timeline Planning']
                },
                {
                  title: 'Design Process',
                  description: 'Our approach to visual design, UX, and prototyping.',
                  sections: ['Research & Analysis', 'Wireframing', 'Visual Design', 'Prototyping']
                },
                {
                  title: 'Development',
                  description: 'Technical implementation, coding standards, and QA processes.',
                  sections: ['Architecture', 'Development', 'Code Review', 'Testing']
                },
                {
                  title: 'Communication',
                  description: 'How we communicate, report progress, and handle feedback.',
                  sections: ['Project Updates', 'Feedback Process', 'Meeting Cadence']
                },
                {
                  title: 'Launch & Support',
                  description: 'Deployment processes and ongoing maintenance options.',
                  sections: ['Deployment', 'Training', 'Support Options', 'Maintenance']
                },
                {
                  title: 'Legal & Contracts',
                  description: 'Contract terms, intellectual property, and legal considerations.',
                  sections: ['Contract Terms', 'IP Rights', 'Confidentiality', 'Liability']
                }
              ].map((section, index) => (
                <div key={index} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                    {section.title}
                  </h3>
                  <p data-field="item-excerpt" className="text-[14px] text-[#7A7A7A] mb-4">
                    {section.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    {section.sections.map((subsection, subIndex) => (
                      <p key={subIndex} className="text-[12px] text-[#7A7A7A]">
                        • {subsection}
                      </p>
                    ))}
                  </div>
                  <a data-field="link-href" className="text-[14px] text-[#1f1f1f] underline">
                    Read section →
                  </a>
                  <figure className="media mt-4" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[100px]" />
                    <figcaption className="sr-only">{section.title} handbook section</figcaption>
                  </figure>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p data-field="paragraph" className="text-[16px] text-[#7A7A7A] mb-6">
                Need something specific? Can't find what you're looking for?
              </p>
              <WireframeButton variant="primary" data-field="cta">Contact us</WireframeButton>
            </div>
          </div>
        </section>
      </main>

      <footer data-block="global.site-footer">
        <WireframeFooter />
      </footer>
    </div>
  );
}