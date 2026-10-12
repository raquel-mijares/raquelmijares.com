import type { Page } from '@playwright/test'

export async function settle(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y)
      await new Promise(r => setTimeout(r, 40))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForFunction(() => [...document.querySelectorAll('img.photo')].every(img => img.classList.contains('in')), undefined, { timeout: 10_000 })
  await page.evaluate(() => document.fonts.ready)
}
