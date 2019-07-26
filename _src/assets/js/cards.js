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
    if(inputValue !== ""){
      textName.innerHTML = inputValue;
    }else if(!inputValue){
      textName.innerHTML = "Nombre Apellido";
    }
  }
  else if(event.currentTarget.classList.contains('puesto')){
    if(inputValue !== ""){
      textJob.innerHTML = inputValue;
    }else if(!inputValue){
      textJob.innerHTML = "Front-end developer";
    }
  }
  else if(event.currentTarget.classList.contains('phone')){
    textPhone.href = 'phoneto:' + inputValue;
    if(textPhone.classList.contains('hidden_v')){
      textPhone.classList.remove('hidden_v');
    }else if(!inputValue){
      textPhone.classList.add('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('mail')){
    textMail.href = 'mailto:' + inputValue;
    if(textMail.classList.contains('hidden_v')){
      textMail.classList.remove('hidden_v');
    }else if(!inputValue){
      textMail.classList.add('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('linkedin_input')){
    textLinkedin.href = inputValue;
    if(textLinkedin.classList.contains('hidden_v')){
      textLinkedin.classList.remove('hidden_v');
    }else if(!inputValue){
      textLinkedin.classList.add('hidden_v');
    }
  }
  else if(event.currentTarget.classList.contains('github_input')){
    textGithub.href = inputValue;
    if(textGithub.classList.contains('hidden_v')){
      textGithub.classList.remove('hidden_v');
    }else if(!inputValue){
      textGithub.classList.add('hidden_v');
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

const boxBorder = document.querySelector('.img__text-box');
const boxCircle1 = document.querySelector('.icon__mobile');
const boxCircle2 = document.querySelector('.icon__mail');
const boxCircle3 = document.querySelector('.icon__linkedin ');
const boxCircle4 = document.querySelector('.icon__github');

const blue1 = document.querySelector('.blue1');
const blue2 = document.querySelector('.blue2');
const blue3 = document.querySelector('.blue3');

const red1 = document.querySelector('.red1');
const red2 = document.querySelector('.red2');
const red3 = document.querySelector('.red3');

const green1 = document.querySelector('.green1');
const green2 = document.querySelector('.green2');
const green3 = document.querySelector('.green3');

const palette1 = document.querySelector('.input1');
const palette2 = document.querySelector('.input2');
const palette3 = document.querySelector('.input3');

function changeColor (event) {
  if (event.currentTarget.classList.contains('input1')) {
    textName.style.color = blue1.innerHTML;
    boxCircle1.classList.add('icon__mobile-blue');
    boxCircle1.classList.remove('icon__mobile-red');
    boxCircle1.classList.remove('icon__mobile-green');
    boxCircle2.classList.add('icon__mail-blue');
    boxCircle2.classList.remove('icon__mail-red');
    boxCircle2.classList.remove('icon__mail-green');
    boxCircle3.classList.add('icon__linkedin-blue');
    boxCircle3.classList.remove('icon__linkedin-red');
    boxCircle3.classList.remove('icon__linkedin-green');
    boxCircle4.classList.add('icon__github-blue');
    boxCircle4.classList.remove('icon__github-red');
    boxCircle4.classList.remove('icon__github-green');
    boxBorder.classList.add('img__text-box-blue');
    boxBorder.classList.remove('img__text-box-red');
    boxBorder.classList.remove('iimg__text-box-green');

  }
  else if (event.currentTarget.classList.contains('input2')) {
    textName.style.color = red1.innerHTML;
    boxCircle1.classList.add('icon__mobile-red');
    boxCircle1.classList.remove('icon__mobile-blue');
    boxCircle1.classList.remove('icon__mobile-green');
    boxCircle2.classList.add('icon__mail-red');
    boxCircle2.classList.remove('icon__mail-blue');
    boxCircle2.classList.remove('icon__mail-green');
    boxCircle3.classList.add('icon__linkedin-red');
    boxCircle3.classList.remove('icon__linkedin-blue');
    boxCircle3.classList.remove('icon__linkedin-green');
    boxCircle4.classList.add('icon__github-red');
    boxCircle4.classList.remove('icon__github-blue');
    boxCircle4.classList.remove('icon__github-green');
    boxBorder.classList.add('img__text-box-red');
    boxBorder.classList.remove('img__text-box-blue');
    boxBorder.classList.remove('img__text-box-green');

  }
  else if (event.currentTarget.classList.contains('input3')) {
    textName.style.color = green1.innerHTML;
    boxCircle1.classList.add('icon__mobile-green');
    boxCircle1.classList.remove('icon__mobile-blue');
    boxCircle1.classList.remove('icon__mobile-red');
    boxCircle2.classList.add('icon__mail-green');
    boxCircle2.classList.remove('icon__mail-blue');
    boxCircle2.classList.remove('icon__mail-red');
    boxCircle3.classList.add('icon__linkedin-green');
    boxCircle3.classList.remove('icon__linkedin-blue');
    boxCircle3.classList.remove('icon__linkedin-red');
    boxCircle4.classList.add('icon__github-green');
    boxCircle4.classList.remove('icon__github-blue');
    boxCircle4.classList.remove('icon__github-red');
    boxBorder.classList.add('img__text-box-green');
    boxBorder.classList.remove('img__text-box-blue');
    boxBorder.classList.remove('img__text-box-red');
  }
}
// function changeColor (event) {
//   if (event.currentTarget.classList.contains('input1')) {
//     textName.style.color = blue1.innerHTML;
//     boxCircle1.style.border = `solid 2px ${blue3.innerHTML}`;
//     boxCircle2.style.border = `solid 2px ${blue3.innerHTML}`;
//     boxCircle3.style.border = `solid 2px ${blue3.innerHTML}`;
//     boxCircle4.style.border = `solid 2px ${blue3.innerHTML}`;
//     boxCircle1.style.backgroundImage = `url(../images/mobile-alt-solid.svg)`;
//     boxCircle2.style.backgroundImage = `url(../images/envelope.svg)`;
//     boxCircle3.style.backgroundImage = `url(../images/linkedin-in-brands.svg)`;
//     boxCircle4.style.backgroundImage = `url(../images/github-alt-brands.svg)`;
//     boxBorder.style.borderLeft = `solid 5px ${blue2.innerHTML}`;
//   }
//   else if (event.currentTarget.classList.contains('input2')) {
//     textName.style.color = red1.innerHTML;
//     boxCircle1.style.border = `solid 2px ${red3.innerHTML}`;
//     boxCircle2.style.border = `solid 2px ${red3.innerHTML}`;
//     boxCircle3.style.border = `solid 2px ${red3.innerHTML}`;
//     boxCircle4.style.border = `solid 2px ${red3.innerHTML}`;
//     boxCircle1.style.backgroundImage = `url(../images/mobile-alt-solid_red.svg)`;
//     boxCircle2.style.backgroundImage = `url(../images/envelope_red.svg)`;
//     boxCircle3.style.backgroundImage = `url(../images/linkedin-in-brands_red.svg)`;
//     boxCircle4.style.backgroundImage = `url(../images/github-alt-brands_red.svg)`;
//     boxBorder.style.borderLeft = `solid 5px ${red2.innerHTML}`;
//   }
//   else if (event.currentTarget.classList.contains('input3')) {
//     textName.style.color = green1.innerHTML;
//     boxCircle1.style.border = `solid 2px ${green3.innerHTML}`;
//     boxCircle2.style.border = `solid 2px ${green3.innerHTML}`;
//     boxCircle3.style.border = `solid 2px ${green3.innerHTML}`;
//     boxCircle4.style.border = `solid 2px ${green3.innerHTML}`;
//     boxCircle1.style.backgroundImage = `url(../images/mobile-alt-solid_green.svg)`;
//     boxCircle2.style.backgroundImage = `url(../images/envelope_green.svg)`;
//     boxCircle3.style.backgroundImage = `url(../images/linkedin-in-brands_green.svg)`;
//     boxCircle4.style.backgroundImage = `url(../images/github-alt-brands_green.svg)`;
//     boxBorder.style.borderLeft = `solid 5px ${green2.innerHTML}`;
//   }
// }

palette1.addEventListener('click', changeColor);
palette2.addEventListener('click', changeColor);
palette3.addEventListener('click', changeColor);
