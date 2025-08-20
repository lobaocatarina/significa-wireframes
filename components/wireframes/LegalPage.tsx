import React from 'react';
import { WireframeHeader, WireframeFooter, ImagePlaceholder, Hero } from '../wireframe/WireframeComponents';

interface LegalPageProps {
  pageTitle: string;
  pageType: 'privacy' | 'terms' | 'cookies';
}

export function LegalPage({ pageTitle = "Privacy Policy", pageType = 'privacy' }: LegalPageProps) {
  const getContent = () => {
    switch (pageType) {
      case 'privacy':
        return {
          sections: [
            'Information We Collect',
            'How We Use Your Information', 
            'Data Sharing and Disclosure',
            'Data Security',
            'Your Rights',
            'Contact Information'
          ]
        };
      case 'terms':
        return {
          sections: [
            'Agreement to Terms',
            'Intellectual Property Rights',
            'User Representations',
            'Prohibited Uses',
            'Services Management',
            'Privacy Policy',
            'Termination',
            'Disclaimer',
            'Limitations of Liability',
            'Governing Law',
            'Changes to Terms'
          ]
        };
      case 'cookies':
        return {
          sections: [
            'What Are Cookies',
            'Types of Cookies We Use',
            'How We Use Cookies',
            'Cookie Preferences',
            'Third-Party Cookies',
            'Managing Cookies'
          ]
        };
      default:
        return { sections: [] };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-white">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1f1f1f] text-white px-4 py-2">
        Skip to main content
      </a>
      
      <header data-block="global.site-header">
        <WireframeHeader />
      </header>

      <main id="content">
        <Hero
          title={`${pageTitle}.`}
          description="Last updated: January 2025"
          mediaHeight="h-[250px]"
        />

        {/* Legal Content Section */}
        <section data-block="legal.content" className="py-16">
        
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-[800px]">
              <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
                Overview
              </h2>
              <p data-field="paragraph" className="text-[18px] text-[rgba(0,0,0,0.8)] mb-12 leading-[28px]">
                This document outlines our policies and practices regarding {pageType === 'privacy' ? 'the collection, use, and protection of your personal information' : pageType === 'terms' ? 'the terms and conditions for using our services' : 'our use of cookies and similar technologies'}.
              </p>

              {/* Content Sections */}
              <div className="space-y-12">
                {content.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-[24px] font-semibold text-[#1f1f1f] mb-4">
                      {index + 1}. {section}
                    </h3>
                    <div className="space-y-4">
                      <p data-field="paragraph" className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[24px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>
                      <p data-field="paragraph" className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[24px]">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      
                      {/* Add a media element for visual break */}
                      {index % 3 === 0 && (
                        <figure className="media my-8" data-field="media-label">
                          <ImagePlaceholder className="w-full h-[200px]" />
                          <figcaption className="sr-only">{section} illustration</figcaption>
                        </figure>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="mt-16 p-6 border border-[#e0e0e0] ">
                <h3 className="text-[20px] font-semibold text-[#1f1f1f] mb-4">
                  Questions or Concerns?
                </h3>
                <p data-field="paragraph" className="text-[16px] text-[rgba(0,0,0,0.8)] mb-4">
                  If you have any questions about this {pageTitle.toLowerCase()}, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-[16px] text-[#1f1f1f]">
                    <strong>Email:</strong> <a href="mailto:legal@significa.co" className="underline">legal@significa.co</a>
                  </p>
                  <p className="text-[16px] text-[#1f1f1f]">
                    <strong>Address:</strong> Significa, Porto, Portugal
                  </p>
                </div>
              </div>

              {/* Last Updated Info */}
              <div className="mt-8 text-center">
                <p className="text-[14px] text-[rgba(0,0,0,0.8)]">
                  This document was last updated on January 15, 2025.
                </p>
                <figure className="media mt-6" data-field="media-label">
                  <ImagePlaceholder className="w-full h-[150px]" />
                  <figcaption className="sr-only">Legal document footer illustration</figcaption>
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