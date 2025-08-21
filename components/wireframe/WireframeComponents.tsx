import React from 'react';

// Basic placeholder image component matching the imported style
export function ImagePlaceholder({
  width = "100%",
  height = "322px",
  className = ""
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-[#CCCCCC] bg-white overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0L100 100" stroke="#CCCCCC" strokeWidth="0.5" />
        <path d="M100 0L0 100" stroke="#CCCCCC" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

// Video placeholder with play button
export function VideoPlaceholder({
  width = "100%",
  height = "616px",
  className = "",
  label = ""
}: {
  width?: string;
  height?: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative border border-[#CCCCCC] bg-white overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0L100 100" stroke="#CCCCCC" strokeWidth="0.5" />
        <path d="M100 0L0 100" stroke="#CCCCCC" strokeWidth="0.5" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border border-[#7A7A7A] bg-white flex items-center justify-center">
          <div className="w-0 h-0 border-l-[8px] border-l-[#7A7A7A] border-y-[6px] border-y-transparent ml-1"></div>
        </div>
      </div>
      {label && (
        <div className="absolute bottom-4 left-4 text-[12px] text-[#7A7A7A] bg-white px-2 py-1 border border-[#e0e0e0]">
          {label}
        </div>
      )}
    </div>
  );
}

// Section label component
export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="text-[12px] text-[#7A7A7A] mb-4 uppercase tracking-wide justify-self-center">
      {children}
    </div>
  );
}

// Project card component
export function ProjectCard({
  title = "Project Title",
  description = "Description",
  industry = "Industry"
}: {
  title?: string;
  description?: string;
  industry?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <figure className="media" data-field="media-label">
        <ImagePlaceholder height="495px" />
        <figcaption className="sr-only">{title} project preview</figcaption>
      </figure>
      <div className="flex flex-col gap-1.5">
        <div data-field="item-title" className="text-[18px] font-medium text-black leading-[24px]">
          {title}
        </div>
        <div data-field="item-excerpt" className="text-[18px] font-medium text-black opacity-50 leading-[24px]">
          {description}
        </div>
        {industry && (
          <div className="text-[18px] font-medium text-black opacity-50 leading-[24px]">
            {industry}
          </div>
        )}
      </div>
    </div>
  );
}

// Blog card component
export function BlogCard({
  title = "Blog title",
  description = "Description"
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-5 h-[390px]">
      <figure className="media flex-1" data-field="media-label">
        <ImagePlaceholder height="322px" className="flex-1" />
        <figcaption className="sr-only">{title} blog post cover</figcaption>
      </figure>
      <div className="flex flex-col gap-1.5">
        <div data-field="item-title" className="text-[18px] font-medium text-black leading-[24px]">
          {title}
        </div>
        <div data-field="item-excerpt" className="text-[18px] font-medium text-black opacity-50 leading-[24px]">
          {description}
        </div>
      </div>
    </div>
  );
}

// Metric component
export function Metric({
  value = "98%",
  label = "Metric"
}: {
  value?: string;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-1 w-40">
      <div data-field="metric-value" className="text-[40px] font-medium text-black leading-[40px]">
        {value}
      </div>
      <div data-field="metric-label" className="text-[16px] font-medium text-black opacity-50 leading-[16px]">
        {label}
      </div>
    </div>
  );
}

// FAQ item component
export function FAQItem({
  question = "Question text here"
}: {
  question?: string;
}) {
  return (
    <div className="flex flex-col">
      <button className="flex items-center justify-between py-4 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#1f1f1f]">
        <div data-field="item-title" className="text-[18px] font-medium text-black leading-[24px] flex-1">
          {question}
        </div>
        <div className="w-6 h-6 flex items-center justify-center">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M7.19922 10.2002L11.9992 15.0002L16.7992 10.2002"
              stroke="#7A7A7A"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div className="h-px bg-[#E0E0E0]"></div>
    </div>
  );
}

// Title and description component
export function TitleDescription({
  title,
  description,
  cta,
  alignment = "center",
  services
}: {
  title: string;
  description?: string;
  cta?: string;
  alignment?: "center" | "left";
  services?: number;
}) {
  return (
    <div className={`flex flex-col gap-6 ${alignment === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <div className="flex flex-col gap-2">
        <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[36px] mx-32">
          {title}
        </h2>
        {description && (
          <p data-field="paragraph" className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px] mx-32">
            {description}
          </p>
        )}
      </div>
      {services && (
        <div className="w-full">
          <div className="grid grid-cols-2 gap-6">
            {[...Array(services)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <figure className="media" data-field="media-label">
                  <ImagePlaceholder width="100%" height="200px" />
                  <figcaption className="sr-only">Service {i + 1}</figcaption>
                </figure>
                <div data-field="item-title" className="text-[18px] font-medium text-black leading-[24px]">
                  Service
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {cta && (
        <WireframeButton variant="secondary" data-field="cta">
          {cta}
        </WireframeButton>
      )}
    </div>
  );
}

// Button component - consistent with wireframe style
export function WireframeButton({
  children = "Button Text",
  variant = "secondary",
  className = ""
}: {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  if (variant === "primary") {
    return (
      <button
        data-field="cta"
        className={`bg-[#1f1f1f] border border-[#1f1f1f] px-3 py-1.5 h-9 flex items-center justify-center hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-[#1f1f1f] focus:ring-offset-2 ${className}`}
      >
        <span className="text-[14px] font-medium text-white leading-[20px]">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      data-field="cta"
      className={`border border-[#e0e0e0] px-3 py-1.5 h-9 flex items-center justify-center hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#1f1f1f] focus:ring-offset-2 ${className}`}
    >
      <span className="text-[14px] font-medium text-[#1f1f1f] leading-[20px]">
        {children}
      </span>
    </button>
  );
}

// CTA Link component - for text-based CTAs that should look like buttons
export function WireframeCTA({
  children = "View all →"
}: {
  children?: string;
}) {
  return (
    <WireframeButton variant="secondary">
      {children}
    </WireframeButton>
  );
}

// Navigation header component
export function WireframeHeader({ onPageChange }: {
  onPageChange?: (page: string) => void;
}) {
  const pages = [
    'Home',
    'What We Do',
    // 'Service Detail',
    // 'Deliverables',
    // 'Expertise Landing',
    // 'Expertise Detail',
    'CX',
    'Work With Us',
    // 'Contact',
    'Projects Index',
    // 'Project Page',
    'Blog Index',
    'Playground',
    'About',
    'Careers',
    // 'B Corporation',
    // 'FAQ',
    // 'Legal',
    // 'Handbook'
  ];

  return (
    <div className="bg-white h-14 w-full border-b border-[#f0f0f0] z-50">
      <div className="flex items-center justify-between h-full px-6 max-w-[1400px] mx-auto">
        <div data-field="logo-text" className="text-[16px] font-medium text-[#1f1f1f] leading-[24px]">
          Significa
        </div>

        <nav className="flex gap-8 text-[16px] text-black leading-[24px] flex-wrap" role="navigation">
          {pages.map((page) => (
            <a key={page} className="hover:text-[#7A7A7A]" onClick={() => onPageChange?.(page)}>{page}</a>
          ))}

        </nav>
        <WireframeButton variant="primary">Get in Touch</WireframeButton>
      </div>
    </div>
  );
}

// Main CTA component - reusable across all pages
export function MainCTA({
  title = "We are ready to grow your business. Are you?",
  description = "Let’s get the conversation going… or keep browsing and see if we’re the right fit!",
  buttonText = "Get in touch"
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <div className="border border-[#e0e0e0] mx-auto max-w-[1400px] mb-16">
      <div className="flex flex-col items-center justify-center h-[316px] gap-6">
        <SectionLabel>Main CTA</SectionLabel>
        <h2 data-field="heading" className="text-[32px] font-medium text-black leading-[40px] text-center max-w-[600px]">
          {title}
        </h2>
        {description && (
          <p data-field="paragraph" className="text-[18px] text-black opacity-80 leading-[28px] text-center max-w-[500px]">
            {description}
          </p>
        )}
        <WireframeButton variant="primary" data-field="cta">{buttonText}</WireframeButton>
      </div>
    </div>
  );
}

// Hero component - standardized hero section for all pages
export function Hero({
  title,
  description,
  variant = "compact",
  showMedia = true,
  mediaHeight = "h-[600px]",
  cta
}: {
  title: string;
  description?: string;
  variant?: "basic" | "media" | "media-metrics" | "compact";
  showMedia?: boolean;
  mediaHeight?: string;
  cta?: string;
}) {
  return (
    <section data-block="global.hero" data-variant={variant} className="border-b border-[#e0e0e0] py-12">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 data-field="heading" className="text-[48px] leading-[52px] font-bold text-[#1f1f1f] mb-6">
            {title}
          </h1>
          {description && (
            <p data-field="lead" className="text-[18px] leading-[28px] text-[#7A7A7A] mb-8">
              {description}
            </p>
          )}
        </div>
        {showMedia && (
          <figure className="media" data-field="media-label">
            <ImagePlaceholder className={`w-full ${mediaHeight}`} />
            <figcaption className="sr-only">{title} hero image</figcaption>
          </figure>
        )}
        {cta && (
          <WireframeButton variant="secondary" data-field="cta" className="mt-4 mx-auto">
            {cta}
          </WireframeButton>
        )}

      </div>
    </section>
  );
}

// Footer component
export function WireframeFooter({ onPageChange }: {
  onPageChange?: (page: string) => void;
}) {
  const pages1 = [
    'Home',
    'What We Do',
    'Service Detail',
    'Deliverables',
    'Handbook'


  ];
  const pages2 = [

    'Expertise Detail',
    'CX',
    'Work With Us',
    'Contact',
    'Projects Index',

  ];
  const pages3 = [

    'Project Page',
    'Blog Index',
    'Playground',
    'About',
    'Careers',

  ];
  const pages4 = [

    'B Corporation',
    'FAQ',
    'Legal',
  ];



  return (
    <div className="bg-white border-t border-[#e0e0e0] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-4 gap-16 mb-16">
          <div className="flex flex-col gap-3">
            <div data-field="heading" className="text-[16px] font-medium text-black leading-[24px]">Pages</div>
            <nav className="flex flex-col gap-2 text-[16px] text-black leading-[24px]" role="navigation">
              {pages1.map((page) => (
                <a
                  key={page}
                  href="#"
                  data-field="link-title"
                  className="hover:text-[#7A7A7A]"
                  onClick={() => onPageChange?.(page)}
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <div data-field="heading" className="text-[16px] font-medium text-black leading-[24px]">Pages</div>
            <nav className="flex flex-col gap-2 text-[16px] text-black leading-[24px]" role="navigation">
              {pages2.map((page) => (
                <a
                  key={page}
                  href="#"
                  data-field="link-title"
                  className="hover:text-[#7A7A7A]"
                  onClick={() => onPageChange?.(page)}
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <div data-field="heading" className="text-[16px] font-medium text-black leading-[24px]">Pages</div>
            <nav className="flex flex-col gap-2 text-[16px] text-black leading-[24px]" role="navigation">
              {pages3.map((page) => (
                <a
                  key={page}
                  href="#"
                  data-field="link-title"
                  className="hover:text-[#7A7A7A]"
                  onClick={() => onPageChange?.(page)}
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <div data-field="heading" className="text-[16px] font-medium text-black leading-[24px]">Pages</div>
            <nav className="flex flex-col gap-2 text-[16px] text-black leading-[24px]" role="navigation">
              {pages4.map((page) => (
                <a
                  key={page}
                  href="#"
                  data-field="link-title"
                  className="hover:text-[#7A7A7A]"
                  onClick={() => onPageChange?.(page)}
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t border-[#e0e0e0] pt-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] text-gray-600 leading-[20px]">
              © 2025 Significa. All rights reserved.
            </div>
            <div data-field="logo-text" className="text-[14px] text-black leading-[20px]">
              Significa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}