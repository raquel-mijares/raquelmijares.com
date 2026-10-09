<script setup lang="ts">
import { ArrowUpRight, ChevronDown, Mail } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { projects } from '~/data/projects'
import { reading } from '~/data/reading'
import { recommendations } from '~/data/recommendations'

const work = projects.filter(p => p.category !== 'open-source')
const openSource = projects.filter(p => p.category === 'open-source')

const experience = [
  { org: 'APMC', role: 'Senior Software Developer', years: '2024—2026' },
  { org: 'Kettl', role: 'Software Engineer', years: '2023—2024' },
  { org: 'Tugboat Logic, acquired by OneTrust', role: 'Front End Developer', years: '2021—2023' },
  { org: 'InceptionU', role: 'Full Stack Development Program', years: '2020—2021' },
]

const flow = [
  { title: 'Designed in Figma', text: 'I match the design team’s Figma specs, down to spacing and line height.' },
  { title: 'Design tokens', text: 'Three layers: a shared base, each brand’s colors, then component tokens like the dialog’s.' },
  { title: 'Storybook', text: 'At Tugboat Logic I grew the component library, with every component in every state.' },
  { title: 'Shipped', text: 'Three modal systems became one dialog, used by both Victory+ and Kidoodle.TV.' },
]

const home = ref<HTMLElement>()
useSpotlight(home)

const readingFirst = reading.slice(0, 4)
const readingMore = reading.slice(4)
const showMoreReading = ref(false)

const featured = recommendations.slice(0, 3)
const more = recommendations.slice(3)
const showMore = ref(false)

const { siteUrl } = useRuntimeConfig().public

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Raquel Mijares',
      'jobTitle': 'Senior Software Developer',
      'url': siteUrl,
      'image': `${siteUrl}/images/raquel.webp`,
      'address': { '@type': 'PostalAddress', 'addressLocality': 'Calgary', 'addressRegion': 'AB', 'addressCountry': 'CA' },
      'sameAs': ['https://www.linkedin.com/in/raquelmjrs/', 'https://github.com/raquel-mijares'],
      'knowsAbout': ['Vue', 'Nuxt', 'React', 'TypeScript', 'Flutter', 'Design systems', 'Storybook', 'Figma', 'Web accessibility', 'Consent management', 'Payments', 'AI-assisted development'],
      'alumniOf': 'Universidad Metropolitana',
    }),
  }],
})

const short = (org: string) => org.includes('Victory+ · Kidoodle.TV') ? 'APMC' : org.split(' · ')[0]!.replace(' (acquired by OneTrust)', '')
</script>

<template>
  <div ref="home" class="home">
    <header class="col hero">
      <div class="id">
        <Avatar class="avatar">
          <AvatarImage src="/images/raquel.webp" alt="Portrait of Raquel Mijares" width="72" height="72" />
          <AvatarFallback :delay-ms="800">RM</AvatarFallback>
        </Avatar>
        <div>
          <h1>Raquel Mijares</h1>
          <p class="muted">Senior Software Developer, Calgary</p>
        </div>
      </div>
      <p class="headline">
        I build the parts of a product that have to be right: payments, privacy, and the screens
        people use every day.
      </p>
      <div class="ctas">
        <Button as="a" href="mailto:raquelmjrs@gmail.com">
          <Mail aria-hidden="true" />
          Email me
        </Button>
        <Button as="a" variant="ghost" href="https://www.linkedin.com/in/raquelmjrs/" rel="noopener">
          LinkedIn
          <ArrowUpRight aria-hidden="true" />
        </Button>
        <Button as="a" variant="ghost" href="https://github.com/raquel-mijares" rel="noopener">
          GitHub
          <ArrowUpRight aria-hidden="true" />
        </Button>
      </div>
    </header>

    <section aria-labelledby="about" class="section col prose">
      <h2 id="about" class="sr-only">About</h2>
      <p>
        I’m a senior software developer in Calgary, and the frontend is where I do my best work. I like owning a problem end to end:
        understanding what the product needs, planning it, building it, testing it and shipping it.
        I break big changes into pieces people can actually review, and I learn whatever the work
        calls for, from payment and privacy rules to Flutter for a live broadcast.
      </p>
      <p>
        Most recently I built the web apps for Victory+ and Kidoodle.TV at APMC, where Victory+
        carried 200,000+ concurrent viewers through the 2025 playoffs. I also led the Nuxt 3 to 4
        migration and wrote the release and QA process the team shipped with.
      </p>
      <p>
        AI is part of how I build every day: I run Claude Code against Jira, GitHub and a real
        browser, and it powered the QA sign-off script our releases ran through.
      </p>
      <p class="products muted">
        Products I’ve worked on: Victory+, Kidoodle.TV, Tugboat Logic (now OneTrust) and Kettl.
      </p>
    </section>

    <section aria-labelledby="work" class="section breakout">
      <div class="col head">
        <h2 id="work">Work</h2>
        <p class="muted">
          This work lives in private repositories, so each project is a short write-up: the problem,
          what I did and what changed.
        </p>
      </div>
      <ul class="gallery wide">
        <li v-for="p in work" :key="p.slug">
          <NuxtLink :to="`/work/${p.slug}`" class="card" data-spot>
            <ProjectCover :project="p" />
            <span class="card-text">
              <span class="card-head">
                <span class="title">{{ p.title }}</span>
                <span class="meta muted">{{ short(p.org) }}, {{ p.years.slice(-4) }}</span>
              </span>
              <span class="muted">{{ p.summary }}</span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="oss" class="section col">
      <h2 id="oss" class="head">Open source</h2>
      <ul class="list">
        <li v-for="p in openSource" :key="p.slug">
          <NuxtLink :to="`/work/${p.slug}`" class="row" data-spot>
            <span class="card-head">
              <span class="title">{{ p.title }}</span>
              <span class="meta muted">GitHub, {{ p.years }}</span>
            </span>
            <span class="muted">{{ p.summary }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="experience" class="section col">
      <h2 id="experience" class="head">Experience</h2>
      <ul class="jobs">
        <li v-for="(e, i) in experience" :key="e.org">
          <Separator v-if="i > 0" />
          <div class="job">
            <span class="org">{{ e.org }}</span>
            <span class="muted">{{ e.role }}</span>
            <span class="muted yr">{{ e.years }}</span>
          </div>
        </li>
      </ul>
      <p class="muted after">
        At APMC, from September 2024 to September 2026, I opened 1,112 pull requests and reviewed
        502 from teammates.
      </p>
      <p class="muted after">
        Before software I worked in project coordination, procurement and inventory. BSc in
        Production Engineering, Universidad Metropolitana.
      </p>
    </section>

    <section aria-labelledby="system" class="section breakout">
      <div class="col head">
        <h2 id="system">Design system</h2>
        <p class="muted">
          Victory+ and Kidoodle.TV shared one codebase. Buttons, dialogs and forms were the same
          components; each brand only changed the colors, fonts and corners. Switch brands below to
          see it. I built the dialog system both apps used,
          <NuxtLink to="/work/dialog-system" class="link">here’s how</NuxtLink>.
        </p>
      </div>
      <div class="wide">
        <DesignSystem />
      </div>
      <ol class="flow wide">
        <li v-for="(f, i) in flow" :key="f.title">
          <span class="step">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="title">{{ f.title }}</span>
          <span class="muted">{{ f.text }}</span>
        </li>
      </ol>
      <p class="col muted note">
        Colors and sizes are the brands’ real tokens, taken from the live Kidoodle.TV site and the
        last public build of Victory+.
      </p>
    </section>

    <section aria-labelledby="recs" class="section col">
      <h2 id="recs" class="head">Recommendations</h2>
      <ul class="quotes">
        <li v-for="r in featured" :key="r.name">
          <figure>
            <blockquote>
              <p>{{ r.quote }}</p>
            </blockquote>
            <figcaption>
              <span class="who">{{ r.name }}</span>
              <span class="muted">{{ r.title }}, {{ r.relation }}</span>
            </figcaption>
          </figure>
        </li>
      </ul>
      <Collapsible v-model:open="showMore">
        <CollapsibleContent>
          <ul class="quotes more">
            <li v-for="r in more" :key="r.name">
              <figure>
                <blockquote>
                  <p>{{ r.quote }}</p>
                </blockquote>
                <figcaption>
                  <span class="who">{{ r.name }}</span>
                  <span class="muted">{{ r.title }}, {{ r.relation }}</span>
                </figcaption>
              </figure>
            </li>
          </ul>
        </CollapsibleContent>
        <CollapsibleTrigger as-child>
          <Button variant="ghost" size="sm" class="toggle">
            {{ showMore ? 'Show fewer' : `Show ${more.length} more` }}
            <ChevronDown aria-hidden="true" class="chev" :class="{ up: showMore }" />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
      <p class="muted after">
        From <a href="https://www.linkedin.com/in/raquelmjrs/" class="link" rel="noopener">recommendations on LinkedIn</a>.
      </p>
    </section>

    <section aria-labelledby="reading" class="section col">
      <div class="head">
        <h2 id="reading">Reading</h2>
        <p class="muted">Articles I keep coming back to, and where they show up in my work.</p>
      </div>
      <ul class="list reading">
        <li v-for="a in readingFirst" :key="a.href">
          <a :href="a.href" class="row read" rel="noopener" data-spot>
            <span class="title">
              {{ a.title }}
              <ArrowUpRight aria-hidden="true" class="ext" />
            </span>
            <span class="by">{{ a.author }}</span>
            <span class="muted note-line">{{ a.note }}</span>
          </a>
        </li>
      </ul>
      <Collapsible v-if="readingMore.length" v-model:open="showMoreReading">
        <CollapsibleContent>
          <ul class="list reading">
            <li v-for="a in readingMore" :key="a.href">
              <a :href="a.href" class="row read" rel="noopener">
                <span class="title">
                  {{ a.title }}
                  <ArrowUpRight aria-hidden="true" class="ext" />
                </span>
                <span class="by">{{ a.author }}</span>
                <span class="muted note-line">{{ a.note }}</span>
              </a>
            </li>
          </ul>
        </CollapsibleContent>
        <CollapsibleTrigger as-child>
          <Button variant="ghost" size="sm" class="toggle">
            {{ showMoreReading ? 'Show fewer' : `Show ${readingMore.length} more` }}
            <ChevronDown aria-hidden="true" class="chev" :class="{ up: showMoreReading }" />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </section>

    <section aria-labelledby="contact" class="section col prose">
      <h2 id="contact" class="head">Contact</h2>
      <p>If you’re building something I could help with, I’d like to hear about it.</p>
      <p>
        Email me at <a href="mailto:raquelmjrs@gmail.com" class="link">raquelmjrs@gmail.com</a> and I’ll
        send you my résumé, or find me on
        <a href="https://www.linkedin.com/in/raquelmjrs/" class="link" rel="noopener">LinkedIn</a> and
        <a href="https://github.com/raquel-mijares" class="link" rel="noopener">GitHub</a>.
      </p>
      <p class="muted">Calgary, Alberta. Local time <LocalTime /></p>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  justify-items: start;
  gap: var(--space-block);
}

.headline {
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.id {
  display: flex;
  align-items: center;
  gap: var(--space-item);
}

.avatar {
  width: 72px;
  height: 72px;
  box-shadow: 0 0 0 1px var(--line);
  font-size: var(--text-base);
  font-weight: 500;
}

h1 {
  margin: 0;
  font-size: var(--text-md);
  font-weight: 500;
  line-height: 1.4;
}

.id p {
  margin: var(--space-pair) 0 0;
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-related);
}

.section {
  margin-top: var(--space-section);
}

.breakout,
.breakout + .section {
  margin-top: calc(var(--space-section) + var(--space-block));
}

.breakout > .head {
  margin-bottom: calc(var(--space-block) + var(--space-related));
}

h2 {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.head {
  display: grid;
  gap: var(--space-related);
  margin-bottom: var(--space-block);
}

.head p {
  margin: 0;
}

.prose p {
  margin: 0;
}

.prose .head {
  margin-bottom: var(--space-item);
}

.prose p + p {
  margin-top: var(--space-item);
}

.prose .products {
  margin-top: var(--space-block);
  font-size: var(--text-sm);
}


.gallery {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-group) var(--space-block);
}

.card {
  display: grid;
  gap: var(--space-item);
  text-decoration: none;
}

@media (hover: hover) {
  .card:hover :deep(.stage) {
    transform: scale(1.025);
  }

  .row:hover {
    background: var(--hover);
  }
}

.card.is-spot :deep(.stage) {
  transform: scale(1.025);
}

.card:active :deep(.stage) {
  transform: scale(1.01);
  transition-duration: 0.15s;
}

.row.is-spot,
.row:active {
  background: var(--hover);
}

.card-text {
  display: grid;
  gap: var(--space-pair);
}

.card-text > .muted {
  max-width: 52ch;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-item);
}

.title {
  font-size: var(--text-md);
  font-weight: 500;
}

.row.read {
  gap: 2px;
  padding-block: 12px;
}

.by {
  color: var(--ink-2);
  font-size: var(--text-sm);
}

.note-line {
  margin-top: 4px;
}

.ext {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 2px;
  vertical-align: -1px;
  color: var(--ink-2);
  transition: transform 0.15s, color 0.15s;
}

.row:hover .ext,
.row.is-spot .ext {
  color: var(--ink);
  transform: translate(1px, -1px);
}

.quotes.more {
  margin-top: var(--space-block);
}

.toggle {
  margin: var(--space-item) 0 0 calc(var(--space-item) * -0.75);
}

.chev {
  transition: transform 0.2s;
}

.chev.up {
  transform: rotate(180deg);
}

.meta {
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.list {
  list-style: none;
  margin: 0 calc(var(--space-item) * -1);
  padding: 0;
}

.row {
  display: grid;
  gap: var(--space-pair);
  padding: var(--space-item);
  border-radius: var(--radius);
  text-decoration: none;
  transition: background-color 0.15s;
}


.quotes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-block);
}

.quotes figure {
  margin: 0;
  padding-left: var(--space-item);
  border-left: 1px solid var(--line);
}

.quotes blockquote {
  margin: 0;
}

.quotes blockquote p {
  margin: 0;
  text-wrap: pretty;
}

.quotes blockquote p::before {
  content: '“';
}

.quotes blockquote p::after {
  content: '”';
}

.quotes figcaption {
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--space-related);
  margin-top: var(--space-related);
  font-size: var(--text-sm);
}

.who {
  font-weight: 500;
}

.after {
  margin: var(--space-block) 0 0;
}

.after + .after {
  margin-top: var(--space-item);
}

.jobs {
  list-style: none;
  margin: 0;
  padding: 0;
}

.job {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  column-gap: var(--space-block);
  row-gap: var(--space-pair);
  padding-block: var(--space-item);
}

.jobs li:first-child .job {
  padding-top: 0;
}

.org {
  font-weight: 500;
}

.job > .muted {
  grid-column: 1;
}

.job .yr {
  grid-column: 2;
  grid-row: 1;
  text-align: right;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.flow {
  list-style: none;
  padding: 0;
  margin: var(--space-group) auto 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-block);
}

.flow li {
  display: grid;
  align-content: start;
  gap: var(--space-pair);
  padding-top: var(--space-item);
  border-top: 1px solid var(--line);
}

.flow .muted {
  font-size: var(--text-sm);
  text-wrap: pretty;
}

.step {
  color: var(--accent);
  font-family: var(--mono);
  font-size: 12px;
}

.note {
  margin-top: var(--space-block);
  margin-bottom: 0;
  font-size: var(--text-sm);
}

@media (max-width: 720px) {
  .gallery {
    grid-template-columns: 1fr;
  }

  .flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .avatar {
    width: 64px;
    height: 64px;
  }
}

@media (max-width: 420px) {
  .card-head {
    flex-direction: column;
    gap: 0;
  }

  .job {
    grid-template-columns: 1fr;
  }

  .job .yr {
    grid-column: 1;
    grid-row: auto;
    text-align: left;
  }
}
</style>
