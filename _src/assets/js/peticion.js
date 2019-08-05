'use strict';

const btn = document.querySelector('.button-create');
const urlShare = document.querySelector('.link-twitter');

let photoSend = '';

if(!fr.result){
  photoSend = defaultImage;
}
else{
  photoSend = fr.result;
}

function writeUrl(){
  const datos={
    'palette': paletteOption,
    'name': inputName.value,
    'job': inputJob.value,
    'phone': inputPhone.value,
    'email': inputPhone.value ,
    'linkedin': inputLinkedin.value,
    'github': inputGithub.value,
    'photo': photoSend
  };
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => showURL(data))
    .catch(function(error) { console.log(error); });
}

function showURL(data){
  if(data.success){
    urlShare.innerHTML = '<a class="twitter-url" href=' + data.cardURL + ' target="_blank">' + data.cardURL + '</a>';
    shareTwitter(data.cardURL);
  }else{
    urlShare.innerHTML = 'ERROR:' + data.error;
  }
}

function shareTwitter(cardURL){
  const urlTwitter = 'https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20en%20Awesome%20Profile%20cards%2C%20%C2%BFque%20te%20parece%3F.%20'
  const finalURL = urlTwitter + cardURL;
  document.querySelector('.button-twitter').href = finalURL;
}
btn.addEventListener('click',writeUrl);

//CACHEO
'use strict';
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
  'email': inputPhone.value ,
  'linkedin': inputLinkedin.value,
  'github': inputGithub.value,
  'photo': photoSend
}

const getDatos = JSON.stringify(datos);
 localStorage.setItem('datos', getDatos);
 console.log(getDatos);
 return getDatos;
}

