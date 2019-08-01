'use strict';
// llamar a la clase del botón y la del formulario
const twitter = document.querySelector('.content__twitter-container');
const shareButton = document.querySelector('.button-create');
const cardForm = document.querySelector('.form__all-sections');
const twitterBtn= document.querySelector('.twitter-share-button');


// función al hacer click en el botón: se deshabilita y se pone gris
function showTwitter(){
  shareButton.disabled = true;
  shareButton.classList.add('greyButton');
  twitter.classList.remove('share__hidden');
}

// función submit. no enviar formulario
function preventFormSend(event){
  event.preventDefault();
}
twitterBtn.href = `https://twitter.com/intent/tweet?text=Esta%20es%20mi%20nueva%20tarjeta:%20${data.cardURL}"data-size="large"`;
// eventos (click botón y submit)
cardForm.addEventListener('submit', preventFormSend);
shareButton.addEventListener('click', showTwitter);

