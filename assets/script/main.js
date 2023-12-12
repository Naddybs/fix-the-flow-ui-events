// button 12
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}
// button 1

// stap 1: selecteer de button
 let frontend = document.querySelector('a:nth-of-type(1)')
//stap 2: voeg een eventListenet toe voor zowel de click- als keydown event
 frontend.addEventListener('click', colorchange)
 document.addEventListener('keydown', checkKeyPress);
// stap 3: definieer de functie (colorchange)
 function colorchange(){
  console.log("Button geklikt :)");
  //  stap 4: toggle de 'color' class op en af
 frontend.classList.toggle('color');
}
// stap 5: definieer de functie (checkkeypress)
function checkKeyPress(event) {
  // stap 6: controleert of de spatiebalk (keycode 32) is ingedrukt
  if (event.keyCode === 32) {
    // stap 7: roep de colorchange functie op als je op de spatiebalk drukt
    colorchange();
  }
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

fix.addEventListener('mouseover', flipButton);

function flipButton() {
  fix.classList.toggle('flip');
}
// button 7
let the = document.querySelector('a:nth-of-type(7)');

the.addEventListener('click', turnButton);

function turnButton() {
  the.classList.toggle('turn');
}
// button 8
let flow = document.querySelector('a:nth-of-type(8)');
let popup = document.querySelector('.popup');

flow.addEventListener('dblclick', showpopup);
function showpopup(){
  popup.classList.toggle('popupshow');
}
// button 9
let user = document.querySelector('a:nth-of-type(9)');

document.addEventListener('keydown', shiftslideright);
function shiftslideright(event) {
  if (event.shiftKey && event.target === user){
    slideright()
  }
}
  function slideright(){
  user.classList.toggle('slide')}

  // button 10
  let interface = document.querySelector('a:nth-of-type(10)');

  interface.addEventListener('keydown', discocolors);
  
  function discocolors(event) {
    if (event.key === 'd') {
      interface.classList.toggle('color-change-animated');
    }
  }
