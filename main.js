
var someDog = document.querySelector('#dog-name');
var input = document.querySelector('#name');
var button = document.querySelector('#button');

console.log(someDog);
console.log(input);
console.log(button);

button.addEventListener('click', replaceText);

function replaceText() {
  someDog.innerText = input.value;
}
