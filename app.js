'use strict';

var confirmed = confirm('Are you ready to rock and roll!?');


if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready');
}

var one = prompt('Are you a student at Codefellows?');
one = one.toLowerCase();

if (one === 'yes'){
  console.log('The user attends Codefellows');
} else {
  confirm('Join us!');
}


var two = prompt('Are you a Seahawks fan?');
two = two.toUpperCase();

if (two === 'YES'){
  console.log('Go hawks!');
} else {
  confirm('BOOOOOOO');
}


var three = prompt('Have you ever had a Seattle hot dog?');
three = three.toLowerCase();

if (three === 'yes'){
  console.log('Mhmmhmmhmhmhhmmmmm');
} else {
  confirm('WHAT?!');
}


var four = prompt('Thanks for checking out my page! Did you have fun?!');
four = four.toLowerCase();

if (four === 'yes'){
  console.log('The user indeed had fun');
} else {
  confirm('Have a good day!');
}
