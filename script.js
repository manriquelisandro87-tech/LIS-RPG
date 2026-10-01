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

```js
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
      "https://api.github.com/repos/manriquelisandro87-tech/LIS-RPG/releases?per_page=100";

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

    const releases = await response.json();

    let totalDownloads = 0;

    // Recorrer todas las versiones
    for (const release of releases) {

      // Recorrer los archivos de cada Release
      for (const asset of release.assets) {

        // Solo contar los ZIP del modpack
        if (
          asset.name.startsWith("LIS.RPG.") &&
          asset.name.endsWith(".zip")
        ) {
          totalDownloads += Number(asset.download_count) || 0;
        }

      }
    }

    counter.textContent =
      totalDownloads.toLocaleString("es-AR");

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
```
