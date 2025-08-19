import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  TitleDescription, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  Metric,
  FAQItem,
  MainCTA,
  Hero
} from '../wireframe/WireframeComponents';

export function CXPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      <Hero
        title="Customer Experience"
        description="Transparency is at the core of how we work. See what our clients really think about working with Significa."
        variant="compact"
        showMedia={false}
      />

      {/* Why We Track It */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Why We Track It</SectionLabel>
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              Why we measure CX
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center">
                We believe that great work speaks for itself, but we also believe in being accountable for the experience we create for our clients.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2 text-center">Continuous Improvement</h3>
                  <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                    Regular feedback helps us identify areas where we can improve our processes and service.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2 text-center">Transparency</h3>
                  <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                    We share our results openly because we believe in building trust through honesty.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2 text-center">Accountability</h3>
                  <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                    Measuring client satisfaction keeps us focused on delivering exceptional experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ImagePlaceholder height="500px" />
        </div>
      </div>

      {/* How We Track It */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-[1400px] mx-auto px-5">
          <SectionLabel>How We Track It</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-4 text-center">Our methodology</h2>
            <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] max-w-[823px] mx-auto">
              We use a combination of quantitative surveys and qualitative interviews to gather comprehensive feedback.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Post-Project Surveys',
                description: 'Detailed questionnaires sent after project completion to gather structured feedback.'
              },
              {
                title: 'In-Depth Interviews',
                description: 'One-on-one conversations with clients to understand their experience in detail.'
              },
              {
                title: 'Ongoing Check-ins',
                description: 'Regular touchpoints during projects to ensure we\'re meeting expectations.'
              }
            ].map((method, i) => (
              <div key={i} className="text-center">
                <ImagePlaceholder width="120px" height="120px" className="mx-auto mb-6" />
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">{method.title}</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transparency */}
      <div className="flex justify-center py-16">
        <TitleDescription
          title="Complete transparency"
          description="We believe in sharing our results openly. All data is collected by an independent third party to ensure objectivity and accuracy."
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 pb-16">
        <SectionLabel>Transparency</SectionLabel>
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">Independent Collection</h3>
              <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                All feedback is collected by a third-party research company to ensure unbiased results.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">Real Responses</h3>
              <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                We share actual client responses, both positive feedback and areas for improvement.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">Regular Updates</h3>
              <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                Our CX metrics are updated quarterly and shared publicly on this page.
              </p>
            </div>
          </div>
          <ImagePlaceholder height="400px" />
        </div>
      </div>

      {/* Survey Data Snippets */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-[1400px] mx-auto px-5">
          <SectionLabel>Survey Data Snippets</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">Current metrics</h2>
            <div className="flex justify-center gap-16 mb-16">
              <Metric value="98%" label="Client Satisfaction" />
              <Metric value="9.2/10" label="Quality Rating" />
              <Metric value="95%" label="Would Recommend" />
              <Metric value="4.8/5" label="Communication Score" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                quote: "The team at Significa exceeded our expectations. Their attention to detail and collaborative approach made the entire process smooth and enjoyable.",
                client: "Sarah Johnson, Product Director at TechCorp"
              },
              {
                quote: "Working with Significa was transformative for our business. They didn't just deliver a product, they delivered a solution that truly understood our users.",
                client: "Michael Chen, CEO at StartupXYZ"
              },
              {
                quote: "The quality of work and professionalism shown by the Significa team was outstanding. They were responsive, creative, and delivered on time.",
                client: "Emma Rodriguez, Marketing Lead at GrowthCo"
              },
              {
                quote: "I appreciate how Significa took the time to understand our business goals and translated them into a beautiful, functional product.",
                client: "David Thompson, Founder at InnovateLab"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 border border-[#e0e0e0]">
                <p className="text-[16px] text-black leading-[24px] mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-[14px] text-black opacity-50 leading-[20px]">
                  — {testimonial.client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-[800px] mx-auto px-5 py-16">
        <SectionLabel>FAQ</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] text-center">Frequently asked questions</h2>
        </div>
        <div className="space-y-4">
          <FAQItem question="How often do you collect client feedback?" />
          <FAQItem question="Who conducts the customer satisfaction surveys?" />
          <FAQItem question="Do you share negative feedback as well?" />
          <FAQItem question="How do you use this feedback to improve?" />
          <FAQItem question="Can I speak to previous clients?" />
        </div>
      </div>

      {/* Conversion */}
      <MainCTA 
        title="Experience the Significa difference"
        description="Ready to work with a team that truly cares about your success? Let's start a conversation."
        buttonText="Get Started"
      />

      <WireframeFooter />
    </div>
  );
}