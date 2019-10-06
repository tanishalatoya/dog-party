
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
var how = document.querySelector('#how');
var what = document.querySelector('#what');
var facts = document.querySelector('#facts');

how.addEventListener('click', );
what.addEventListener('click',);
facts.addEventListener('click', );
