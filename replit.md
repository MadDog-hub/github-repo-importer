# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Tim & Karla, celebrating their wedding on March 28, 2026. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an "old money" style, elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, and a background music feature that respects user interaction for playback. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2026-01-04**: Complete content overhaul for Tim & Karla's wedding:
  - Updated all components with new couple names "Tim & Karla"
  - Updated hero, story, and gift guide images with new high-quality assets
  - Changed story title to "SHE SAID YES!"
  - Updated polaroid images with new labels: beloved, soulmates, forever
  - Changed wedding date to March 28, 2026
  - Updated venue to Casa Ibarra, MOA, Pasay City
  - Updated wedding timeline:
    - 2:00 PM: Registration
    - 3:00 PM: Wedding Ceremony
    - 7:00 PM: Send off
  - Updated SEO meta tags and titles
  - Updated countdown timer to March 28, 2026
