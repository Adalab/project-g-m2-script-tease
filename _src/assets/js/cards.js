'use strict';
console.log(' >>> Cards ready :D');
/* Variables que almacenan los input, se podria hacer con un SelectorAll*/

const inputName = document.querySelector('.name');
const inputJob = document.querySelector('.job');
const inputMail = document.querySelector('.mail');
const inputPhone = document.querySelector('.phone');
const inputLinkedin = document.querySelector('.linkedin_input');
const inputGithub = document.querySelector('.github_input');

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


function write(event){

  let inputValue = event.currentTarget.value;

  if(event.currentTarget.classList.contains('name')){

    if(inputValue !== ""){
      textName.innerHTML = inputValue;
    /* Para que vuelva a poner algo si el campo se queda vacio */
    }else{
      textName.innerHTML = "Nombre Apellido";
    }
  }
  else if(event.currentTarget.classList.contains('job')){
    if(inputValue !== ""){
      textJob.innerHTML = inputValue;
    }else{
      textJob.innerHTML = "Front-end developer";
    }
  }
  else if(event.currentTarget.classList.contains('phone')){
    textPhone.href = 'tel:' + inputValue;
    if(inputValue === ""){
      iconPhone.classList.add('hidden_v');
    }
    else{
      iconPhone.classList.remove('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('mail')){
    textMail.href = 'mailto:' + inputValue;
    if(inputValue === ""){
      iconMail.classList.add('hidden_v');
    }
    else{
      iconMail.classList.remove('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('linkedin_input')){
    textLinkedin.href =  'https://www.linkedin.com/in/'+ inputValue;
    if(inputValue === ""){
      iconLinkedin.classList.add('hidden_v');
    }
    else{
      iconLinkedin.classList.remove('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('github_input')){
    textGithub.href ='https://github.com/' + inputValue;
    if(inputValue === ""){
      iconGithub.classList.add('hidden_v');
    }
    else{
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

function changeColor (event) {

  box.classList.remove('cards__img-wrapper-op1');
  box.classList.remove('cards__img-wrapper-op2');
  box.classList.remove('cards__img-wrapper-op3');

  if (event.currentTarget.value === '1') {
    box.classList.add('cards__img-wrapper-op1');
  }
  else if (event.currentTarget.value === '2') {
    box.classList.add('cards__img-wrapper-op2');
  }
  else {
    box.classList.add('cards__img-wrapper-op3');
  }
}

palette1.addEventListener('click', changeColor);
palette2.addEventListener('click', changeColor);
palette3.addEventListener('click', changeColor);



