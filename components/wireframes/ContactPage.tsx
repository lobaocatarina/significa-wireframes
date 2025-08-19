import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, WireframeCTA } from '../wireframe/WireframeComponents';

export function ContactPage() {
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
                I have a project.
              </h1>
              <p data-field="lead" className="text-[18px] leading-[28px] text-[#7A7A7A] mb-8">
                Choose how you'd like to connect: fill out our form, send us an email, or book a quick call.
              </p>
            </div>
            <figure className="media" data-field="media-label">
              <ImagePlaceholder className="w-full h-[250px]" />
              <figcaption className="sr-only">Contact us illustration</figcaption>
            </figure>
          </div>
        </section>

        {/* Contact Form Section */}
        <section data-block="contact.form" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8">
              Contact form
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-[16px] font-medium text-[#1f1f1f]">
                    Name *
                  </label>
                  <div className="border border-[#e0e0e0] p-3 h-[48px] bg-[#f8f9fa]">
                    <span className="text-[14px] text-[#7A7A7A]">Your full name</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[16px] font-medium text-[#1f1f1f]">
                    Email *
                  </label>
                  <div className="border border-[#e0e0e0] p-3 h-[48px] bg-[#f8f9fa]">
                    <span className="text-[14px] text-[#7A7A7A]">your@email.com</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[16px] font-medium text-[#1f1f1f]">
                    Company
                  </label>
                  <div className="border border-[#e0e0e0] p-3 h-[48px] bg-[#f8f9fa]">
                    <span className="text-[14px] text-[#7A7A7A]">Company name</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[16px] font-medium text-[#1f1f1f]">
                    Project Summary *
                  </label>
                  <div className="border border-[#e0e0e0] p-3 h-[120px] bg-[#f8f9fa]">
                    <span className="text-[14px] text-[#7A7A7A]">Tell us about your project...</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[16px] font-medium text-[#1f1f1f]">
                    Budget Range
                  </label>
                  <div className="border border-[#e0e0e0] p-3 h-[48px] bg-[#f8f9fa]">
                    <span className="text-[14px] text-[#7A7A7A]">Select budget range</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[16px] font-medium text-[#1f1f1f]">
                    Timeline
                  </label>
                  <div className="border border-[#e0e0e0] p-3 h-[48px] bg-[#f8f9fa]">
                    <span className="text-[14px] text-[#7A7A7A]">When do you need this?</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[16px] font-medium text-[#1f1f1f]">
                    Attachment
                  </label>
                  <div className="border border-[#e0e0e0] border-dashed p-6 text-center bg-[#f8f9fa]">
                    <span className="text-[14px] text-[#7A7A7A]">Drop files or click to upload</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border border-[#e0e0e0] mt-0.5"></div>
                  <p className="text-[14px] text-[#7A7A7A]">
                    I consent to processing of my personal data according to the Privacy Policy.
                  </p>
                </div>
                
                <WireframeButton variant="primary" data-field="cta" className="w-full">Send Message</WireframeButton>
              </div>
              
              <div>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[400px]" />
                  <figcaption className="sr-only">Contact form illustration</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Email Section */}
        <section data-block="contact.email" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
                  Email address
                </h2>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-6">
                  Prefer to reach out directly? Send us an email and we'll get back to you within 24 hours.
                </p>
                <a data-field="link-href" className="text-[18px] text-[#1f1f1f] underline font-medium">
                  hello@significa.co
                </a>
              </div>
              <figure className="media" data-field="media-label">
                <ImagePlaceholder className="w-full h-[250px]" />
                <figcaption className="sr-only">Email contact illustration</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Call Section */}
        <section data-block="contact.call" className="border-b border-[#e0e0e0] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <figure className="media" data-field="media-label">
                <ImagePlaceholder className="w-full h-[250px]" />
                <figcaption className="sr-only">Book a call illustration</figcaption>
              </figure>
              <div>
                <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-6">
                  Book a call
                </h2>
                <p data-field="paragraph" className="text-[18px] text-[#7A7A7A] mb-6">
                  Schedule a 30-minute discovery call to discuss your project and see if we're a good fit.
                </p>
                <WireframeButton variant="primary" data-field="cta">Schedule Call</WireframeButton>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section data-block="contact.locations" className="py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 data-field="heading" className="text-[32px] font-bold text-[#1f1f1f] mb-8 text-center">
              Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 data-field="item-title" className="text-[24px] font-semibold text-[#1f1f1f] mb-4">
                  Porto, Portugal
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-6">
                  Our main office and creative hub
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[200px]" />
                  <figcaption className="sr-only">Porto office location</figcaption>
                </figure>
              </div>
              <div className="text-center">
                <h3 data-field="item-title" className="text-[24px] font-semibold text-[#1f1f1f] mb-4">
                  Remote
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[#7A7A7A] mb-6">
                  We work with clients worldwide
                </p>
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[200px]" />
                  <figcaption className="sr-only">Remote work illustration</figcaption>
                </figure>
              </div>
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