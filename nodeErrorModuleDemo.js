// The Node environment’s error module has all the standard 
// JavaScript errors such as EvalError, SyntaxError, 
// RangeError, ReferenceError, TypeError, and URIError as well 
// as the JavaScript Error class for creating new error instances.

const errorProneAsyncApi = (input, callback) => {
    console.log(`Running errorProneAsyncApi with input: ${input}...\n`)
    setTimeout(() => {
      let myErr;
      if (input === 'problematic input') {
        myErr = new Error('whoops')
        callback(myErr)
      } else {
        let responseData = `Received valid input "${input}"`
        callback(myErr, responseData)
      }
    }, 0)
  }

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

errorProneAsyncApi('problematic input', errorFirstCallback);
