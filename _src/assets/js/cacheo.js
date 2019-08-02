//CACHEO
const inputName = document.querySelector('.name');
const inputJob = document.querySelector('.job');
const inputMail = document.querySelector('.mail');
const inputPhone = document.querySelector('.phone');
const inputLinkedin = document.querySelector('.linkedin_input');
const inputGithub = document.querySelector('.github_input');

function getDatosUser(){

const datos={
  'palette': paletteOption,
  'name': inputName.value,
  'job': inputJob.value,
  'phone': inputPhone.value,
  'email': inputMail.value ,//recordar Lunes
  'linkedin': inputLinkedin.value,
  'github': inputGithub.value,
  'photo': photoSend
}

let getDatos = JSON.stringify(datos);
 localStorage.setItem('datos', getDatos);
 console.log(getDatos);
 return getDatos;
}

function loadDatos (){
  getDatos = localStorage.getItem('datos');
  if (getDatos !=null) {
    datos = JSON.parse (getDatos);

    //paletteOption
    inputName.value = datos.name;
    inputJob.value = datos.job;
    inputPhone.value = datos.Phone;
    inputPhone.value = datos.Mail;
    inputLinkedin.value = datos.linkedin;
    inputGithub.value = datos.github;
    photoSend = datos.photo;
//url de la imagen previa;


  }
}
