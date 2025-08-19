# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a structured website for Significa, a design and development agency. The site follows a comprehensive information architecture with 19 distinct page types, each with specific content blocks and HTML structure requirements.

## Global Conventions

### Hero Sections
Every page starts with a hero section using `data-block="global.hero"`. The single `<h1>` of each page lives in the hero section.

### Accessibility & Landmarks
- Skip link targeting `#content`
- Semantic HTML: `header`, `main#content`, `footer`
- Ordered headings progression (h1 → h2 → h3)
- Visible focus indicators
- Labelled media elements

### Media Placeholders
Every `<section>` must include at least one media placeholder:
```html
<figure class="media" data-field="media-label">
  <figcaption>Media description</figcaption>
</figure>
```

### Data Attributes System

#### Block Scopes (data-block)
- **global.*** - Shared components across all pages
- **home.*** - Homepage-specific blocks
- **what-we-do.*** - Service overview page
- **service.*** - Individual service detail pages
- **deliverable.*** - Deliverable detail pages
- **expertise.*** - Expertise area pages
- **cx.*** - Customer Experience page
- **work-with-us.*** - Work with us page
- **contact.*** - Contact/conversion page
- **projects.*** - Projects index and detail pages
- **blog.*** - Blog index and articles
- **playground.*** - Playground/experiments page
- **about.*** - About page
- **careers.*** - Careers page
- **bcorp.*** - B Corp page
- **faq.*** - FAQ page
- **legal.*** - Legal pages
- **handbook.*** - Handbook page

#### Stable Fields (data-field)
- `logo-text` - Company logo text
- `heading` - Section headings
- `eyebrow` - Small text above headings
- `lead` - Lead paragraph/intro text
- `paragraph` - Body paragraphs
- `cta` - Call-to-action buttons
- `link-title` - Link text
- `link-href` - Link URLs
- `media-label` - Media descriptions
- `item-title` - Card/item titles
- `item-excerpt` - Card/item descriptions
- `metric-value` - Numerical values
- `metric-label` - Metric descriptions

## Global Blocks Library

These components use identical HTML structure across pages with `data-version="v1"`:

- **global.site-header** - Main site navigation
- **global.site-footer** - Footer with links
- **global.hero** - Hero sections (variants: basic, media, media-metrics, compact)
- **global.selected-work-grid** - Featured project grid
- **global.cx-preview** - Customer experience teaser
- **global.services-teaser** - Services overview section
- **global.blog-preview** - Latest blog posts
- **global.playground-preview** - Playground experiments teaser
- **global.work-with-us-teaser** - Contact/collaboration teaser
- **global.faq-accordion** - FAQ accordion component
- **global.final-cta** - Final call-to-action section

## Navigation Structure

### Primary Navigation (Header)
Home • What we do • Projects • Blog • Work with us • Careers • Playground • About • CX • Handbook • Contact

### Quick Links (Footer)
Includes all primary navigation items plus legal pages.

**Important**: Set `aria-current="page"` on the active navigation link.

## Page Structure Documentation

### 1. Home (index.html)
- `global.site-header`
- `global.hero` (variant: media-metrics) - H1: "We are a design and development agency building digital products that work beautifully." + showreel + 4 KPI cards
- `home.highlights` - H2: "From strategy to code, we deliver user-centred platforms for ambitious businesses." + 3 lists (Recent projects/articles/experiments)
- `home.selected-work` - 3 project tiles with thumbnails, descriptions, metrics, awards
- `home.cx-data` - H2: "CX Data." + link to CX page + survey snippet
- `global.services-teaser`
- `global.blog-preview`
- `global.bcorp-preview`
- `global.playground-preview`
- `global.cx-preview`
- `global.work-with-us-teaser`
- `global.faq-accordion`
- `global.final-cta`
- `global.site-footer`

### 2. What we do (what-we-do.html)
- `global.site-header`
- `global.hero` (compact) - H1: "What we do." + lead
- `what-we-do.services` - 5 service cards (Think, Design, Develop, Launch, Grow)
- `what-we-do.deliverables` - 6 deliverable cards
- `what-we-do.playground` - Playground link + 3 POCs
- `what-we-do.awards` - Minimal logos/list
- `what-we-do.expertise` - Grid linking to 11 expertise pages
- `what-we-do.how-we-work` - H2: "How we work." + process description
- `global.faq-accordion`
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 3. Service Detail Pages (what-we-do-think.html, design.html, develop.html, launch.html, grow.html)
- `global.site-header`
- `global.hero` (compact) - H1: Service name + lead + 16:9 media
- `service.how-we-work` - H2: "How we work." + link to Handbook
- `service.awards` - Minimal logos/list
- `service.playground` - Playground link + 3 POCs
- `global.selected-work-grid` - H2: "Selected projects" (3 tiles)
- `service.related-articles` - H2: "Related articles" (3 cards + CTA)
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 4. Deliverable Detail Pages (deliverables-websites.html, mobile-app.html, web-app.html, watch-app.html, desktop-app.html, ecommerce.html)
- `global.site-header`
- `global.hero` (compact) - H1: Deliverable name + value statement
- `deliverable.how-we-approach` - H2: "How we approach these projects"
- `deliverable.success-metrics` - H2: "Success metrics" with metric-value + metric-label cards
- `deliverable.awards` - Minimal
- `deliverable.selected-and-playground` - H2: "Selected projects and Playground"
- `deliverable.related-articles` - 3 cards + CTA
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 5. Expertise Detail Pages (expertise-health-wellness.html, hospitality.html, sports-entertainment.html, finance.html, commerce.html, education.html, real-estate.html, sustainability.html, mobility.html, hr-communication.html, art-culture.html)
- `global.site-header`
- `global.hero` (compact) - H1: "[Expertise Name]." + intro
- `expertise.content` - H2: "Deep dive" (trends, challenges, approach)
- `expertise.selected-and-playground` - H2: "Selected projects and Playground"
- `expertise.related-projects` - H2: "Related projects" (1-3 items)
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 6. Customer Experience (cx.html)
- `global.site-header`
- `global.hero` (compact) - H1: "Customer Experience (CX)." + measurement explanation
- `cx.why-we-track-it` - H2: "Why we track it"
- `cx.how-we-track-it` - H2: "How we track it" + survey/interview subcards
- `cx.transparency` - H2: "Transparency" + survey data + interview snippets
- `global.faq-accordion`
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 7. Work with us (work-with-us.html)
- `global.site-header`
- `global.hero` (compact) - H1: "Work with us." + collaboration explanation
- `work-with-us.summary` - H2: "Working with Significa" + Handbook link
- `work-with-us.team-allocation` - H2: "Team allocation" + "We are not body leasing; we assemble a dedicated team."
- `work-with-us.pricing` - H2: "Pricing & rates" + Handbook link
- `global.cx-preview`
- `work-with-us.testimonials` - H2: "Testimonials" (2-3 quotes/clips)
- `global.faq-accordion`
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 8. Contact (contact.html)
- `global.site-header`
- `global.hero` (compact) - H1: "I have a project." + contact options
- `contact.form` - H2: "Contact form" (Name, Email, Company, Summary, Budget, Timeline, Attachment, Consent)
- `contact.email` - H2: "Email address"
- `contact.call` - H2: "Book a call"
- `contact.locations` - H2: "Locations" (Porto + Remote)
- `global.site-footer`

### 9. Projects Index (projects.html)
- `global.site-header`
- `global.hero` (compact) - H1: "Projects." + lead
- `projects.grid` - H2: "Case studies" with project cards
- `projects.related-articles` - H2: "Related articles"
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 10. Project Detail (project-<slug>.html)
- `global.site-header`
- `global.hero` (media) - H1: Project title + description + hero media
- `project.media-gallery` - H2: "Gallery"
- `project.success-metrics` - H2: "Success metrics"
- `project.awards` - H2: "Awards"
- `project.facts` - H2: "Project facts"
- `project.deliverables-services` - H2: "Deliverables & Services"
- `project.links` - H2: "Links"
- `project.content` - H2: "The story"
- `project.related-articles` - H2: "Related articles"
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 11. Blog Index (blog.html)
- `global.site-header`
- `global.hero` (compact) - H1: "Blog." + "Think. Design. Develop. Launch. Repeat."
- `blog.grid` - H2: "Latest posts" with article cards
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 12. Blog Article (blog-<slug>.html)
- `global.site-header`
- `global.hero` (media) - H1: Article title + meta + 16:9 cover
- `blog.article-body` - H2: "Article" with content blocks
- `blog.related-articles` - H2: "Related articles"
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 13. Playground (playground.html)
- `global.site-header`
- `global.hero` (compact) - H1: "Playground." + experimentation lead
- `playground.why` - H2: "Why we do it"
- `playground.open-source` - H2: "Open source" + GitHub link
- `playground.projects` - H2: "Projects" with GitHub repo cards
- `global.site-footer`

### 14. About (about.html)
- `global.site-header`
- `global.hero` (media) - H1: "About Significa." + team/banner
- `about.team` - H2: "Team"
- `about.locations` - H2: "Locations"
- `about.values-manifesto` - H2: "Values & Manifesto"
- `about.continuous-improvement` - H2: "Continuous improvement"
- `global.bcorp-preview` - H2: "B Corp"
- `about.careers` - H2: "Careers"
- `global.final-cta` (optional)
- `global.site-footer`

### 15. Careers (careers.html)
- `global.site-header`
- `global.hero` (media) - H1: "Careers at Significa." + team images
- `careers.open-positions` - H2: "Open positions"
- `careers.values` - H2: "Values"
- `careers.benefits` - H2: "Benefits"
- `global.final-cta` - H2: "Interested in joining us?"
- `global.site-footer`

### 16. B Corp (b-corp.html)
- `global.site-header`
- `global.hero` (media) - H1: "B Corp."
- `bcorp.overview` - H2: "Overview"
- `bcorp.commitments` - H2: "Impact commitments"
- `bcorp.impact-reports` - H2: "Impact Reports"
- `bcorp.transparency` - H2: "Transparency"
- `blog.related-articles` (optional)
- `global.final-cta` - H2: "Start a project."
- `global.site-footer`

### 17. FAQ (faq.html)
- `global.site-header`
- `global.hero` (compact) - H1: "Frequently Asked Questions."
- `faq.groups` - H2: "Questions" grouped by topic using global.faq-accordion
- `global.final-cta` - H2: "Still have questions?"
- `global.site-footer`

### 18. Legal Pages (privacy.html, terms.html, cookies.html)
- `global.site-header`
- `global.hero` (compact) - H1: Page title
- `legal.content` - H2: "Overview" + sections
- `global.site-footer`

### 19. Handbook (handbook.html)
- `global.site-header`
- `global.hero` (compact) - H1: "Handbook."
- `handbook.overview` - H2: "Working with Significa"
- `handbook.billing` - H2: "Billing & Invoicing"
- `handbook.links` - H2: "All sections"
- `global.site-footer`

## Implementation Guidelines

### Working with This Codebase
When building pages, follow these conventions:
1. Use semantic HTML with proper landmark elements
2. Include required data-block and data-field attributes
3. Ensure every section has at least one media placeholder
4. Follow the established heading hierarchy (H1 in hero, H2 for sections)
5. Use consistent global blocks across pages
6. Implement proper accessibility features (skip links, focus indicators, aria-current)

### Content Structure Rules
- One H1 per page (always in the hero section)
- Progressive heading hierarchy (H1 → H2 → H3)
- Media placeholders with figcaptions in every section
- Consistent use of metric-value and metric-label for statistics
- Link to Handbook pages where referenced

### Final Checklist
When completing a page:
- [ ] One H1 in the hero section
- [ ] Every section has a labelled media placeholder
- [ ] Correct data-block scopes and data-field names
- [ ] Header & footer include Handbook in navigation
- [ ] Active nav link uses aria-current="page"
- [ ] Success metrics included on deliverable pages
- [ ] All links are functional and properly labelled

## Development Commands

- `bun run dev` - Start the development server
- `bun run build` - Build for production (TypeScript compilation + Vite build)
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

## Technical Stack

- **Runtime**: Bun (package manager and runtime)
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7 with React plugin
- **CSS Framework**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **UI Components**: Custom wireframe components + Radix UI primitives
- **PDF Generation**: html2canvas + jsPDF

## Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** in `globals.css` with light/dark theme support
- **Consistent design tokens** for colors, spacing, and typography
- **shadcn/ui components**

### Wireframe Component System

The wireframe components follow a specific design pattern:
- Consistent border styling using `border-[#e0e0e0]` or `border-[#CCCCCC]`
- Typography hierarchy: 48px for h1, 32px for h2, 18px for body text, 14px for small text
- Color palette: `#1f1f1f` for primary text, `#7A7A7A` for muted text
- Spacing follows 4px grid system (gap-1.5, gap-4, gap-6, etc.)
- All placeholder components (images, videos) include diagonal line indicators

### Layout Patterns
- Sections separated by `border-t border-[#e0e0e0]` dividers
- Content centered with `max-w-[1400px] mx-auto px-6` containers
- Grid layouts use `grid-cols-3` for cards and `gap-6` spacing

## Dependencies

Key external libraries:
- `react` - Core framework
- Tailwind CSS ecosystem for styling