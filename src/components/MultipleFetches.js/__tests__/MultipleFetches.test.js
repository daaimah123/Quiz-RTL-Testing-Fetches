import { act } from "react"
import MultipleFetches from "../MultipleFetches.js"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"

afterEach(cleanup)

test('starts without any post', () => {
  /*
  1️⃣ [Initial State Test] The first test should verify that component starts without any post.

  - Render the component
  - Assert that the post element doesn't exist
  */
});

test('after clicking on button, displays loading message', () => {
  /*
  2️⃣ [Loading State Test] The second test should handle a button click that displays a loading message.

  - Render the component
  - Emmulate a button click using `fireEvent.click()`
  - Assert that loading message is displayed
  */
});

// Group all API tests together and clear each mock after each test.
describe('API tests', () => {

  test('displays post if API succeeds', async () => {
    /*
    3️⃣ [Success State Test] The third test should group all API tests together and clear each mock after each test.

    - Create controlled Promises for both fetches
    - Mock the fetch API for both calls (e.g. `jest.spyOn()`)
    - Render the component
    - Emmulate a button click using `fireEvent.click()`
    - Resolve the first fetch promise (post), but allow the component to process the state update

      ```
      await act(async () => {
        postPromiseResolve.resolve({
          status: 200,
          json: () => Promise.resolve({
            title: "A Really Cool Title"
          })
        });

        await new Promise(....things-here...);
      });
      ```
    - Resolve the second fetch promise (comments), but allow the component to process the state update

      ```
      await act(async () => {
        commentsPromiseResolve.resolve({
          status: 200,
          json: () => Promise.resolve([
            { id: #, name: "Daaimah" },
            ....possibly-more-things...
          ])
        });

        await new Promise(....things-here...);
      });
      ```
    - Assert that post and comments are displayed (you may need to do some console printing here to test what kind of data you are getting back)
    - Check comment authors
    */

    global.fetch.mockClear();

  });
  
  test('displays comments error if API fails', async () => {
    /*
    4️⃣ [Comments Error Test] The fourth test should handle displaying comment if API fails.
    - Create controlled promises for both fetches
    - Mock the fetch API for both calls (e.g. `jest.spyOn()`)
    - Render the component
    - Emmulate a button click using `fireEvent.click()`
    - Resolve the first fetch promise (post) with success, but allow the component to process the state update

      ```
      await act(async () => {
        postPromiseResolve.resolve({
          status: ###,
          json: () => Promise.resolve({
            title: "A Really Cool Title"
          })
        });

        await new Promise(....things-here...);
      });
      ```
      
    - Resolve the second fetch promise (comments) with error, but allow the component to process the state update

      ```
      await act(async () => {
        commentsPromiseResolve.resolve({
          status: ###
        });

        await new Promise(....things-here...);
      });
      ```
    - Assert that post is displayed but comments show error
    */

    global.fetch.mockClear();

  });
  
  test('displays post error if API fails', async () => {
    /*
    5️⃣ [Post Error Test] The fifth test should handle displaying post error if API fails.

    - Create controlled promises for both fetches
    - Mock the fetch API for both calls (e.g. `jest.spyOn()`)
    - Render the component
    - Emmulate a button click using `fireEvent.click()`
    - Resolve the fetch promise with error, but allow component to process the state update
      ```
      await act(async () => {
        postPromiseResolve.resolve({
          status: ###
        });
      
        await new Promise(...things-here...);
      });
      ```
      - Assert that error message is displayed

    */
  });

  global.fetch.mockClear();

});