import { test, expect } from '@playwright/test';

const testData = [
  {userId: 1, name: 'Leanne Graham', company: 'Romaguera-Crona'},
  {userId: 2, name: 'Ervin Howell', company: 'Deckow-Crist'},
  {userId: 3, name: 'Clementine Bauch', company: 'Romaguera-Jacobson'}
];

for (const {userId, name, company} of testData) {
  test(`User with ID ${userId} is ${name} and works at ${company}`, async ({ request }) => {

    const response = await request.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.name).toBe(name);
    expect(body.company.name).toBe(company);
  });
}
