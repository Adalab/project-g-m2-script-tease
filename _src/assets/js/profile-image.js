'use strict';

// fileReader es para leer datos
const read = new FileReader();
const uploadButton = document.querySelector('.js__profile-trigger');
const input = document.querySelector('.js__profile-upload-btn');
const imageContain = document.querySelector('.js__profile-image');
const imagePreview = document.querySelector('.js__profile-preview');

// function getImage(e){
function selectorImage(e) {
  var myFile = e.currentTarget.files[0];
  read.addEventListener('load', writeImage);
  read.readAsDataURL(myFile);
}

function writeImage() {
  imageContain.style.backgroundImage = `url(${read.result})`;
  imagePreview.style.backgroundImage = `url(${read.result})`;
}

// function fakeFileClick() {
function selectorImage() {
input.click();
}

// Evento click sobre el botón "añadir imagen"
uploadButton.addEventListener('click', addImage);

// Evento cambiar sobre la parte hidden (input)
input.addEventListener('change', selectorImage);
