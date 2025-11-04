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
├── index.html           # Root route (/)
├── en/
│   └── index.html      # /en route
├── es/
│   └── index.html      # /es route
└── assets/             # Compiled CSS and JS
    ├── index-*.css
    └── index-*.js
```

The pre-render script generates an HTML file for each route defined in `src/routes.js`.

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Architecture

### Pages, Routes, and Views System

The architecture uses three key concepts:

**1. Pages** (`src/translations.js`):
```javascript
export const pages = {
  noquestionmark: {
    en: { /* English content */ },
    es: { /* Spanish content */ }
  },
  mypage: {
    en: { /* English content */ },
    es: { /* Spanish content */ }
  }
}
```

**2. Views** (`src/views/`):
Views define the layout and structure of a page:
```javascript
// src/views/StandardView.js
export function StandardView(t) {
  const container = document.createElement('div')
  container.appendChild(Header(t))
  container.appendChild(IntroText(t))
  container.appendChild(Footer(t))
  return container
}
```

**3. Routes** (`src/routes.js`):
Maps URLs to pages and views:
```javascript
export const routes = {
  '/': { page: 'noquestionmark', view: StandardView },
  '/en': { page: 'noquestionmark', view: StandardView },
  '/es': { page: 'noquestionmark', view: StandardView }
}
```

### How It Works Together

Example: User visits `/en/about`

1. Router extracts language from URL: `en` (from first path segment)
2. Router finds route in `routes.js`: `{ page: 'about', view: MinimalView }`
3. System loads translations: `pages.about.en`
4. View renders with translations: `MinimalView(t)`
5. Both SSR and client use the same flow

**Route Structure:** `/{lang}/{page}` (e.g., `/en/about`, `/es/contact`)
- Root route `/` defaults to English
- Special routes like `/en` or `/es` can also be defined

## 🔄 Server-Side Rendering (SSR)

### How It Works

1. **Build Process**: `npm run build` executes:
   - `vite build` → Generates optimized assets
   - `node scripts/prerender.js` → Renders HTML with content for all routes

2. **Pre-render Script** (`scripts/prerender.js`):
   - Imports `routes.js` and `translations.js`
   - Iterates over all defined routes
   - For each route:
     - Uses jsdom to create a DOM environment in Node.js
     - Gets the appropriate view and translations
     - Renders the view with translations
     - Injects rendered HTML into the Vite template
     - Outputs static HTML file

3. **Client Hydration**:
   - Browser loads pre-rendered HTML (instant content)
   - JavaScript loads and "hydrates" the page
   - Interactive features activate (TypeIt animation, routing)

### Creating a New Page

**Step 1: Add translations**
```javascript
// src/translations.js
export const pages = {
  noquestionmark: { /* existing */ },
  mynewpage: {
    en: {
      header: { title: 'My Page', subtitle: 'Subtitle', animations: ['?'] },
      content: { text: 'Content here' },
      footer: { paragraphs: ['Footer text'] }
    },
    es: {
      header: { title: 'Mi Página', subtitle: 'Subtítulo', animations: ['?'] },
      content: { text: 'Contenido aquí' },
      footer: { paragraphs: ['Texto del footer'] }
    }
  }
}
```

**Step 2: Create or reuse a view**

**Option A: Reuse existing view** (recommended if layout is the same)
```javascript
// src/routes.js
import { StandardView } from './views/StandardView.js'

export const routes = {
  // ... existing routes
  '/mynewpage': { page: 'mynewpage', view: StandardView },
  '/en/mynewpage': { page: 'mynewpage', view: StandardView },
  '/es/mynewpage': { page: 'mynewpage', view: StandardView }
}
```

**Note:** Route structure is `/{lang}/{page}` (e.g., `/en/about`, `/es/about`), where the language comes first.

**Option B: Create custom view** (if you need different layout)
```javascript
// src/views/CustomView.js
import { Header } from '../components/Header/Header.js'
import { CustomContent } from '../components/CustomContent/CustomContent.js'
import { Footer } from '../components/Footer/Footer.js'

export function CustomView(t) {
  const container = document.createElement('div')
  container.appendChild(Header(t))
  container.appendChild(CustomContent(t))
  container.appendChild(Footer(t))
  return container
}
```

Then add to routes:
```javascript
// src/routes.js
import { CustomView } from './views/CustomView.js'

export const routes = {
  '/mynewpage': { page: 'mynewpage', view: CustomView },
  '/en/mynewpage': { page: 'mynewpage', view: CustomView },
  '/es/mynewpage': { page: 'mynewpage', view: CustomView }
}
```

**Step 3: Build**
```bash
npm run build
```

The pre-render script will automatically generate HTML for all routes defined in `routes.js`. **No modifications to `prerender.js` needed!**

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

### Adding a Component to an Existing View

**Step 1: Create your component**
```javascript
// src/components/NewComponent/NewComponent.js
export function NewComponent(t) {
  const element = document.createElement('div')
  element.className = 'new-component'
  element.innerHTML = `<p>${t.newComponent.text}</p>`
  return element
}
```

**Step 2: Add to view**
```javascript
// src/views/StandardView.js
import { NewComponent } from '../components/NewComponent/NewComponent.js'

export function StandardView(t) {
  const container = document.createElement('div')
  container.appendChild(Header(t))
  container.appendChild(IntroText(t))
  container.appendChild(NewComponent(t))  // Add here
  container.appendChild(Footer(t))
  return container
}
```

**Step 3: Add translations**
```javascript
// src/translations.js
export const pages = {
  noquestionmark: {
    en: {
      // ... existing
      newComponent: { text: 'New component text' }
    },
    es: {
      // ... existing
      newComponent: { text: 'Texto del nuevo componente' }
    }
  }
}
```

**Step 4: Build**
```bash
npm run build
```

### Modifying Existing Code

- **Edit a component**: Just modify the file and run `npm run build`
- **Edit translations**: Just modify `translations.js` and run `npm run build`
- **Edit a view**: Just modify the view file and run `npm run build`

The pre-render script automatically picks up all changes. **No modifications to `prerender.js` or `main.js` needed!**

## 📄 Creating Views

Views are layout templates that define how components are arranged on a page. They're the bridge between routes and components.

### When to Create a New View

- **Same layout, different content**: Reuse existing view (e.g., StandardView)
- **Different layout**: Create a new view

### View Structure

A view is a function that:
1. Receives translations object `t`
2. Creates a container element
3. Appends components in desired order
4. Returns the container

### Example: Creating a Simple View

```javascript
// src/views/MinimalView.js
import { Header } from '../components/Header/Header.js'
import { Footer } from '../components/Footer/Footer.js'

export function MinimalView(t) {
  const container = document.createElement('div')
  container.className = 'minimal-view'

  container.appendChild(Header(t))
  container.appendChild(Footer(t))

  return container
}
```

### Example: View with Custom Layout

```javascript
// src/views/TwoColumnView.js
import { Header } from '../components/Header/Header.js'
import { Sidebar } from '../components/Sidebar/Sidebar.js'
import { MainContent } from '../components/MainContent/MainContent.js'
import { Footer } from '../components/Footer/Footer.js'

export function TwoColumnView(t) {
  const container = document.createElement('div')
  container.className = 'two-column-view'

  container.appendChild(Header(t))

  // Create two-column layout
  const columns = document.createElement('div')
  columns.className = 'columns'

  const leftColumn = document.createElement('div')
  leftColumn.className = 'column-left'
  leftColumn.appendChild(Sidebar(t))

  const rightColumn = document.createElement('div')
  rightColumn.className = 'column-right'
  rightColumn.appendChild(MainContent(t))

  columns.appendChild(leftColumn)
  columns.appendChild(rightColumn)
  container.appendChild(columns)

  container.appendChild(Footer(t))

  return container
}
```

### Using the View

Once created, add it to `routes.js`:

```javascript
// src/routes.js
import { StandardView } from './views/StandardView.js'
import { MinimalView } from './views/MinimalView.js'

export const routes = {
  '/': { page: 'noquestionmark', view: StandardView },
  '/about': { page: 'about', view: MinimalView },
  '/en/about': { page: 'about', view: MinimalView },
  '/es/about': { page: 'about', view: MinimalView }
}
```

**Note:** Routes follow the pattern `/{lang}/{page}` where language comes first (e.g., `/en/about`), except for the root route `/`.

### View Best Practices

1. **Keep views simple**: Views should only arrange components, not contain business logic
2. **Reuse views**: Multiple pages can share the same view with different content
3. **SSR-compatible**: Views must work in both Node.js (SSR) and browser
4. **No side effects**: Views should be pure functions that return DOM elements

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
