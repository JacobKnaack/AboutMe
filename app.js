'use strict';

console.log('the js is aliiive!');

// Prompt the user
var user = prompt('What is your name?');


var ready = prompt('wanna play a guessing game? Y/N');
var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;
var answer5 = null;



if (ready.toUpperCase() === 'Y') {
    answer1 = prompt('Am I from Tennessee? Y/N');
    console.log('Still a country bumpkin')
    if(answer1.toUpperCase() ==='Y') {
        alert('Shoot Fire..');
    }

    if (answer1.toLowerCase() === 'n') {
        alert('Git R Done');
    }


    answer2 = prompt('Did I use to live in a small town? Y/N');
    console.log('Everyone knows everybody!')
    if(answer2.toUpperCase() === 'Y') {
        alert('Dang Skippy');
    }

    if(answer2.toLowerCase() === 'n') {
        alert('Dang..That aint it');
    }




    answer3 = prompt('Do I like VR systems? Y/N');
    console.log('Things are getting real..')
    if(answer3.toUpperCase() === 'Y') {
        alert('Out of this world!');
    }
    if(answer3.toLowerCase() === 'n'){
        alert('Game Over');
    }




    answer4 = prompt('Do i like Software Development? Y/N');
    console.log('Coding is my game..')
    if(answer4.toUpperCase() === 'Y') {
        alert('Lovin it!');
    }
    if(answer4.toLowerCase() === 'n'){
        alert('Where am I?');
    }





    answer5 = prompt('Do I like Musicals? Y/N');
    console.log('I am not throwin away my shot!')
    if(answer5.toUpperCase === 'Y') {
        alert('You are a mind at work!');
    }
    if(answer5.toLowerCase() === 'n'){
        alert('Noone mourns the Wicked.. ):' )
    }

    alert('Welcome, ' + user);
    
    
} 
    var correctAnswer = 25;

        for (var i =0; i < 4; i = i++) {

            var playGame = prompt('I am thinking of a number between 1 and 100');
            var correctAnswer = 25;
            
            if (playGame === correctAnswer) {
                alert('YAAAaAAAASSSSSS');
                break;
            }else if (playGame < correctAnswer) {
                alert('not quite high enough');

            }else if (playGame > correctAnswer) {
                alert(" whoa... not that high..");

            } if(i === 4){
                alert(" You know what's funnier than 24?" + correctAnswer)
            }
        }
