import { test, expect } from '@playwright/test';

const testData = [
  {countryCode: 'us', zipCode: '90210', expectedPlace: 'Beverly Hills'},
  {countryCode: 'ca', zipCode: 'T1L', expectedPlace: 'Banff'},
  {countryCode: 'it', zipCode: '50123', expectedPlace: 'Firenze'}
];

for (const {countryCode, zipCode, expectedPlace} of testData) {
  test(`Country code ${countryCode} and zip code ${zipCode} yields ${expectedPlace}`, async({ request }) => {

    const response = await request.get(`https://api.zippopotam.us/${countryCode}/${zipCode}`);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.places[0]['place name']).toBe(expectedPlace);
  })
}
