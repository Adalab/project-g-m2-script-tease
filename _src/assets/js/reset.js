'use strict';

const resetBtn = document.querySelector('.js__reset');

function reset(){

  hideIcons();
  setDefaultInputs();
  setDefaultPalette();
  setDefaultColors();
  setDefualtImage();
  disableTwitter();
  cleanLocalStorage();
  redlabels();
}
function hideIcons(){
  // eslint-disable-next-line no-undef
  iconMail.classList.add('hidden');
  // eslint-disable-next-line no-undef
  iconPhone.classList.add('hidden');
  // eslint-disable-next-line no-undef
  iconLinkedin.classList.add('hidden');
  // eslint-disable-next-line no-undef
  iconGithub.classList.add('hidden');
}
function setDefaultInputs(){
  // eslint-disable-next-line no-undef
  textName.innerHTML = 'Nombre Apellido';
  // eslint-disable-next-line no-undef
  textJob.innerHTML = 'Front-end developer';
  // eslint-disable-next-line no-undef
  textPhone.href = 'tel:';
  // eslint-disable-next-line no-undef
  textMail.href = 'mailto:';
  // eslint-disable-next-line no-undef
  textLinkedin.href = 'https://www.linkedin.com/in/';
  // eslint-disable-next-line no-undef
  textGithub.href = 'https://github.com/';
  // eslint-disable-next-line no-undef
  inputName.value = '';
  // eslint-disable-next-line no-undef
  inputJob.value = '';
  // eslint-disable-next-line no-undef
  inputPhone.value = '';
  // eslint-disable-next-line no-undef
  inputMail.value = '';
  // eslint-disable-next-line no-undef
  inputLinkedin.value = '';
  // eslint-disable-next-line no-undef
  inputGithub.value = '';
}
function setDefaultPalette(){
  // eslint-disable-next-line no-undef
  palette1.checked = true;
  // eslint-disable-next-line no-undef
  palette2.checked = false;
  // eslint-disable-next-line no-undef
  palette3.checked = false;
}
function setDefaultColors(){
  // eslint-disable-next-line no-undef
  box.classList.remove('cards__img-wrapper-op2');
  // eslint-disable-next-line no-undef
  box.classList.remove('cards__img-wrapper-op3');
  // eslint-disable-next-line no-undef
  box.classList.add('cards__img-wrapper-op1');
}
function setDefualtImage(){
  // eslint-disable-next-line no-undef
  cardsImage.style.backgroundImage = `url(${defaultImage})`;
  // eslint-disable-next-line no-undef
  preview.style.backgroundImage = `url(${defaultImage})`;
  // eslint-disable-next-line no-undef
  image.src = defaultImage;
  // eslint-disable-next-line no-undef
  image.alt = 'Imagen por defecto';
}
function disableTwitter(){
  // eslint-disable-next-line no-undef
  shareButton.disabled = false;
  // eslint-disable-next-line no-undef
  shareButton.classList.remove('greyButton');
  // eslint-disable-next-line no-undef
  twitter.classList.add('share__hidden');
}
function cleanLocalStorage(){
  localStorage.clear();
}
function redlabels(){
  // eslint-disable-next-line no-undef
  labelName.classList.add('red');
  // eslint-disable-next-line no-undef
  labelJob.classList.add('red');
  // eslint-disable-next-line no-undef
  labelMail.classList.add('red');
  // eslint-disable-next-line no-undef
  labelLinkedin.classList.add('red');
  // eslint-disable-next-line no-undef
  labelGithub.classList.add('red');
}

resetBtn.addEventListener('click', reset);
