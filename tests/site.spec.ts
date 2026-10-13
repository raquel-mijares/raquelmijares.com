import { expect, test } from '@playwright/test'

test('home renders without console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', e => errors.push(e.message))
  page.on('console', m => m.type() === 'error' && errors.push(m.text()))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: 'Raquel Mijares' })).toBeVisible()
  for (const name of ['Work', 'Open source', 'Experience', 'Design system', 'Recommendations', 'Reading', 'Contact']) {
    await expect(page.getByRole('heading', { level: 2, name })).toBeVisible()
  }
  expect(errors).toEqual([])
})

test('theme toggle switches and remembers the choice', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  const html = page.locator('html')
  await expect(html).toHaveAttribute('data-theme', 'light')
  const toggle = page.getByRole('button', { name: 'Dark mode' })
  await toggle.click()
  await expect(html).toHaveAttribute('data-theme', 'dark')
  await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  await page.reload()
  await expect(html).toHaveAttribute('data-theme', 'dark')
})

test('expandable lists reveal the remaining items', async ({ page }) => {
  await page.goto('/')
  const reading = page.locator('section[aria-labelledby="reading"]')
  await expect(reading.locator('.row.read')).toHaveCount(3)
  const toggle = reading.getByRole('button', { name: /Show 2 more/ })
  await toggle.click()
  await expect(reading.locator('.row.read')).toHaveCount(5)
  await expect(reading.getByRole('button', { name: /Show fewer/ })).toHaveAttribute('aria-expanded', 'true')
})

test('design system tabs work with the keyboard', async ({ page }) => {
  await page.goto('/')
  const tabs = page.getByRole('tablist', { name: 'Examples' })
  await tabs.getByRole('tab', { name: 'Dialog' }).focus()
  await page.keyboard.press('ArrowDown')
  await expect(tabs.getByRole('tab', { name: 'Card' })).toHaveAttribute('aria-selected', 'true')
  await page.keyboard.press('End')
  await expect(tabs.getByRole('tab', { name: 'Motion' })).toBeFocused()
  await expect(page.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'ds-tab-motion')
})

const highlighted = (page: import('@playwright/test').Page) => page.evaluate(() => {
  const lit = (el: Element) => getComputedStyle(el).backgroundColor !== 'rgba(0, 0, 0, 0)'
  const zoomed = (el: Element) => !['none', 'matrix(1, 0, 0, 1, 0, 0)'].includes(getComputedStyle(el).transform)
  return [...document.querySelectorAll('.home .list .row')].filter(lit).length
    + [...document.querySelectorAll('.home .card .stage')].filter(zoomed).length
})

test('rows and cards react to the mouse and to nothing else', async ({ page }) => {
  await page.goto('/')
  const home = page.locator('.home')
  await expect(home).toHaveAttribute('data-input', 'mouse')
  await page.mouse.move(4, 4)
  for (let i = 0; i < 12; i++) {
    await page.mouse.wheel(0, 500)
    expect(await highlighted(page)).toBe(0)
  }
  const row = page.locator('section[aria-labelledby="reading"] .row.read').nth(1)
  await row.hover()
  await expect(row).toHaveCSS('background-color', /rgb\(/)
  await expect.poll(() => highlighted(page)).toBe(1)
  await page.mouse.move(4, 4)
  await expect.poll(() => highlighted(page)).toBe(0)
})

test.describe('touch', () => {
  test.use({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } })

  test('nothing stays highlighted after scrolling or tapping', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.home')).toHaveAttribute('data-input', 'touch')
    const total = await page.evaluate(() => document.body.scrollHeight)
    for (let y = 0; y < total; y += 400) {
      await page.evaluate(top => window.scrollTo(0, top), y)
      expect(await highlighted(page)).toBe(0)
    }
    const heading = page.getByRole('heading', { level: 2, name: 'Reading' })
    await heading.scrollIntoViewIfNeeded()
    await heading.tap()
    await expect(page.locator('.home')).toHaveAttribute('data-input', 'touch')
    expect(await highlighted(page)).toBe(0)
  })
})

test('case studies link back to home', async ({ page }) => {
  await page.goto('/')
  await page.locator('.card').first().click()
  await expect(page).toHaveURL(/\/work\//)
  await expect(page.getByRole('link', { name: /^Next:/ })).toBeVisible()
  await page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Raquel Mijares' }).click()
  await expect(page).toHaveURL(/\/$/)
})

test('unknown pages return 404', async ({ page }) => {
  const response = await page.goto('/does-not-exist')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
