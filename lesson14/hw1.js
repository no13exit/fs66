"use strict";
const astronautName = "Neil Armstrong";
let astronautAge = 38;
let isCommander = true;
let planet = "Moon";
let missionDuration = 8; // in days
console.log("Astronaut Age in 10 years: " + (astronautAge + 10));
console.log("Mission Duration extended by 30 days: " + (missionDuration + 30));
console.log(
  "Planet: " +
    planet +
    ", Astronaut: " +
    astronautName +
    ", Commander: " +
    isCommander,
);
missionDuration = missionDuration * 2;
isCommander = false;
console.log("Updated Mission Duration: " + missionDuration);
console.log("Is the astronaut still the commander? " + isCommander);
// const astronautDateOfBirth = '1930-08-05';
// console.log('Astronaut Date of Birth: ' + astronautDateOfBirth);
