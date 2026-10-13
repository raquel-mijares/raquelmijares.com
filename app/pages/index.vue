<script setup lang="ts">
import '~/components/home/home.css'

const home = ref<HTMLElement>()
useSpotlight(home)

const { siteUrl } = useRuntimeConfig().public

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Raquel Mijares',
      'url': siteUrl,
    }),
  }, {
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
</script>

<template>
  <div ref="home" class="home">
    <HomeHero />
    <HomeAbout />
    <HomeWork />
    <HomeOpenSource />
    <HomeExperience />
    <HomeSystems />
    <HomeRecommendations />
    <HomeReading />
    <HomeContact />
  </div>
</template>
