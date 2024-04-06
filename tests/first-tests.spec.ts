import { test, expect } from "@playwright/test"

test.describe('First tests: ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        await page.waitForLoadState('domcontentloaded')
    })

    test('sheet has title', async ({ page }) => {
        await expect(page).toHaveTitle('PrestaShop Live Demo')
    })

    test('should open top menu categories', async ({ page }) => {        
        await page.frameLocator('iframe[name="framelive"]').getByRole('link', { name: 'Clothes' }).click();
        await expect.soft(page.frameLocator('iframe[name="framelive"]').getByRole('heading', { name: 'Clothes' })).toBeVisible();

        await page.frameLocator('iframe[name="framelive"]').getByRole('link', { name: 'Accessories', exact: true }).click();
        await expect.soft(page.frameLocator('iframe[name="framelive"]').getByRole('heading', { name: 'Accessories', exact: true })).toBeVisible();

        await page.frameLocator('iframe[name="framelive"]').getByRole('link', { name: 'Art' }).click();
        await expect(page.frameLocator('iframe[name="framelive"]').getByRole('heading', { name: 'Art' })).toBeVisible();
    })
})