
var someDog = document.querySelector('#dog-name');
var input = document.querySelector('#name');
var button = document.querySelector('#button');

button.addEventListener('click', replaceText);

function replaceText() {
  someDog.innerText = input.value;
  input.value = '';
}
