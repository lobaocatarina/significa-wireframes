import React from 'react';
import {
  ImagePlaceholder,
  SectionLabel,
  BlogCard,
  WireframeButton,
  Hero,
  ProjectCard,
  MainCTA
} from '../wireframe/WireframeComponents';

export function BlogIndexPage() {
  return (
    <div className="bg-white min-h-screen">


      <Hero
        title="Insights & Ideas"
        description="Thoughts on design, development, and digital product strategy from our team."
        variant="compact"
        showMedia={false}
      />

      {/* Project List */}
      <div className="flex flex-col items-center py-16">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <SectionLabel>Blog</SectionLabel>
          <div className="flex gap-3 mb-8 mx-auto justify-center">
            <WireframeButton data-field="cta">All Posts</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">E-commerce</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">SaaS</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">Mobile</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">B2B</WireframeButton>
            <WireframeButton variant="secondary" data-field="cta">Healthcare</WireframeButton>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="group cursor-pointer">
                <BlogCard
                  title={`Blog Title ${i + 1}`}
                  description="Brief description of the blog post"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <WireframeButton variant="secondary" data-field="cta">Load More Posts</WireframeButton>
          </div>
        </div>
      </div>



    </div>
  );
}