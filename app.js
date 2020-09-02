'use strict';

console.log('js is loaded');

// Prompt the user
var ready = prompt('wanna play a guessing game? Y/N');
var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;
var answer5 = null;

if (ready.toUpperCase() === 'Y') {
    answer1 = prompt('Am I from Tennessee? Y/N');
    console.log('Still a country bumpkin')
    if(answer1 ==='Y') {
        alert('Shoot Fire..');
    }
    if (answer1 === 'N') {
        alert('Git R Done');
    }


    answer2 = prompt('Did I used to live in a small town? Y/N');
    console.log('Everyone knows everybody!')
    if(answer2 === 'Y') {
        alert('Dang Skippy');
    }
    if(answer2 === 'N') {
        alert('Dang..That aint it');
    }




    answer3 = prompt('Do I like VR systems? Y/N');
    console.log('Things are getting real..')
    if(answer3 === 'Y') {
        alert('Out of this world!');
    }
    if(answer3 === 'N'){
        alert('Game Over');
    }




    answer4 = prompt('Do i like Software Development? Y/N');
    console.log('Coding is my game..')
    if(answer4 === 'Y') {
        alert('Lovin it!');
    }
    if(answer4 === 'N'){
        alert('Where am I?');
    }





    answer5 = prompt('Do I like Musicals? Y/N');
    console.log('I am not throwin away my shot!')
    if(answer5 === 'Y') {
        alert('You are a mind at work!');
    }
    if(answer5 === 'N'){
        alert('Noone mourns the Wicked.. ):' )
    }

} 
