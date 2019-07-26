
const boxBorder = document.querySelector('.img__text-box');
const boxCircle1 = document.querySelector('.icon__mobile');
const boxCircle2 = document.querySelector('.icon__mail');
const boxCircle3 = document.querySelector('.icon__linkedin ');
const boxCircle4 = document.querySelector('.icon__github');

const blue1 = document.querySelector('.blue1');
const blue2 = document.querySelector('.blue2');
const blue3 = document.querySelector('.blue3');

const red1 = document.querySelector('.red1');
const red2 = document.querySelector('.red2');
const red3 = document.querySelector('.red3');

const green1 = document.querySelector('.green1');
const green2 = document.querySelector('.green2');
const green3 = document.querySelector('.green3');

const palette1 = document.querySelector('.input1');
const palette2 = document.querySelector('.input2');
const palette3 = document.querySelector('.input3');


function changeColor (event) {
  if (event.currentTarget.classList.contains('input1')) {

    textName.style.color = blue1.innerHTML;

    boxCircle1.classList.add('icon__mobile-blue');
    boxCircle1.classList.remove('icon__mobile-red');
    boxCircle1.classList.remove('icon__mobile-green');

    boxCircle2.classList.add('icon__mail-blue');
    boxCircle2.classList.remove('icon__mail-red');
    boxCircle2.classList.remove('icon__mail-green');

    boxCircle3.classList.add('icon__linkedin-blue');
    boxCircle3.classList.remove('icon__linkedin-red');
    boxCircle3.classList.remove('icon__linkedin-green');

    boxCircle4.classList.add('icon__github-blue');
    boxCircle4.classList.remove('icon__github-red');
    boxCircle4.classList.remove('icon__github-green');

    boxBorder.classList.add('img__text-box-blue');
    boxBorder.classList.remove('img__text-box-red');
    boxBorder.classList.remove('img__text-box-green');
  }
  else if (event.currentTarget.classList.contains('input2')) {

    textName.style.color = red1.innerHTML;

    boxCircle1.classList.add('icon__mobile-red');
    boxCircle1.classList.remove('icon__mobile-blue');
    boxCircle1.classList.remove('icon__mobile-green');

    boxCircle2.classList.add('icon__mail-red');
    boxCircle2.classList.remove('icon__mail-blue');
    boxCircle2.classList.remove('icon__mail-green');

    boxCircle3.classList.add('icon__linkedin-red');
    boxCircle3.classList.remove('icon__linkedin-blue');
    boxCircle3.classList.remove('icon__linkedin-green');

    boxCircle4.classList.add('icon__github-red');
    boxCircle4.classList.remove('icon__github-blue');
    boxCircle4.classList.remove('icon__github-green');

    boxBorder.classList.add('img__text-box-red');
    boxBorder.classList.remove('img__text-box-blue');
    boxBorder.classList.remove('img__text-box-green');
  }
  else if (event.currentTarget.classList.contains('input3')) {

    textName.style.color = green1.innerHTML;

    boxCircle1.classList.add('icon__mobile-green');
    boxCircle1.classList.remove('icon__mobile-blue');
    boxCircle1.classList.remove('icon__mobile-red');

    boxCircle2.classList.add('icon__mail-green');
    boxCircle2.classList.remove('icon__mail-blue');
    boxCircle2.classList.remove('icon__mail-red');

    boxCircle3.classList.add('icon__linkedin-green');
    boxCircle3.classList.remove('icon__linkedin-blue');
    boxCircle3.classList.remove('icon__linkedin-red');

    boxCircle4.classList.add('icon__github-green');
    boxCircle4.classList.remove('icon__github-blue');
    boxCircle4.classList.remove('icon__github-red');

    boxBorder.classList.add('img__text-box-green');
    boxBorder.classList.remove('img__text-box-blue');
    boxBorder.classList.remove('img__text-box-red');
  }
}
