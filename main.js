
var someDog = document.querySelector('#dog-name');
var input = document.querySelector('#name');
var button = document.querySelector('#button');

button.addEventListener('click', replaceText);

function replaceText() {
  someDog.innerText = input.value;
  input.value = '';
}

var paragraph1 = document.querySelector('#paragraph1');
var paragraph2 = document.querySelector('#paragraph2');
var paragraph3 = document.querySelector('#paragraph3');
var how = document.querySelector('#how');
var what = document.querySelector('#what');
var facts = document.querySelector('#facts');

how.addEventListener('click', function() {
  paragraph1.classList.toggle('hidden');
});

what.addEventListener('click', function(){
  paragraph2.classList.toggle('hidden');
});

facts.addEventListener('click', function() {
  paragraph3.classList.toggle('hidden');
});
