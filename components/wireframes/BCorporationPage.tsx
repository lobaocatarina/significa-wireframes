import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, WireframeButton, TitleDescription, Metric, SectionLabel } from '../wireframe/WireframeComponents';

export function BCorporationPage() {
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
        <section data-block="global.hero" data-variant="media" className="border-b border-[#e0e0e0] py-12">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-[800px]">
              <h1 data-field="heading" className="text-[48px] leading-[52px] font-bold text-[#1f1f1f] mb-6">
                B Corp.
              </h1>
              <p data-field="lead" className="text-[18px] leading-[28px] text-[#7A7A7A] mb-8">
                We're certified as a B Corporation, meeting rigorous standards for social and environmental performance, accountability, and transparency.
              </p>
            </div>
            <figure className="media" data-field="media-label">
              <ImagePlaceholder className="w-full h-[400px]" />
              <figcaption className="sr-only">B Corp certification and impact</figcaption>
            </figure>
          </div>
        </section>

        {/* Overview Section */}
        <section data-block="bcorp.overview" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
              Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-6">
                  As a certified B Corporation, we balance profit and purpose, using business as a force for good. We're part of a global movement of companies committed to redefining success in business.
                </p>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-8">
                  Our certification demonstrates our commitment to meeting the highest standards of verified social and environmental performance, public transparency, and legal accountability.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <Metric value="2021" label="Certified Since" />
                  <Metric value="80+" label="Overall Score" />
                </div>
              </div>
              <figure className="media" data-field="media-label">
                <ImagePlaceholder className="w-full h-[300px]" />
                <figcaption className="sr-only">B Corp community and movement</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Impact Commitments Section */}
        <section data-block="bcorp.commitments" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <TitleDescription 
              title="Impact commitments"
              description="Our ongoing commitments to social and environmental responsibility"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  1% for the Planet
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  We donate 1% of our annual revenue to environmental causes and organizations.
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">1% for the Planet initiative</figcaption>
                </figure>
              </div>
              
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  Carbon Neutral
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  Committed to carbon neutrality through renewable energy and offset programs.
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">Carbon neutral commitment</figcaption>
                </figure>
              </div>
              
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  Fair Employment
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  Equal opportunities, fair wages, and inclusive workplace practices for all team members.
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">Fair employment practices</figcaption>
                </figure>
              </div>
              
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  Community Support
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  Supporting local communities through volunteering and pro-bono work.
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">Community support initiatives</figcaption>
                </figure>
              </div>
              
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  Ethical Business
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  Transparent business practices with strong governance and accountability.
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">Ethical business practices</figcaption>
                </figure>
              </div>
              
              <div className="border border-[#e0e0e0] p-6">
                <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                  Digital Accessibility
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-4">
                  Creating inclusive digital experiences accessible to everyone.
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[120px]" />
                  <figcaption className="sr-only">Digital accessibility commitment</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Reports Section */}
        <section data-block="bcorp.impact-reports" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
              Impact Reports
            </h2>
            <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-8 max-w-[600px]">
              We publish annual impact reports to share our progress and hold ourselves accountable to our commitments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2023, 2022, 2021].map((year) => (
                <div key={year} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[20px] font-semibold text-[#1f1f1f] mb-3">
                    {year} Impact Report
                  </h3>
                  <p data-field="item-excerpt" className="text-[14px] text-[#7A7A7A] mb-4">
                    Our annual report covering social and environmental impact for {year}.
                  </p>
                  <a data-field="link-href" className="text-[14px] text-[#1f1f1f] underline">
                    Download PDF →
                  </a>
                  <figure className="media mt-4" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[120px]" />
                    <figcaption className="sr-only">{year} Impact Report cover</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section data-block="bcorp.transparency" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
              Transparency
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-6">
                  Transparency is fundamental to our B Corp certification. We openly share our impact data, governance structure, and business practices.
                </p>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-8">
                  Our B Impact Assessment is publicly available, showing how we measure against other certified B Corporations across all impact areas.
                </p>
                <div className="space-y-4">
                  <a data-field="link-href" className="block text-[16px] text-[#1f1f1f] underline">
                    View our B Impact Assessment →
                  </a>
                  <a data-field="link-href" className="block text-[16px] text-[#1f1f1f] underline">
                    Read our Governance Documents →
                  </a>
                  <a data-field="link-href" className="block text-[16px] text-[#1f1f1f] underline">
                    View our Impact Data →
                  </a>
                </div>
              </div>
              <figure className="media" data-field="media-label">
                <ImagePlaceholder className="w-full h-[300px]" />
                <figcaption className="sr-only">Transparency and accountability visualization</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Related Articles (Optional) */}
        <section data-block="blog.related-articles" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8">
              Related articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Our journey to B Corp certification',
                'Building a sustainable business model',
                'The importance of social impact in tech'
              ].map((article, index) => (
                <div key={index} className="border border-[#e0e0e0] p-6">
                  <h3 data-field="item-title" className="text-[18px] font-semibold text-[#1f1f1f] mb-3">
                    {article}
                  </h3>
                  <p data-field="item-excerpt" className="text-[14px] text-[#7A7A7A] mb-4">
                    Learn more about our commitment to social and environmental impact.
                  </p>
                  <figure className="media" data-field="media-label">
                    <ImagePlaceholder className="w-full h-[120px]" />
                    <figcaption className="sr-only">{article} article cover</figcaption>
                  </figure>
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

      <footer data-block="global.site-footer">
        <WireframeFooter />
      </footer>
    </div>
  );
}