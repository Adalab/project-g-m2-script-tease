'use strict';
const containerClick = document.querySelectorAll('.containerClick-js');
//console.log(containerClick);
const containerColorsRoll = document.querySelectorAll('.rollContainer-js');
//console.log(containerColorsRoll);
const containerMother = document.querySelectorAll('.containerMother-js');
//console.log(containerMother);

function rollup (event){
  //console.log('elementoclick',event.currentTarget);
  //console.log('id',event.currentTarget.id);
  //console.log('padre',event.currentTarget.parentNode)
  event.currentTarget.parentNode.classList.toggle('open');
}
for(let i = 0; i < containerClick.length; i++){
  containerClick[i].addEventListener('click',rollup);

}
//console.log(containerClick);
//containerClick.addEventListener('click',rollup);

