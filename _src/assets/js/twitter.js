'use strict';

const twitter = document.querySelector('.content__twitter-container');
const shareButton = document.querySelector('.button-create');
const cardForm = document.querySelector('.form__all-sections');

function showTwitter(){
  shareButton.disabled = true;
  shareButton.classList.add('greyButton');
  twitter.classList.remove('share__hidden');
}
function preventFormSend(event){
  event.preventDefault();
}

shareButton.addEventListener('click', showTwitter);
