'use strict';

console.log('js is loaded');

// Prompt the user
var ready = prompt('wanna play a guessing game? Y/N');
var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;
var answer5 = null;

if (ready === 'Y') {
    answer1 = prompt('Am I from Tennessee?')
    if(answer1 ==='Y') {
        alert('Shoot Fire..')
    }
    if (answer1 === 'N') {
        alert('Git R Done')
    }


    answer2 = prompt('Did I used to live in a small town?')
    if(answer2 === 'Y') {
        alert('Dang Skippy')
    }
    if(answer2 === 'N'){
        alert('Dang..That aint it')
    }




    answer3 = prompt('Do I like VR systems?')
    if(answer3 === 'Y') {
        alert('Out of this world!')
    }
    if(answer3 === 'N'){
        alert('Game Over')
    }




    answer4 = prompt('Do i like Software Development?')
    if(answer4 === 'Y') {
        alert('Lovin it!')
    }
    if(answer4 === 'N'){
        alert('Where am I?')
    }





    answer5 = prompt('Do I like games?')
    if(answer5 === 'Y') {
        alert('Love em!')
    }
    if(answer5 === 'N'){
        alert('but....everybody likes games ):' )
    }

} 
