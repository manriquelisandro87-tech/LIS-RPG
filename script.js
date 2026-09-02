function placeholder(event, name) {
  event.preventDefault();
  alert(`Acá irá tu enlace de ${name}.`);
}

function downloadPlaceholder(event) {
  event.preventDefault();
  alert("Acá pondremos el enlace de descarga del ZIP de LIS RPG.");
}

function donatePlaceholder(event) {
  event.preventDefault();
  alert("Acá pondremos tu enlace de donaciones.");
}
