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
    urlShare.innerHTML = '<a href=' + data.cardURL + ' target="_blank">' + data.cardURL + '</a>';
    // shareTwitter();
  }else{
    urlShare.innerHTML = 'ERROR:' + data.error;
  }
}

/*function shareTwitter(){
  fetch()
  .then()
  .then()
}*/
btn.addEventListener('click',writeUrl);
