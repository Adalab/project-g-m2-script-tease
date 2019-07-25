'use strict';

/* Variables que almacenan los input*/

const inputName = document.querySelector('.name');
const inputJob = document.querySelector('.puesto');
const inputMail = document.querySelector('.mail');
const inputPhone = document.querySelector('.phone');
const inputLinkedin = document.querySelector('.linkedin_input');
const inputGithub = document.querySelector('.github_input');

/*Variables que almacenan los destinos (donde se va a ver)*/

const textName = document.querySelector('.img-text__title');
const textJob = document.querySelector('.img-text__subtitle');
const textMail = document.querySelector('.icon__mail');
const textPhone = document.querySelector('.icon__mobile');
const textLinkedin = document.querySelector('.icon__linkedin');
const textGithub = document.querySelector('.icon__github');

function write(event){
  let inputValue = event.currentTarget.value;

  if(event.currentTarget.classList.contains('name')){
    textName.innerHTML = inputValue;
  }
  else if(event.currentTarget.classList.contains('puesto')){
    textJob.innerHTML = inputValue;
  }
  else if(event.currentTarget.classList.contains('phone')){
    textPhone.href = 'phoneto:' + inputValue;
    if(textPhone.classList.contains('hidden_v')){
      textPhone.classList.remove('hidden_v');
    }else if(textPhone.href === 'phoneto:'){
      textPhone.classList.add('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('mail')){
    textMail.href = 'mailto:' + inputValue;
    if(textMail.classList.contains('hidden_v')){
      textMail.classList.remove('hidden_v');
    }else if(textMail.href === 'mailto:'){
      textMail.classList.add('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('linkedin_input')){
    textLinkedin.href = inputValue;
    if(textLinkedin.classList.contains('hidden_v')){
      textLinkedin.classList.remove('hidden_v');
    }else if(inputValue === ""){
      textLinkedin.classList.add('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('github_input')){
    textGithub.href = inputValue;
    if(textGithub.classList.contains('hidden_v')){
      textGithub.classList.remove('hidden_v');
    }else if(inputValue === ""){
      textGithub.classList.add('hidden_v');
    }
  }
  console.log(event.currentTarget);
}

inputName.addEventListener('keyup', write);
inputJob.addEventListener('keyup', write);
inputMail.addEventListener('keyup', write);
inputPhone.addEventListener('keyup', write);
inputLinkedin.addEventListener('keyup', write);
inputGithub.addEventListener('keyup', write);
