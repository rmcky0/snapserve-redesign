# SnapServe Landing Page Redesign

A modern, responsive landing page redesign for SnapServe, built as a technical submission for the CubeTech Solutions internship program. This project focuses on transforming a legacy structure into a scalable, maintainable React application with a focus on UI/UX and performance.

## Overview

**SnapServe** provides restaurants with a digital interface for QR-based ordering, kitchen management, and sales analytics. This redesign modernized the landing page to improve performance, cross-device responsiveness, and overall user engagement.

## Tech Stack

- **React 19** with function components and hooks
- **Vite** for fast local development and optimized production builds
- **CSS** using CSS Grid, Flexbox, custom properties, and utility-focused styles
- **Lucide React** for lightweight SVG icons
- **Intersection Observer API** for scroll-based reveal animations
- **Calendly embed** for scheduling demo requests without leaving the page
- **ESLint** for code quality and standards enforcement

## Key Features

- **Modern landing page redesign** built around clear restaurant workflow messaging for SnapServe
- **Mobile-first responsive design** with adaptive layouts across phones, tablets, and desktop
- **Section-based React architecture** with reusable Hero, Features, Analytics, Operations, Pricing, CTA, and footer components
- **Scroll-triggered animations** that only run when content enters the viewport, reducing unnecessary rendering cost
- **Accessible interaction patterns** with click-friendly navigation, ARIA dialog support for the modal, and keyboard-friendly behavior
- **Dynamic active-section tracking** so the navigation state reflects the user’s current page position
- **Lightweight implementation** with no UI framework dependency, keeping bundle size low and performance high

## Explanation of Tech Stack and Design Decisions

### Tech Stack Choices

- **React 19 & Vite**: Chosen to leverage the latest React patterns for efficient state management and component lifecycle handling, while Vite ensures minimal build times.
- **Lucide React**: Selected for its clean, consistent aesthetic and lightweight footprint, allowing for easily accessible iconography.
- **Vanilla CSS**: I chose to avoid heavy CSS frameworks to maintain a minimal dependency footprint, relying on native CSS Grid and Flexbox for high performance.
- **Calendly Embed**: Retained to provide a seamless, integrated user experience for scheduling demos directly within the landing page.

### Design Decisions

- **Mobile-first structure**: prioritized readability and touch interaction by stacking content vertically on small screens before scaling to multi-column layouts
- **Visual Identity (The "Amber" Theme)**: I chose an amber color palette as it is historically associated with appetite and warmth in the food industry, helping to build immediate trust.
- **Content-driven componentization**: centralized page copy and content in `src/data/snapserveContent.js`, while each major section lives in its own component file for easier maintenance
- **Performance-first transitions**: Utilized the Intersection Observer API for scroll animations, which allows for complex reveal effects without the performance penalty of layout thrashing.
- **Cursor Glow & Floating Cards**: Implemented a cursor-following glow and floating UI cards to create a premium, high-tech feel that makes the interface feel responsive to the user's presence.
- **Asset Integration**: Original project images were preserved and optimized to maintain brand continuity, while integrating them into the new responsive component structure.
- **Visual clarity**: organized the landing page into a clear journey from benefits and workflow, to analytics, operations, pricing, and final call to action
- **Minimal dependency footprint**: By limiting external libraries to only essential tools, I ensured the application remains fast and easy to scale
