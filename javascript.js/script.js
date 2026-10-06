


if ('serviceWorker' in navigator) {
  if (location.protocol === 'https:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js')
        .then(function (reg) {
          console.log('[SW] Registrado con éxito:', reg.scope);
        })
        .catch(function (err) {
          console.warn('[SW] Error al registrar:', err);
        });
    });
  } else {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (r) { r.unregister(); });
      console.log('[SW] Modo local: service worker desactivado y caché limpia.');
    });
    if (window.caches) {
      caches.keys().then(function (keys) {
        keys.forEach(function (k) { caches.delete(k); });
      });
    }
  }
}


AOS.init();


// ------------------- temporizador -----------------------

document.addEventListener('DOMContentLoaded', () => {

    const fechaObjetivo = new Date("november 7, 2026 22:00:00").getTime();
  
    function actualizarContador() {
      const ahora = Date.now();
      const diferencia = fechaObjetivo - ahora;
  
      if (diferencia <= 0) {
        // Si la fecha ya pasó, mostrar ceros
        ["dias", "horas", "minutos", "segundos"].forEach(id => {
          document.getElementById(id).textContent = "0".repeat(id === "dias" ? 1 : 2);
        });
        return;
      }
  
      const dias     = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas    = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos  = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
      // Días sin cero a la izquierda si es menor que 10
      document.getElementById("dias").textContent     = String(dias);
      // Horas, minutos y segundos con dos dígitos
      document.getElementById("horas").textContent    = String(horas).padStart(2, "0");
      document.getElementById("minutos").textContent  = String(minutos).padStart(2, "0");
      document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
    }
  
    // Ejecuta inmediatamente y luego cada segundo
    actualizarContador();
    setInterval(actualizarContador, 1000);
  });
  
  


// -------------------- musica ------------------------

const audio = document.getElementById("audio");
const playButton = document.querySelector(".player__button--play");
const rewindButton = document.querySelector(".player__button--rewind");
const forwardButton = document.querySelector(".player__button--forward");

// Alternar Play/Pause
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Si la música termina, volver a poner el icono de "play"
audio.addEventListener("ended", () => {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
});

// Retroceder 5 segundos
rewindButton.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
});

// Avanzar 5 segundos
forwardButton.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
});





// ------------------- fotos ----------------------

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 4,
        depth: 3,
        modifier: 50,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000, // Time between slides in milliseconds (e.g., 3 seconds)
        disableOnInteraction: false, // Set to true to stop autoplay on user interaction (e.g., dragging)
    },
    loop: true, // Enable infinite loop
});





    /* ---------------- regalos ------------------ */



    document.addEventListener("DOMContentLoaded", () => {
        const transferencia = document.querySelector(".transferencia");
        const boton = document.querySelector(".transferencia__boton");
        const contenido = document.querySelector(".transferencia__contenido");
    
        boton.addEventListener("click", () => {
            if (transferencia.classList.contains("transferencia--activa")) {
                // Si ya está abierta, la cerramos
                contenido.style.maxHeight = "0px";
                contenido.style.opacity = "0";
            } else {
                // Si está cerrada, la abrimos
                contenido.style.maxHeight = contenido.scrollHeight + "px";
                contenido.style.opacity = "1";
            }
    
            transferencia.classList.toggle("transferencia--activa");
        });
    
        // Evitar que el contenido cierre el menú al hacer clic en él
        contenido.addEventListener("click", (event) => {
            event.stopPropagation(); // Detiene la propagación del evento
        });
    });
      
      
    const botonTransferencia = document.querySelector('.transferencia__boton');
const iconoTransferencia = document.querySelector('.transferencia__icono');

botonTransferencia.addEventListener('click', () => {
  iconoTransferencia.classList.toggle('rotado'); // Alterna la clase 'rotado'
});





// --------------------------- playlist --------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const phoneNumber1 = '543816568358'; // Número para el primer botón
    const phoneNumber2 = '543816591298'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const name = document.getElementById('userName').value;
        const message = document.getElementById('whatsappMessage').value;
  
        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, completa ambos campos antes de enviar.');
            return;
        }
  
        const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
        
        // Limpiar los campos de entrada
        document.getElementById('userName').value = '';
        document.getElementById('whatsappMessage').value = '';
  
        // Volver al bloque de formulario
        document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Asignar eventos a los botones
    document.getElementById('botonplay1').addEventListener('click', function() {
        sendMessage(phoneNumber1);
    });
  
    document.getElementById('botonplay2').addEventListener('click', function() {
        sendMessage(phoneNumber2);
    });
  });
  




// --------------------- confirmar asistencia --------------------------
      
document.querySelectorAll(".asistencia__radios").forEach(input => {
    input.addEventListener("change", function () {
        document.querySelectorAll(".asistencia__labels").forEach(label => label.classList.remove("selected"));
        this.parentElement.classList.add("selected");
    });
});

document.querySelectorAll(".alimenticio__radios").forEach(input => {
    input.addEventListener("change", function () {
        document.querySelectorAll(".alimenticio__label").forEach(label => label.classList.remove("selected"));
        document.querySelector(`label[for="${this.id}"]`).classList.add("selected");
    });
});

document.getElementById("confirmarBtn").addEventListener("click", function () {
    const nombreInput = document.getElementById("nombre");
    const mensajeInput = document.getElementById("mensaje");
    const asistenciaRadio = document.querySelector("input[name='asistencia']:checked");
    const alimentacionRadio = document.querySelector("input[name='alimenticioOption']:checked");

    const nombre = nombreInput.value.trim();
    const asistencia = asistenciaRadio?.value || "(No especificado)";
    const alimentacion = alimentacionRadio?.value || "Ninguna";
    const mensaje = mensajeInput.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    const textoWhatsApp = `Hola mi nombre es ${nombre} y quiero confirmar que ${asistencia}".\n${mensaje}`;
    const numero = "543816568358";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(url, "_blank");

    // Limpiar los campos después de enviar
    nombreInput.value = "";
    mensajeInput.value = "";
    
    // Desmarcar los radio buttons
    if (asistenciaRadio) asistenciaRadio.checked = false;
    if (alimentacionRadio) alimentacionRadio.checked = false;

    // Quitar la clase 'selected' de los labels
    document.querySelectorAll(".asistencia__labels, .alimenticio__label").forEach(label => label.classList.remove("selected"));
});

