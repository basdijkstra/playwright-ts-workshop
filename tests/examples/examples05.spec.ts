import { test, expect } from '@playwright/test';

test('Examples 05', async ({ request }) => {

  const response = await request.get('https://api.zippopotam.us/us/90210');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.country).toBe('United States');
  expect(body.places[0]['place name']).toBe('Beverly Hills');
});
