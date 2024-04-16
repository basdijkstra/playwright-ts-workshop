import { test, expect } from '@playwright/test';

test('Exercises 05 - 01', async ({ request }) => {

  // Retrieve the details for user with ID 1 by performing a GET request to "https://jsonplaceholder.typicode.com/users/1"
  // Store the response in a const
  // TODO: your code goes here

  // Verify that the response status is equal to HTTP 200
  // TODO: your code goes here

  // Extract the JSON response body and store it in a const
  // TODO: your code goes here

  // Check that the value of the top level 'name' element in the response equals 'Leanne Graham'
  // Check that the value of the 'name' element that is a child element of 'company' equals 'Romaguera-Crona'
  // TODO: your code goes here

});

test('Exercises 05 - 02', async ({ request }) => {

  // Create two new const's with values of your choice, one representing a blog post title
  // and the other one representing the corresponding blog post body.
  // TODO: your code goes here

  // Perform an HTTP POST to https://jsonplaceholder.typicode.com/posts and send a JSON request payload
  // { 'userId': 1, 'title': <your_post_title>, 'body': <your_post_body> }
  // See https://playwright.dev/docs/api-testing for examples
  // Store the response in a const
  // TODO: your code goes here

  // Verify that the response status is equal to HTTP 200
  // TODO: your code goes here

  // Extract the JSON response body and store it in a const
  // TODO: your code goes here

  // Check that the value of the 'title' and 'body' top level elements in the response
  // equal the values you sent in the request body
  // TODO: your code goes here

});
