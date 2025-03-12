import { act } from "react"
import Fetch from "../Fetch.js"
import { render, fireEvent, cleanup } from "@testing-library/react"

afterEach(cleanup)

test('starts without any joke', () => {
/*
1️⃣[Initial State Test] The first test should verify that the component starts without any joke.
- Render the component
- Assert that the joke element doesn't exist
*/
});

test('when clicking on button, displays loading message', () => {
/*
2️⃣ [Loading State Test] The second test should handle a button click that displays a loading message.
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Assert that loading message is displayed
*/
});

test('when clicking on button displays joke if API succeeds', async () => {
/*
3️⃣ [Success State Test] The third test should handle displaying a joke if API succeeds, upon button click.
- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the fetch promise with success response, but allow component to process the state update
  ```
  await act(async () => {
    fetchPromiseResolve.resolve({
      status: ###,
      json: () => Promise.resolve({
        value: "Chuck Norris counted to infinity. Twice."
      })
    });
    // Allow component to process the state update
    await new Promise(...things-here...);
  });
  ```

- Assert that joke is displayed
- Verify fetch was called correctly (you may need to do some console printing here to test what kind of data you are getting back)
*/

  global.fetch.mockClear();

});

test('when clicking on button displays error if API fails', async () => {
/*
4️⃣ [Error State Test] The fourth test should handle displaying an error if API fails, upon button click.
- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the fetch promise with error response, but allow component to process the state update
  ```
  await act(async () => {
    fetchPromiseResolve.resolve({
      status: ###
    });
    // Allow component to process the state update
    await new Promise(...things-here...);
  });
  ```
- Assert that error message is displayed
- Verify fetch was called correctly (you may need to do some console printing here to test what kind of data you are getting back)
*/

  global.fetch.mockClear();

});