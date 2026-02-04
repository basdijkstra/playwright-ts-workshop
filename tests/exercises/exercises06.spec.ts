import { test, expect } from '@playwright/test';

// TODO: refactor these two tests into a single, parameterized test
//   Which values should be parameterized?
//   Create a object containing the test data first, then parameterize the test

test('Exercises 06 - User with ID 12212 is called John and lives in Beverly Hills', async ({ request }) => {

  const response = await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/12212', {
    headers: {
      'Accept': 'application/json'
    }
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.firstName).toBe('John');
  expect(responseBody.address.city).toBe('Beverly Hills');
});

test('Exercises 06 - User with ID 12323 is called Bob and lives in Monrovia', async ({ request }) => {

  const response = await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/12323', {
    headers: {
      'Accept': 'application/json'
    }
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.firstName).toBe('Bob');
  expect(responseBody.address.city).toBe('Monrovia');
});