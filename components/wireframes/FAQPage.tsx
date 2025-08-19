import React from 'react';
import { 
  SectionLabel, 
  TitleDescription, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter,
  FAQItem,
  MainCTA
} from '../wireframe/WireframeComponents';

export function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      {/* Intro */}
      <div className="flex flex-col items-center pt-24 pb-16">
        <SectionLabel>Intro</SectionLabel>
        <TitleDescription
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about working with Significa and our process."
        />
      </div>

      {/* Grouped FAQs */}
      <div className="max-w-[800px] mx-auto px-5 py-16">
        <SectionLabel>Grouped FAQs</SectionLabel>
        
        {/* General */}
        <div className="mb-12">
          <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">General</h2>
          <div className="space-y-4">
            <FAQItem question="What services does Significa offer?" />
            <FAQItem question="What industries do you work with?" />
            <FAQItem question="Where are you located?" />
            <FAQItem question="Do you work with startups?" />
            <FAQItem question="What makes Significa different?" />
          </div>
        </div>

        {/* Process & Timeline */}
        <div className="mb-12">
          <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">Process & Timeline</h2>
          <div className="space-y-4">
            <FAQItem question="What is your design and development process?" />
            <FAQItem question="How long does a typical project take?" />
            <FAQItem question="How do you handle project communication?" />
            <FAQItem question="Do you offer ongoing support and maintenance?" />
            <FAQItem question="Can you work with our existing team?" />
          </div>
        </div>

        {/* Pricing & Budget */}
        <div className="mb-12">
          <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">Pricing & Budget</h2>
          <div className="space-y-4">
            <FAQItem question="How do you price your projects?" />
            <FAQItem question="What is the minimum project budget?" />
            <FAQItem question="Do you offer fixed-price projects?" />
            <FAQItem question="What payment terms do you offer?" />
            <FAQItem question="Are there any additional costs?" />
          </div>
        </div>

        {/* Technical */}
        <div className="mb-12">
          <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">Technical</h2>
          <div className="space-y-4">
            <FAQItem question="What technologies do you use?" />
            <FAQItem question="Do you provide source code?" />
            <FAQItem question="How do you ensure security?" />
            <FAQItem question="Do you handle hosting and deployment?" />
            <FAQItem question="Can you integrate with our existing systems?" />
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-12">
          <h2 className="text-[24px] font-medium text-black leading-[32px] mb-8">Getting Started</h2>
          <div className="space-y-4">
            <FAQItem question="How do I get started with a project?" />
            <FAQItem question="What information do you need from me?" />
            <FAQItem question="Do you sign NDAs?" />
            <FAQItem question="How quickly can you start?" />
            <FAQItem question="What if I'm not sure about my requirements?" />
          </div>
        </div>
      </div>

      {/* Still have questions */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-[600px] mx-auto px-5 text-center">
          <SectionLabel>Still Have Questions</SectionLabel>
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-4">
            Still have questions?
          </h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-8">
            Can't find the answer you're looking for? We're here to help. Get in touch and we'll get back to you as soon as possible.
          </p>
          <div className="flex justify-center gap-4">
            <WireframeButton>Contact Us</WireframeButton>
            <WireframeButton variant="secondary">Schedule a Call</WireframeButton>
          </div>
        </div>
      </div>

      {/* Conversion */}
      <MainCTA 
        title="Ready to get started?"
        description="Let's discuss your project and see how we can help bring your vision to life."
        buttonText="Start a Project"
      />

      <WireframeFooter />
    </div>
  );
}