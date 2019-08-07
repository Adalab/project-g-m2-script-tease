'use strict';

const containerClick = document.querySelectorAll('.containerClick-js');
const containerColorsRoll = document.querySelectorAll('.rollContainer-js');
const containerMother = document.querySelectorAll('.containerMother-js');
const containerTwitter = document.querySelector('.hide-twitter');
const createButton = document.querySelector('.share-button-create');

function rollup (event){
  if (event.currentTarget.parentElement.classList.contains('open')){
    event.currentTarget.parentElement.classList.remove('open');
  }else{
    for(const item of containerColorsRoll){
      item.parentElement.classList.remove('open');
    }
    event.currentTarget.parentElement.classList.add('open');
  }
}

for(let i = 0; i < containerClick.length; i++){
  containerClick[i].addEventListener('click',rollup);
}
function showTwitterSection(){
  containerTwitter.classList.remove('hide-twitter');
}

createButton.addEventListener('click', showTwitterSection);

