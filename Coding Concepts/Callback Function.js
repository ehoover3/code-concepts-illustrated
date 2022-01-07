// *** Callback Function ***
// Use a callback when you want some code to be executed by another function, but don't necessarily have access to that other function.

// *** Example 1 ***
// In Q1, you always had access to all of your functions (front end only)
// In Q2, you are doing fetch calls to servers (accessing backend functions you don't necessarily have direct access to)

// *** Example 2 ***
// Option A - Synchronous
// You call someone with a request.
// You wait and do nothing else until they give you a response.

// Option B - Asynchronous
// You call someone with a request and leave a message.
// You do other tasks while they work on it.
// When they're done, they call back with a response, and with that response you now do the next task - hence the name callback function

// Option B Re-Written
// The front-end program sends a promise requesting data from the back-end server.
// Since a promise is asynchronous code, the front-end program does other functions while waiting on the back-end server's response.
// When the back-end server's function is done, it provides a response. As soon as the response is provided, a front-end callback function runs.

// *** Sample Code 1 ***
// This function syntax does the same thing as...
function add(a, b) {
  return a + b;
}

// ... this callback function syntax
const add = (a, b) => {
  return a + b;
};

// *** Sample Code 2 ***
let myArray;

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((jsonObject) => {
    myArray = jsonObject;
  });

// This has 1 promise and 2 callback functions

// 1. This is the promise:
// fetch("https://dog.ceo/api/breeds/image/random")

// 2. These are the callback functions:
// First callback function
(response) => response.json();

// Second callback function
(jsonObject) => {
  myArray = jsonObject;
};

// Let's break this example down line-by-line

// LINE 46
// The fetch sends a request to the back-end server for a random dog image

// LINE 47 - PART A
// '.then()' is a function like 'console.log()'
// '.then()' runs once the fetch requests provides a response

// LINE 48 - PART B
// inside of the '.then' is a callback function '(response) => response.json()' where...
// (response) is a function parameter to a function that returns that data in a json data format

//  LINE 49
// '(jsonObject)' is a function parameter to a function that updates myArray to the jsonObject
