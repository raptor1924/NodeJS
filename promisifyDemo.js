// Require in 'trails' module from trails.js
const trails = require('./trails.js');
// Require in util module here
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callbackFunction) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {   
      const foundTrail = trails[trail];    // foundTrail is a trail object
      callbackFunction(null, foundTrail)
    } else {
      callbackFunction(new Error('Trail not found!'))
      console.log(Error);
    }
  }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callThisBack (error, trailData) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  } else {
    const mi = trailData.miles;   
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`)
  }
}

getTrailDistance('North Country', callThisBack);

// Updated promisify function definition below
const getTrailDistancePromise = util.promisify(getTrailDistance);
//
//Function call to new promisify - this passes 'North Country' into 
// the getTrailDistance function
getTrailDistancePromise('Pacific Crest')
  // the .then method in this instance is calling an anonymous function and passing
  // the foundTrail object into that function.  The function then pulls the trail 
  // nickname and miles to display in a formatted output.
  //
  .then((foundTrail) => {
    const trailNick = foundTrail.nickname;
    const trailMileage = foundTrail.miles;
    //console.log(`\nThe awesome trail ${trailNick} is ${trailMileage} long!`);
    console.log(`The ${trailNick} is ${trailMileage} miles long!`);
  })  // Promise resolves correctly - success. - close the function
  .catch(); // Catch here is for error resolution - failed promise
