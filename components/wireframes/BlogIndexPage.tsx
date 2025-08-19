import React from 'react';
import { 
  ImagePlaceholder, 
  SectionLabel, 
  BlogCard, 
  WireframeButton,
  WireframeHeader,
  WireframeFooter
} from '../wireframe/WireframeComponents';

export function BlogIndexPage() {
  return (
    <div className="bg-white min-h-screen">
      <WireframeHeader />
      
      {/* Header */}
      <div className="flex flex-col items-center pt-24 pb-16">
        <SectionLabel>Header</SectionLabel>
        <div className="max-w-[680px] text-center">
          <h1 className="text-[48px] font-medium text-black leading-[56px] mb-4">
            Insights & Ideas
          </h1>
          <p className="text-[18px] text-[rgba(0,0,0,0.8)] leading-[24px]">
            Thoughts on design, development, and digital product strategy from our team.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-[1400px] mx-auto px-5 pb-8">
        <SectionLabel>Filters</SectionLabel>
        <div className="flex gap-3">
          <WireframeButton>All</WireframeButton>
          <WireframeButton variant="secondary">Design</WireframeButton>
          <WireframeButton variant="secondary">Development</WireframeButton>
          <WireframeButton variant="secondary">Strategy</WireframeButton>
          <WireframeButton variant="secondary">Case Studies</WireframeButton>
        </div>
      </div>

      {/* Post List */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Post List</SectionLabel>
        <div className="grid grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <WireframeButton variant="secondary">Load More Posts</WireframeButton>
        </div>
      </div>

      {/* Logos Row */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <SectionLabel>Client Logos</SectionLabel>
        <div className="flex justify-center items-center gap-12">
          {[...Array(5)].map((_, i) => (
            <ImagePlaceholder key={i} width="120px" height="60px" />
          ))}
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}