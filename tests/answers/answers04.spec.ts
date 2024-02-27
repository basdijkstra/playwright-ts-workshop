import { test, expect } from '@playwright/test';

test('Answers 04 - 01', async ({ request }) => {

  // Retrieve the details for user with ID 1 by performing a GET request to "/users/1"
  // Store the response in a const
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  // Verify that the response status is equal to HTTP 200
  expect(response.ok()).toBeTruthy();

  // Extract the JSON response body and store it in a const
  const body = await response.json();

  // Check that the value of the top level 'name' element in the response equals 'Leanne Graham'
  // Check that the value of the 'name' element that is a child element of 'company' equals 'Romaguera-Crona'
  expect(body.name).toBe('Leanne Graham');
  expect(body.company.name).toBe('Romaguera-Crona');

});

test('Answers 04 - 02', async ({ request }) => {

  // Create two new const's with values of your choice, one representing a blog post title
  // and the other one representing the corresponding blog post body.
  const title = 'My new blog post';
  const body = 'This is the body of my new blog post';

  // Perform an HTTP POST to https://jsonplaceholder.typicode.com/posts and send a JSON request payload
  // { 'userId': 1, 'title': <your_post_title>, 'body': <your_post_body> }
  // See https://playwright.dev/docs/api-testing for examples
  // Store the response in a const
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    'data' : {
      'userId': 1,
      'title': title,
      'body': body
    }
  });

  // Verify that the response status is equal to HTTP 200
  expect(response.ok()).toBeTruthy();

  // Extract the JSON response body and store it in a const
  const responseBody = await response.json();

  // Check that the value of the 'title' and 'body' top level elements in the response
  // equal the values you sent in the request body
  expect(responseBody.title).toBe(title);
  expect(responseBody.body).toBe(body);

});
