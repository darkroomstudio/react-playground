import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { test as regularTest, expect as regularExpect } from '@playwright/test';
import { ScrollTriggerPage } from '../src/playground/ScrollTriggerPage';

test.use({ viewport: { width: 1440, height: 1200 } });

test('header should show', async ({ mount }) => {
	const component = await mount(<ScrollTriggerPage />);
	await expect(component).toContainText('Bonjour');
});

regularTest('message should show after scroll', async ({ page }) => {
	await page.goto('http://localhost:5173');
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	const locator = page.getByText('today!');
	await regularExpect(locator).toBeVisible();
});
