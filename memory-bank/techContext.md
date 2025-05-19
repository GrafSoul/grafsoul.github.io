# Technical Context - Dmitriy Zatulovskiy's Portfolio Website

## Technologies Used

### Core Technologies
- **HTML5**: Semantic markup for structure and content
- **SASS/CSS3**: Advanced styling with preprocessor support using modern module system
- **JavaScript**: Client-side interactivity and functionality
- **Vite.js**: Modern frontend build tool for development and production builds

### Specific Dependencies
- **sass**: ^1.89.0 - CSS preprocessor with module system support
- **vite**: ^6.3.5 - Frontend tooling for development and building
- **vite-plugin-imagemin**: ^0.6.1 - Image optimization plugin
- **vite-plugin-spritesmith**: ^0.1.1 - Sprite generation for optimized image delivery
- **vite-svg-sprite-wrapper**: ^1.4.1 - SVG sprite management

### External Resources
- **Google Fonts**: Roboto font family for typography
- **Font Awesome**: Icon library for visual elements
- **jQuery**: Used for DOM manipulation and language switching
- **GitHub Pages**: Hosting platform for the live site

## Development Setup

### Local Development Environment
1. Clone the repository from GitHub
2. Install dependencies using Yarn: `yarn install`
3. Start development server: `yarn dev`
4. Build for production: `yarn build`
5. Preview production build: `yarn preview`

### Project Structure
```
grafsoul.github.io/
├── public/               # Static assets that don't require processing
├── src/                  # Source files
│   ├── assets/           # Raw assets (images, fonts, etc.)
│   ├── js/               # JavaScript files
│   │   └── main.js       # Main JavaScript entry point
│   ├── styles/           # SASS/CSS styles
│   │   ├── main.scss     # Main SASS entry point
│   │   ├── base/         # Base styles
│   │   ├── theme/        # Theme-specific styles
│   │   └── vendors/      # Third-party styles
│   └── index.html        # Main HTML file
├── docs/                 # Compiled files for GitHub Pages (generated)
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── ...                   # Other configuration files
```

### SASS Architecture
The project uses the modern SASS module system with:
- `@use` directives to import modules with namespaces
- `@forward` to re-export module members
- Module variables with default values using `!default` flag
- Proper scoping to avoid global namespace pollution
- Color manipulation using the `sass:color` module

### Progressive Loading Strategy
The website implements a progressive loading approach to prevent Flash of Unstyled Content (FOUC):
1. Critical inline styles embedded in `<head>` for immediate application
2. Content initially hidden via CSS (`visibility: hidden; opacity: 0;`)
3. Basic styling applied to core components for minimal layout structure
4. JavaScript listens for full page load via `window.addEventListener('load', ...)`
5. Once loaded, a `.ready` class is added to the HTML element
6. CSS transitions ensure smooth appearance of the fully styled content

### Dynamic Content Updates
Automated updates for time-sensitive content:
- Year in footer copyright is dynamically set via JavaScript
- Uses the native Date object: `new Date().getFullYear()`
- Code is placed in main.js for centralized maintenance
- Update occurs during the DOM content loaded event

### Build Process
1. SASS files are compiled to CSS using Vite's SASS processing
2. Images are optimized and processed with vite-plugin-imagemin
3. SVGs are compiled into sprites where appropriate
4. JavaScript is bundled and minimized
5. HTML is processed and optimized
6. All assets are output to the docs directory for GitHub Pages

## Technical Constraints

### Browser Compatibility
- The site is designed to work on modern browsers
- Progressive enhancement ensures basic functionality on older browsers
- No explicit support for Internet Explorer

### Performance Considerations
- Critical CSS inlined to minimize render-blocking resources
- Content visibility controlled to prevent FOUC (Flash of Unstyled Content)
- All images must be optimized for web use
- Total page size should be kept minimal for fast loading
- JavaScript should be non-blocking where possible

### Multilingual Support Limitations
- Currently supports only English and Russian
- Adding additional languages requires HTML structure changes
- Language detection is not automatic (user must select)

### Deployment Constraints
- Deployed to GitHub Pages with its associated limitations
- Static site only (no server-side processing)
- Must work with GitHub Pages URL structure
- Build output must go to the `docs` directory for GitHub Pages compatibility

### Maintenance Requirements
- Regular updates needed for new projects and experiences
- PDF resume files must be manually updated when content changes
- External links should be periodically checked for validity

## Development Workflow
1. Local development using Vite's dev server
2. Changes committed to the Git repository
3. Production builds generated with `yarn build`
4. Built files deployed to GitHub Pages via the docs directory

This technical foundation allows for a lightweight, performant portfolio site that can be easily maintained and extended as needed. 