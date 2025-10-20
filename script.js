// 🌹 ——— EFECTO DE TEXTO TIPO MÁQUINA DE ESCRIBIR ———
function escribirTexto(texto, idElemento = "mensaje", velocidad = 70) {
    const elemento = document.getElementById(idElemento);
    if (!elemento) return; // Evita errores si el elemento no existe
    elemento.innerHTML = "";
    let i = 0;
    function escribir() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}



// 💌 ——— MOSTRAR Y CERRAR CARTA ———
document.addEventListener("DOMContentLoaded", () => {
    const btnCarta = document.getElementById("btnCarta");
    const btnCerrarCarta = document.getElementById("btnCerrarCarta");
    const carta = document.getElementById("carta");

    if (btnCarta && carta) {
        btnCarta.addEventListener("click", () => carta.style.display = "flex");
    }
    if (btnCerrarCarta && carta) {
        btnCerrarCarta.addEventListener("click", () => carta.style.display = "none");
    }

    // 📸 ——— GALERÍA ———
    const btnGaleria = document.getElementById("btnGaleria");
    const btnCerrarGaleria = document.getElementById("btnCerrarGaleria");
    const galeria = document.getElementById("galeria");

    if (btnGaleria && galeria) {
        btnGaleria.addEventListener("click", () => galeria.style.display = "flex");
    }
    if (btnCerrarGaleria && galeria) {
        btnCerrarGaleria.addEventListener("click", () => galeria.style.display = "none");
    }

    // 🎵 ——— BOTÓN DE MÚSICA ———
    const btnMusica = document.getElementById("btnMusica");
    const musica = document.getElementById("musica");
    if (btnMusica && musica) {
        btnMusica.addEventListener("click", () => {
            if (musica.paused) {
                musica.play();
                btnMusica.textContent = "🔇 Pausar música";
            } else {
                musica.pause();
                btnMusica.textContent = "🎵 Música";
            }
        });
    }

    // 💖 ——— BOTÓN "TE AMO" ———
    const btnAmor = document.getElementById("btnAmor");
    if (btnAmor) {
        btnAmor.addEventListener("click", () => {
            window.location.href = "amor.html";
        });
    }

    // 🌸 ——— BOTÓN "GRACIAS POR EXISTIR" ———
    const btnGracias = document.getElementById("btnGracias");
    if (btnGracias) {
        btnGracias.addEventListener("click", () => {
            window.location.href = "gracias.html";
        });
    }

    // 🏠 ——— BOTÓN VOLVER (EN CUALQUIER PÁGINA) ———
    const btnVolver = document.getElementById("btnVolver");
    if (btnVolver) {
        btnVolver.addEventListener("click", volverInicio);
    }

    // 💫 Iniciar corazones si hay contenedor
    iniciarCorazones();
});
// 🎵 ——— REPRODUCCIÓN AUTOMÁTICA DE MÚSICA ———
window.addEventListener("load", () => {
    const musica = document.querySelector("audio");
    if (musica) {
      musica.volume = 0.8; // volumen moderado
      const playPromise = musica.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("El navegador bloqueó la reproducción automática.");
        });
      }
    }
  });
// 🏠 ——— FUNCIÓN UNIVERSAL PARA VOLVER AL INICIO ———
function volverInicio() {
    window.location.href = "index.html";
}

