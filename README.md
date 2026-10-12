# raquelmijares.com

Personal site of Raquel Mijares, senior software developer in Calgary: case studies, an interactive design system and the code behind it.

**Live:** [raquelmijares.com](https://raquelmijares.com)

## Stack

Nuxt 4, Vue 3, TypeScript, Tailwind CSS 4 and shadcn-vue (Reka UI). Deployed on Vercel.

## Structure

```
app/
├── pages/            index, work/[slug], og image page
├── components/
│   ├── home/         one component per home section
│   ├── ds/           design system stories (dialog, buttons, tokens, ...)
│   ├── covers/       project cover mockups
│   └── visuals/      diagrams inside case studies
├── data/             all content: projects, experience, reading, design tokens, theme
├── composables/      useSpotlight (scroll highlight on touch devices)
└── plugins/          view transition rules
tests/                Playwright functional and visual regression tests
```

Content lives in `app/data`, so adding a project or an article does not touch components.

## Decisions worth knowing

- **Design system section:** Victory+ and Kidoodle.TV tokens are the brands' real values, layered as a shared base, brand tokens and component tokens.
- **Theme:** an inline boot script resolves light or dark before first paint, so there is no flash, and the visitor's choice is remembered.
- **View transitions:** the name and project covers morph between pages. Reduced motion turns them off.
- **Accessibility:** design system examples use the tabs pattern with arrow key navigation; Lighthouse accessibility and SEO are at 100.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | vue-tsc |
| `npm run test:e2e` | Playwright functional and visual tests |

## Visual regression

Snapshots in `tests/__screenshots__` are rendered on Linux so they match CI. To refresh them after an intentional design change, run the `visual-baselines` workflow (or push a `visual/*` branch) and commit the artifact it uploads. Locally, visual tests are skipped unless `VISUAL=1` is set.

## CI

Every push and pull request runs lint, typecheck, build and the Playwright suite.
