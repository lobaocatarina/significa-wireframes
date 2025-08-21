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
        />


        {/* Working with Significa */}
        <section data-block="work-with-us.summary" className="border-t border-[#e0e0e0]">
          <div className="flex flex-col items-center py-16">
            <div className="text-center mb-16">
              <SectionLabel>Working with Significa</SectionLabel>
              <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
                Working with Significa
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

        {/* CX Preview Section */}
        <section data-block="global.cx-preview" className="border-t border-[#e0e0e0] py-16">

          <div className="max-w-[1200px] mx-auto px-6">
            <SectionLabel>CX Data</SectionLabel>
            <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              CX Data
            </h2>
            <p data-field="paragraph" className="text-[18px] text-[rgba(0,0,0,0.8)] mb-8 ">
              Our commitment to excellence is measured and shared transparently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Metric value="98%" label="Client Satisfaction" />
              <Metric value="95%" label="On-time delivery" />
              <Metric value="4.8/5" label="NPS Score" />
            </div>
            <a data-field="link-href" className="text-[16px] text-[#1f1f1f] underline">
              Explore our full CX Data →
            </a>
            <figure className="media mt-8" data-field="media-label">
              <ImagePlaceholder className="w-full h-[200px]" />
              <figcaption className="sr-only">Customer experience data visualization</figcaption>
            </figure>
          </div>
        </section>

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