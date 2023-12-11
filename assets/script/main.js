// button 12
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}
// button 1
 let frontend = document.querySelector('a:nth-of-type(1)')

 frontend.addEventListener('click', colorchange)
 function colorchange(){
 frontend.classList.toggle('color')
}
// button 2
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', resizebutton)
function resizebutton(){
  design.classList.toggle('resize')
}
// button 3
let en = document.querySelector('a:nth-of-type(3)')

en.addEventListener('click', borderchange)
function borderchange(){
  en.classList.toggle('border')
}
// button 4
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', gradientshow)
function gradientshow(){
  development.classList.toggle('gradient')
}
// button 5
let sprint = document.querySelector('a:nth-of-type(5)');

sprint.addEventListener('click', shakeButton);

function shakeButton() {
  sprint.classList.toggle('shake');
}
// button 6
let fix = document.querySelector('a:nth-of-type(6)');

fix.addEventListener('click', flipButton);

function flipButton() {
  fix.classList.toggle('flip');
}

let the = document.querySelector('a:nth-of-type(7)');

the.addEventListener('click', turnButton);

function turnButton() {
  the.classList.toggle('turn');
}

