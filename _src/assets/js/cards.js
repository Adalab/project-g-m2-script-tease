'use strict';

// const inputText = document.querySelector('.form__fieldset-content-gap');
// const textName = document.querySelector('.img-text__title');
// const textJob = document.querySelector('.img-text__subtitle');


// function writeInstant(event) {
//   console.log(event.currentTarget);
//   let inputValueText = event.target.value;

//   if(event.target.classList.contains('name')){
//     textName.innerHTML = inputValueText
//   }else if(event.target.classList.contains('puesto')){
//     textJob.innerHTML = inputValueText;
//     console.log('Esto es el puesto?')
//     console.log(event.target);
//     }
// }

// inputText.addEventListener('keyup', writeInstant);

// const form = document.querySelector('.form__all-sections');
// const inputName = document.querySelector('.name');
// const inputJon = document.querySelector('.puesto');
// const inputText = document.querySelector('.form__fieldset-content-gap');
// const textName = document.querySelector('.img-text__title');
// const textJob = document.querySelector('.img-text__subtitle');


// function writeInstant(event) {
//   console.log(event.currentTarget);
//     let inputValueText = event.currentTarget.value;
//      if(event.currentTarget.classList.contains('name')){
//        textName.innerHTML = inputValueText
//        console.log(event.currentTarget);
//      }else if(event.currentTarget.classList.contains('puesto')){
//        textJob.innerHTML = inputValueText;
//        console.log('Esto es el puesto?')
//        console.log(event.target);
//      }
// }

// form.addEventListener('keyup', writeInstant);

const inputName = document.querySelector('.name');
const inputJob = document.querySelector('.puesto');
const textName = document.querySelector('.img-text__title');
const textJob = document.querySelector('.img-text__subtitle');

function write(event){
  let inputValue = event.currentTarget.value;
  if(event.currentTarget.classList.contains('name')){
    textName.innerHTML = inputValue;
  }
  else if(event.currentTarget.classList.contains('puesto')){
    textJob.innerHTML = inputValue;
  }
  console.log(event.currentTarget);
}



// function write2(event){
//   let inputValue = event.currentTarget.value;
//   textJob.innerHTML = inputValue;
// }




inputName.addEventListener('keyup', write);
inputJob.addEventListener('keyup', write);
