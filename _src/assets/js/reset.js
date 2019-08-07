'use strict';

// eslint-disable-next-line no-console
console.log(' >>> Reset ready :D');

const resetBtn = document.querySelector('.js__reset');

function reset(){
  hideIcons();
  setDefaultInputs();
  setDefaultPalette();
  setDefaultColors();
  setDefualtImage();
  disableTwitter();
}
function hideIcons(){
  iconMail.classList.add('hidden');
  iconPhone.classList.add('hidden');
  iconLinkedin.classList.add('hidden');
  iconGithub.classList.add('hidden');
}
function setDefaultInputs(){
  textName.innerHTML = 'Nombre Apellido';
  textJob.innerHTML = 'Front-end developer';
  textPhone.href = 'tel:';
  textMail.href = 'mailto:';
  textLinkedin.href = 'https://www.linkedin.com/in/';
  textGithub.href = 'https://github.com/';
  inputName.value = '';
  inputJob.value = '';
  inputPhone.value = '';
  inputMail.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
}
function setDefaultPalette(){
  palette1.checked = true;
  palette2.checked = false;
  palette3.checked = false;
}
function setDefaultColors(){
  box.classList.remove('cards__img-wrapper-op2');
  box.classList.remove('cards__img-wrapper-op3');
  box.classList.add('cards__img-wrapper-op1');
}
function setDefualtImage(){
  cardsImage.style.backgroundImage = `url(${defaultImage})`;
  preview.style.backgroundImage = `url(${defaultImage})`;
  image.src = defaultImage;
  image.alt = 'Imagen por defecto';
}
function disableTwitter(){
  shareButton.disabled = false;
  shareButton.classList.remove('greyButton');
  twitter.classList.add('share__hidden');
}

resetBtn.addEventListener('click', reset);
