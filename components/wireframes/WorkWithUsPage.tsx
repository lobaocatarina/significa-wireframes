import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, WireframeButton, TitleDescription, Metric, SectionLabel, Hero } from '../wireframe/WireframeComponents';

export function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1f1f1f] text-white px-4 py-2">
        Skip to main content
      </a>


      <main id="content">
        <Hero
          title="Working with Significa."
          description="Learn how we collaborate, assemble teams, and structure our engagement to deliver exceptional results."
          showMedia={false}
          cta="Explore our handbook"
        />


        {/* Team */}
        <section data-block="work-with-us.pricing" className="border-t border-[#e0e0e0] py-16">
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
          </div>
        </section>


        {/* Pricing Section */}
        <section data-block="work-with-us.pricing" className="border-t border-[#e0e0e0] py-16">

          <div className="max-w-[1200px] mx-auto px-6">
            <SectionLabel>Pricing & Rates</SectionLabel>
            <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              Pricing & rates
            </h2>
            <p data-field="paragraph" className="text-[18px] text-[rgba(0,0,0,0.8)] mb-6 text-center">
              Transparent pricing structure tailored to your project scope and timeline.
            </p>
            <WireframeButton variant="secondary" data-field="cta" className="mx-auto">View Full Team</WireframeButton>
            <figure className="media mt-8" data-field="media-label">
              <ImagePlaceholder className="w-full h-[250px]" />
              <figcaption className="sr-only">Pricing and billing structure overview</figcaption>
            </figure>
          </div>
        </section>

        {/* Section Separator */}
        <div className="border-t border-[#e0e0e0]"></div>

        {/* Client Experience */}
        <div className="flex flex-col items-center py-16 max-w-[1200px] mx-auto px-6 w-full">
          <SectionLabel>Client Experience</SectionLabel>
          <TitleDescription
            title="We love what we do, and so do our clients."
            description="Our clients don't just get great products, they enjoy the process too. An independent entity runs customer satisfaction surveys and interviews to help us understand how we can keep continuously improving."
            cta="Learn more →"
          />
        </div>

        <div className="flex justify-center pb-16">
          <div className="flex flex-col items-center">
            <SectionLabel>CX Metrics</SectionLabel>
            <div className="flex gap-8">
              <Metric value="98%" label="Satisfaction Rate" />
              <Metric value="9.2/10" label="Average Rating" />
              <Metric value="95%" label="Recommend Us" />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section data-block="work-with-us.testimonials" className="border-t border-[#e0e0e0] py-16">

          <div className="max-w-[1400px] mx-auto px-6">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((testimonial) => (
                <div key={testimonial} className="border border-[#e0e0e0] p-6">
                  <p data-field="item-excerpt" className="text-[16px] text-[#1f1f1f] mb-4 italic">
                    "Working with Significa transformed our digital presence and exceeded all expectations."
                  </p>
                  <div className="flex items-center gap-3">
                    <figure className="media" data-field="media-label">
                      <ImagePlaceholder className="w-12 h-12 rounded-full" />
                      <figcaption className="sr-only">Client testimonial photo</figcaption>
                    </figure>
                    <div>
                      <p data-field="item-title" className="text-[14px] font-medium text-[#1f1f1f]">
                        Client Name
                      </p>
                      <p className="text-[12px] text-[rgba(0,0,0,0.8)]">
                        Company, Role
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section data-block="global.faq-accordion" className="border-t border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <SectionLabel>FAQ</SectionLabel>
            <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
              FAQs
            </h2>
            <div className="space-y-4">
              {[
                'What is your typical project timeline?',
                'How do you handle project changes?',
                'What are your payment terms?',
                'Do you provide ongoing support?'
              ].map((question, index) => (
                <div key={index} className="border border-[#e0e0e0] p-6">
                  <p data-field="item-title" className="text-[18px] font-medium text-[#1f1f1f]">
                    {question}
                  </p>
                </div>
              ))}
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


    </div>
  );
}