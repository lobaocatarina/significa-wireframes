import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  Hero
} from '../wireframe/WireframeComponents';

export function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      
      {/* Hero */}
      <section data-block="global.hero">
        <Hero
          title="Careers at Significa."
          description="We are a team of curiosity-driven go-getters. Our office in downtown Porto is a jungle-like haven for our designers, developers, product managers, and digital strategists, and we like to party. We are office-first."
          variant="media"
          mediaHeight="h-[400px]"
        />
       
      </section>

      {/* Open Positions */}
      <section data-block="careers.open-positions" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Open Positions</SectionLabel>
          <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-4 text-center">
            Open positions
          </h2>
          
          {/* Empty state */}
          <div className="text-center">
            <p className="text-[18px] text-black leading-[24px] mb-2">
              There are no open positions right now.
            </p>
            <p className="text-[18px] text-black leading-[24px] mb-8">
              But we are always on the lookout for talented folks!
            </p>
            <WireframeButton variant="secondary" data-field="link-href">
              Submit your spontaneous application
            </WireframeButton>
          </div>
          
          <figure className="media mt-8">
            <ImagePlaceholder className="w-24 h-24 mx-auto" />
            <figcaption className="sr-only">Small legend placeholder</figcaption>
          </figure>
        </div>
      </section>

      {/* Values */}
      <section data-block="careers.values" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Values</SectionLabel>
          <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
            What we stand for
          </h2>
          
          <div className="text-center mb-8">
            <p data-field="paragraph" className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] max-w-[823px] mx-auto mb-8">
              We believe in creating meaningful work experiences that foster growth, creativity, and collaboration.
            </p>
            
            <ul className="space-y-2 text-[16px] text-black leading-[24px] max-w-[600px] mx-auto mb-12">
              <li>• Curiosity-driven approach to problem solving</li>
              <li>• Collaborative team environment</li>
              <li>• Continuous learning and growth</li>
              <li>• Work-life balance and flexibility</li>
            </ul>
          </div>

          {/* Teams sub-strip */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 border border-[#e0e0e0]">
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">Design</h3>
              <p className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[20px]">Creating beautiful, user-centered experiences</p>
            </div>
            <div className="text-center p-6 border border-[#e0e0e0]">
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">Development</h3>
              <p className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[20px]">Building robust, scalable solutions</p>
            </div>
            <div className="text-center p-6 border border-[#e0e0e0]">
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2">Operations</h3>
              <p className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[20px]">Supporting teams and client success</p>
            </div>
          </div>

          <figure className="media">
            <ImagePlaceholder className="w-full h-[400px]" />
            <figcaption className="sr-only">16:9 poster/diagram placeholder</figcaption>
          </figure>
        </div>
      </section>

      {/* Benefits */}
      <section data-block="careers.benefits" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Benefits</SectionLabel>
          <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-12 text-center">
            Benefits
          </h2>
          
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: "Welcome pack", description: "Hoodie and essentials on day one." },
              { title: "Flexible hours and location", description: "Office-first, with freedom to come and go." },
              { title: "Unlimited learning stipend", description: "We cover courses and learning you choose." },
              { title: "All the equipment you need", description: "Whatever you need to excel." },
              { title: "Career plan & growth", description: "1:1s, workshops, OKRs to support your goals." },
              { title: "Annual company retreat", description: "Three-night offsite focused on team time." },
              { title: "Health insurance", description: "Coverage for you (and kids)." },
              { title: "Public transport subsidy", description: "We reimburse your commute." },
              { title: "Corporate Social Responsibility", description: "1% for the Planet member." },
              { title: "Gym membership", description: "Gym a few meters from the office." },
              { title: "25 vacation days", description: "22 of choice + birthday + Dec 24 & 31." },
              { title: "Baby kit", description: "A box of goodies for new arrivals." },
              { title: "Referral bonus programme", description: "€1000 on hire + €1000 after 1 year." },
              { title: "1 extra vacation day per year", description: "From year two; up to 30 days." },
              { title: "Period leave", description: "1 day per month." },
              { title: "Support structures", description: "24/7 assistance for you and family (legal, fiscal, nutrition, mental health)." }
            ].map((benefit, i) => (
              <div key={i} className="border border-[#e0e0e0] p-6">
                <figure className="media mb-4">
                  <ImagePlaceholder width="100%" height="200px" className="aspect-square" />
                  <figcaption className="sr-only">{benefit.title} illustration</figcaption>
                </figure>
                <h3 data-field="item-title" className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">
                  {benefit.title}
                </h3>
                <p data-field="item-excerpt" className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[20px] text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section data-block="global.final-cta" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <SectionLabel>Final CTA</SectionLabel>
          <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
            Interested in joining us?
          </h2>
          <p data-field="paragraph" className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8 max-w-[600px] mx-auto">
            Ready to make an impact? We'd love to hear from you.
          </p>
          <WireframeButton 
            variant="primary" 
            data-field="link-title|link-href"
          >
            Submit your application → careers@example.com
          </WireframeButton>
          
          <figure className="media mt-8">
            <ImagePlaceholder className="w-32 h-32 mx-auto" />
            <figcaption className="sr-only">Small contact/booking placeholder</figcaption>
          </figure>
        </div>
      </section>

      <WireframeFooter />
    </div>
  );
}