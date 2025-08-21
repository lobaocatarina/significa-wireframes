import React from 'react';
import {
  ImagePlaceholder,
  SectionLabel,
  Hero,
  TitleDescription,
  MainCTA
} from '../wireframe/WireframeComponents';

export function CareersPage() {
  return (
    <div className="bg-white min-h-screen">


      {/* Hero/Intro */}
      <section data-block="global.hero">
        <Hero
          title="We are team of curiosity-driven go-getters."
          description="Our office in down town Porto is a jungle-like haven for our designers, developers, product managers, and digital strategists, and we like to party."
          variant="media"
          mediaHeight="h-[600px]"
        />

      </section>

      {/* Culture Note */}
      <section data-block="careers.culture-note">
        <div className="max-w-[1400px] mx-auto py-16 px-6">
          <SectionLabel>Our office</SectionLabel>
          <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-4 text-center">
            We are office-first.
          </h2>
          <p className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[24px] max-w-[600px] mx-auto mb-8 text-center">
            While we embrace flexibility, we believe the best work happens when we're together in our Porto office, collaborating face-to-face.
          </p>
          <div className="flex justify-center pb-6">
            <ImagePlaceholder width="800px" height="464px" />
          </div>

        </div>

      </section>

      {/* Open Positions */}
      <section data-block="global.faq-accordion" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Open Positions</SectionLabel>
          <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {[
              'Position 1',
              'Position 2',
              'Position 3',
              'Position 4'
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

      {/* Spontaneous Application */}
      <div className="flex flex-col items-center max-w-[1200px] mx-auto px-6 mb-16 w-full">
        <TitleDescription
          title="There are no open positions right now."
          description="But we are always on the lookout for talented folks! Submit your spontaneous application."
          cta="View full CX page →"
        />
      </div>

      {/* What We Stand For */}
      <section data-block="careers.what-we-stand-for" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-2 text-center">Guiding principles</h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] max-w-[823px] mx-auto mb-12 text-center">
            Our values guide everything we do, from how we work with clients to how we support each other as a team.
          </p>

          <div className="grid grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "Curiosity-driven approach",
                description: "We ask questions, explore possibilities, and never stop learning. Every challenge is an opportunity to grow and discover something new.",
                image: "Curiosity icon/illustration"
              },
              {
                title: "Collaborative team environment",
                description: "We believe the best work happens when diverse minds come together. Everyone's voice matters and contributes to our collective success.",
                image: "Collaboration icon/illustration"
              },
              {
                title: "Continuous learning and growth",
                description: "We invest in our people's development through training, conferences, workshops, and dedicated time for skill building.",
                image: "Growth icon/illustration"
              },
              {
                title: "Work-life balance and flexibility",
                description: "While we're office-first, we understand life happens. We offer flexibility when you need it and respect your time outside work.",
                image: "Balance icon/illustration"
              }
            ].map((value, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <ImagePlaceholder width="80px" height="80px" />
                </div>
                <div>
                  <h3 className="text-[20px] font-medium text-black leading-[24px] mb-3">{value.title}</h3>
                  <p className="text-[16px] text-[rgba(0,0,0,0.8)] leading-[24px]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section data-block="careers.benefits" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Benefits</SectionLabel>
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">Benefits beyond paycheck.</h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] max-w-[823px] mx-auto mb-12 text-center">
            We believe in taking care of our team with comprehensive benefits that support your work, health, and personal growth.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[
              { title: "Welcome pack", description: "Hoodie and essentials on day one.", eligibility: null },
              { title: "Flexible hours & location", description: "Office-first, with freedom to come and go.", eligibility: null },
              { title: "Learning stipend", description: "We cover courses and learning you choose.", eligibility: "Unlimited" },
              { title: "Equipment", description: "Whatever you need to excel.", eligibility: null },
              { title: "Career plan & growth", description: "1:1s, workshops, OKRs to support your goals.", eligibility: null },
              { title: "Annual retreat", description: "Three-night offsite focused on team time.", eligibility: null },
              { title: "Health insurance", description: "Coverage for you (and kids).", eligibility: null },
              { title: "Public transport subsidy", description: "We reimburse your commute.", eligibility: null },
              { title: "1% for the Planet", description: "Member of 1% for the Planet.", eligibility: null },
              { title: "Gym membership", description: "Gym a few meters from the office.", eligibility: null },
              { title: "25 vacation days", description: "22 of choice + birthday + Dec 24 & 31.", eligibility: null },
              { title: "Baby kit", description: "A box of goodies for new arrivals.", eligibility: null },
              { title: "Referral bonus", description: "€1000 on hire + €1000 after 1 year.", eligibility: null },
              { title: "Extra vacation day per year", description: "From year two; up to 30 days.", eligibility: "After year 2" },
              { title: "Period leave", description: "1 day per month.", eligibility: null },
              { title: "24/7 support", description: "Legal, fiscal, nutrition, mental health.", eligibility: null }
            ].map((benefit, i) => (
              <div key={i} className="p-6">
                <div className="mb-4">
                  <ImagePlaceholder width="60px" height="60px" className="mx-auto" />
                </div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-[14px] text-[rgba(0,0,0,0.8)] leading-[20px] mb-2 text-center">
                  {benefit.description}
                </p>
                {benefit.eligibility && (
                  <p className="text-[12px] text-[rgba(0,0,0,0.6)] leading-[16px] text-center italic">
                    {benefit.eligibility}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Quotes */}
      <section data-block="careers.quotes" className="border-t border-[#e0e0e0] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>Employee Quotes</SectionLabel>
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-12 text-center">What our team says</h2>

          <div className="grid grid-cols-2 gap-12">
            {[
              {
                quote: "Working at Significa has been transformative for my career. The learning opportunities are endless and the team truly cares about each other's growth.",
                name: "Maria Santos",
                role: "Senior Designer",
                hasHeadshot: true
              },
              {
                quote: "The collaborative environment here is unlike anywhere I've worked before. Every project feels like a team effort where everyone's expertise contributes to the final result.",
                name: "João Silva",
                role: "Lead Developer",
                hasHeadshot: true
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 border border-[#e0e0e0]">
                <p className="text-[16px] text-black leading-[24px] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.hasHeadshot && (
                    <ImagePlaceholder width="50px" height="50px" className="rounded-full" />
                  )}
                  <div>
                    <p className="text-[16px] font-medium text-black leading-[20px]">{testimonial.name}</p>
                    <p className="text-[14px] text-[rgba(0,0,0,0.6)] leading-[20px]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <MainCTA
        title="We are ready to grow your business. Are you?"
        buttonText="Get in touch"
      />

    </div>
  );
}