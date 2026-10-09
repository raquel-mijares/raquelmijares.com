export type Category = 'product' | 'systems' | 'open-source'

export interface Project {
  slug: string
  title: string
  org: string
  category: Category
  years: string
  visual: string
  tone: 'light' | 'dark'
  summary: string
  caption: string
  cover: { from: string, via: string, to: string, dark?: boolean }
  context: string
  problem: string
  approach: string[]
  outcome: string[]
  stack: string[]
  link?: { label: string, href: string }
  quote?: { text: string, name: string, title: string }
}

export const projects: Project[] = [
  {
    slug: 'subscription-checkout',
    title: 'Subscription checkout',
    org: 'Victory+ · APMC',
    category: 'product',
    years: '2025—2026',
    visual: 'checkout',
    cover: { from: '#f7d9c4', via: '#efb49b', to: '#fbeee4' },
    caption: 'Six entry points into the purchase flow, consolidated into one in-app checkout.',
    tone: 'light',
    summary: 'Six ways into the purchase flow became one in-app checkout, with plans and prices kept in one place.',
    context:
      'Victory+ was a sports streaming service. On the web app it sold a Texas Rangers subscription with an annual and a monthly plan, paid through Stripe.',
    problem:
      'The purchase flow had grown in pieces. Entry points were spread across the app, some of them sent people out to an external page, and plan IDs and prices were copied into many files.',
    approach: [
      'Wrote the architecture analysis before writing code: a phased plan, the impact on the other platforms, and how to roll back each phase.',
      'Centralized every purchase entry point and removed the flows that duplicated each other.',
      'Moved plan IDs and prices into one config, then read prices from the API instead of a hardcoded map.',
      'Kept the selected plan across the login redirect, moving it from sessionStorage to a cookie so it also works with server-side rendering.',
      'Deleted the old flow once the new one was live.',
    ],
    outcome: [
      'One flow to change, test and reason about.',
      'When the partnership ended in July 2026, hiding every entry point was a same-day change.',
    ],
    stack: ['Nuxt', 'Vue 3', 'TypeScript', 'Stripe Embedded Checkout', 'Pinia'],
  },
  {
    slug: 'consent-load-order',
    title: 'Consent load order',
    org: 'Victory+ · APMC',
    category: 'systems',
    years: '2026',
    visual: 'consent',
    cover: { from: '#d3e4d6', via: '#9fc2ab', to: '#eef4ec' },
    caption: 'The order of events on page load after the fix. Consent defaults are in the server-rendered HTML before Tag Manager loads.',
    tone: 'dark',
    summary: 'Ads and analytics waited for the viewer’s privacy choice instead of loading before it.',
    context:
      'The site ran a consent banner, Google Tag Manager and several ad and analytics tags. The banner is where the user decided; Tag Manager is where tags actually fired.',
    problem:
      'Two silent bugs. The choice made in the banner never reached Google. And Tag Manager could load before the consent defaults were set, and Google treats undefined consent as granted.',
    approach: [
      'Mapped the real order of events on page load, step by step, from defaults to the first tag firing.',
      'Wired the consent banner to send its decision through gtag consent updates.',
      'Moved the default "denied" state into the server-rendered HTML, so it exists before any tag can load.',
      'Gated the Meta Pixel behind explicit ad consent and moved conversion events to fire from Stripe’s completion callback.',
      'Made consent per account, so a decision follows the user instead of the device.',
    ],
    outcome: [
      'Tags fired only after a decision, and the decision reached the platforms that needed it.',
      'Along the way, fixed a missing placement parameter that was misattributing revenue in marketing reports.',
    ],
    stack: ['Nuxt SSR', 'Google Tag Manager', 'Consent Mode', 'Sourcepoint', 'Meta Pixel'],
  },
  {
    slug: 'broadcast-console',
    title: 'Broadcast operator console',
    org: 'APMC',
    category: 'product',
    years: '2026',
    visual: 'console',
    cover: { from: '#283656', via: '#45608f', to: '#121a2c', dark: true },
    caption: 'Signal flow in the operator console: inputs go through the switcher to the program output, with ad breaks triggered from the app.',
    tone: 'dark',
    summary: 'A macOS app that broadcast operators used live during games, built in Flutter.',
    context:
      'During a live game, operators need one desktop tool to run the stream: pick the input, trigger ad breaks and keep the feed healthy.',
    problem:
      'A lost ad-break response meant starting over, input names were hard to read, an input could be switched on air by mistake, and passphrase-protected SRT feeds would not play. And the web team had never used Flutter.',
    approach: [
      'Learned Dart and Flutter for the project.',
      'Built the ad-break controls, including recovering a break whose response was lost and importing breaks from a spreadsheet.',
      'Improved the input switcher: readable input names and aliases, and a confirmation before a route group changes input.',
      'Added a fullscreen video mode for macOS that keeps the audio meters on screen.',
      'Fixed SRT playback for feeds protected with a passphrase.',
      'Cut and shipped releases myself.',
    ],
    outcome: [
      'Operators could recover a lost ad break and import breaks from a spreadsheet, switching inputs on air asked for confirmation first, and protected SRT feeds played.',
      'Used live during games by the people running the broadcast, across 86 pull requests.',
    ],
    stack: ['Flutter', 'Dart', 'macOS', 'SRT'],
    quote: {
      text: 'She picked up Flutter at a remarkable pace and implemented advanced features with minimal guidance. She pointed out technical improvements in my PRs and took the initiative to introduce test-driven development into that codebase.',
      name: 'Pierre Chamberlain',
      title: 'Fullstack Developer, APMC',
    },
  },
  {
    slug: 'dialog-system',
    title: 'Dialog system',
    org: 'Victory+ · Kidoodle.TV · APMC',
    category: 'systems',
    years: '2026',
    visual: 'dialogs',
    cover: { from: '#e1daf4', via: '#b6a7e0', to: '#f4f1fb' },
    caption: 'Three modal systems replaced by one base dialog with shared accessibility behaviour and a theme per brand.',
    tone: 'light',
    summary: 'Three different pop-up systems became one accessible dialog, styled for both brands.',
    context:
      'Two streaming brands shared one Nuxt monorepo. Dialogs were everywhere: sign-in, passcodes, TV provider sign-in, promotions.',
    problem:
      'Three ways to open a modal had grown side by side, and earlier attempts to unify them had stalled. Focus handling and accessibility depended on which one a screen used.',
    approach: [
      'Shipped the base dialog and its theming tokens first, with no consumers moved, so the foundation landed on its own.',
      'One component, two brands: themes come from design tokens, down to a per-brand title font.',
      'Migrated consumers brand by brand in small pull requests, leaving the riskiest flows (TV provider sign-in, account deletion, TV pairing) for last.',
      'Removed the legacy modal systems.',
    ],
    outcome: [
      'One place for focus management, Escape handling and ARIA, covered by 300 end-to-end tests.',
      'New dialogs inherit accessibility instead of re-implementing it.',
    ],
    stack: ['Vue 3', 'Reka UI', 'Design tokens', 'TypeScript'],
  },
  {
    slug: 'auth-source-of-truth',
    title: 'Auth state and route access',
    org: 'Victory+ · Kidoodle.TV · APMC',
    category: 'systems',
    years: '2026',
    visual: 'auth',
    cover: { from: '#d2e6f5', via: '#9fc5e6', to: '#eef6fc' },
    caption: 'Route access as a matrix. Each page declares whether registered users, guests or signed-out visitors can see it.',
    tone: 'light',
    summary: 'Sign-in that stays in sync across the app, and pages that say clearly who can open them.',
    context:
      'Server-side rendered app, two brands, three kinds of visitor: registered users, guests and people who are not signed in.',
    problem:
      'Sign-in state lived in two stores that could drift apart between server and client. Route access was one large conditional that was hard to read and harder to debug.',
    approach: [
      'Replaced the dual store with a single cookie-persisted source of truth.',
      'Each page now declares its access level (registered, guest or unauthenticated) in its route meta, and the middleware reads that.',
      'Moved brand differences into a per-app auth config, so both brands share one implementation.',
    ],
    outcome: [
      'Access rules live on each page and can be read in one place.',
      'Server and client agree on who is signed in.',
    ],
    stack: ['Nuxt middleware', 'Pinia', 'Cookies', 'TypeScript'],
  },
  {
    slug: 'ad-beacons',
    title: 'Ad beacon accuracy',
    org: 'Victory+ · APMC',
    category: 'systems',
    years: '2026',
    visual: 'beacons',
    cover: { from: '#3a2f25', via: '#8a6236', to: '#1d1814', dark: true },
    caption: 'Before, some ad beacons fired twice. After, each fires once, and open tabs share one ad session through BroadcastChannel.',
    tone: 'dark',
    summary: 'Ad reports counted each ad once, so the revenue numbers were right.',
    context:
      'Ad-supported video sends tracking beacons as an ad plays. Those beacons are what revenue reporting is built on.',
    problem:
      'Completion events were overcounted, beacons fired again when the ad changed mid-break, and two open tabs could run separate ad sessions for the same viewer.',
    approach: [
      'Deduplicated beacons per ad, including when the ad ID changes mid-break.',
      'Fixed video completion overcounting.',
      'Shared one ad-session ID across tabs with BroadcastChannel.',
    ],
    outcome: [
      'Beacon counts that match what was actually played.',
      'It took a few reverts to get right. On async player code like this I now write the tests before the fix.',
    ],
    stack: ['TypeScript', 'BroadcastChannel', 'Video player events'],
  },
  {
    slug: 'frontend-compliance',
    title: 'frontend-compliance',
    org: 'Public on GitHub',
    category: 'open-source',
    years: '2026',
    visual: 'terminal',
    cover: { from: '#cdeee4', via: '#86cdb9', to: '#eef9f5' },
    caption: 'A sample of the end-to-end specs in the repository.',
    tone: 'dark',
    summary: 'Consent gating, analytics without PII and kids privacy as runnable TypeScript, with tests that fail if a tracker loads too early.',
    context:
      'Most of my work lives in private repositories. This is the public one, so you can read how I write code.',
    problem:
      'Writing on compliance is aimed at lawyers or infrastructure people. The person who implements it is whoever writes the component, and the failures happen on the client.',
    approach: [
      'A consent state machine and a single gate that every third-party tag has to pass through.',
      'Separate tag inventories for general and kids audiences, so kids ads fail at startup instead of in production.',
      'Normalization and SHA-256 hashing for conversion APIs, with shared event IDs for Pixel and server deduplication.',
      'Playwright specs that assert nothing fires before consent, that rejecting costs the same as accepting, and that no PII leaves in URLs or request bodies.',
      'An accessible consent dialog, checked with axe.',
    ],
    outcome: [
      '29 unit tests and 18 end-to-end specs, run in CI with a dependency audit.',
      'Six engineering notes: consent, analytics without PII, children’s privacy, SOC 2 evidence, event deduplication and consent UI accessibility.',
    ],
    stack: ['TypeScript', 'Vite', 'Vitest', 'Playwright', 'axe-core', 'GitHub Actions'],
    link: { label: 'github.com/raquel-mijares/frontend-compliance', href: 'https://github.com/raquel-mijares/frontend-compliance' },
  },
  {
    slug: 'revenue-centers',
    title: 'Revenue Centers',
    org: 'Kettl',
    category: 'product',
    years: '2023—2024',
    visual: 'schema',
    cover: { from: '#f5e9c4', via: '#e6cc80', to: '#fbf6e6' },
    caption: 'The Revenue Centers data model and its nine-part rollout.',
    tone: 'light',
    summary: 'A new way for customers to track revenue by area, built end to end from database to screen.',
    context:
      'Kettl is production management software for live events. Customers are tenants with years of existing data.',
    problem:
      'Customers needed to attribute revenue to centers and connect them to events and production sheets, without breaking data that already existed.',
    approach: [
      'Designed the data model and its associations with events and production sheets.',
      'Wrote migrations for existing tenants and a default assignment for new ones.',
      'Built the GraphQL schema and resolvers through Prisma to PostgreSQL, with role-based permissions.',
      'Shipped it as a nine-part rollout so every piece could be reviewed on its own.',
    ],
    outcome: [
      'Every existing tenant migrated, every new tenant set up by default.',
      'Nine small pull requests instead of one large one.',
    ],
    stack: ['React', 'Next.js', 'Apollo GraphQL', 'Prisma', 'PostgreSQL'],
  },
  {
    slug: 'audit-dashboards',
    title: 'Audit-readiness dashboards',
    org: 'Tugboat Logic (acquired by OneTrust)',
    category: 'product',
    years: '2021—2023',
    visual: 'audit',
    cover: { from: '#eedcd8', via: '#d2aea7', to: '#f8efed' },
    caption: 'An illustration of evidence compared between audit cycles. Not real customer data.',
    tone: 'light',
    summary: 'Dashboards for SOC 2, ISO 27001, GDPR and HIPAA programs, and the component library behind them.',
    context:
      'Tugboat Logic helped companies get ready for security audits. Customers tracked their controls and evidence across audit cycles.',
    problem:
      'Customers needed to see how ready they were, and what had changed in their evidence since the last audit.',
    approach: [
      'Built customer-facing audit-readiness dashboards.',
      'Built version comparison of evidence between audit cycles.',
      'Grew a Storybook component library that cut duplication, tested with React Testing Library and Cypress.',
      'Stayed through the OneTrust acquisition and the platform integration that followed.',
    ],
    outcome: [
      'Readiness and evidence changes shown side by side for each audit cycle.',
      'One component library behind the dashboards instead of duplicated UI.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Storybook', 'Cypress'],
  },
]
