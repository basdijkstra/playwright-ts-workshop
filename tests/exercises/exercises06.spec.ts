import { test, expect } from '@playwright/test';

// TODO: rewrite these three tests into a single, parameterized test
//   Which values should be parameterized?
//   Create a object containing the test data first, then parameterize the test

test('User with ID 1 is Leanne Graham and works at Romaguera-Crone', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.name).toBe('Leanne Graham');
  expect(body.company.name).toBe('Romaguera-Crona');
});


test('User with ID 2 is Ervin Howell and works at Deckow-Crist', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.name).toBe('Ervin Howell');
  expect(body.company.name).toBe('Deckow-Crist');
});


test('User with ID 3 is Clementine Bauch and works at Romaguera-Jacobson', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users/3');
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.name).toBe('Clementine Bauch');
  expect(body.company.name).toBe('Romaguera-Jacobson');
});