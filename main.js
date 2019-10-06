
var someDog = document.querySelector('#dog-name');
var input = document.querySelector('#name');
var button = document.querySelector('#button');

button.addEventListener('click', replaceText);

function replaceText() {
  someDog.innerText = input.value;
  input.value = '';
}

/* For third iteration, target
3 buttons in main
3 paragraphs in main

Add event listeners to 3 butttons

A class??? to paragraphs to hide them???
*/

var paragraph1 = document.querySelector('#paragraph1');
var paragraph2 = document.querySelector('#paragraph2');
var paragrah3 = document.querySelector('#paragrah3');

console.log(paragrah1);
console.log(paragrah2);
console.log(paragrah3);
