# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run start        # Dev server (gatsby develop)
npm run build        # Production build
npm run serve        # Serve built site locally
npm run clean        # Clean build artifacts
npm run check:lint   # ESLint check
npm run fix:lint     # Auto-fix lint issues
npm run check:prettier  # Prettier format check
npm run fix:prettier    # Auto-fix formatting
npm run deploy-gh    # Build and deploy to GitHub Pages
```

There are no tests (placeholder script exits with code 1).

CI runs on PRs to main: lint → prettier → build (Node 20).

## Architecture

Personal tech blog built with **Gatsby 5** + **React 18**, deployed to GitHub Pages at `marcingladkowski.com`.

### Key config files

- `blog-config.js` — blog metadata, author info, social links, and feature toggles (e.g., Giscus comments are currently disabled)
- `gatsby-config.js` — plugin setup and site metadata
- `gatsby-node.js` — page generation logic (creates post pages, tag pages, series pages)
- `jsconfig.json` — path aliases for absolute imports

### Content

- `contents/posts/` — Markdown blog posts with frontmatter (`title`, `date`, `tags`, `series`)
- `contents/about/` — About page content (Markdown)

### Styling

Styled Components (CSS-in-JS). Dark mode is responsive to OS `prefers-color-scheme` media query. Redux manages theme state client-side.

### Notable plugins

- `gatsby-remark-prismjs` — syntax highlighting
- `gatsby-remark-katex` — LaTeX math rendering
- `gatsby-plugin-feed` — RSS feed at `/rss.xml`
- `gatsby-plugin-sitemap` — auto-generated sitemap
