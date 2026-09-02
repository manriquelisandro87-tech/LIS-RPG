/*
LIS RPG
Funciones de la página
*/

// =========================
// MENSAJES PLACEHOLDER
// =========================

function showMessage(message) {
alert(message);
}

// =========================
// REDES SOCIALES
// =========================

function placeholder(event, name) {

event.preventDefault();

showMessage(
`Acá irá tu enlace de ${name}.`
);
}

// =========================
// DESCARGA
// =========================

function downloadPlaceholder(event) {

event.preventDefault();

showMessage(
"Acá pondremos el enlace de descarga del ZIP de LIS RPG."
);
}

// =========================
// DONACIONES
// =========================

function donatePlaceholder(event) {

event.preventDefault();

showMessage(
"Acá pondremos tu enlace de donaciones."
);
}

// =========================
// DISCORD
// =========================

function discordPlaceholder(event) {

event.preventDefault();

showMessage(
"Acá pondremos el enlace de invitación de tu servidor de Discord."
);
}
