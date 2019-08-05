//CACHEO

'use strict';

// llamar a todas las partes que queremos guardar
// const inputName = document.querySelector('.name');
// const inputJob = document.querySelector('.job');
// const inputMail = document.querySelector('.mail');
// const inputPhone = document.querySelector('.phone');
// const inputLinkedin = document.querySelector('.linkedin_input');
// const inputGithub = document.querySelector('.github_input');

let urlShare = document.querySelector('.link-twitter');
const twitterUrl = document.querySelector('.button-twitter');
// const resetBtn = document.querySelector('.js__reset');

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

  // guardando los datos. Pasados a cadena

  let getDatos = JSON.stringify(datos);
  localStorage.setItem('datos', getDatos);
  console.log(getDatos);
  return getDatos;
}

// recuperación de los datos. Pasados a objeto
function loadDatos (){
  let getDatos = localStorage.getItem('datos');
  if (getDatos !=null) {
    datos = JSON.parse (getDatos);

    paletteOption = datos.palette;
    inputName.value = datos.name;
    inputJob.value = datos.job;
    inputPhone.value = datos.Phone;
    inputPhone.value = datos.Mail;
    inputLinkedin.value = datos.linkedin;
    inputGithub.value = datos.github;
    profilePreview.style.backgroundImage = `url(${fr.result})`;
    photoSend = datos.photo;


  //   resultName.innerHTML = datos.name;
  //  resultJob.innerHTML = datos.job;
  //  itemEmail.innerHTML= `<a href="mailto:${userInfo.email}" class="card__list--link far fa-envelope email__icon" target="_blank">email</a>`;
  //  itemPhone.innerHTML= `<a href="tel:${userInfo.phone}" class="card__list--link fas fa-mobile-alt phone__icon" target="_blank">mobile</a>`;
  //  itemLinkedin.innerHTML= `<a href="https://www.linkedin.com/in/${userInfo.linkedin}" class="card__list--link fab fa-linkedin-in linkedin__icon" target="_blank">linkedin</a>`;
  //  itemGithub.innerHTML= `<a href="https://github.com/${userInfo.github}" class="card__list--link fab fa-github-alt github__icon" target="_blank">github</a>`;
  //  profilePreview.style.backgroundImage = `url(${fr.result})`;
  //  photoSend = datos.photo;

  }
}

function serverSend(event){
  // evento que no envía el formulario
  event.preventDefault();
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    // Tu info es mandada.
    method: 'POST',
    body: getDatos(),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      urlShare ='<a href=' + data.cardURL + ' target="_blank">' + data.cardURL + '</a>';

      if (data.succes === false){
        console.log(data.error);
      }
      // url twitter. Está en "peticion" de la rama "Twitter-improves"
      twitterUrl.innerHTML = ``;
    });
}

function resetInfo () {
  localStorage.removeItem('datos');
}


// no estoy segura de si es a esta parte a quien hay que aplicar el evento
twitterUrl.addEventListener('click', serverSend);
resetBtn.addEventListener('click', resetInfo);

loadDatos();


