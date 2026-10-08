import { projects } from '../../app/data/projects'

export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig().public
  const paths = ['', ...projects.map(p => `/work/${p.slug}`)]
  const urls = paths
    .map(p => `  <url><loc>${siteUrl}${p}</loc><changefreq>monthly</changefreq><priority>${p ? '0.8' : '1.0'}</priority></url>`)
    .join('\n')
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
