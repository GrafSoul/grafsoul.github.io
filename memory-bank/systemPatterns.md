# System Patterns - Dmitriy Zatulovskiy's Portfolio Website

## System Architecture
The portfolio website follows a simple static site architecture with client-side rendering. The architecture consists of:

1. **Static HTML**: Core structure with all content baked into a single HTML file
2. **CSS/SASS Styling**: Styling using compiled SASS with modern module system
3. **JavaScript Enhancements**: Client-side JavaScript for interactivity, language switching, and UX improvements
4. **Asset Management**: Optimized images, SVGs, and other assets for performance
5. **Progressive Enhancement**: Critical styles embedded in head for immediate rendering while full styles load
6. **Build System**: Vite.js for development, building, and optimization

## Key Technical Decisions

### Progressive Loading Strategy
- Critical styles embedded directly in the document head to prevent FOUC (Flash of Unstyled Content)
- Page content initially hidden using CSS and revealed only after full style loading
- JavaScript controls the timing of content visibility using a class-based approach
- Basic styling applied immediately while more complete styles load asynchronously
- This approach ensures users never see unstyled content during page load

### Dynamic Content Updates
- Year in footer automatically updated using JavaScript
- Dynamic data that would otherwise require manual updates is handled programmatically
- This removes maintenance burden and ensures the site always displays current information
- Approach uses JavaScript's Date object to ensure accuracy without server-side processing

### SASS Module System
- Modern SASS architecture using `@use` and `@forward` directives
- Proper namespacing to avoid global pollution
- Theme variables defined in the main file and passed to modules
- Color manipulation using the `sass:color` module
- Mixins organized in their own module and forwarded to maintain clean imports

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
- Critical CSS is inlined for faster initial rendering

### Build Tools
- Vite.js selected as the build tool for its speed and modern approach
- SASS preprocessing for more maintainable styles
- Output is static files that are hosted on GitHub Pages

## Design Patterns

### Progressive Enhancement Pattern
- **Base Functionality First**: Core content and structure available immediately
- **Style Layer**: Critical styles applied first, then complete styling
- **Interactive Layer**: JavaScript adds enhanced functionality when available
- **Graceful Degradation**: Site maintains usability even if JavaScript fails to load
- **Performance Focus**: Prioritizes perceived performance for better user experience

### SASS Organization
- **Modular Approach**: Styles are organized in modules with specific responsibilities
- **Variable Sharing**: Theme variables defined in the main file and passed to modules
- **Namespace Management**: Imported modules are namespaced to avoid conflicts
- **Mixin Forwarding**: Mixins are defined in a dedicated module and forwarded to maintain clean imports

### Component-Based Layout
- Sidebar vs Main Content pattern
- Repeated section blocks with consistent styling
- Card-like presentation for project items

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
- Page Loading System: Controls visibility of content during loading process
- Language Selector: Controls visibility of language-specific content
- Project Links: External links to GitHub repositories and live demos
- Contact Links: External links to social and professional profiles
- Dynamic Year Display: Automatically updates the copyright year in the footer

### Content Modularity
- Each section (education, skills, projects, etc.) is independent
- New sections can be added without affecting existing ones
- Content updates require changing only the specific sections involved

### Style Composition
- Critical styles provide immediate basic styling
- Base styles provide foundation and typography rules
- Theme styles define the visual appearance and color scheme
- Responsive styles handle layout adjustments for different screen sizes
- Component-specific styles are grouped together for maintainability

The overall architecture prioritizes simplicity, performance, and maintainability, allowing the portfolio to be easily updated with new information and projects as Dmitriy's career progresses. 