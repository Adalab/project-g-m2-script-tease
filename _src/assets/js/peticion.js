'use strict';

const btn = document.querySelector('.button-create');
const urlShare = document.querySelector('.link-twitter');

let photoSend = '';

function writeUrl(){
  // eslint-disable-next-line no-undef
  if(!fr.result && !localStorage.getItem('image')){
    // eslint-disable-next-line no-undef
    photoSend = defaultImage;
  }
  // eslint-disable-next-line no-undef
  else if(!fr.result && localStorage.getItem('image')){
    photoSend = localStorage.getItem('image');
  }
  else{
    // eslint-disable-next-line no-undef
    photoSend = fr.result;
    localStorage.setItem('image',photoSend );
  }
  const datos={
    // eslint-disable-next-line no-undef
    'palette': paletteOption,
    // eslint-disable-next-line no-undef
    'name': inputName.value,
    // eslint-disable-next-line no-undef
    'job': inputJob.value,
    // eslint-disable-next-line no-undef
    'phone': inputPhone.value,
    // eslint-disable-next-line no-undef
    'email': inputMail.value ,
    // eslint-disable-next-line no-undef
    'linkedin': inputLinkedin.value,
    // eslint-disable-next-line no-undef
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
    // eslint-disable-next-line no-console
    .catch(function(error) { console.log(error); });
}
function showURL(data){
  if(data.success){
    urlShare.innerHTML = '<a class="twitter-url" href=' + data.cardURL + ' target="_blank">' + data.cardURL + '</a>';
    shareTwitter(data.cardURL);
    // eslint-disable-next-line no-undef
    showTwitterSection();
    // eslint-disable-next-line no-undef
    showTwitter();

  }else{
    urlShare.innerHTML = 'ERROR:' + data.error;
  }
}
function shareTwitter(cardURL){
  const urlTwitter = encodeURIComponent('He creado esta tarjeta con Awesome Profile Cards. ¿Qué te parece?');

  const hastag = encodeURIComponent('adalab,script-tease,adalaber,frontEnd,awesomeCards');

  const finalURL = `https://twitter.com/intent/tweet?text=${urlTwitter}&url=${cardURL}&hashtags=${hastag}`;
  document.querySelector('.button-twitter').href = finalURL;
}

btn.addEventListener('click',writeUrl);
