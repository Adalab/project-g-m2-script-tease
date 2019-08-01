'use strict';

// fileReader es para leer datos
const read = new FileReader();
const uploadButton = document.querySelector('.js__profile-trigger');
const input = document.querySelector('.js__profile-upload-btn');
const imageContain = document.querySelector('.js__profile-image');
const imagePreview = document.querySelector('.js__profile-preview');

// function getImage(e){
function selectorImage(event) {
  // variable de tus imágenes (del usuario)
  var myImages = event.currentTarget.files[0];
  read.addEventListener('load', writeImage);
  read.readAsDataURL(myFile);
}

function writeImage() {
  // la url de la imagen que vas a cargar
  imageContain.style.backgroundImage = `url(${read.result})`;
  // la url de la imagen que vas a cargar en la preview
  imagePreview.style.backgroundImage = `url(${read.result})`;
}

// función para click sobre el input y seleccionar imagen
function selectorImage() {
input.click();
}

// Evento click sobre el botón "añadir imagen"
uploadButton.addEventListener('click', addImage);

// Evento cambiar sobre la parte hidden (input)
input.addEventListener('change', selectorImage);
