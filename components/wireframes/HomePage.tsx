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
  WireframeCTA,
  WireframeHeader,
  WireframeFooter,
  MainCTA,
  Hero
} from '../wireframe/WireframeComponents';

export function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header */}
      <WireframeHeader />
      
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
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px]">
            From strategy to code, we deliver user-centred platforms for ambitious businesses.
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <ProjectCard key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 4. About us snippet */}
      <div className="flex justify-center py-16">
        <div className="flex flex-col items-center">
          <SectionLabel>About us snippet</SectionLabel>
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
          <h2 className="text-[32px] font-medium text-black leading-[36px] text-center">
            We think things through.
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <BlogCard key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 6. Impact / B Corp */}
      <div className="flex justify-center py-16">
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
      <div className="flex justify-center py-16">
        <div className="flex flex-col items-center">
          <SectionLabel>Playground / Experiments</SectionLabel>
          <TitleDescription
            title="We have fun!"
            description="Our Playground is where we let our creativity run wild. As avid contributors to the Open Source community, we are proud to share some of the tools we've built."
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <ProjectCard key={i} title="Experiment Title" />
          ))}
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 8. Client Experience */}
      <div className="flex justify-center py-16">
        <div className="flex flex-col items-center">
          <SectionLabel>Client Experience</SectionLabel>
          <TitleDescription
            title="We love what we do, and so do our clients."
            description="Our clients don't just get great products, they enjoy the process too. An independent entity runs customer satisfaction surveys and interviews to help us understand how we can keep continuously improving."
            cta="View full CX page →"
          />
        </div>
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

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 9. Main CTA */}
      <MainCTA 
        title="We are ready to grow your business. Are you?"
        buttonText="Get in touch"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* 10. FAQs */}
      <div className="flex justify-center pb-16">
        <div className="flex flex-col items-center">
          <SectionLabel>FAQs</SectionLabel>
          <div className="w-[800px] space-y-0">
            <FAQItem question="Why should I work with Significa?" />
            <FAQItem question="What is it like to collaborate with Significa?" />
            <FAQItem question="How long does a project take from start until launch?" />
            <FAQItem question="What's your process for new projects?" />
            <FAQItem question="Do you work with startups or just established companies?" />
          </div>
        </div>
      </div>

      {/* 11. Footer */}
      <WireframeFooter />
    </div>
  );
}