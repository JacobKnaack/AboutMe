'use strict';

console.log('js is loaded');

// Prompt the user
var ready = prompt('wanna play a guessing game? Y/N');
var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;
var answer5 = null;

if (ready === 'Y'){
answer1 = prompt('Am I from Tennessee?')
answer2 = prompt('Did I used to live in a small town?')
answer3 = prompt('Do I like VR systems?')
answer4 = prompt('Do i like Software Development?')
answer5 = prompt('Do I like games?')

} if (answer1 === 'N')
alert("Shoot Fire...")