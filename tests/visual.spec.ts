import { expect, test } from '@playwright/test'
import { settle } from './helpers'

test.skip(!process.env.CI && !process.env.VISUAL, 'Baselines are rendered on Linux in CI.')

const clock = (page: import('@playwright/test').Page) => [page.locator('.t')]

for (const [name, width, colorScheme] of [
  ['home-desktop-light', 1440, 'light'],
  ['home-desktop-dark', 1440, 'dark'],
  ['home-mobile-light', 375, 'light'],
] as const) {
  test(`home ${name}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.emulateMedia({ colorScheme })
    await page.goto('/')
    await settle(page)
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true, mask: clock(page) })
  })
}

test('case study', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/work/dialog-system')
  await settle(page)
  await expect(page).toHaveScreenshot('case-study.png', { fullPage: true })
})

for (const brand of ['Victory+', 'Kidoodle.TV']) {
  test(`design system dialog ${brand}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')
    const ds = page.locator('.ds')
    await ds.getByRole('button', { name: brand }).click()
    await page.evaluate(() => document.fonts.ready)
    await expect(ds).toHaveScreenshot(`ds-dialog-${brand.replace(/\W/g, '').toLowerCase()}.png`)
  })
}
