import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, WireframeButton, TitleDescription, ProjectCard, SectionLabel, Hero } from '../wireframe/WireframeComponents';

interface ServiceDetailPageProps {
  serviceName: string;
  serviceDescription: string;
}

export function ServiceDetailPage({ serviceName = "Think", serviceDescription = "Strategy & Discovery" }: ServiceDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1f1f1f] text-white px-4 py-2">
        Skip to main content
      </a>



      <main id="content">
        <Hero
          title={serviceName}
          description={serviceDescription}
          mediaHeight="aspect-video"
        />

        {/* How We Work Section */}
        <section data-block="service.how-we-work" className="border-t border-[#e0e0e0] py-16">
          <div className="max-w-[1200px] mx-auto items-center px-6">
            <div className="flex flex-col items-center">
              <SectionLabel>How we work.</SectionLabel>
              <TitleDescription
                title="How we work."
                description="We follow a hands-on collaborative approach."
                cta="Explore our handbook →"
              />
            </div>

            <figure className="media mt-8" data-field="media-label">
              <ImagePlaceholder className="w-full h-[300px]" />
              <figcaption className="sr-only">Our {serviceName.toLowerCase()} methodology</figcaption>
            </figure>
          </div>
        </section>

        {/* Awards Section */}
        <section data-block="service.awards" className="border-t border-[#e0e0e0] py-16">
          <div className="flex flex-col items-center py-16 max-w-[1200px] mx-auto px-6 w-full">
            <SectionLabel>Awards</SectionLabel>
            <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
              Awards & Recognition
            </h2>
            <div className="flex gap-8 items-center">
              {[1, 2, 3, 4].map((award) => (
                <div key={award} className="border border-[#e0e0e0] p-4 text-center min-w-[120px]">
                  <span data-field="item-title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
                    Award {award}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Playground Section */}
        <section data-block="service.playground" className="border-t border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <SectionLabel>Playground Experiments</SectionLabel>
            <TitleDescription
              title="Playground Experiments"
              description="Related experiments and proof-of-concepts"
              cta="Explore playground →"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((poc) => (
                <div key={poc} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[18px] font-semibold text-[#1f1f1f] mb-3 text-center">
                    PG Project {poc}
                  </h3>
                  <p data-field="item-excerpt" className="text-[14px] text-[rgba(0,0,0,0.8)] mb-4">
                    Experimental project related to {serviceName.toLowerCase()}
                  </p>
                  <figure className="media" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[120px]" />
                    <figcaption className="sr-only">POC Project {poc} preview</figcaption>
                  </figure>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Selected Work Grid */}
        <section data-block="global.selected-work-grid" className="border-t border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
              Selected projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((project) => (
                <ProjectCard key={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section data-block="service.related-articles" className="border-t border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
              Related articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((article) => (
                <div key={article} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[18px] font-semibold text-[#1f1f1f] mb-3 text-center">
                    Article about {serviceName} {article}
                  </h3>
                  <p data-field="item-excerpt" className="text-[14px] text-[rgba(0,0,0,0.8)] mb-4">
                    Insights and best practices for {serviceName.toLowerCase()}
                  </p>
                  <figure className="media" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[120px]" />
                    <figcaption className="sr-only">Article {article} cover image</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center justify-items-center">
            <WireframeButton variant="secondary" data-field="cta">View all articles</WireframeButton>
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