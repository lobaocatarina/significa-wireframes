import React from 'react';
import {
  VideoPlaceholder,
  ImagePlaceholder,
  SectionLabel,
  ProjectCard,
  BlogCard,
  Metric,
  FAQItem,
  TitleDescription,
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  MainCTA
} from '../wireframe/WireframeComponents';

export function HomePage() {
  return (
    <div className="bg-white min-h-screen">


      {/* 2. Hero */}
      <div className="flex flex-col items-center pt-16 pb-16">
        <SectionLabel>Hero</SectionLabel>
        <div className="max-w-[823px] text-center mb-16">
          <h1 data-field="heading" className="text-[48px] font-bold text-[#1f1f1f] leading-[52px]">
            We are a design and development agency building digital products that work beautifully.
          </h1>
        </div>
        <div className="w-full max-w-[1400px] px-6 mb-8">
          <VideoPlaceholder width="100%" height="616px" label="Showreel" />
        </div>
        <div className="max-w-[823px] text-center px-6">

          <p className="text-[14px] text-gray-500 leading-[20px]">
            Showreel — include metrics there?
          </p>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 3. Highlights / Selected Projects */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Highlights / Selected Projects</SectionLabel>
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            From strategy to code, we deliver user-centred platforms for ambitious businesses.
          </h2>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <ProjectCard key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Services */}
      <div className="flex flex-col items-center py-16">
        <div className="flex flex-col items-center max-w-[1200px] mx-auto px-6 w-full">
          <SectionLabel>Services</SectionLabel>
          <TitleDescription
            title="We are a team of designers, developers, and product managers working as one."
            description="When you work with us, you get the whole team to turn your ideas into seamless experiences. Whether it's an e-commerce platform, a mobile app, a SaaS product, we'll build it with care, curiosity, backed by 10 years of expertise, recognised by international awards."
            services={4}
            cta="Explore our services →"
          />
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 5. Blog / Insights */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Blog / Insights</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            We think things through.
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6 mb-16">
            {[...Array(3)].map((_, i) => (
              <BlogCard key={i} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <WireframeButton variant="secondary" data-field="cta">View All Blog Posts</WireframeButton>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Impact / B Corp */}
      <div className="flex justify-center py-16 max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex flex-col items-center">
          <SectionLabel>Impact / B Corp</SectionLabel>
          <TitleDescription
            title="We do business for good, building with impact in mind."
            description="As a certified B Corp and member of 1% for the Planet, we are committed to designing and building ethically, inclusively, and sustainably."
            cta="Learn more →"
          />
        </div>
      </div>

      <div className="flex justify-center pb-16">
        <ImagePlaceholder width="800px" height="464px" />
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 7. Playground / Experiments */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Playground / Experiments</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            We have fun!
          </h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
            Our Playground is where we let our creativity run wild. As avid contributors to the Open Source community, we are proud to share some of the tools we've built.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6 mb-16">
            {[...Array(3)].map((_, i) => (
              <ProjectCard key={i} title="Experiment Title" />
            ))}
          </div>
        </div>
        <div className="text-center">
          <WireframeButton variant="secondary" data-field="cta">Explore Playground</WireframeButton>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 8. Client Experience */}
      <div className="flex flex-col items-center py-16 max-w-[1200px] mx-auto px-6 w-full">
        <SectionLabel>Client Experience</SectionLabel>
        <TitleDescription
          title="We love what we do, and so do our clients."
          description="Our clients don't just get great products, they enjoy the process too. An independent entity runs customer satisfaction surveys and interviews to help us understand how we can keep continuously improving."
          cta="View full CX page →"
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


      {/* 9. Main CTA */}
      <MainCTA
        title="We are ready to grow your business. Are you?"
        buttonText="Get in touch"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* FAQ */}
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <SectionLabel>FAQ</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">Frequently asked questions</h2>
        </div>
        <div className="space-y-4">
          <FAQItem question="How often do you collect client feedback?" />
          <FAQItem question="Who conducts the customer satisfaction surveys?" />
          <FAQItem question="Do you share negative feedback as well?" />
          <FAQItem question="How do you use this feedback to improve?" />
          <FAQItem question="Can I speak to previous clients?" />
        </div>
      </div>


    </div>
  );
}