'use strict';
console.log(' >>> Cards ready :D');

/* Variables que almacenan los input, se podria hacer con un SelectorAll*/

// const inputName = document.querySelector('.name');
// const inputJob = document.querySelector('.job');
// const inputMail = document.querySelector('.mail');
// const inputPhone = document.querySelector('.phone');
// const inputLinkedin = document.querySelector('.linkedin_input');
// const inputGithub = document.querySelector('.github_input');

/*Variables que almacenan los destinos (donde se va a ver)*/

// const textName = document.querySelector('.img-text__title');
// const textJob = document.querySelector('.img-text__subtitle');
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
let paletteOption = 1;



function write(event) {

  let inputValue = event.currentTarget.value;

  if (event.currentTarget.classList.contains('name')) {

    if (inputValue !== '') {
      textName.innerHTML = inputValue;
      localStorage.setItem('name', inputValue);
      /* Para que vuelva a poner algo si el campo se queda vacio */
    } else {
      textName.innerHTML = 'Nombre Apellido';
      localStorage.removeItem('name');
    }
  }
  else if (event.currentTarget.classList.contains('job')) {
    if (inputValue !== '') {
      textJob.innerHTML = inputValue;
      localStorage.setItem('job', inputValue);
    } else {
      textJob.innerHTML = 'Front-end developer';
      localStorage.removeItem('job');
    }
  }
  else if (event.currentTarget.classList.contains('phone')) {
    textPhone.href = 'tel:' + inputValue;
    localStorage.setItem('phone', inputValue);
    if (inputValue === '') {
      iconPhone.classList.add('hidden_v');
      localStorage.removeItem('phone');
    }
    else {
      iconPhone.classList.remove('hidden_v');
    }
  }
  else if (event.currentTarget.classList.contains('mail')) {
    textMail.href = 'mailto:' + inputValue;
    localStorage.setItem('mail', inputValue);
    if (inputValue === '') {
      iconMail.classList.add('hidden_v');
      localStorage.removeItem('mail');
    }
    else {
      iconMail.classList.remove('hidden_v');
    }
  }
  else if (event.currentTarget.classList.contains('linkedin_input')) {
    textLinkedin.href = 'https://www.linkedin.com/in/' + inputValue;
    localStorage.setItem('linkedin', inputValue);
    if (inputValue === '') {
      iconLinkedin.classList.add('hidden_v');
      localStorage.removeItem('linkedin');
    }
    else {
      iconLinkedin.classList.remove('hidden_v');
    }
  }
  else if (event.currentTarget.classList.contains('github_input')) {
    textGithub.href = 'https://github.com/' + inputValue;
    localStorage.setItem('github', inputValue);
    if (inputValue === '') {
      iconGithub.classList.add('hidden_v');
      localStorage.removeItem('github');
    }
    else {
      iconGithub.classList.remove('hidden_v');
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

  if (event.currentTarget.value === '1') {
    const inputValue = event.currentTarget.value;
    box.classList.add('cards__img-wrapper-op1');
    palette1.setAttribute('checked',true);
    palette2.removeAttribute('checked',false) ;
    palette3.removeAttribute('checked',false) ;
    paletteOption = 1;
    localStorage.setItem('palette', inputValue);
  }
  else if (event.currentTarget.value === '2') {
    const inputValue = event.currentTarget.value;
    box.classList.add('cards__img-wrapper-op2');
    palette2.setAttribute('checked',true);
    palette1.removeAttribute('checked',false) ;
    palette3.removeAttribute('checked',false) ;
    paletteOption = 2;
    localStorage.setItem('palette', inputValue);
  }
  else {
    const inputValue = event.currentTarget.value;
    box.classList.add('cards__img-wrapper-op3');
    palette3.setAttribute('checked',true);
    palette2.removeAttribute('checked',false) ;
    palette1.removeAttribute('checked',false) ;
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
  } else {
    inputName.value = '';
  }

  if (localStorage.getItem('job')) {
    inputJob.value = localStorage.getItem('job');
  } else {
    inputJob.value = '';
  }

  if (localStorage.getItem('phone')) {
    inputPhone.value = localStorage.getItem('phone');
    iconPhone.classList.remove('hidden_v');
  } else {
    inputPhone.value = '';
  }

  if (localStorage.getItem('mail')) {
    inputMail.value = localStorage.getItem('mail');
    iconMail.classList.remove('hidden_v');
  } else {
    inputMail.value = '';
  }

  if (localStorage.getItem('github')) {
    inputGithub.value = localStorage.getItem('github');
    iconGithub.classList.remove('hidden_v');
  } else {
    inputGithub.value = '';
  }

  if (localStorage.getItem('linkedin')) {
    inputLinkedin.value = localStorage.getItem('linkedin');
    iconLinkedin.classList.remove('hidden_v');
  } else {
    inputLinkedin.value = '';
  }

  if (localStorage.getItem('palette')) {
    //console.log(localStorage.getItem('palette'));
    if (localStorage.getItem('palette') === '2') {
      console.log(localStorage.getItem('palette'));
      palette2.setAttribute('checked',true);
      palette1.removeAttribute('checked',false);
      palette3.removeAttribute('checked',false);
      box.classList.add('cards__img-wrapper-op2');
    }
    else if (localStorage.getItem('palette') === '3') {
      palette3.setAttribute('checked',true);
      palette2.removeAttribute('checked',false);
      palette1.removeAttribute('checked',false);
      box.classList.add('cards__img-wrapper-op3');
    }
    else {
      palette1.setAttribute('checked',true);
      palette3.removeAttribute('checked',false);
      palette2.removeAttribute('checked',false);
      box.classList.add('cards__img-wrapper-op1');
    }
  } else{
    palette1.setAttribute('checked',true);
    box.classList.add('cards__img-wrapper-op1');

  }

  if (localStorage.getItem('image')) {
    image.src = localStorage.getItem('image');
    preview.style.backgroundImage = `url(${localStorage.getItem('image')})`;
    cardsImage.style.backgroundImage = `url(${localStorage.getItem('image')})`;
  } else {
    image.src = defaultImage;
    preview.style.backgroundImage = `url(${defaultImage})`;
    cardsImage.style.backgroundImage = `url(${defaultImage})`;

  }
}

window.onload = init;
