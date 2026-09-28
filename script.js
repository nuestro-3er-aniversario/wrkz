const inicio = document.getElementById("inicio");
const principal = document.getElementById("principal");
const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");
function abrirRegalo() {
    inicio.classList.add("transicionando");
    setTimeout(() => {
        inicio.classList.remove("activa");
        inicio.style.display = "none";
        principal.classList.add("activa");
        principal.style.opacity = "0";
        requestAnimationFrame(() => {
            principal.style.transition = "opacity 1.2s ease";
            principal.style.opacity = "1";
        });
        if (musica) {
            musica.play().catch(() => {});
        }
    }, 1000);
}
function mostrarSeccion(id) {
    document.querySelectorAll(".pantalla, .seccion").forEach(elemento => {
        elemento.classList.remove("activa");
    });
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.classList.add("activa");
    }
}
function volverPrincipal() {
    document.querySelectorAll(".seccion").forEach(seccion => {
        seccion.classList.remove("activa");
    });
    inicio.classList.remove("activa");
    principal.classList.add("activa");
}
const razones = [
    "Me encanta la forma en la que haces que mis días sean más bonitos ❤️",
    "Porque contigo puedo ser yo mismo.",
    "Porque cada conversación contigo significa muchísimo para mí.",
    "Porque me haces sonreír incluso cuando no estoy teniendo un buen día.",
    "Porque amo todos nuestros pequeños momentos.",
    "Porque eres una persona demasiado especial para mí.",
    "Porque contigo he creado recuerdos que nunca quiero olvidar.",
    "Porque me encanta tenerte en mi vida.",
    "Porque después de todo lo que hemos vivido, sigues siendo importante para mí.",
    "Porque simplemente eres tú ❤️",
    "Porque amo cuando nos quedamos jugando y charlando por horas uwu",
    "Porque tus abrazos (y los que vendrán en persona) me dan muchísima paz ;3",
    "Porque me encanta la forma en la que iluminas todo a tu alrededor.",
    "Porque eres mi refugio seguro cuando todo se pone difícil.",
    "Porque amo tu carita y esa linda sonrisita que tienes 🥹💕",
    "Porque hasta el día más aburrido se vuelve especial si hablo contigo.",
    "Porque hacemos el mejor equipo del mundo entero.",
    "Porque siempre sabes cómo sacarme una sonrisa en el momento exacto.",
    "Porque me encanta tomarte fotitos distraída en los juegos Xd",
    "Porque contigo he aprendido lo bonito que es querer de verdad.",
    "Porque me encanta compartir mis gustos y tonterías contigo uwu",
    "Porque eres la persona más dulce y comprensiva que conozco.",
    "Porque me encanta cuando nos reímos de cualquier bug o bobada juntos 🤭",
    "Porque tus mensajes me alegran la mañana y la noche.",
    "Porque eres mi pensamiento favorito de todos los días.",
    "Porque a pesar de los bajones, siempre nos levantamos juntos ❤️",
    "Porque eres el regalo más hermoso que me dio la vida.",
    "Porque amo cada llamada, cada juego y cada llamada AFK juntitosh.",
    "Porque me fascina la forma en la que cuidas de mí.",
    "Porque te amo con todo mi corazón, hoy, mañana y siempre 🥹💕"
];
let razonActual = -1;
function nuevaRazon() {
    const elemento = document.getElementById("razon");
    if (!elemento) return;
    let nueva;
    do {
        nueva = Math.floor(Math.random() * razones.length);
    } while (nueva === razonActual && razones.length > 1);
    razonActual = nueva;
    elemento.style.opacity = "0";
    setTimeout(() => {
        elemento.textContent = razones[razonActual];
        elemento.style.opacity = "1";
    }, 250);
}
function mostrarSorpresa() {
    const mensaje = document.getElementById("mensajeFinal");
    if (!mensaje) return;
    mensaje.classList.add("mostrar");
    crearCorazones();
}
function crearCorazones() {
    for (let i = 0; i < 18; i++) {
        const corazon = document.createElement("div");
        corazon.textContent = "❤️";
        corazon.style.position = "fixed";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.bottom = "-30px";
        corazon.style.fontSize = (15 + Math.random() * 20) + "px";
        corazon.style.pointerEvents = "none";
        corazon.style.zIndex = "1000";
        corazon.style.animation = `flotarCorazon ${3 + Math.random() * 3}s ease-out forwards`;
        document.body.appendChild(corazon);
        setTimeout(() => {
            corazon.remove();
        }, 6500);
    }
}
function controlarMusica() {
    if (!musica) return;
    if (musica.paused) {
        musica.play().catch(() => {});
        if (botonMusica) botonMusica.textContent = "🎵";
    } else {
        musica.pause();
        if (botonMusica) botonMusica.textContent = "🔇";
    }
}
function animarRegalo() {
    const regalo = document.getElementById("regalo");
    if (!regalo) return;
    regalo.classList.add("regalo-animado");
    setTimeout(() => {
        regalo.classList.remove("regalo-animado");
    }, 1000);
}
document.addEventListener("click", function(e) {
    if (
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.closest(".tarjeta")
    ) {
        return;
    }
    const corazon = document.createElement("div");
    corazon.textContent = "❤";
    corazon.style.position = "fixed";
    corazon.style.left = e.clientX + "px";
    corazon.style.top = e.clientY + "px";
    corazon.style.color = "#ff6bb5";
    corazon.style.fontSize = "18px";
    corazon.style.pointerEvents = "none";
    corazon.style.zIndex = "9999";
    corazon.style.animation = "clickCorazon 1s ease-out forwards";
    document.body.appendChild(corazon);
    setTimeout(() => {
        corazon.remove();
    }, 1000);
});
const fechaInicio = new Date("2023-09-27T00:00:00");
function actualizarContador() {
    const contador = document.getElementById("contador");
    if (!contador) return;
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;
    if (diferencia < 0) {
        diferencia = 0;
    }
    const segundosTotales = Math.floor(diferencia / 1000);
    const segundos = segundosTotales % 60;
    const minutosTotales = Math.floor(segundosTotales / 60);
    const minutos = minutosTotales % 60;
    const horasTotales = Math.floor(minutosTotales / 60);
    const horas = horasTotales % 24;
    const diasTotales = Math.floor(horasTotales / 24);
    const años = Math.floor(diasTotales / 365.2425);
    const diasRestantes = Math.floor(diasTotales - años * 365.2425);
    contador.innerHTML = `
        <strong>${años}</strong> años,
        <strong>${diasRestantes}</strong> días,
        <strong>${horas}</strong> horas,
        <strong>${minutos}</strong> minutos y
        <strong>${segundos}</strong> segundos
        juntos ❤️
    `;
}
actualizarContador();
setInterval(actualizarContador, 1000);
function crearEstrellasFondo() {
    const contenedor = document.getElementById("fondo-estrellas");
    if (!contenedor) return;
    contenedor.innerHTML = "";
    const cantidad = 90;
    for (let i = 0; i < cantidad; i++) {
        const estrella = document.createElement("span");
        estrella.className = "estrella-fondo";
        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";
        const tamaño = 1 + Math.random() * 3;
        estrella.style.width = tamaño + "px";
        estrella.style.height = tamaño + "px";
        estrella.style.animationDelay = Math.random() * 5 + "s";
        estrella.style.setProperty("--duracion", (2 + Math.random() * 4) + "s");
        contenedor.appendChild(estrella);
    }
}
crearEstrellasFondo();
document.addEventListener("mousemove", function(e) {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);
    const portada = document.getElementById("fondo-portada");
    const fondoPrincipal = document.getElementById("fondo-principal");
    if (portada) {
        portada.style.backgroundPosition = `${50 + x * 3}% ${50 + y * 3}%`;
    }
    if (fondoPrincipal) {
        fondoPrincipal.style.backgroundPosition = `${50 + x * 3}% ${50 + y * 3}%`;
    }
});
const intro = document.getElementById("intro");
const canvas = document.getElementById("intro-canvas");
const mensajeIntro = document.getElementById("intro-mensaje");
const ctx = canvas ? canvas.getContext("2d") : null;
let ancho = window.innerWidth;
let alto = window.innerHeight;
let trayectoriaPuntos = [];
let indicePunto = 0;
let historial = [];
let particulas = [];
let introFinalizada = false;
let mensajeMostrado = false;
function ajustarCanvas() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    ancho = window.innerWidth;
    alto = window.innerHeight;
    canvas.width = ancho * dpr;
    canvas.height = alto * dpr;
    canvas.style.width = ancho + "px";
    canvas.style.height = alto + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function calcularBezier(p0, p1, p2, p3, t) {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;
    return {
        x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
        y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y
    };
}
function generarCaminoMagico() {
    trayectoriaPuntos = [];
    const cx = ancho / 2;
    const cy = alto / 2;
    const escala = Math.min(ancho, alto) * 0.22;
    const fueraDerecha = { x: ancho + 180, y: cy - escala * 1.5 };
    const puntaInferior = { x: cx, y: cy + escala * 1.1 };
    const lobuloIzquierdo = { x: cx - escala * 1.1, y: cy - escala * 0.8 };
    const centroArriba = { x: cx, y: cy - escala * 0.2 };
    const lobuloDerecho = { x: cx + escala * 1.1, y: cy - escala * 0.8 };
    const fueraIzquierda = { x: -200, y: cy - escala * 0.5 };
    for (let i = 0; i <= 80; i++) {
        const t = i / 80;
        const p1 = { x: ancho * 0.85, y: cy + escala * 0.8 };
        const p2 = { x: cx + escala * 0.5, y: cy + escala * 1.2 };
        trayectoriaPuntos.push(calcularBezier(fueraDerecha, p1, p2, puntaInferior, t));
    }
    for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const p1 = { x: cx - escala * 1.3, y: cy + escala * 0.5 };
        const p2 = { x: cx - escala * 1.4, y: cy - escala * 1.2 };
        trayectoriaPuntos.push(calcularBezier(puntaInferior, p1, p2, centroArriba, t));
    }
    for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const p1 = { x: cx + escala * 1.4, y: cy - escala * 1.2 };
        const p2 = { x: cx + escala * 1.3, y: cy + escala * 0.5 };
        trayectoriaPuntos.push(calcularBezier(centroArriba, p1, p2, puntaInferior, t));
    }
    for (let i = 0; i <= 90; i++) {
        const t = i / 90;
        const p1 = { x: cx - escala * 0.6, y: cy + escala * 0.9 };
        const p2 = { x: cx - escala * 1.2, y: cy };
        trayectoriaPuntos.push(calcularBezier(puntaInferior, p1, p2, fueraIzquierda, t));
    }
}
function generarBrillitos(x, y) {
    const tipos = ["punto", "estrella", "polvo"];
    const colores = ["#ffffff", "#ff80ab", "#ff1744", "#ff80df", "#e040fb", "#ffd1dc"];
    for (let i = 0; i < 7; i++) {
        particulas.push({
            x: x + (Math.random() - 0.5) * 22,
            y: y + (Math.random() - 0.5) * 22,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            tamaño: Math.random() * 3.5 + 0.8,
            color: colores[Math.floor(Math.random() * colores.length)],
            tipo: tipos[Math.floor(Math.random() * tipos.length)],
            rotacion: Math.random() * Math.PI,
            vRotacion: (Math.random() - 0.5) * 0.1,
            vida: 1.0,
            velocidadDecaimiento: 0.012 + Math.random() * 0.015
        });
    }
}
function dibujarEstrellaDeCuatroPuntas(ctx, x, y, radio, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(x, y - radio);
    ctx.quadraticCurveTo(x, y, x + radio, y);
    ctx.quadraticCurveTo(x, y, x, y + radio);
    ctx.quadraticCurveTo(x, y, x - radio, y);
    ctx.quadraticCurveTo(x, y, x, y - radio);
    ctx.fill();
    ctx.restore();
}
function animarIntroEstrella() {
    if (!ctx || introFinalizada) return;
    ctx.clearRect(0, 0, ancho, alto);
    if (indicePunto < trayectoriaPuntos.length) {
        const posActual = trayectoriaPuntos[indicePunto];
        historial.push(posActual);
        if (historial.length > 90) {
            historial.shift();
        }
        generarBrillitos(posActual.x, posActual.y);

        // Disparar mensaje en la cúspide
        if (indicePunto > trayectoriaPuntos.length * 0.65 && !mensajeMostrado) {
            mensajeMostrado = true;
            if (mensajeIntro) mensajeIntro.classList.add("mostrar");
        }
        ctx.save();
        const grad = ctx.createRadialGradient(
            posActual.x, posActual.y, 0,
            posActual.x, posActual.y, 30
        );
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.25, "rgba(255, 120, 200, 1)");
        grad.addColorStop(0.6, "rgba(255, 23, 68, 0.4)");
        grad.addColorStop(1, "rgba(255, 23, 68, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(posActual.x, posActual.y, 30, 0, Math.PI * 2);
        ctx.fill();
        dibujarEstrellaDeCuatroPuntas(ctx, posActual.x, posActual.y, 14, "#ffffff");
        ctx.restore();
        indicePunto += 2;
    }
    if (historial.length > 1) {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 1; i < historial.length; i++) {
            const p1 = historial[i - 1];
            const p2 = historial[i];
            const progreso = i / historial.length;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 60, 150, ${progreso * 0.85})`;
            ctx.lineWidth = progreso * 7;
            ctx.shadowColor = "#ff1744";
            ctx.shadowBlur = 18;
            ctx.stroke();
        }
        ctx.restore();
    }
    for (let i = particulas.length - 1; i >= 0; i--) {
        const p = particulas[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotacion += p.vRotacion;
        p.vida -= p.velocidadDecaimiento;
        if (p.vida <= 0) {
            particulas.splice(i, 1);
            continue;
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.vida);
        if (p.tipo === "estrella") {
            dibujarEstrellaDeCuatroPuntas(ctx, p.x, p.y, p.tamaño * 2, p.color);
        } else {
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.tamaño, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
    if (indicePunto >= trayectoriaPuntos.length && particulas.length < 5 && !introFinalizada) {
        introFinalizada = true;
        if (intro) intro.classList.add("oscurecer");
        setTimeout(() => {
            if (intro) {
                intro.style.display = "none";
                intro.remove();
            }
            if (inicio) {
                inicio.classList.add("mostrar-portada");
                inicio.classList.add("activa");
            }
        }, 1200);
    } else {
        requestAnimationFrame(animarIntroEstrella);
    }
}
window.addEventListener("resize", () => {
    ajustarCanvas();
    generarCaminoMagico();
});
window.addEventListener("load", () => {
    ajustarCanvas();
    generarCaminoMagico();
    requestAnimationFrame(animarIntroEstrella);
});
// Lista de canciones para la playlist en orden
// Lista de canciones apuntando a tu carpeta "musicas" con los nombres exactos
const playlist = [
    "Elvis Presley - Can't Help Falling In Love (Official Audio).mp3",
    "Ed Sheeran - Perfect.mp3",
    "Ben E. King - Stand By Me (Audio).mp3",
    "Counting Crows - Accidentally In Love (Sub. Español Lyrics).mp3"
];

let cancionActualIndex = 0;
const reproductorAudio = document.getElementById("musicaFondo");

if (reproductorAudio) {
    reproductorAudio.volume = 0.25;

    reproductorAudio.addEventListener("ended", () => {
        cancionActualIndex = (cancionActualIndex + 1) % playlist.length;
        reproductorAudio.src = playlist[cancionActualIndex];
        reproductorAudio.play().catch(e => console.log("Error al reproducir siguiente canción:", e));
    });
}

function controlarMusica() {
    if (!reproductorAudio) return;
    
    if (reproductorAudio.paused) {
        reproductorAudio.play();
    } else {
        reproductorAudio.pause();
    }
}

function iniciarPlaylistConPrimerToque() {
    if (reproductorAudio && reproductorAudio.paused) {
        reproductorAudio.play().then(() => {
            console.log("Música iniciada correctamente.");
        }).catch(err => {
            console.log("Esperando toque para reproducción:", err);
        });
    }
}

document.addEventListener("click", iniciarPlaylistConPrimerToque, { once: true });
document.addEventListener("touchstart", iniciarPlaylistConPrimerToque, { once: true });
