'use strict';

var confirmed = confirm('Welcome! Ready to learn a little more about me?');
var correct = 0;
var wrong = 0;
var yes = 'yes';
var y = 'y';
var no = 'no';
var n = 'n';

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready');
}



var one = prompt('Do I attend Codefellows?');
//one = one.toLowerCase();

if (one.toLowerCase() === yes || one.toLowerCase() === y){
  console.log('The user attends Codefellows');
  confirm('Correct!');
  correct++;
  console.log(correct);
} else {
  confirm('Wrong! I sure do!');
  wrong++;
}


var two = prompt('Am I a Seahwaks fan?');

if (two.toLowerCase() === no || two.toLowerCase() === n){
  console.log('Sure ain\'t! Go Bears!');
  confirm('Correct!');
  correct++;
  console.log(correct);
} else {
  confirm('BOOOOOOO, no way!');
  wrong++;
}


var three = prompt('Have you ever had a Seattle hot dog?');

if (three.toLowerCase() === yes || three.toLowerCase() === y){
  console.log('Mhmmhmmhmhmhhmmmmm');
  confirm('Better have!');
  correct++;
  console.log(correct);
} else {
  confirm('WHAT?! Leave now and go get one..');
  wrong++;
}


var four = prompt('Thanks for checking out my page! Did you have fun?!');

if (four.toLowerCase() === yes || four.toLowerCase() === y){
  console.log('The user indeed had fun');
  confirm('Have a good one!');
  correct++;
  console.log(correct);
} else {
  confirm('Too bad so sad');
  wrong++;
}

var vaild = false;
var userGuess;

for (var valid = false; vaild < 4; vaild++){
    userGuess = prompt("How old do you think I am? You have 4 tries!");
    if (userGuess === '22') {
        valid = true;
        confirm('Correct!')
        console.log('User got nnumber 6 right.')
        correct++;
        break;
    } else {
        console.log('User got number 6 wrong.');
        confirm('Try again!')
        wrong++;
    }
}

var states = ['Nevada','Utah','Oregon','California'];
var userGuess2 = prompt('What other state besides Washington have I lived in?');
var result = false;
var vaild2 = false;

for (var valid2 = false; valid2 < 6; valid2++){


  for (var i = 0; i <states.length; i++) {
    if (userGuess2 === states[i])
        result = true;
    }

  if (result) {
      confirm('Correct!');
      console.log('User got number 7 right');
    } else {
      confirm('Wrong!');
      console.log('User got number 7 wrong.');

  }
}






console.log('Correct:' + correct);
console.log('Wrong:' + wrong);
