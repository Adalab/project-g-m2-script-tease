console.log(' >>> Reset ready :D');
const resetBtn = document.querySelector('.js__reset');
const container = document.querySelector('.containerMother-js');

function reset(event){
  iconMail.classList.add('hidden_v');
  iconPhone.classList.add('hidden_v');
  iconLinkedin.classList.add('hidden_v');
  iconGithub.classList.add('hidden_v');
  textName.innerHTML = "Nombre Apellido";
  textJob.innerHTML = " Front-end developer"
  textPhone.href = 'tel:';
  textMail.href = 'mailto:';
  textLinkedin.href =  'https://www.linkedin.com/in/';
  textGithub.href ='https://github.com/';
  inputName.value = '';
  inputJob.value='';
  inputMail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  palette1.checked = true;
  palette2.checked = false;
  palette3.checked = false;
  box.classList.remove('cards__img-wrapper-op2');
  box.classList.remove('cards__img-wrapper-op3');
  box.classList.add('cards__img-wrapper-op1');
    // Resetear la imagen.
}

resetBtn.addEventListener('click', reset);