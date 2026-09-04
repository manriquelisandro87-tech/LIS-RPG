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

// =========================
// CONTADOR DE DESCARGAS
// =========================

async function updateDownloadCount() {

  const counter = document.getElementById("download-count");

  // Si el contador no existe en el HTML,
  // no hacemos nada.
  if (!counter) {
    return;
  }

  // Mostrar estado inicial
  counter.textContent = "Cargando...";

  try {

    const apiURL =
      "https://api.github.com/repos/manriquelisandro87-tech/LIS-RPG/releases/tags/v0.2.0";

    const response = await fetch(apiURL, {
      headers: {
        "Accept": "application/vnd.github+json"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API respondió con ${response.status}`
      );
    }

    const release = await response.json();

    // Buscar nuestro archivo ZIP
    const asset = release.assets.find(
      file => file.name === "LIS.RPG.0.2.0.zip"
    );

    if (!asset) {
      throw new Error(
        "No se encontró LIS.RPG.0.2.0.zip en la Release."
      );
    }

    // download_count es el contador real de GitHub
    const downloads = Number(asset.download_count);

    if (!Number.isFinite(downloads)) {
      throw new Error(
        "GitHub no devolvió un contador válido."
      );
    }

    counter.textContent =
      downloads.toLocaleString("es-AR");

  } catch (error) {

    console.error(
      "Error obteniendo el contador de descargas:",
      error
    );

    counter.textContent = "No disponible";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  updateDownloadCount();
});

