'use strict';

const btn = document.querySelector('.button-create');
const urlShare = document.querySelector('.link-twitter');

let photoSend = '';

function writeUrl(){
  if(!fr.result && !localStorage.getItem('image')){
    photoSend = defaultImage;
    console.log('defecto',photoSend);
  }
  else if(!fr.result && localStorage.getItem('image')){
    photoSend = localStorage.getItem('image');
    console.log('storage',photoSend);
  }
  else{
    photoSend = fr.result;

    localStorage.setItem('image',photoSend );
    console.log('selected',photoSend);
  }
  const datos={
    'palette': paletteOption,
    'name': inputName.value,
    'job': inputJob.value,
    'phone': inputPhone.value,
    'email': inputMail.value ,
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
  const urlTwitter = encodeURIComponent('He creado esta tarjeta con Awesome Profile Cards. ¿Qué te parece?');

  const hastag = encodeURIComponent('adalab,script-tease,adalaber,frontEnd,awesomeCards');

  const finalURL = `https://twitter.com/intent/tweet?text=${urlTwitter}&url=${cardURL}&hashtags=${hastag}`;
  document.querySelector('.button-twitter').href = finalURL;
}

btn.addEventListener('click',writeUrl);
