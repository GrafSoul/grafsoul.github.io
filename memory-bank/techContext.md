# Technical Context - Dmitriy Zatulovskiy's Portfolio Website

## Technologies Used

### Core Technologies
- **HTML5**: Semantic markup for structure and content
- **SASS/CSS3**: Advanced styling with preprocessor support
- **JavaScript**: Client-side interactivity and functionality
- **Vite.js**: Modern frontend build tool for development and production builds

### Specific Dependencies
- **sass**: ^1.89.0 - CSS preprocessor for more maintainable styling
- **vite**: ^6.3.5 - Frontend tooling for development and building
- **vite-plugin-imagemin**: ^0.6.1 - Image optimization plugin
- **vite-plugin-spritesmith**: ^0.1.1 - Sprite generation for optimized image delivery
- **vite-svg-sprite-wrapper**: ^1.4.1 - SVG sprite management

### External Resources
- **Google Fonts**: Roboto font family for typography
- **Font Awesome**: Icon library for visual elements
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
│   ├── styles/           # SASS/CSS styles
│   └── index.html        # Main HTML file
├── build/                # Compiled files (generated)
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── ...                   # Other configuration files
```

### Build Process
1. SASS files are compiled to CSS
2. Images are optimized and processed
3. SVGs are compiled into sprites where appropriate
4. JavaScript is bundled and minimized
5. HTML is processed and optimized
6. All assets are output to the build directory

## Technical Constraints

### Browser Compatibility
- The site is designed to work on modern browsers
- Progressive enhancement ensures basic functionality on older browsers
- No explicit support for Internet Explorer

### Performance Considerations
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

### Maintenance Requirements
- Regular updates needed for new projects and experiences
- PDF resume files must be manually updated when content changes
- External links should be periodically checked for validity

## Development Workflow
1. Local development using Vite's dev server
2. Changes committed to the Git repository
3. Production builds generated with `yarn build`
4. Built files deployed to GitHub Pages via repository settings

This technical foundation allows for a lightweight, performant portfolio site that can be easily maintained and extended as needed. 