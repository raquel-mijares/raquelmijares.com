export type ThemeId = 'victory' | 'kidoodle'

export interface Token {
  name: string
  role: string
}

export interface TokenLink {
  component: string
  brand: string
  value: string
  swatch?: string
}

export interface Theme {
  id: ThemeId
  label: string
  brand: string
  font: string
  fontFamily: string
  fontNote: string
  chain: TokenLink[]
  image: string
  page: string
  pageLabel: string
  caps: boolean
  colors: Record<string, string>
  inputRadius: string
  copy: {
    eyebrow: string
    title: string
    body: string
    primary: string
    secondary: string
    field: string
    placeholder: string
    toggle: string
  }
}

export const colorTokens: Token[] = [
  { name: 'bg', role: 'Page' },
  { name: 'surface', role: 'Cards' },
  { name: 'ink', role: 'Text' },
  { name: 'muted', role: 'Secondary text' },
  { name: 'primary', role: 'Actions' },
  { name: 'accent', role: 'Highlights' },
  { name: 'dialog-bg', role: 'Dialog' },
  { name: 'dialog-primary', role: 'Dialog actions' },
]

export const contrastPairs: { fg: string, bg: string, label: string }[] = [
  { fg: 'ink', bg: 'bg', label: 'Text on page' },
  { fg: 'muted', bg: 'surface', label: 'Secondary text on card' },
  { fg: 'on-primary', bg: 'primary', label: 'Label on button' },
  { fg: 'dialog-fg', bg: 'dialog-bg', label: 'Text in dialog' },
]

export const themes: Record<ThemeId, Theme> = {
  victory: {
    id: 'victory',
    label: 'Victory+',
    brand: 'Sports streaming',
    font: 'Inter',
    fontFamily: 'Inter, var(--sans)',
    fontNote: 'Inter',
    chain: [
      { component: '--color-dialog-background', brand: '--color-surface-dark', value: '#171717', swatch: '#171717' },
      { component: '--color-dialog-primary', brand: '--color-action-light', value: '#e5e5e5', swatch: '#e5e5e5' },
      { component: '--color-dialog-muted-foreground', brand: '--color-base-muted-foreground', value: '#a3a3a3', swatch: '#a3a3a3' },
      { component: '--color-dialog-overlay', brand: '--color-alpha-black-64', value: 'black, 64%', swatch: 'rgb(0 0 0 / 0.64)' },
      { component: '--dialog-title-font', brand: '--font-inter', value: 'Inter' },
    ],
    image: '/images/hero-ballpark.webp',
    page: '#0e0f0e',
    pageLabel: '#0e0f0e',
    caps: false,
    colors: {
      'bg': '#0e0f0e',
      'surface': '#171717',
      'ink': '#f5f5f4',
      'muted': '#a3a3a3',
      'primary': '#e5e5e5',
      'on-primary': '#171717',
      'accent': '#ffffff',
      'line': '#2e2e2e',
      'input-bg': '#2b2b2b',
      'dialog-bg': '#171717',
      'dialog-fg': '#fafafa',
      'dialog-muted': '#a3a3a3',
      'dialog-primary': '#e5e5e5',
      'dialog-on-primary': '#171717',
      'dialog-secondary': '#262626',
      'dialog-on-secondary': '#fafafa',
      'dialog-border': '#2e2e2e',
      'overlay': 'rgb(0 0 0 / 0.64)',
    },
    inputRadius: '4px',
    copy: {
      eyebrow: 'Live',
      title: 'Matchday pass',
      body: 'Every home and away game, live and on demand.',
      primary: 'Subscribe',
      secondary: 'See plans',
      field: 'Email',
      placeholder: 'you@example.com',
      toggle: 'Score alerts',
    },
  },
  kidoodle: {
    id: 'kidoodle',
    label: 'Kidoodle.TV',
    brand: 'Kids streaming',
    font: 'Mikado',
    fontFamily: 'Nunito, var(--sans)',
    fontNote: 'Mikado, shown in Nunito',
    chain: [
      { component: '--color-dialog-background', brand: '--color-primary-light', value: '#ffffff', swatch: '#ffffff' },
      { component: '--color-dialog-primary', brand: '--color-ktv-600', value: '#2630f9', swatch: '#2630f9' },
      { component: '--color-dialog-muted-foreground', brand: '--color-surface-near-black', value: '#262626', swatch: '#262626' },
      { component: '--color-dialog-overlay', brand: '--color-alpha-black-48', value: 'black, 48%', swatch: 'rgb(0 0 0 / 0.48)' },
      { component: '--dialog-title-font', brand: '--font-mikado', value: 'Mikado' },
    ],
    image: '/images/kids-panda.webp',
    page: 'linear-gradient(#302fff 33%, #7f06fd 100%)',
    pageLabel: '#302fff → #7f06fd',
    caps: true,
    colors: {
      'bg': '#302fff',
      'surface': '#4f4eff',
      'ink': '#fafafa',
      'muted': '#f5f5f5',
      'primary': '#ffffff',
      'on-primary': '#000000',
      'accent': '#52ffb6',
      'line': '#7a79ff',
      'input-bg': '#4f4eff',
      'dialog-bg': '#ffffff',
      'dialog-fg': '#000000',
      'dialog-muted': '#262626',
      'dialog-primary': '#2630f9',
      'dialog-on-primary': '#ffffff',
      'dialog-secondary': '#f3f4f6',
      'dialog-on-secondary': '#000000',
      'dialog-border': '#e5e5e5',
      'overlay': 'rgb(0 0 0 / 0.48)',
    },
    inputRadius: '8px',
    copy: {
      eyebrow: 'New',
      title: 'Story time',
      body: 'Fresh episodes every Friday, picked for ages 3 to 7.',
      primary: 'Watch now',
      secondary: 'Add to list',
      field: 'Grown-up email',
      placeholder: 'parent@example.com',
      toggle: 'Autoplay',
    },
  },
}

export const sharedTokens: { name: string, value: string, px: number }[] = [
  { name: '--dialog-radius-lg', value: '1rem', px: 16 },
  { name: '--carousel-hover-border-radius', value: '12px', px: 12 },
  { name: '--dialog-radius', value: '.625rem', px: 10 },
  { name: '--dialog-button-radius', value: '.5rem', px: 8 },
]

export const spacing = [
  { name: 'space-1', px: 4, use: 'Icon to label' },
  { name: 'space-2', px: 8, use: 'Between buttons' },
  { name: 'space-3', px: 12, use: 'Inside small controls' },
  { name: 'space-4', px: 16, use: 'Card padding' },
  { name: 'space-6', px: 24, use: 'Dialog padding' },
  { name: 'space-8', px: 32, use: 'Between groups' },
  { name: 'space-12', px: 48, use: 'Between sections' },
  { name: 'space-16', px: 64, use: 'Page margins' },
]

export const motion = [
  { name: 'duration-fast', ms: 150, easing: 'cubic-bezier(0.2, 0, 0, 1)', easingName: 'standard', use: 'Hover, toggles, small state changes' },
  { name: 'duration-base', ms: 250, easing: 'cubic-bezier(0.05, 0.7, 0.1, 1)', easingName: 'enter', use: 'Dialogs, menus, things that appear' },
  { name: 'duration-slow', ms: 400, easing: 'cubic-bezier(0.3, 0, 0.8, 0.15)', easingName: 'exit', use: 'Large panels closing, things leaving' },
]

export const typeScale = [
  { id: 'display', label: 'Display', spec: '48 / 1.1 · Bold' },
  { id: 'title', label: 'Title', spec: '20 / 1.3 · Bold' },
  { id: 'body', label: 'Body', spec: '16 / 1.5 · Regular' },
  { id: 'label', label: 'Label', spec: '14 / 1.4 · Bold, caps' },
] as const

const channel = (v: number) => {
  const c = v / 255
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

const luminance = (hex: string) => {
  const n = Number.parseInt(hex.slice(1), 16)
  return 0.2126 * channel((n >> 16) & 255) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255)
}

export const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number]
  return (hi + 0.05) / (lo + 0.05)
}

export const grade = (ratio: number) => (ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3 ? 'AA large' : 'Fail')
