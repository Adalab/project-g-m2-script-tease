'use strict';
const containerClick = document.querySelectorAll('.containerClick-js');
//console.log(containerClick);
const containerColorsRoll = document.querySelectorAll('.rollContainer-js');
//console.log(containerColorsRoll);
const containerMother = document.querySelectorAll('.containerMother-js');
//console.log(containerMother);

const containerTwitter = document.querySelector('.hide-twitter');
const createButton = document.querySelector('.share-button-create');


function rollup (event){
  //console.log('elementoclick',event.currentTarget);
  //console.log('id',event.currentTarget.id);
  //console.log('padre',event.currentTarget.parentNode)
  //event.currentTarget.parentElement.classList.toggle('open');
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

//console.log(containerClick);
//containerClick.addEventListener('click',rollup);

function showTwitterSection(){
  containerTwitter.classList.remove('hide-twitter');
}

createButton.addEventListener('click', showTwitterSection);

