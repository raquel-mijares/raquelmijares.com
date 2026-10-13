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

test('the spotlight follows scrolling and yields to the mouse', async ({ page }) => {
  await page.goto('/')
  const home = page.locator('.home')
  const card = page.locator('.card').first()
  await expect(async () => {
    await page.mouse.wheel(0, 4)
    await expect(home).toHaveAttribute('data-input', 'scroll', { timeout: 500 })
  }).toPass()
  await card.evaluate(el => el.scrollIntoView({ block: 'center' }))
  await expect(card).toHaveClass(/is-spot/)
  await page.mouse.move(10, 10)
  await page.mouse.move(40, 40)
  await expect(home).toHaveAttribute('data-input', 'pointer')
  await expect(page.locator('.is-spot')).toHaveCount(0)
  await page.mouse.wheel(0, 4)
  await expect(home).toHaveAttribute('data-input', 'scroll')
  await expect(card).toHaveClass(/is-spot/)
})

test('the spotlight marks one row at a time', async ({ page }) => {
  await page.goto('/')
  const home = page.locator('.home')
  await expect(async () => {
    await page.mouse.wheel(0, 4)
    await expect(home).toHaveAttribute('data-input', 'scroll', { timeout: 500 })
  }).toPass()
  const reading = page.locator('section[aria-labelledby="reading"]')
  await reading.locator('.row.read').nth(1).evaluate(el => el.scrollIntoView({ block: 'center' }))
  await expect(reading.locator('.row.is-spot')).toHaveCount(1)
  await expect(reading.locator('.row.read').nth(1)).toHaveClass(/is-spot/)
  await page.locator('.card').first().evaluate(el => el.scrollIntoView({ block: 'center' }))
  await expect(page.locator('.card.is-spot')).toHaveCount(2)
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
