'use strict';

const containerClick = document.querySelectorAll('.containerClick-js');
const containerColorsRoll = document.querySelectorAll('.rollContainer-js');
const containerTwitter = document.querySelector('.hide-twitter');

function rollup (event){
  if (event.currentTarget.parentElement.classList.contains('open')){
    event.currentTarget.parentElement.classList.remove('open');
  }
  else {
    for (const item of containerColorsRoll){
      item.parentElement.classList.remove('open');
    }
    event.currentTarget.parentElement.classList.add('open');
  }
}
for (let i = 0; i < containerClick.length; i++){
  containerClick[i].addEventListener('click',rollup);
}
// eslint-disable-next-line no-unused-vars
function showTwitterSection(){
  containerTwitter.classList.remove('hidden');
}
