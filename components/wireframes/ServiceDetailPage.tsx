import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, WireframeCTA, TitleDescription, ProjectCard } from '../wireframe/WireframeComponents';

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
      
      <header data-block="global.site-header">
        <WireframeHeader />
      </header>

      <main id="content">
        {/* Hero Section */}
        <section data-block="global.hero" data-variant="compact" className="border-b border-[#e0e0e0] py-12">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-[800px]">
              <h1 data-field="heading" className="text-[48px] leading-[52px] font-bold text-[#1f1f1f] mb-6">
                {serviceName}
              </h1>
              <p data-field="lead" className="text-[18px] leading-[28px] text-[#7A7A7A] mb-8">
                {serviceDescription}
              </p>
            </div>
            <figure className="media" data-field="media-label">
              <ImagePlaceholder className="w-full aspect-video" />
              <figcaption className="sr-only">{serviceName} service overview</figcaption>
            </figure>
          </div>
        </section>

        {/* How We Work Section */}
        <section data-block="service.how-we-work" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
              How we work.
            </h2>
            <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-6 max-w-[600px]">
              Our approach to {serviceName.toLowerCase()} combines proven methodologies with innovative thinking.
            </p>
            <a data-field="link-href" className="text-[16px] text-[#1f1f1f] underline">
              Learn more in our Handbook: Working with Significa
            </a>
            <figure className="media mt-8" data-field="media-label">
              <ImagePlaceholder className="w-full h-[300px]" />
              <figcaption className="sr-only">Our {serviceName.toLowerCase()} methodology</figcaption>
            </figure>
          </div>
        </section>

        {/* Awards Section */}
        <section data-block="service.awards" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8">
              Awards & Recognition
            </h2>
            <div className="flex gap-8 items-center">
              {[1, 2, 3, 4].map((award) => (
                <div key={award} className="border border-[#e0e0e0] p-4 text-center min-w-[120px]">
                  <span data-field="item-title" className="text-[14px] text-[#7A7A7A]">
                    Award {award}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Playground Section */}
        <section data-block="service.playground" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <TitleDescription 
              title="Playground Experiments"
              description="Related experiments and proof-of-concepts"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((poc) => (
                <div key={poc} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[18px] font-semibold text-[#1f1f1f] mb-3">
                    POC Project {poc}
                  </h3>
                  <p data-field="item-excerpt" className="text-[14px] text-[#7A7A7A] mb-4">
                    Experimental project related to {serviceName.toLowerCase()}
                  </p>
                  <figure className="media" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[120px]" />
                    <figcaption className="sr-only">POC Project {poc} preview</figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a data-field="link-href" className="text-[16px] text-[#1f1f1f] underline">
                View all Playground projects →
              </a>
            </div>
          </div>
        </section>

        {/* Selected Work Grid */}
        <section data-block="global.selected-work-grid" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8">
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
        <section data-block="service.related-articles" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8">
              Related articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((article) => (
                <div key={article} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[18px] font-semibold text-[#1f1f1f] mb-3">
                    Article about {serviceName} {article}
                  </h3>
                  <p data-field="item-excerpt" className="text-[14px] text-[#7A7A7A] mb-4">
                    Insights and best practices for {serviceName.toLowerCase()}
                  </p>
                  <figure className="media" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[120px]" />
                    <figcaption className="sr-only">Article {article} cover image</figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <WireframeButton variant="secondary" data-field="cta">View all articles</WireframeButton>
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
              <figcaption className="sr-only">Start a project call-to-action visual</figcaption>
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