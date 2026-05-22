# Creating New Pages

This guide explains how to add new pages to ChatCrimes. Almost all pages are generated from a single data source (`src/translations.js`), so creating a new page is mostly about adding content — not writing components.

## Architecture Overview

The site uses three key files to render pages:

| File | Purpose |
|---|---|
| `src/translations.js` | Contains **all page content** (both languages) as a JS object (`pages`) |
| `src/routes.js` | Maps **URL paths** to a page key and a view function |
| `src/views/StandardView.js` | The reusable view that renders standard "crime" pages |

**Flow:** URL → `routes.js` (finds page key + view) → `main.js` (looks up translations) → View function receives `t` (translated content) → Components render it.

## Step-by-Step: Adding a New Crime Page

### 1. Add content to `src/translations.js`

Add a new key inside the `pages` object. The key name (e.g., `mynewcrime`) is the internal page identifier.

A standard crime page has this structure:

```js
export const pages = {
  // ... existing pages ...

  mynewcrime: {
    en: {
      header: {
        title: "Page Title",
        subtitle: "a short description of the crime",
        animations: ["text1", "text2", "text3", "text4", "text5", "text6"]
        // animations: array of 6 short strings that rotate in the header
      },
      intro: {
        text: "A one-liner intro with optional HTML like <strong>bold</strong> or emoji 🎉"
      },
      dontDoThis: {
        title: "❌ Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "message text", time: "2:15 PM" },
            { name: "Thomas Middleditch", text: "bad reply", time: "2:16 PM" }
            // Add as many messages as needed
          ]
        },
        explanation: {
          text: "<p>HTML explanation of <strong>why</strong> this is bad.</p>"
        }
      },
      doThis: {
        title: "✅ Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "message text", time: "2:15 PM" },
            { name: "Thomas Middleditch", text: "good reply", time: "2:16 PM" }
          ]
        },
        explanation: {
          text: "<p>HTML explanation of <strong>why</strong> this is better.</p>"
        }
      },
      footer: {
        paragraphs: [
          "This is kinda only half serious (kinda 👀) so please don't get mad at the person who sent you here.",
          "That said, if you see this site's URL as someone's status/bio, be prepared to be ignored if you only reply with \"?\".",
          "Inspired by the wonderful <a href=\"https://nohello.net\" target=\"_blank\" rel=\"noopener noreferrer\">nohello.net</a>. Avatars taken from Silicon Valley. Open-source on <a href=\"https://github.com/EsteveSegura/noquestionmark\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
          "Made by <a href=\"https://girlazo.com\" target=\"_blank\" rel=\"noopener noreferrer\">Esteve Segura</a>.",
          "This site is available in: <a href=\"/en\">English</a>, <a href=\"/es\">Español</a>"
        ]
      }
    },
    es: {
      // Same structure, Spanish content
      // ...
    }
  }
}
```

#### Special message properties

Chat messages support optional fields depending on the crime type:

```js
// Standard message
{ name: "T.J Miller", text: "hello", time: "2:15 PM" }

// Message with a reaction (used in "noreactionasanswer")
{ name: "T.J Miller", text: "hello", time: "2:15 PM", reaction: { image: "/img/reaction_yes.png", count: 1 } }

// Message with a thread indicator (used in "usethethread")
{ name: "T.J Miller", text: "Deploy process", time: "9:00 AM", thread: { replies: 7, lastReply: "Last reply 2 hours ago" } }
```

### 2. Register routes in `src/routes.js`

Add three routes for your new page (root, English, Spanish):

```js
import { StandardView } from './views/StandardView.js'

export const routes = {
  // ... existing routes ...

  // my-new-crime
  '/my-new-crime': { page: 'mynewcrime', view: StandardView },
  '/en/my-new-crime': { page: 'mynewcrime', view: StandardView },
  '/es/my-new-crime': { page: 'mynewcrime', view: StandardView },
}
```

- **`page`**: Must match the key you used in `translations.js`
- **`view`**: Use `StandardView` for crime pages, `HomeView` for home-like pages
- **URL pattern**: Always register 3 paths: `/<slug>`, `/en/<slug>`, `/es/<slug>`

### 3. Add it to the home page crimes list

In `src/translations.js`, update the `home.en.crimesList.items` and `home.es.crimesList.items` arrays:

```js
home: {
  en: {
    crimesList: {
      items: [
        // ... existing items ...
        { url: "/my-new-crime", text: "My New Crime - Short description" }
      ]
    }
  },
  es: {
    crimesList: {
      items: [
        // ... existing items ...
        { url: "/my-new-crime", text: "Mi Nuevo Crimen - Descripción corta" }
      ]
    }
  }
}
```

### 4. Run the tests

Before opening a PR, make sure all tests pass:

```bash
npm run test
```

The tests validate the rules from this document automatically. All must be green.

### 5. Done!

That's it. No new components or views needed. The `StandardView` handles all the rendering automatically.

## Page Types

There are two view types:

| View | Used for | Components rendered |
|---|---|---|
| `StandardView` | Crime pages | Header (with animations) → IntroText → ChatExampleSection (don't) → ChatExampleSection (do) → Footer |
| `HomeView` | Home/index | Header (no animations) → ChatCrimesList → Footer |

## Checklist

- [ ] Added `en` and `es` content in `src/translations.js` under a new page key
- [ ] Registered 3 routes in `src/routes.js` (`/slug`, `/en/slug`, `/es/slug`)
- [ ] Page key in routes matches the key in translations
- [ ] Added the new crime to `home.en.crimesList.items` and `home.es.crimesList.items`
- [ ] Header has exactly 6 animation strings
- [ ] Chat messages use the correct character names (T.J Miller, Thomas Middleditch, or Monica Hall)
- [ ] Footer paragraphs are consistent with other pages
- [ ] Tested both `/en/my-new-crime` and `/es/my-new-crime`
- [ ] `npm test` passes with all tests green

## Rules

These are **non-negotiable rules**. Every pull request must satisfy all of them. If any rule is broken, the page is incomplete.

### 1. Every page must exist in both languages

Every page key in `translations.js` **must** have both `en` and `es` objects with the **exact same structure**. No page can exist in only one language. The Spanish translation must be a faithful, natural translation — not a literal word-by-word copy. Adapt idioms and expressions to sound native in each language.

```js
// ✅ Correct
mynewcrime: {
  en: { header: { ... }, intro: { ... }, dontDoThis: { ... }, doThis: { ... }, footer: { ... } },
  es: { header: { ... }, intro: { ... }, dontDoThis: { ... }, doThis: { ... }, footer: { ... } }
}

// ❌ Broken — missing Spanish
mynewcrime: {
  en: { ... }
}
```

### 2. Every page needs exactly 3 routes

For each page, register **three** routes in `routes.js`: the bare slug, the `/en/` prefixed slug, and the `/es/` prefixed slug. No exceptions.

```js
'/my-crime':    { page: 'mycrime', view: StandardView },
'/en/my-crime': { page: 'mycrime', view: StandardView },
'/es/my-crime': { page: 'mycrime', view: StandardView },
```

### 3. The URL slug is the same for both languages

The URL path does **not** change between languages. `/no-question-mark` is always `/no-question-mark`, never `/es/no-signo-de-interrogacion`. Language only affects the prefix (`/en/`, `/es/`), never the slug itself.

### 4. Every new crime must be added to the home page in both languages

Add the new crime to `home.en.crimesList.items` **and** `home.es.crimesList.items`. Both lists must have the same URLs in the same order. Only the `text` changes between languages.

### 5. Every new crime must be added to the `urlToPageKey` map

In `src/components/ChatCrimesList/ChatCrimesList.js`, add the URL-to-page-key mapping. Without this, the home page card preview will not render.

```js
const urlToPageKey = {
  // ... existing ...
  '/my-crime': 'mycrime'
}
```

### 6. The `en` and `es` objects must be structurally identical

Same keys, same nesting, same number of items in every array. If `en.dontDoThis.chat.messages` has 4 messages, `es.dontDoThis.chat.messages` must also have 4 messages. If `en.header.animations` has 6 items, `es.header.animations` must also have 6 items.

### 7. Footer paragraphs are copied, never written

The footer is **identical on every page** per language. Copy the 5 paragraphs verbatim from any existing page. Do not modify them. Do not add or remove paragraphs.

### 8. Chat messages only use existing characters

Only use `"T.J Miller"`, `"Thomas Middleditch"` or `"Monica Hall"` as message authors. The avatar is resolved automatically from the name. Using any other name will result in a broken avatar. Most pages stick to the first two — bring Monica Hall in only when the crime genuinely needs a third voice (e.g. a peer-vs-peer dynamic).

### 9. Header animations must have exactly 6 items

Not 5, not 7. The `TypeIt` animation cycles through all 6 strings sequentially.

### 10. The page key and the route must reference each other correctly

The `page` value in `routes.js` must exactly match the key in `translations.js`. A typo here will crash the page silently.

```
routes.js:        page: 'noquestionmark'     ← must match
translations.js:  noquestionmark: { ... }    ← this key
```

### 11. Crime pages use `StandardView`, the home uses `HomeView`

Do not create new view files for crime pages. All crime pages render through `StandardView`. Only the home page uses `HomeView`.

### 12. The translation data shape is a contract — do not invent new keys

Standard crime pages must have exactly: `header`, `intro`, `dontDoThis`, `doThis`, `footer`. Do not add new top-level keys (e.g., `sidebar`, `extra`). Components will ignore them and it creates dead data.

---

## Idiomatic Guidelines

Beyond the hard rules above, this project follows specific conventions in writing style, visual hierarchy, and tone. Follow them to keep the site consistent.

---

### Writing Style & Tone

#### Title (`header.title`)

- Starts with **"No"** followed by the crime name (e.g., `"No ?"`, `"No #channel-only"`, `"No public shaming"`).
- Exception: positive actions use an imperative verb (e.g., `"Use the thread"`).
- **Sentence case**, not Title Case. Only the first word is capitalized.
- Short: 2–4 words max.

#### Subtitle (`header.subtitle`)

- Always **lowercase**, always starts with **"please don't..."** (EN) or **"por favor no..."** (ES).
- One line, no period at the end.
- Describes the crime as a polite request.

```
✅ "please don't reply with just a question mark in chat"
✅ "please don't call people out in public channels"
❌ "Don't Reply With Just A Question Mark In Chat."
❌ "Stop using question marks"
```

#### Header animations (`header.animations`)

- Exactly **6 strings**.
- Short, punchy fragments — the kind of thing someone would actually type in chat.
- No full sentences. 1–3 words each.
- They represent variations of the bad behavior.

```js
// ✅ Good
animations: ['?', '...?', 'rlly?', 'uh?', '?????', '¿¿??']
animations: ['#web-team', '#channel', 'wrong channel', 'pls in #devops', 'not here', 'take to #web-team']

// ❌ Bad
animations: ['Please do not use a question mark as your reply']  // Too long
animations: ['?', '??']  // Only 2, need 6
```

#### Intro text (`intro.text`)

- **One sentence only.** Paints a vivid, slightly dramatic scenario.
- Always starts with **"Imagine..."** (EN) or **"Imagina..."** (ES).
- Always ends with **"... 🤦‍♀️"** (the facepalm emoji).
- May contain light HTML (`<strong>`, `<br />`) but keep it minimal.

```
✅ "Imagine someone asks you something, and you just stare, raise an eyebrow, and say "?"... 🤦‍♀️"
❌ "Using question marks is bad."  // No "Imagine", no emoji, too flat
```

#### Section titles (`dontDoThis.title` / `doThis.title`)

- **Always** use these exact patterns:
  - EN: `"❌ Don't do this"` / `"✅ Instead, try this"`
  - ES: `"❌ No hagas esto"` / `"✅ En su lugar, intenta esto"`
- The emoji is part of the string. Do not omit it.

#### Chat messages (`chat.messages`)

- Use **short, realistic messages** — the kind you'd actually see in Slack/Teams.
- Keep each message to **1–2 lines max**.
- **Time format:** `"H:MM AM/PM"` (e.g., `"2:15 PM"`, `"9:00 AM"`).
- The "bad" example should have **awkward pauses** between timestamps (e.g., 20-minute gaps) to emphasize wasted time.
- The "good" example should have **fast replies** (1–2 minute gaps) to show efficiency.
- Default to **2 characters**: `"T.J Miller"` (initiator) and `"Thomas Middleditch"` (responder). Typically 3–4 messages per chat.
- A **third character** (`"Monica Hall"`) is available when the crime needs a peer-vs-peer or interrupting-third-party dynamic. Don't add her just to vary the cast — only when the scenario genuinely requires it.

#### Explanation text (`explanation.text`)

- Written as **raw HTML** using only: `<p>`, `<ul>`, `<li>`, `<strong>`, `<em>`. No `<div>`, no classes, no inline styles.
- Structure follows this pattern:
  1. **Opening `<p>`**: Describe what the person thought they were doing (empathetic, uses `<em>` for their inner voice and `<strong>` for the key problem).
  2. **Second `<p>`**: Acknowledge good intentions — "Most people who do this **don't mean to be rude**".
  3. **Third `<p>`**: Explain the actual impact (`<strong>` for key negative effects).
  4. **`<ul>` list**: Concrete examples of the same bad pattern (variations).
  5. **Closing `<p>`**: A bold takeaway motto (e.g., `<strong>Just say what's unclear!</strong>`, `<strong>Clarity is kindness</strong>`).
- The "good" explanation mirrors the structure but focuses on **how to do it right**, with a list of better alternatives and a positive closing motto.
- The closing motto should be a **short, memorable phrase** in `<strong>`. Think bumper sticker.

```html
<!-- ✅ Closing mottos -->
<strong>Clarity is kindness</strong>
<strong>Answer first, then suggest the right channel</strong>
<strong>Respect in public, feedback in private</strong>

<!-- ❌ Too long, not punchy -->
<strong>You should always try to be more clear in your messages because it helps everyone</strong>
```

- The "good" explanation ends with: `<p>When done right, <strong>everyone saves time</strong>. 🎉</p>` (or a similar line with the 🎉 emoji).

#### Footer (`footer.paragraphs`)

- **Identical across all pages** (only translated). Copy from an existing page — never write custom footer content.
- Always exactly **5 paragraphs** in this order:
  1. "This is kinda only half serious..." disclaimer
  2. "That said, if you see this site's URL..." warning
  3. Credits (nohello.net, Silicon Valley, GitHub link)
  4. "Made by" author link
  5. Language switcher links

---

### Visual Hierarchy & Typography

The site uses `system-ui, -apple-system, sans-serif` everywhere. No custom fonts.

| Element | Font size | Weight | Color | Notes |
|---|---|---|---|---|
| `h1` (title) | `60px` (desktop) / `36px` (mobile) | 900 | `#333` | Largest element on the page |
| `h2` (subtitle) | `18px` (desktop) / `14px` (mobile) | 200 | `#666` | Light weight, `letter-spacing: -1px` |
| Intro text | `33px` | 300 | `#333` | Large, light, `letter-spacing: -1px` |
| Section title (❌/✅) | `20px` | 600 | `#333` | |
| Chat message name | `12px` | 600 | `#333` | |
| Chat message text | `14px` | normal | `#333` | |
| Chat message time | `10px` | normal | `#999` | Muted |
| Explanation body | `0.95rem` | normal | `#555` | `line-height: 1.8` |
| Explanation `<strong>` | — | 600 | `#333` | Darker than surrounding text |
| Explanation `<li>` | `0.95rem` | normal | `#777` | Custom list markers (✓ green / ✕ red) |
| Footer | `11px` | normal | `#666` | Smallest text on page |
| Footer links | — | normal | `#ef4444` | Red, underlined |

### Color Palette

| Usage | Color | Hex |
|---|---|---|
| Primary text | Dark gray | `#333` |
| Secondary text | Medium gray | `#555` |
| Muted text | Gray | `#666` |
| List items | Light gray | `#777` |
| Timestamps | Lightest gray | `#999` |
| Background | White | `#ffffff` |
| Links (footer) | Red | `#ef4444` |
| Links hover | Darker red | `#dc2626` |
| Positive marker (✓) | Green | `#22c55e` |
| Negative marker (✕) | Red | `#ef4444` |
| Thread replies | Blue | `#1D4ED8` |
| Chat card bg | Off-white gradient | `#fbfbfb` → `#f7f7f7` |
| Chat messages bg | White | `#ffffff` with `box-shadow` |

### Emoji Usage

- **🤦‍♀️** — Always at the end of the intro text. Every page.
- **🎉** — At the end of the "good" explanation closing line.
- **❌** — In the "don't do this" section title.
- **✅** — In the "instead, try this" section title.
- **👀** — Only in the footer disclaimer `"(kinda 👀)"`.
- Do not add other emojis to explanations or chat messages. Keep them limited to these positions.

### Layout & Spacing

- Max content width: `1200px`, centered.
- Header padding: `10rem` top (desktop), `6rem` (mobile ≤420px).
- Chat example sections use a **2-column grid** (`0.5fr 1fr`): chat on the left, explanation on the right. Stacks to 1 column on mobile (≤768px).
- Section margin: `4rem` vertical between chat example sections.
- Chat messages have a `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15)` for depth.
- Responsive breakpoints: `420px`, `640px`, `768px`, `1024px`.

---

### Code Conventions

#### No frameworks — Vanilla JS with functional components

The entire project is built with **zero UI frameworks**. Components are plain functions that receive data and return an `HTMLElement` via `document.createElement`.

```js
// ✅ This is what a component looks like
export function MyComponent(t) {
  const el = document.createElement('section')
  el.className = 'my-component'
  el.innerHTML = `<p>${t.intro.text}</p>`
  return el
}
```

#### Data-driven, not template-driven

All content lives in `translations.js`. Components read from the `t` object — they never hardcode text.

#### Component structure: one folder, co-located CSS

```
components/
└── Header/
    ├── Header.js
    └── Header.css
```

- One component per file. **Named exports only** (`export function`, never `export default`).
- CSS is imported at the top: `import './Header.css'`.
- **BEM-like class naming:** `.component-name__element` (e.g., `.chat-message__avatar`).
- **No CSS preprocessors.** Plain `.css` only.
- **No global utility classes.** Every class is scoped to its component.

#### Views are composition, not logic

View files only compose components — no business logic, no DOM manipulation beyond `appendChild`, no styles.

#### Route naming

| Concept | Convention | Example |
|---|---|---|
| URL slug | `kebab-case` | `/no-question-mark` |
| Page key in `translations.js` | `lowercasenospaces` | `noquestionmark` |
| Route triplet | Always 3 entries: root, `/en/`, `/es/` | |

The root path (without language prefix) defaults to `en` via `router.js`.

#### Characters and avatars

All chat examples use characters from the TV show **Silicon Valley**:

| Character | Image | Role |
|---|---|---|
| `T.J Miller` | `/img/T_J_Miller.png` | Initiator / asker |
| `Thomas Middleditch` | `/img/Thomas_Middleditch.png` | Responder (bad and good) |
| `Monica Hall` | `/img/Monica_Hall.png` | Optional third voice + thread avatar indicator |

Avatar mapping is automatic in `ChatExample.js`. **Do not use other names** unless you add new avatar images and update the mapping.

#### SSR awareness

The project pre-renders all routes at build time (`scripts/prerender.js`). Components must work in JSDOM/Node:

- Check `typeof window === 'undefined'` or `global.__SSR__` before browser-only APIs.
- Dynamic imports (like `TypeIt`) must be in `setTimeout` + `try/catch`.

#### `ChatCrimesList` mapping

When adding a new crime, also add an entry to `urlToPageKey` in `src/components/ChatCrimesList/ChatCrimesList.js`:

```js
const urlToPageKey = {
  // ... existing ...
  '/my-new-crime': 'mynewcrime'
}
```

---

## File Reference

```
src/
├── translations.js          # All page content lives here
├── routes.js                # URL → page key + view mapping
├── router.js                # Language detection from URL
├── main.js                  # Render loop (reads routes + translations)
├── views/
│   ├── StandardView.js      # Renders crime pages
│   └── HomeView.js          # Renders the home page
└── components/
    ├── Header/              # Page title, subtitle, rotating animations
    ├── IntroText/           # Intro paragraph
    ├── ChatExampleSection/  # Chat example + explanation (don't/do)
    ├── ChatCrimesList/      # Home page crime links
    └── Footer/              # Footer paragraphs
```
