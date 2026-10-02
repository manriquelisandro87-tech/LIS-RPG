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

  if (!counter) {
    console.error("No existe #download-count en index.html");
    return;
  }

  counter.textContent = "Cargando...";

  try {

    const response = await fetch(
      "https://api.github.com/repos/manriquelisandro87-tech/LIS-RPG/releases",
      {
        method: "GET",
        headers: {
          "Accept": "application/vnd.github+json"
        },
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API respondió con ${response.status}`
      );
    }

    const releases = await response.json();

    console.log("Releases encontradas:", releases);

    // Descargas que ya existían antes de reemplazar el ZIP
    const historicalDownloads = 2;

    let githubDownloads = 0;

    // Recorrer todas las versiones
    releases.forEach(release => {

      console.log(
        "Revisando release:",
        release.tag_name
      );

      // Recorrer archivos de cada versión
      release.assets.forEach(asset => {

        console.log(
          "Archivo:",
          asset.name,
          "Descargas:",
          asset.download_count
        );

        // Contar solamente ZIP de LIS RPG
        if (
          asset.name.startsWith("LIS.RPG.") &&
          asset.name.toLowerCase().endsWith(".zip")
        ) {

          githubDownloads +=
            Number(asset.download_count) || 0;
        }
      });
    });

    const totalDownloads =
      historicalDownloads + githubDownloads;

    counter.textContent =
      totalDownloads.toLocaleString("es-AR");

    console.log(
      "Descargas históricas:",
      historicalDownloads
    );

    console.log(
      "Descargas actuales:",
      githubDownloads
    );

    console.log(
      "TOTAL:",
      totalDownloads
    );

  } catch (error) {

    console.error(
      "ERROR DEL CONTADOR:",
      error
    );

    counter.textContent = "Error";

  }
}

// =========================
// INICIAR
// =========================

document.addEventListener(
  "DOMContentLoaded",
  updateDownloadCount
);
