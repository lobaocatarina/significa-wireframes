import React from 'react';

interface WireframeNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function WireframeNavigation({ currentPage, onPageChange }: WireframeNavigationProps) {
  const pages = [
    'Home',
    'Services', 
    'Careers',
    'Blog Index',
    'Deliverables',
    'Projects Index',
    'Project Page',
    'Playground',
    'About',
    'CX',
    'Expertise Landing',
    'Expertise Detail',
    'FAQ',
    'Final Conversion'
  ];

  return (
    <div className="bg-[#f8f9fa] border-b border-[#e0e0e0] p-4 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[14px] font-medium text-[#7A7A7A] mr-4">
            Wireframes:
          </span>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1.5 text-[14px] leading-[20px] border transition-colors ${
                currentPage === page
                  ? 'bg-[#1f1f1f] border-[#1f1f1f] text-white font-medium'
                  : 'bg-white border-[#e0e0e0] text-[#1f1f1f] hover:bg-[#f5f5f5]'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-[14px] text-[#7A7A7A]">
            Current: {currentPage}
          </span>
        </div>
      </div>
    </div>
  );
}