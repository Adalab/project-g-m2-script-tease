'use strict';
// le indico que vaya a esa clase del botón
const sharing = document.querySelector('.button-create');

// le doy la función y le pido que me devuelva el bottón desactivado
function clickSharing(event) {
  return (event.disabled=true);
}
// escuchar al evento click y ejecutar la función
sharing.addEventListener('click', clickSharing);
