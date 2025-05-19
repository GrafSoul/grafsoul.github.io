# System Patterns - Dmitriy Zatulovskiy's Portfolio Website

## System Architecture
The portfolio website follows a simple static site architecture with client-side rendering. The architecture consists of:

1. **Static HTML**: Core structure with all content baked into a single HTML file
2. **CSS/SASS Styling**: Styling using compiled SASS for maintainability
3. **JavaScript Enhancements**: Client-side JavaScript for interactivity and language switching
4. **Asset Management**: Optimized images, SVGs, and other assets for performance
5. **Build System**: Vite.js for development, building, and optimization

## Key Technical Decisions

### Single Page Structure
- All content is contained within a single HTML page rather than multiple pages
- Sections are semantically separated and styled differently
- This approach reduces complexity and load times

### Multilingual Support
- Languages (English and Russian) are toggled via client-side JavaScript
- Content for both languages exists in the DOM simultaneously with language-specific classes
- Language toggle maintains state using CSS classes rather than loading different versions of the site

### Optimization Strategy
- Images are optimized at build time using vite-plugin-imagemin
- SVGs are consolidated using sprite techniques with vite-svg-sprite-wrapper
- CSS is minimized for production builds
- Modern CSS features are used where possible to reduce code size

### Build Tools
- Vite.js selected as the build tool for its speed and modern approach
- SASS preprocessing for more maintainable styles
- Output is static files that can be hosted anywhere (GitHub Pages in this case)

## Design Patterns

### Component-Based Layout
- Sidebar vs Main Content pattern
- Repeated section blocks with consistent styling
- Card-like presentation for project items

### Progressive Enhancement
- Core content is accessible without JavaScript
- Enhanced functionality (like language switching) provided when JavaScript is available
- Basic styling with enhancements for more capable browsers

### Responsive Design
- Mobile-first approach with media queries for larger screens
- Flexible layouts that adapt to different viewport sizes
- Sidebar collapses or repositions on smaller screens

## Component Relationships

### Structural Components
- Header/Profile Container: Contains basic identification and profile image
- Sidebar: Houses contact information, education, languages, and interests
- Main Content Area: Contains career profile, projects, experiences, and skills sections

### Interactive Components
- Language Selector: Controls visibility of language-specific content
- Project Links: External links to GitHub repositories and live demos
- Contact Links: External links to social and professional profiles

### Content Modularity
- Each section (education, skills, projects, etc.) is independent
- New sections can be added without affecting existing ones
- Content updates require changing only the specific sections involved

The overall architecture prioritizes simplicity, performance, and maintainability, allowing the portfolio to be easily updated with new information and projects as Dmitriy's career progresses. 