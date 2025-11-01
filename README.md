# No Question Mark

A single-page website that explains why replying with just "?" in chat is unhelpful and frustrating.

## 🚀 Features

- **Multilingual**: Supports English (`/en`) and Spanish (`/es`)
- **Static Site Generation (SSG)**: Pre-rendered HTML for SEO and fast initial load
- **Animated Header**: TypeIt.js animation cycling through variations of "?"
- **Component-based**: Vanilla JS with modular component architecture
- **Responsive Design**: Works on all screen sizes

## 📦 Tech Stack

- **Vite**: Build tool and dev server
- **Vanilla JavaScript**: No frameworks, just pure JS
- **TypeIt.js**: Typing animation library
- **jsdom**: Server-side rendering for static HTML generation

## 🛠️ Development

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This starts the Vite dev server at `http://localhost:5173`. Hot module reloading is enabled.

**Note:** Dev mode does NOT run SSR. The page will be blank initially and hydrate on the client.

### Production Build

```bash
npm run build
```

This command:
1. Runs `vite build` - compiles and minifies assets
2. Runs `scripts/prerender.js` - generates static HTML with content for all routes

Output in `dist/`:
```
dist/
├── index.html           # Root (English)
├── en/
│   └── index.html      # English version
├── es/
│   └── index.html      # Spanish version
└── assets/             # Compiled CSS and JS
```

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Architecture

### i18n System

Simple object-based internationalization without external libraries:

```javascript
// translations.js
export const translations = {
  en: { /* English content */ },
  es: { /* Spanish content */ }
}
```

Components receive the translation object and access content:
```javascript
function MyComponent(t) {
  return `<h1>${t.mySection.title}</h1>`
}
```

### Routing

Client-side routing based on URL path:
- `/` → English (default)
- `/en` → English
- `/es` → Spanish

The router reads `window.location.pathname` and renders the appropriate language.

## 🔄 Server-Side Rendering (SSR)

### How It Works

1. **Build Process**: `npm run build` executes:
   - `vite build` → Generates optimized assets
   - `node scripts/prerender.js` → Renders HTML with content

2. **Pre-render Script** (`scripts/prerender.js`):
   - Uses jsdom to create a DOM environment in Node.js
   - Imports source components
   - Renders each language version
   - Injects rendered HTML into the Vite template
   - Outputs static HTML files for `/`, `/en/`, `/es/`

3. **Client Hydration**:
   - Browser loads pre-rendered HTML (instant content)
   - JavaScript loads and "hydrates" the page
   - Interactive features activate (TypeIt animation, routing)

### Adding a New Component

**Step 1: Create your component**
```javascript
// src/components/Footer/Footer.js
export function Footer(t) {
  const footer = document.createElement('footer')
  footer.innerHTML = `<p>${t.footer.text}</p>`
  return footer
}
```

**Step 2: Add to pre-render script**
```javascript
// scripts/prerender.js (line ~14-17)
const { Footer } = await import(path.join('file://', srcPath, 'components/Footer/Footer.js'))

// scripts/prerender.js (line ~32-37)
app.appendChild(Header(t))
app.appendChild(IntroText(t))
app.appendChild(ChatExampleSection(t, 'dontDoThis'))
app.appendChild(ChatExampleSection(t, 'doThis'))
app.appendChild(Footer(t))  // Add new component
```

**Step 3: Build**
```bash
npm run build
```

### SSR-Compatible Component Guidelines

**Detecting SSR:**
```javascript
const isSSR = typeof window === 'undefined' || global.__SSR__
```

**Safe Pattern:**
```javascript
export function MyComponent(t) {
  const element = document.createElement('div')
  const isSSR = typeof window === 'undefined' || global.__SSR__

  // Always render base HTML
  element.innerHTML = '<p>Content</p>'

  // Client-only code
  if (!isSSR) {
    // Animations, event listeners, browser APIs
    element.addEventListener('click', () => {})
  }

  return element
}
```

**Conditional imports for browser-only libraries:**
```javascript
if (!isSSR) {
  setTimeout(async () => {
    const Library = (await import('library')).default
    new Library('#element')
  }, 0)
}
```

### Modifying Existing Components

Just edit the component and run:
```bash
npm run build
```

The pre-render script automatically picks up changes. No modifications needed to `prerender.js`.

## 🌐 Deployment

The `dist/` folder contains everything needed for deployment:

- **Static hosting** (Netlify, Vercel, GitHub Pages):
  - Upload `dist/` folder
  - Configure rewrites if needed (for clean URLs)

- **Custom server**:
  - Serve `dist/` as static files
  - Set up redirects: `/en` → `/en/index.html`

## 📝 License

MIT

## 👤 Author

Esteve Segura Esteve
