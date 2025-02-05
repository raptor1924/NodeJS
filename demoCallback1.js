// Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callbackFunction) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {
      console.log(trails.hasOwnProperty(trail)); 
      console.log(trails[trail]);   
      const foundTrail = trails[trail];    
      callbackFunction(null, foundTrail)
    } else {
      callbackFunction(new Error('Trail not found!'))
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

getTrailDistance('North Country', callThisBack)

// Promisfy below!

