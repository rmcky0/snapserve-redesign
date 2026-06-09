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

## Design Decisions

- **Mobile-first structure**: prioritized readability and touch interaction by stacking content vertically on small screens before scaling to multi-column layouts
- **Content-driven componentization**: centralized page copy and content in `src/data/snapserveContent.js`, while each major section lives in its own component file for easier maintenance
- **Performance-first transitions**: used CSS transitions and the Intersection Observer API to create smooth reveal effects without layout thrashing
- **User-centric UX**: improved usability with a visible scroll-to-top button, a responsive mobile menu, and a demo scheduler modal that can be dismissed with Escape or outside clicks
- **Visual clarity**: organized the landing page into a clear journey from benefits and workflow, to analytics, operations, pricing, and final call to action
- **Minimal dependency footprint**: selected a small set of dependencies focused on React, icons, and build tooling, instead of full CSS/UI libraries
