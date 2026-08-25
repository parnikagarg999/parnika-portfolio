---
name: parnika-portfolio
description: Build and maintain Parnika Garg's personal strategy and operations portfolio website. Use this skill when creating, editing, or improving the portfolio site in Codex.
---

# Parnika Portfolio Website

Build a premium, editorial-style personal portfolio for Parnika Garg, positioned around Strategy, Operations, Business Transformation, Finance, and an MBA from IIM Kozhikode.

## Product direction

The website should feel:
- Premium and professional
- Consulting/strategy oriented rather than developer-oriented
- Minimal, editorial, and highly readable
- Mobile responsive
- Fast and accessible
- Suitable for recruiters and hiring managers

Avoid:
- Generic developer portfolio aesthetics
- Excessive gradients
- Neon colors
- Overly complex animations
- Stock-photo-heavy layouts
- Unsubstantiated achievements or metrics

## Recommended stack

Prefer:
- Next.js
- TypeScript
- Tailwind CSS
- Lucide icons where icons are useful
- CSS transitions / lightweight animation

If the existing repository uses another stack, preserve the existing stack unless there is a strong reason to migrate.

## Core pages/sections

1. Hero
   - Parnika Garg
   - Strategy & Operations positioning
   - Short value proposition
   - Primary CTA: View Experience
   - Secondary CTA: Get in Touch
   - LinkedIn and CV links

2. About
   - MBA from IIM Kozhikode
   - Professional journey across finance, strategy, analytics and transformation
   - Current transition/positioning toward Strategy and Operations

3. Experience
   - Timeline-style presentation
   - Company, role, dates
   - Impact-oriented bullets
   - Skills/tags

4. Selected Work / Projects
   - Market Entry Strategy — Loio
   - FP&A Automation / Predictive Capabilities
   - Business Analysis
   - MBA consulting project
   - Each project should communicate Problem → Approach → Recommendation → Outcome when source material supports it

5. Expertise
   - Strategy
   - Operations
   - Finance / FP&A
   - Analytics
   - Stakeholder Management
   - Business Transformation

6. Education
   - IIM Kozhikode
   - MBA

7. Contact
   - Email
   - LinkedIn
   - Download CV

## Visual system

Use an editorial palette:
- Background: warm off-white / cream
- Text: charcoal / near-black
- Muted text: warm gray
- Accent: restrained terracotta / rust
- Borders: light warm gray

Typography:
- Editorial serif for major headlines
- Clean sans-serif for body copy and UI

Use generous whitespace, strong hierarchy, thin borders, rounded pill tags, and subtle hover states.

## Content rules

Do not invent:
- Employers
- Job titles
- Dates
- Quantified achievements
- Awards
- Client names
- Contact details

When information is missing, use an obvious placeholder and make it easy to replace.

Use the user's CV as the source of truth whenever one is provided.

## UX requirements

- Responsive at mobile, tablet, and desktop widths
- Sticky navigation
- Smooth anchor scrolling
- Visible keyboard focus states
- Accessible contrast
- Semantic HTML
- Optimized images
- Clear CTA hierarchy
- No layout shift from images/fonts

## Implementation workflow

When asked to build or improve the portfolio:

1. Inspect the existing repository before changing anything.
2. Identify the framework and existing design system.
3. Preserve useful existing components.
4. Implement the requested change.
5. Run the project's lint/typecheck/build/test commands where available.
6. Fix errors.
7. Summarize changed files and verification results.

## Current content seed

Use these facts as initial content only; replace or expand them when the user's CV provides more precise information:

- Name: Parnika Garg
- Education: IIM Kozhikode, MBA
- Positioning: Strategy & Operations
- Relevant areas: Finance, FP&A, Strategy, Business Transformation, Analytics
- Internship: Accenture Strategy
- Project: Loio market entry, pricing and promotional strategy
- Project: FP&A predictive capabilities / automation
- MBA project: collaboration with international students from 5+ countries on a client challenge

## Quality bar

The final site should look like a polished professional portfolio that a strategy/operations recruiter would take seriously. Favor clarity and evidence of impact over decorative design.
