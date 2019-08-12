'use strict';

/* Variables que almacenan los input, se podria hacer con un SelectorAll*/

const inputName = document.querySelector('.name');
const inputJob = document.querySelector('.job');
const inputMail = document.querySelector('.mail');
const inputPhone = document.querySelector('.phone');
const inputLinkedin = document.querySelector('.linkedin_input');
const inputGithub = document.querySelector('.github_input');
const labelName = document.querySelector('.name__label');
const labelJob = document.querySelector('.job__label');
const labelMail = document.querySelector('.mail__label');
const labelLinkedin = document.querySelector('.linkedin__label');
const labelGithub = document.querySelector('.github__label');

/*Variables que almacenan los destinos (donde se va a ver)*/

const textMail = document.querySelector('.icon__mail');
const textPhone = document.querySelector('.icon__mobile');
const textLinkedin = document.querySelector('.icon__linkedin');
const textGithub = document.querySelector('.icon__github');

const textName = document.querySelector('.img-text__title');
const textJob = document.querySelector('.img-text__subtitle');
const iconMail = document.querySelector('.icon1');
const iconPhone = document.querySelector('.icon2');
const iconLinkedin = document.querySelector('.icon3');
const iconGithub = document.querySelector('.icon4');
// eslint-disable-next-line no-unused-vars
let paletteOption = 1;

function write(event) {

  let inputValue = event.currentTarget.value;
  if (event.currentTarget.classList.contains('name')) {
    if (inputValue !== '') {
      textName.innerHTML = inputValue;
      localStorage.setItem('name', inputValue);
      labelName.classList.remove('red');
    }
    else {
      textName.innerHTML = 'Nombre Apellido';
      localStorage.removeItem('name');
      labelName.classList.add('red');
    }
  }
  else if (event.currentTarget.classList.contains('job')) {
    if (inputValue !== '') {
      textJob.innerHTML = inputValue;
      localStorage.setItem('job', inputValue);
      labelJob.classList.remove('red');
    }
    else {
      textJob.innerHTML = 'Front-end developer';
      localStorage.removeItem('job');
      labelJob.classList.add('red');
    }
  }
  else if (event.currentTarget.classList.contains('phone')) {
    textPhone.href = 'tel:' + inputValue;
    localStorage.setItem('phone', inputValue);
    if (inputValue === '') {
      iconPhone.classList.add('hidden');
      localStorage.removeItem('phone');
    }
    else {
      iconPhone.classList.remove('hidden');
    }
  }
  else if (event.currentTarget.classList.contains('mail')) {
    textMail.href = 'mailto:' + inputValue;
    localStorage.setItem('mail', inputValue);
    if (inputValue === '') {
      iconMail.classList.add('hidden');
      localStorage.removeItem('mail');
      labelMail.classList.add('red');
    }
    else {
      iconMail.classList.remove('hidden');
      labelMail.classList.remove('red');
    }
  }
  else if (event.currentTarget.classList.contains('linkedin_input')) {
    textLinkedin.href = 'https://www.linkedin.com/in/' + inputValue;
    localStorage.setItem('linkedin', inputValue);
    if (inputValue === '') {
      iconLinkedin.classList.add('hidden');
      localStorage.removeItem('linkedin');
      labelLinkedin.classList.add('red');
    }
    else {
      iconLinkedin.classList.remove('hidden');
      labelLinkedin.classList.remove('red');
    }
  }
  else if (event.currentTarget.classList.contains('github_input')) {
    textGithub.href = 'https://github.com/' + inputValue;
    localStorage.setItem('github', inputValue);
    if (inputValue === '') {
      iconGithub.classList.add('hidden');
      localStorage.removeItem('github');
      labelGithub.classList.add('red');
    }
    else {
      iconGithub.classList.remove('hidden');
      labelGithub.classList.remove('red');
    }
  }
}

inputName.addEventListener('keyup', write);
inputJob.addEventListener('keyup', write);
inputMail.addEventListener('keyup', write);
inputPhone.addEventListener('keyup', write);
inputLinkedin.addEventListener('keyup', write);
inputGithub.addEventListener('keyup', write);

/* Cambias paletas */

const palette1 = document.querySelector('.input1');
const palette2 = document.querySelector('.input2');
const palette3 = document.querySelector('.input3');
const box = document.querySelector('.cards__img-wrapper');

function changeColor(event) {

  box.classList.remove('cards__img-wrapper-op1');
  box.classList.remove('cards__img-wrapper-op2');
  box.classList.remove('cards__img-wrapper-op3');
  palette1.removeAttribute('checked',false) ;
  palette2.removeAttribute('checked',false) ;
  palette3.removeAttribute('checked',false) ;

  if (event.currentTarget.value === '1') {
    const inputValue = event.currentTarget.value;
    box.classList.add('cards__img-wrapper-op1');
    palette1.setAttribute('checked',true);
    paletteOption = 1;
    localStorage.setItem('palette', inputValue);
  }
  else if (event.currentTarget.value === '2') {
    const inputValue = event.currentTarget.value;
    box.classList.add('cards__img-wrapper-op2');
    palette2.setAttribute('checked',true);
    paletteOption = 2;
    localStorage.setItem('palette', inputValue);
  }
  else {
    const inputValue = event.currentTarget.value;
    box.classList.add('cards__img-wrapper-op3');
    palette3.setAttribute('checked',true);
    paletteOption = 3;
    localStorage.setItem('palette', inputValue);
  }
}

palette1.addEventListener('click', changeColor);
palette2.addEventListener('click', changeColor);
palette3.addEventListener('click', changeColor);

function init() {
  if (localStorage.getItem('name')) {
    inputName.value = localStorage.getItem('name');
    labelName.classList.remove('red');
  }
  else {
    inputName.value = '';
    labelName.classList.add('red');
  }

  if (localStorage.getItem('job')) {
    inputJob.value = localStorage.getItem('job');
    labelJob.classList.remove('red');
  }
  else {
    inputJob.value = '';
    labelJob.classList.add('red');
  }
  if (localStorage.getItem('phone')) {
    inputPhone.value = localStorage.getItem('phone');
    iconPhone.classList.remove('hidden');
  }
  else {
    inputPhone.value = '';
  }
  if (localStorage.getItem('mail')) {
    inputMail.value = localStorage.getItem('mail');
    iconMail.classList.remove('hidden');
    labelMail.classList.remove('red');
  }
  else {
    inputMail.value = '';
    labelMail.classList.add('red');
  }
  if (localStorage.getItem('github')) {
    inputGithub.value = localStorage.getItem('github');
    iconGithub.classList.remove('hidden');
    labelGithub.classList.remove('red');
  }
  else {
    inputGithub.value = '';
    labelGithub.classList.add('red');
  }
  if (localStorage.getItem('linkedin')) {
    inputLinkedin.value = localStorage.getItem('linkedin');
    iconLinkedin.classList.remove('hidden');
    labelLinkedin.classList.remove('red');
  }
  else {
    inputLinkedin.value = '';
    labelLinkedin.classList.add('red');
  }
  if (localStorage.getItem('palette')) {
    palette2.removeAttribute('checked',false);
    palette1.removeAttribute('checked',false);
    palette3.removeAttribute('checked',false);

    if (localStorage.getItem('palette') === '2') {
      palette2.setAttribute('checked',true);
      box.classList.add('cards__img-wrapper-op2');
    }
    else if (localStorage.getItem('palette') === '3') {
      palette3.setAttribute('checked',true);
      box.classList.add('cards__img-wrapper-op3');
    }
    else {
      palette1.setAttribute('checked',true);
      box.classList.add('cards__img-wrapper-op1');
    }
  }
  else{
    palette1.setAttribute('checked',true);
    box.classList.add('cards__img-wrapper-op1');
  }
  if (localStorage.getItem('image')) {
    // eslint-disable-next-line no-undef
    image.src = localStorage.getItem('image');
    // eslint-disable-next-line no-undef
    preview.style.backgroundImage = `url(${localStorage.getItem('image')})`;
    // eslint-disable-next-line no-undef
    cardsImage.style.backgroundImage = `url(${localStorage.getItem('image')})`;
  }
  else {
    // eslint-disable-next-line no-undef
    image.src = defaultImage;
    // eslint-disable-next-line no-undef
    preview.style.backgroundImage = `url(${defaultImage})`;
    // eslint-disable-next-line no-undef
    cardsImage.style.backgroundImage = `url(${defaultImage})`;
  }
}

window.onload = init();
