/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const quotes = await res.json();
  return quotes[0];
}
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetQuotes() {
  const res = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((res) => {
      console.log('res.body!!!', res);
      return res[0];
    })
    .then((quotes) => {
      console.log('thenGetQuotes!!!', quotes);
      return { quote: quotes[0] };
    });

  return res[0];
}
/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryCatchGetQuotes() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const quotes = await res.json();
    return quotes[0];
  } catch (error) {
    console.error(error);
  }
}
/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
