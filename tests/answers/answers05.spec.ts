import { test, expect } from '@playwright/test';

test('Answers 05 - 01 - Reinitializing the ParaBank database using the API', async ({ request }) => {

  // Reinitialize the ParaBank database by performing a POST request to "https://parabank.parasoft.com/parabank/services/bank/initializeDB"
  // Store the response in a const
  const response = await request.post('https://parabank.parasoft.com/parabank/services/bank/initializeDB');

  // Verify that the response status is equal to HTTP 204
  expect(response.status()).toBe(204);
});

test('Answers 05 - 02 - Retrieving user details', async ({ request }) => {

  // Retrieve the details for customer with ID 12212 by performing a GET request to "https://parabank.parasoft.com/parabank/services/bank/customers/12212"
  // Add a header 'Accept' to the request with value 'application/json' to make the API return the data in JSON format (it defaults to XML)
  // See this link for an example of the syntax: https://playwright.dev/docs/api-testing#using-request-context
  // You can use this syntax on 'request' as well as on 'context'.
  const response = await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/12212', {
    headers: {
      'Accept': 'application/json'
    }
  });

  // Verify that the response status is equal to HTTP 200
  expect(response.status()).toBe(200);

  // Extract the JSON response body and store it in a const
  const responseBody = await response.json();

  // Verify that the value of the 'firstName' property is equal to 'John'
  expect(responseBody.firstName).toBe('John');

  // Verify that the value of the 'city' property, a child property of 'address', is equal to 'Beverly Hills'
  expect(responseBody.address.city).toBe('Beverly Hills');
});
