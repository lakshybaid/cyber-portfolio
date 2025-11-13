# Design Guidelines: Cyberpunk Cybersecurity Portfolio

## Design Approach

**Reference-Based Approach**: This portfolio draws inspiration from the cyber-portfolio GitHub repository, featuring a cyberpunk/hacker aesthetic with terminal-inspired UI elements. The design emphasizes the cybersecurity and ethical hacking theme through neon accents, glassmorphism effects, and terminal-style interactions.

## Core Design Principles

1. **Cyberpunk Terminal Aesthetic**: Matrix/hacker-inspired design with command-line references
2. **Glassmorphism**: Transparent cards with backdrop blur effects throughout
3. **Neon Accents**: Strategic use of neon green and cyan for highlights and interactive elements
4. **Smooth Animations**: Scroll-triggered animations for engaging user experience
5. **Technical Credibility**: Design that reflects cybersecurity expertise and professionalism

## Typography

**Font Families**:
- Primary: 'Space Mono', 'Courier New', monospace (terminal/code aesthetic)
- Secondary: 'Inter', 'Roboto', sans-serif (for body text readability)

**Type Scale**:
- Hero Title: 3xl-5xl, bold, letter-spacing tight
- Section Headers: 2xl-3xl, semi-bold, uppercase with letter-spacing
- Terminal Text: base-lg, monospace
- Body: base, regular weight, line-height relaxed
- Labels/Tags: sm-xs, semi-bold, uppercase

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Card padding: p-8
- Element spacing: gap-4, gap-8, gap-12
- Container: max-w-6xl for content sections

**Grid System**:
- Skills: 2-4 column grid (responsive)
- Projects: 2-3 column grid with equal height cards
- Certifications: 3-4 column grid for badges/cards

## Component Library

### Terminal Boot Screen
Full-screen overlay on initial page load with:
- Black background with neon green terminal text
- Animated typing effect showing boot sequence
- System initialization messages
- Progress indicators
- Fade out transition to main content

### Hero Section
- Terminal window card (glassmorphism) in center
- Animated typing text showing: "Lakshy Baid - BCA Student & Cyber Security Enthusiast"
- Cursor blink animation
- Subtle scanline effect overlay
- CTA buttons with neon border on hover

### About Section
Two-column layout (mobile: stack):
- Left: Personal introduction paragraph, statistics counters (animated on scroll)
- Right: Code snippet box styled as terminal/IDE with syntax highlighting showing cybersecurity concepts

**Statistics Display**: Grid of 3-4 cards showing metrics (Projects, Skills, Certifications, etc.) with count-up animation

### Skills Section
Categorized skill cards with glassmorphism:
- **Four Categories**: Cyber Security & Networking, Programming & Development, Data & Analytics, Tools & Platforms
- Each skill has animated progress bar with neon fill
- Skill tags in chip/badge format with hover glow effect
- Icons for each category (shield, code, chart, wrench)

### Projects Showcase
Grid of project cards with:
- Glassmorphism card design with border glow on hover
- Project thumbnail/icon at top
- Title and brief description
- Technology tags as chips
- "View Details" link with arrow icon
- Hover: lift effect with increased glow

**Featured Projects**:
1. Light Intensity Monitor (IoT)
2. MITM Attack Demo
3. AndroRAT
4. RFID Smart Attendance System

### Certifications Section
Grid layout displaying certification badges/cards:
- Certificate name and issuing org
- Date received
- Badge/icon for certification type
- Glassmorphism cards with subtle border
- Hover: neon accent glow

### Contact Section
Two-column layout:
- Left: Contact form with glassmorphism inputs, neon focus states
- Right: Social links as icon buttons with glow effect, email display

**Social Links**: GitHub, LinkedIn, Instagram, Email

### Navigation
Fixed header with glassmorphism:
- Logo/name on left
- Smooth scroll navigation links
- Active section indicator with neon underline
- Mobile: hamburger menu with slide-in overlay

### Footer
Simple footer with:
- Copyright text
- Quick links
- Social icons
- "Designed with cyberpunk aesthetics" tagline

## Visual Effects & Animations

**Glassmorphism Cards**:
- background: rgba(26, 26, 26, 0.8)
- backdrop-filter: blur(10px)
- border: 1px solid rgba(0, 255, 140, 0.2)
- box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)

**Neon Glow Effects**:
- box-shadow: 0 0 10px #00FF8C, 0 0 20px #00FF8C (for accents)
- text-shadow: 0 0 10px #00D9FF (for highlighted text)

**Scroll Animations**:
- Fade in + slide up for cards (stagger delay for grid items)
- Progress bars animate from 0 to target percentage
- Counter animations for statistics

**Interactive States**:
- Buttons: Neon border glow on hover, slight scale transform
- Cards: Lift effect (translateY) + increased glow on hover
- Links: Neon underline animation
- Form inputs: Neon border on focus

**Terminal Effects**:
- Typing animation with cursor blink
- Subtle scanline overlay (animated gradient)
- Matrix-style background particles (optional, subtle)

## Images

**No Hero Image Required** - The hero section features a terminal window card instead of a traditional hero image, maintaining the cyberpunk/hacker aesthetic.

**Project Thumbnails**: Use abstract tech/cybersecurity icons or screenshots for each project card. If actual project images aren't available, use placeholder icons representing IoT, networking, Android, and RFID technologies.

**Background**: Dark (#121212) with optional subtle grid pattern or hex code pattern overlay for added depth.

## Accessibility

- High contrast between neon accents and dark background
- Focus states clearly visible with neon outlines
- Semantic HTML throughout
- Alt text for all images/icons
- Keyboard navigation support
- ARIA labels for interactive elements

## Responsive Behavior

**Desktop (>768px)**: Multi-column grids, side-by-side layouts
**Tablet (768px)**: 2-column grids, maintained side-by-side for key sections
**Mobile (<768px)**: Single column stack, full-width cards, hamburger navigation