'use strict';

/* Variables que almacenan los input*/

const inputName = document.querySelector('.name');
const inputJob = document.querySelector('.puesto');
const inputMail = document.querySelector('.mail');
const inputLinkedin = document.querySelector('.linkedin_input');

/*Variables que almacenan los destinos (donde se va a ver)*/

const textName = document.querySelector('.img-text__title');
const textJob = document.querySelector('.img-text__subtitle');
const textMail = document.querySelector('.icon__mail');
const textLinkedin = document.querySelector('.icon__linkedin');

function write(event){
  let inputValue = event.currentTarget.value;

  if(event.currentTarget.classList.contains('name')){
    textName.innerHTML = inputValue;
  }
  else if(event.currentTarget.classList.contains('puesto')){
    textJob.innerHTML = inputValue;
  }
  else if(event.currentTarget.classList.contains('mail')){
    textMail.href = 'mailto:' + inputValue;
  }
  else if(event.currentTarget.classList.contains('linkedin_input')){
    textLinkedin.href = inputValue;
  }
  console.log(event.currentTarget);
}

inputName.addEventListener('keyup', write);
inputJob.addEventListener('keyup', write);
inputMail.addEventListener('keyup', write);
inputLinkedin.addEventListener('keyup', write);
