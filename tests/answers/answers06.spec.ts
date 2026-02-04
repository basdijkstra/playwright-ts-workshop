import { test, expect } from '@playwright/test';

const testData = [
  { userId: 12212, firstName: 'John', city: 'Beverly Hills'},
  { userId: 12323, firstName: 'Bob', city: 'Monrovia'}
]

for (const { userId, firstName, city } of testData) {
  test(`User with ID ${userId} is called ${firstName} and lives in ${city}`, async ({ request }) => {

  const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${userId}`, {
    headers: {
      'Accept': 'application/json'
    }
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.firstName).toBe(firstName);
  expect(responseBody.address.city).toBe(city);
});
}
