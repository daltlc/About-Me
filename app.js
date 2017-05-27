'use strict';

var confirmed = confirm('Are you ready to rock and roll!?');
var one = prompt('Are you a student at Codefellows?');
var two = prompt('Are you a Seahawks fan?');
var three = prompt();
var four = prompt();

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready');
}

if (one === 'Yes'){
  console.log('The user attends Codefellows');
} else {
  confirm('Join us!');
}
