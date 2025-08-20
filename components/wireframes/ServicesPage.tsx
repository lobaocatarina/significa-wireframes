import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  MainCTA,
  FAQItem,
  Hero
} from '../wireframe/WireframeComponents';

export function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      <Hero
        title="Custom design and development services built to grow your business."
        variant="basic"
        showMedia={false}
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Strategy Overview */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Strategy Overview</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            Strategy-led. Design-driven. Clean code.
          </h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
            We combine strategy, design and engineering to build digital products that are intuitive, user-centred, and built to last.
          </p>
        </div>
        <div className="flex justify-center pb-16">
          <ImagePlaceholder width="800px" height="300px" />
        </div>
        <div className="text-center">
          <p className="text-[14px] text-gray-500 leading-[20px]">
            Timeline graphic snippet
          </p>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Service Areas */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>Service Areas</SectionLabel>
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            Our five core service areas
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="space-y-16">
            {[
              {
                title: 'Think',
                description: 'We start every project with deep research and strategic thinking. Through discovery workshops, user research, and competitive analysis, we uncover insights that shape your product\'s direction and ensure it meets real user needs.'
              },
              {
                title: 'Design',
                description: 'From wireframes to pixel-perfect interfaces, we create designs that are both beautiful and functional. Our design process includes user experience mapping, visual design, and interactive prototyping to bring your vision to life.'
              },
              {
                title: 'Develop',
                description: 'We build robust, scalable applications using modern technologies and best practices. Our development process includes clean code architecture, comprehensive testing, and quality assurance to ensure your product performs flawlessly.'
              },
              {
                title: 'Launch',
                description: 'We ensure your product launches successfully and scales effectively. Our launch process includes deployment strategy, performance optimization, and ongoing technical support to guarantee a smooth release and continued growth.'
              },
              {
                title: 'Grow',
                description: 'We help you measure success and optimize for growth. Through analytics implementation, user feedback analysis, and continuous improvement strategies, we ensure your product evolves with your business needs and user expectations.'
              }
            ].map((service, i) => (
              <div key={i}>
                <div className="text-center mb-16">
                  <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center mb-4">{service.title}</h2>
                  <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
                    {service.description}
                  </p>
                </div>
                <div className="text-center mb-16">
                  <WireframeButton variant="secondary" data-field="cta">Learn more →</WireframeButton>
                </div>
                <div className="flex justify-center mb-16">
                  <ImagePlaceholder width="800px" height="400px" />
                </div>
                {i < 4 && (
                  <>
                    {/* Section Separator */}
                    <div className="border-t border-[#e0e0e0] mb-16"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* How we work */}
      <div className="flex flex-col items-center py-16">
        <SectionLabel>How we work</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
            A collaborative approach that puts you at the center.
          </h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
            We believe the best results come from close collaboration. Throughout every project, you're involved in key decisions, receive regular updates, and have direct access to our team. Our transparent process ensures you're never in the dark about progress, timelines, or next steps.
          </p>
        </div>
      </div>

      <div className="flex justify-center pb-16">
        <ImagePlaceholder width="800px" height="400px" />
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* FAQs */}
      <div className="flex justify-center pb-16">
        <div className="flex flex-col items-center">
          <SectionLabel>FAQs</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] max-w-[823px] mx-auto text-center">
              Frequently asked questions about our services
            </h2>
          </div>
          <div className="w-[800px] space-y-0">
            <FAQItem question="What services do you offer?" />
            <FAQItem question="How long do projects typically take?" />
            <FAQItem question="What is your design and development process?" />
            <FAQItem question="Do you work with startups or enterprise clients?" />
            <FAQItem question="What technologies do you specialize in?" />
            <FAQItem question="How do you handle project communication and updates?" />
            <FAQItem question="Can you help with ongoing maintenance and support?" />
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      {/* Conversion CTA */}
      <MainCTA 
        title="Start a project."
        buttonText="Get in touch"
      />

      {/* Section Separator */}
      <div className="border-t border-[#e0e0e0]"></div>

      <WireframeFooter />
    </div>
  );
}