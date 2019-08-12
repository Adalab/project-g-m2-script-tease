'use strict';

const twitter = document.querySelector('.content__twitter-container');
const shareButton = document.querySelector('.button-create');

// eslint-disable-next-line no-unused-vars
function showTwitter(){

  shareButton.disabled = true;
  shareButton.classList.add('greyButton');
  twitter.classList.remove('share__hidden');
}
