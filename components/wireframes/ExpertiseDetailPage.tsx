import React from 'react';
import {
  ImagePlaceholder,
  SectionLabel,
  ProjectCard,
  BlogCard,
  TitleDescription,
  WireframeButton,
  Metric,
  Hero
} from '../wireframe/WireframeComponents';

export function ExpertiseDetailPage() {
  return (
    <div className="bg-white min-h-screen">


      <Hero
        title="E-commerce & Retail Expertise"
        description="Building scalable e-commerce platforms that drive sales, enhance customer experiences, and grow your business."
        variant="media"
        mediaHeight="h-[400px]"
      />

      {/* Industry Overview */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <SectionLabel>Industry Overview</SectionLabel>
        <div className="grid grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-6 text-center">
              E-commerce challenges we solve
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2 text-center">Conversion Optimization</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                  Designing user experiences that guide customers from discovery to purchase with minimal friction.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2 text-center">Mobile Commerce</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                  Creating seamless mobile shopping experiences that drive mobile revenue growth.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-black leading-[24px] mb-2 text-center">Inventory Management</h3>
                <p className="text-[16px] text-black opacity-80 leading-[24px] text-center">
                  Building systems that efficiently manage complex inventory across multiple channels.
                </p>
              </div>
            </div>
          </div>
          <ImagePlaceholder height="500px" />
        </div>

        <div className="grid grid-cols-4 gap-8 text-center">
          <Metric value="25+" label="E-commerce Projects" />
          <Metric value="$50M+" label="Revenue Generated" />
          <Metric value="2.5x" label="Average Sales Increase" />
          <Metric value="98%" label="Client Retention" />
        </div>
      </div>

      {/* Deep Content Sections */}
      <div className=" py-16">

        <div className="max-w-[1400px] mx-auto px-6">
          <SectionLabel>Deep Content</SectionLabel>

          {/* Services for this industry */}
          <div className="mb-16">
            <h2 className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">Our e-commerce services</h2>
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  title: 'Platform Development',
                  description: 'Custom e-commerce platforms built for scalability and performance.',
                  features: ['Custom shopping cart', 'Payment gateway integration', 'Order management', 'Customer portal']
                },
                {
                  title: 'UX/UI Design',
                  description: 'User-centered design that maximizes conversions and customer satisfaction.',
                  features: ['Conversion optimization', 'Mobile-first design', 'A/B testing', 'User research']
                },
                {
                  title: 'Integration & APIs',
                  description: 'Seamless integration with existing systems and third-party services.',
                  features: ['ERP integration', 'CRM connectivity', 'Analytics setup', 'Marketing automation']
                }
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 border border-[#e0e0e0]">
                  <ImagePlaceholder width="80px" height="80px" className="mb-4" />
                  <h3 className="text-[18px] font-medium text-black leading-[24px] mb-3 text-center">{service.title}</h3>
                  <p className="text-[16px] text-black opacity-80 leading-[24px] mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, j) => (
                      <li key={j} className="text-[14px] text-black opacity-50">• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Case study highlight */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <ImagePlaceholder height="400px" />
            <div>
              <h2 className="text-[32px] font-medium text-black leading-[36px] mb-4 text-center">Case Study: RetailCorp</h2>
              <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mb-6">
                How we helped a traditional retailer transition to e-commerce and increase online sales by 400% in 6 months.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-[16px] text-black">Revenue Increase</span>
                  <span className="text-[16px] font-medium text-black">400%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[16px] text-black">Conversion Rate</span>
                  <span className="text-[16px] font-medium text-black">3.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[16px] text-black">Mobile Traffic</span>
                  <span className="text-[16px] font-medium text-black">75%</span>
                </div>
              </div>
              <WireframeButton variant="secondary">Read Full Case Study</WireframeButton>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <SectionLabel>Technology Stack</SectionLabel>
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-black leading-[36px] mb-4 text-center">Technologies we use</h2>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] text-center max-w-[823px] mx-auto">
            We work with the latest e-commerce technologies to ensure your platform is fast, secure, and scalable.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-8">
          {['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js', 'Stripe'].map((tech, i) => (
            <div key={i} className="text-center">
              <ImagePlaceholder width="80px" height="80px" className="mx-auto mb-3" />
              <span className="text-[14px] text-black">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Projects/Playground */}
      <div className="flex flex-col items-center py-16">
        <TitleDescription
          title="E-commerce projects"
          description="See examples of e-commerce solutions we've built for businesses like yours."
          cta="View all e-commerce projects →"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <SectionLabel>Selected Projects/Playground</SectionLabel>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <ProjectCard
              key={i}
              title={`E-commerce Project ${i + 1}`}
              description="Custom e-commerce platform"
              industry="Retail"
            />
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <SectionLabel>Related Articles</SectionLabel>
        <h2 className="text-[32px] font-medium text-black leading-[36px] mb-8 text-center">E-commerce insights</h2>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <BlogCard
              key={i}
              title="E-commerce Best Practices"
              description="Tips for building successful online stores"
            />
          ))}
        </div>
      </div>

      {/* Conversion */}
      <div className="border border-[#e0e0e0] mx-auto max-w-[1400px] mb-16">
        <div className="flex flex-col items-center justify-center h-[316px] gap-6">
          <SectionLabel>Conversion</SectionLabel>
          <TitleDescription
            title="Ready to grow your e-commerce business?"
            description="Let's discuss how we can help you build a platform that drives sales and delights customers."
          />
          <WireframeButton>Start Your E-commerce Project</WireframeButton>
        </div>
      </div>


    </div>
  );
}