import "geckodriver";
/*
 * For some reason the environment variables are case invariant in windows and
 * node expects them in all caps
 */
if (!process.env.PATH) {
    process.env.PATH = process.env.Path;
  }
  
/*
* E2E tests are too slow to run in 5 secs
* let's try a minute
*/
jest.setTimeout(30000);
  
console.error = (error) => {
    throw new Error(`[console.error detected] We made the test fail because of a console.error
    Here is the error:
  
    ${error}`);
};

export const delayPromise = (time) => new Promise((resolve) => setTimeout(resolve, time));
