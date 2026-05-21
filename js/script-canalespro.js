let url = new URL(window.location.href);
const channels = url.searchParams.get('channels');

if (channels === "Adultos") {
    if (confirm("¿Es mayor de edad? El uso de este sitio es bajo su responsabilidad. No nos hacemos cargo por el mal uso del contenido.")) {
        dlhd_so();
    } else {
            window.location.href = "/";
    }
}

const ListaPermitida = listasPermitidas[channels];

if (ListaPermitida) {
    MisCanales.forEach((canal, nombre, map) => {
        if (!ListaPermitida.has(nombre)) {
            map.delete(nombre);
        }
    });
} else {
    if (channels) {
        alert("Parametro Channels no valido");
        url.searchParams.delete("channels");
        window.history.replaceState({}, document.title, url.toString());
    }
}

// ============================================================
// VARIABLES GLOBALES PARA FAVORITOS
// ============================================================
let canalesFavoritos = JSON.parse(localStorage.getItem('canalesFavoritos') || '[]');
let canalesEliminados = JSON.parse(localStorage.getItem('canalesEliminados') || '[]');

// Filtrar canales eliminados del Map principal
canalesEliminados.forEach(nombreCanal => {
    if (MisCanales.has(nombreCanal)) {
        MisCanales.delete(nombreCanal);
    }
});

function mostrarCargando() {
    let mensaje = document.getElementById('id_mensaje');
    mensaje.classList.remove("d-none");
    mensaje.className = 'opacity-100 text-light';
    setTimeout(function () {
        mensaje.className = 'opacity-100 text-light';
    }, 1500);
    setTimeout(function () {
        mensaje.className = 'opacity-75 text-light';
    }, 1800);
    setTimeout(function () {
        mensaje.className = 'opacity-50 text-light';
    }, 2200);
    setTimeout(function () {
        mensaje.className = 'opacity-25 text-light';
    }, 2500);
    setTimeout(function () {
        mensaje.className = 'opacity-0 d-none text-light';
    }, 3000);
}

let canalesPorLote = MisCanales.size;
let indiceActual = 0;

const zonaBotones = document.getElementById('id_CanalesDisponibles');
let paises = document.getElementById("id_optPais");
let paisesAgregados = new Set();
let paisSeleccionado = "Todos los canales";
let listaCreada = false;
let canalesArray = Array.from(MisCanales.entries());

function CrearBoton(canal, pais) {
    return `<button type="button" title="${canal}" data-canal="${canal}" class="canalButton card btn border m-2 p-2 bg-dark bg-gradient col-5 col-md-3 col-lg-2 class_CanalBoton encontrado" onclick="Cambiar_Canal(this)">
    <section class="card-body text-light col-12 text-center">
        <h4 class="card-title ">${canal}</h4>
    </section>
    <figure class="h-100 d-flex align-items-center">
        <img class="card-img-top w-100" src="/img/${canal}.webp" loading="lazy" alt="${canal} en VIVO" onerror="this.src='/img/Iconos/Varios.png'">
    </figure>
    <h6 class="card-title text-light opacity-25">${pais}</h6>
    </button>`;
}

function CrearCanalesLote() {
    const lote = canalesArray.slice(indiceActual, indiceActual + canalesPorLote);
    let htmlBotones = "";
    lote.forEach(([canal, datos]) => {
        if (!paisesAgregados.has(datos.pais)) paisesAgregados.add(datos.pais);
        if (paisSeleccionado === datos.pais || paisSeleccionado === "Todos los canales") {
            if (datos.enlaces.length) {
                htmlBotones += CrearBoton(canal, datos.pais);

                // let canalinfo = MisCanales.get(canal);
                // if (canalinfo.guide) {
                //     console.log(
                //         `"${canalinfo.guide}":"https://canalesonline.netlify.app/?stream=${encodeURIComponent(canal)}",`
                //     );
                // }
            }
        }
    });
    zonaBotones.innerHTML = htmlBotones;

    if (!listaCreada) {
        listaCreada = true;
        Array.from(paisesAgregados)
            .sort((a, b) => a.localeCompare(b))
            .forEach(pais => {
                paises.innerHTML += `<option class="dropdown-item" ${pais === paisSeleccionado ? "selected" : ""} value="${pais}">${pais}</option>`;
            });
        paisesAgregados.add("Todos los canales");
        paises.innerHTML += `<option class="dropdown-item" ${paisSeleccionado === "Todos los canales" ? "selected" : ""} value="Todos los canales">Todos los canales</option>`;
    }

    indiceActual += lote.length;
    if (indiceActual >= canalesArray.length) {
        window.removeEventListener('scroll', detectarScroll);
    }
    mostrarScroll();
}

function detectarScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) { }
}

let tele = document.getElementById("id_PantallaTV");
let canal = "";
let opt = 1;
const stream = url.searchParams.get('stream');
const server = url.searchParams.get('server');

setTimeout(function () {
    if (url.searchParams.has("acceso")) {
        url.searchParams.delete("acceso");
        window.history.replaceState({}, document.title, url.toString());
    }
}, 1000);

// Función para cargar canal por parámetro (ejecutar después de que se carguen los canales)
function cargarCanalPorParametro() {
    if (stream !== null && stream.trim() !== '') {
        if (MisCanales.has(stream)) {
            canal = stream;

            if (server !== null && server.trim() !== '') {
                opt = parseInt(server);
            } else {
                opt = 1; // Por defecto servidor 1
            }

            // Esperar a que se carguen los botones
            setTimeout(() => {
                Cambio_Canal();
            }, 500);
        } else {
            alert("El canal " + stream + " no existe o se dio de baja...");
        window.location.href = "/";
        }
    }
}

function IniciarCargaCanales() {
    canalesPorLote = MisCanales.size;
    canalesArray = Array.from(MisCanales.entries());
    zonaBotones.innerHTML = "";
    indiceActual = 0;
    CrearCanalesLote();
    mostrarCargando();
    window.addEventListener('scroll', detectarScroll);

    // Cargar canal por parámetro después de crear los botones
    cargarCanalPorParametro();
}

IniciarCargaCanales();

function mostrarScroll() {
    let animado = document.querySelectorAll(".class_CanalBoton");
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
        if (animado[i].offsetTop - 800 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarHaciaArriba");
        } else {
            animado[i].style.opacity = 0;
            animado[i].classList.remove("mostrarHaciaArriba");
        }
    }
}



// const stream = url.searchParams.get('stream');
// const server = url.searchParams.get('server');

setTimeout(function () {
    if (url.searchParams.has("acceso")) {
        url.searchParams.delete("acceso");
        window.history.replaceState({}, document.title, url.toString());
    }
}, 1000);

// if (stream !== null && stream.trim() !== '') {
//     alert("Entroo");
//     if (MisCanales.has(stream)) canal = stream;
//     else { alert("El canal " + stream + " no existe o se dio de baja..."); window.location.href = "index.html"; }

//     if (server !== null && server.trim() !== '') {
//         opt = server;
//         document.getElementById("id_optCanales").value = "Servidor " + opt;
//     }
//     FiltrarPais();
//     Cambio_Canal();
// }

function actualizoLink() {
    url.searchParams.set('stream', canal);
    url.searchParams.set('server', opt);
    window.history.pushState({}, '', url);
}

function CambiarOpt() {
    opt = parseInt(document.getElementById("id_optCanales").value);
    Cambio_Canal();
}

function extractName(url) {
    if (url.includes("streamtpglobal ")) return "streamtpglobal ";
    if (url.includes("la12hd")) return "la12hd";
    if (url.includes("youtube")) return "youtube";
    if (url.includes("embed.sdfgnksbounce")) return "embed";
    const htmlMatch = url.match(/^(.*?)\.html/);
    if (htmlMatch) return htmlMatch[1];
    return "No se encontró un nombre válido en el enlace.";
}

function getCanal() {
    let zonaEnlaces = document.getElementById("id_optCanales");
    zonaEnlaces.innerHTML = "";

    const canalData = MisCanales.get(canal);
    if (!canalData) {
        alert("Canal no encontrado");
        return null;
    }

    const { enlaces } = canalData;
    if (!enlaces.length) {
        alert("No tiene servidores disponibles");
        return null;
    }

    if (opt > enlaces.length) {
        opt = 1;
        actualizoLink();
    }

    enlaces.forEach((enlace, index) => {
        const selected = index === opt - 1 ? "selected" : "";
        let servidor = enlacesServidor[enlace] || "Sin nombre";
        if (servidor == "Sin nombre")
            if (enlace.includes("sensa_ext.html?id=") ||
                enlace.includes("extension.html?get=") ||
                enlace.includes("rcn_ext.html?id=") ||
                enlace.includes("el4live1_ext.html?get=") ||
                enlace.includes("gigared_ext.html?id=")) servidor = "Extensión";
        if (servidor == "Sin nombre") {
            if (enlace.includes("edge.html?get=") ||
                enlace.includes("m3u8.html?stream=") ||
                enlace.includes("104m3u8.netlify.app/?id=") ||
                enlace.includes("proxym3u8/?id=") ||
                enlace.includes("172m3u8.netlify.app/?id=") ||
                enlace.includes("199m3u8.netlify.app/?id=") ||
                enlace.includes("telefeapi.html")) servidor = "Transmitir";
        }
        if (servidor == "Sin nombre") {
            servidor = "Servidor " + (index + 1);
        }
        zonaEnlaces.innerHTML += `<option class="dropdown-item" ${selected} value="${index + 1}">${servidor}</option>`;
    });

    return enlaces[opt - 1];
}

// ============================================================
// SISTEMA DE GUÍA DE PROGRAMACIÓN EN VIVO
// ============================================================

let timeoutInfoEnVivo = null;

/**
 * Obtiene la información del programa en vivo desde telered.com.ar
 * @param {string} canalKey - Nombre del canal (ej: "LN+")
 * @returns {Promise<Object|null>} - Datos del programa en vivo o null
 */
async function obtenerProgramaEnVivo(canalKey) {
    const canalData = MisCanales.get(canalKey);

    // Verificar si el canal tiene el campo 'guide'
    if (!canalData || !canalData.guide) {
        console.log(`ℹ️ Canal "${canalKey}" no tiene guía de programación configurada`);
        return null;
    }

    try {
        // Agregar timestamp para evitar caché
        const timestamp = new Date().getTime();
        const targetUrl = `https://www.telered.com.ar/buscador-grilla?t=${timestamp}`;

        // Proxy para evitar problemas de CORS
        const proxyUrl = 'https://myproxy.senorgatorade123.workers.dev/?url=';

        console.log(`🔍 Buscando programación para: ${canalKey} (guide: ${canalData.guide})`);

        const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), {
            method: 'GET',
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('No se pudo conectar al servidor de guía');
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const channelBlocks = doc.querySelectorAll('li.chrow');
        let foundData = null;

        // Usar el campo 'guide' para buscar en la página
        const guideNameToSearch = canalData.guide.toLowerCase();

        channelBlocks.forEach(block => {
            const channelNameEl = block.querySelector('.chname');
            if (!channelNameEl) return;

            const channelNameText = channelNameEl.textContent.trim();

            // Buscar coincidencia con el campo 'guide'
            if (channelNameText.toLowerCase().includes(guideNameToSearch)) {
                const programElements = block.querySelectorAll('li.program.bloque');
                const now = new Date();
                const currentMinutes = now.getHours() * 60 + now.getMinutes();

                let programaEnVivo = null;
                let programaSiguiente = null;
                let indexEnVivo = -1;

                // Buscar el programa que está al aire ahora
                programElements.forEach((progEl, index) => {
                    const titleEl = progEl.querySelector('.programtitle');
                    const timeEl = progEl.querySelector('.programtime');

                    if (titleEl && timeEl) {
                        const title = titleEl.textContent.trim();
                        const time = timeEl.textContent.trim();

                        const startMatch = time.match(/(\d+):(\d+)/);
                        if (!startMatch) return;

                        const startMinutes = parseInt(startMatch[1]) * 60 + parseInt(startMatch[2]);

                        let endMinutes = 24 * 60;
                        const nextProgEl = programElements[index + 1];
                        let endTimeStr = '24:00';

                        if (nextProgEl) {
                            const nextTimeEl = nextProgEl.querySelector('.programtime');
                            if (nextTimeEl) {
                                endTimeStr = nextTimeEl.textContent.trim();
                                const endMatch = endTimeStr.match(/(\d+):(\d+)/);
                                if (endMatch) {
                                    endMinutes = parseInt(endMatch[1]) * 60 + parseInt(endMatch[2]);
                                }
                            }
                        }

                        // Verificar si el programa está en vivo
                        let isLive = false;
                        if (endMinutes > startMinutes) {
                            isLive = currentMinutes >= startMinutes && currentMinutes < endMinutes;
                        } else {
                            // Caso donde el programa cruza la medianoche
                            isLive = currentMinutes >= startMinutes || currentMinutes < endMinutes;
                        }

                        if (isLive && !programaEnVivo) {
                            programaEnVivo = {
                                titulo: title,
                                horaInicio: time,
                                horaFin: endTimeStr
                            };
                            indexEnVivo = index;
                        }
                    }
                });

                // Obtener el programa siguiente
                if (indexEnVivo !== -1 && programElements[indexEnVivo + 1]) {
                    const nextProgEl = programElements[indexEnVivo + 1];
                    const nextTitleEl = nextProgEl.querySelector('.programtitle');
                    const nextTimeEl = nextProgEl.querySelector('.programtime');

                    if (nextTitleEl && nextTimeEl) {
                        const nextTitle = nextTitleEl.textContent.trim();
                        const nextTime = nextTimeEl.textContent.trim();

                        let nextEndTime = '24:00';
                        if (programElements[indexEnVivo + 2]) {
                            const nextNextTimeEl = programElements[indexEnVivo + 2].querySelector('.programtime');
                            if (nextNextTimeEl) {
                                nextEndTime = nextNextTimeEl.textContent.trim();
                            }
                        }

                        programaSiguiente = {
                            titulo: nextTitle,
                            horaInicio: nextTime,
                            horaFin: nextEndTime
                        };
                    }
                }

                if (programaEnVivo) {
                    foundData = {
                        canal: channelNameText,
                        canalKey: canalKey,
                        guideName: canalData.guide,
                        enVivo: programaEnVivo,
                        siguiente: programaSiguiente
                    };
                }
            }
        });

        return foundData;

    } catch (error) {
        console.error('❌ Error obteniendo programa en vivo:', error);
        return null;
    }
}

/**
 * Muestra la información de programación en vivo en el DOM
 * @param {string} canalKey - Nombre del canal
 */
function mostrarInfoEnVivo(canalKey) {
    const infoDiv = document.getElementById('infoEnVivo');
    if (!infoDiv) {
        console.error('❌ No se encontró el elemento #infoEnVivo en el DOM');
        return;
    }

    const canalData = MisCanales.get(canalKey);

    // Limpiar timeout anterior
    if (timeoutInfoEnVivo) clearTimeout(timeoutInfoEnVivo);

    // Si no tiene guía configurada, ocultar el widget
    if (!canalData || !canalData.guide) {
        infoDiv.classList.remove('visible');
        return;
    }

    // Mostrar estado de carga
    infoDiv.innerHTML = `
        <div class="info-canal">
            <span class="info-canal-nombre">${canalKey}</span>
        </div>
        <div class="info-cargando">
            <i class="bi bi-hourglass-split"></i> Cargando información...
        </div>
    `;
    infoDiv.classList.add('visible');

    // Obtener la programación
    obtenerProgramaEnVivo(canalKey).then(data => {
        if (data && data.enVivo) {
            let html = `
                <div class="info-canal">
                    <span class="info-canal-nombre">📺 ${canalKey}</span>
                    <span class="info-badge-live">● EN VIVO</span>
                </div>
                <div class="info-programa-titulo">${data.enVivo.titulo}</div>
                <div class="info-programa-horario">${data.enVivo.horaInicio} - ${data.enVivo.horaFin}</div>
            `;

            // Agregar programa siguiente si existe
            if (data.siguiente) {
                html += `
                    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.2); text-align: left;">
                        <div style="font-size: 10px; color: #aaa; margin-bottom: 4px;">DESPUÉS:</div>
                        <div style="font-size: 12px; font-weight: bold; color: white; margin-bottom: 2px;">${data.siguiente.titulo}</div>
                        <div style="font-size: 10px; color: #aaa;">${data.siguiente.horaInicio} - ${data.siguiente.horaFin}</div>
                    </div>
                `;
            }

            infoDiv.innerHTML = html;

            // Auto-ocultar después de 10 segundos
            timeoutInfoEnVivo = setTimeout(() => {
                infoDiv.classList.remove('visible');
            }, 10000);
        } else {
            // No hay información - ocultar el widget directamente
            console.log(`ℹ️ No hay información de programación para ${canalKey}`);
            infoDiv.classList.remove('visible');
        }
    }).catch(error => {
        console.error('❌ Error obteniendo programa en vivo:', error);
        // En caso de error, también ocultar el widget
        infoDiv.classList.remove('visible');
    });
}

/**
 * Oculta el widget de información en vivo
 */
function ocultarInfoEnVivo() {
    const infoDiv = document.getElementById('infoEnVivo');
    if (infoDiv) {
        infoDiv.classList.remove('visible');
    }
    if (timeoutInfoEnVivo) {
        clearTimeout(timeoutInfoEnVivo);
    }
}


function Cambio_Canal() {
    actualizoLink();
    document.getElementById("id_sapping-canal").innerHTML = canal;
    document.getElementById("id_sapping-canal").style.display = "flex";
    document.getElementById("id_optCanales").style.display = "flex";
    document.getElementById("id_BuscardorCanales").value = "";
    var canalUrl = getCanal();
    if (canalUrl) {
        canalUrl = canalUrl.replace(/\.html(?=[\?&]|$)/, '');
        sessionStorage.setItem("cvatt_channel", canalUrl);
        tele.src = canalUrl;
    }
    tele.style.display = "block";

    // ✨ AGREGAR ESTA LÍNEA AQUÍ:
    mostrarInfoEnVivo(canal);

    if (tele && window.innerWidth >= 768) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (tele && window.innerWidth < 768) {
        if (canal === "KICK" || 
            canal === "Agenda Deportiva" ||
            canal === "LPF PLAY" ||
            canal === "TODAS LAS FLORES" ||
            canal === "BAHAR"
        ) {
            tele.style.height = "50vh"
        } else {
            tele.style.height = "255px"
        }
    }
}

function Cambiar_Canal(boton_canal) {
    canal = boton_canal.title;
    Cambio_Canal();
}

// Variable para saber si estamos en modo favoritos
let modoFavoritosActivo = false;

function Buscar_Canal() {
    let value = document.getElementById("id_BuscardorCanales").value.toLowerCase();
    let botonesCanales = document.querySelectorAll(".class_CanalBoton");

    for (let i = 0; i < botonesCanales.length; i++) {
        let botones = botonesCanales[i];
        let buscar = botones.title.toLowerCase();
        let nombreCanal = botones.getAttribute('data-canal');

        // Si estamos en modo favoritos, solo buscar entre favoritos
        if (modoFavoritosActivo) {
            let esFavorito = canalesFavoritosSet.has(nombreCanal);

            if (esFavorito && buscar.indexOf(value) > -1) {
                botones.style.display = "flex";
                botones.style.opacity = 1;
                botones.classList.add("encontrado");
            } else {
                botones.style.display = "none";
                botones.style.opacity = 0;
                botones.classList.remove("encontrado");
            }
        } else {
            // Búsqueda normal en todos los canales
            if (buscar.indexOf(value) > -1) {
                botones.style.display = "flex";
                botones.style.opacity = 1;
                botones.classList.add("encontrado");
            } else {
                botones.style.display = "none";
                botones.style.opacity = 0;
                botones.classList.remove("encontrado");
            }
        }

        if (window.innerWidth >= 1000) {
            const element = document.getElementById("id_CanalesDisponibles");
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 25,
                    behavior: 'smooth'
                });
            }
        }
    }
}

function obtenerPosicion() {
    let botonesCanales = Array.from(document.querySelectorAll(".encontrado"));
    return botonesCanales.findIndex(boton => boton.title.toLowerCase() === canal.toLowerCase());
}

function hacerSapping(canalSeleccionado) {
    let botonesCanales = document.querySelectorAll(".encontrado");
    canal = botonesCanales[canalSeleccionado].title;
    botonesCanales[canalSeleccionado].focus();
    Cambio_Canal();
}

function sapping_izquierda() {
    let botonesCanales = document.querySelectorAll(".encontrado");
    let pos = obtenerPosicion();
    pos = (pos <= 0) ? botonesCanales.length - 1 : pos - 1;
    hacerSapping(pos);
}

function sapping_derecha() {
    let botonesCanales = document.querySelectorAll(".encontrado");
    let pos = obtenerPosicion();
    pos = (pos >= botonesCanales.length - 1) ? 0 : pos + 1;
    hacerSapping(pos);
}

function sapping_reset() {
    if (canal !== "") Cambio_Canal();
}

let palabrasClaves = [];
palabrasClaves.push(".HELLOLADIES");
palabrasClaves.push(".SIZE");
palabrasClaves.push(".URL");

let Clave = "";
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ChannelUp': sapping_derecha(); event.preventDefault(); break;
        case 'ChannelDown': sapping_izquierda(); event.preventDefault(); break;
        case 'F12': event.preventDefault(); break;
    }

    if (event.altKey && event.key === 'ArrowLeft') sapping_izquierda();
    if (event.altKey && event.key === 'ArrowRight') sapping_derecha();
    if (event.altKey && event.key === 'r') sapping_reset();
    if (event.altKey && event.key === 'R') sapping_reset();
    if (event.altKey && event.key === 'f') { document.getElementById("id_BuscardorCanales").focus(); event.preventDefault(); }
    if (event.altKey && event.key === 'F') { document.getElementById("id_BuscardorCanales").focus(); event.preventDefault(); }
    if (event.ctrlKey && event.key === 'q') { document.getElementById("id_optCanales").focus(); event.preventDefault(); }
    if (event.ctrlKey && event.key === 'Q') { document.getElementById("id_optCanales").focus(); event.preventDefault(); }

    if (event.ctrlKey && event.shiftKey && event.key === 'i') event.preventDefault();
    if (event.ctrlKey && event.shiftKey && event.key === 'I') event.preventDefault();
    if (event.ctrlKey && event.shiftKey && event.key === 'c') event.preventDefault();
    if (event.ctrlKey && event.shiftKey && event.key === 'C') event.preventDefault();
    if (event.ctrlKey && event.shiftKey && event.key === 'j') event.preventDefault();
    if (event.ctrlKey && event.shiftKey && event.key === 'J') event.preventDefault();
    if (event.ctrlKey && event.key === 'u') event.preventDefault();
    if (event.ctrlKey && event.key === 'U') event.preventDefault();

    let esIgual = true;
    Clave += (event.key).toUpperCase();

    for (let i = 0; i < Clave.length; i++)
        esIgual = Clave[i] === palabrasClaves[0][i] ||
            Clave[i] === palabrasClaves[1][i] ||
            Clave[i] === palabrasClaves[2][i];

    if (!esIgual) Clave = "";

    if (Clave == palabrasClaves[0]) { alert("Canales para adultos activados, se agregaron al final de la pagina, reinicie la pagina para quitarlos."); dlhd_so(); Clave = ""; }
    if (Clave == palabrasClaves[1]) { alert("Cantidad de canales disponibles: " + MisCanales.size); Clave = ""; }
    if (Clave == palabrasClaves[2]) {
        alert("Canal: " + canal + "\nServidor: " + opt + "\nURL: " + tele.src);
        navigator.clipboard.writeText(tele.src)
            .then(() => {
                console.log("URL copiada al portapapeles.");
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
        Clave = "";
    }
});

const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) backToTopButton.style.display = 'flex';
    else backToTopButton.style.display = 'none';
});

let isSticky = false;
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("id_PantallaTV");
    const buscador = document.getElementById("id_barra_buscador");
    isSticky = false;

    window.addEventListener("scroll", function () {
        if (window.innerWidth < 1000) return;
        const triggerHeight = 0;
        if (window.scrollY > triggerHeight && !isSticky) {
            iframe.classList.add("sticky");
            isSticky = true;
            scrollToElementWithPadding('id_BuscardorCanales');
        } else if (window.scrollY <= triggerHeight && isSticky) {
            iframe.classList.remove("sticky");
            isSticky = false;
            iframe.style.left = 0;
            iframe.style.top = 0;
        }
        if (isSticky) buscador.classList.add("search-bar");
        else buscador.classList.remove("search-bar");
    });

    function scrollToElementWithPadding(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const iframe = document.getElementById("id_PantallaTV");
let isDragging = false;
let offsetX = 0, offsetY = 0;

iframe.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - iframe.offsetLeft;
    offsetY = e.clientY - iframe.offsetTop;
    iframe.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        iframe.style.setProperty("left", `${newX}px`, "important");
        iframe.style.setProperty("top", `${newY}px`, "important");
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    iframe.style.cursor = "grab";
});

const TOTAL_SNOWFLAKES = 20;
const snowContainer = document.getElementById("snowflakes-container");
const SNOWFLAKE_SYMBOLS = ["*", "✻", "❅", "✼"];

function createSnowflake() {
    const snowflake = document.createElement("span");
    snowflake.setAttribute("class", "snowflake");
    snowflake.innerText = SNOWFLAKE_SYMBOLS[Math.floor(Math.random() * SNOWFLAKE_SYMBOLS.length)];
    const size = Math.random() * 10 + 10;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    snowflake.style.color = "white";
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
    snowflake.style.animationDelay = Math.random() * 5 + "s";
    snowContainer.appendChild(snowflake);
    snowflake.addEventListener("animationend", () => {
        snowflake.remove();
        createSnowflake();
    });
}

function FiltrarPais() {
    paisSeleccionado = document.getElementById("id_optPais").value;
    canalesArray = Array.from(MisCanales.entries());
    lote = canalesArray.slice(0, MisCanales.size);
    zonaBotones.innerHTML = "";
    let htmlBotones = "";
    if (paisSeleccionado === "todos") mostrarCargando();
    lote.forEach(([canal, datos]) => {
        if (paisSeleccionado === datos.pais || paisSeleccionado === "Todos los canales") {
            if (datos.enlaces.length) {
                htmlBotones += CrearBoton(canal, datos.pais);
            }
        }
    });
    zonaBotones.innerHTML = htmlBotones;
    mostrarScroll();

    // Desactivar modo favoritos al filtrar por país
    modoFavoritosActivo = false;
    document.getElementById("id_BuscardorCanales").placeholder = "🔍 Buscar canales...";
    removerBannerFavoritos();
}

function showNotification(type, message) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    container.style.margin = "0 auto";
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = message;
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.innerText = 'Cerrar';
    let isClosed = false;

    closeButton.onclick = () => {
        if (!isClosed) {
            isClosed = true;
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }
    };

    notification.appendChild(messageElement);
    notification.appendChild(closeButton);
    container.appendChild(notification);

    const autoCloseTimeout = setTimeout(() => {
        if (!isClosed) {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }
    }, 60000);

    closeButton.onclick = () => {
        if (!isClosed) {
            isClosed = true;
            clearTimeout(autoCloseTimeout);
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Bienvenida sin restricciones
setTimeout(() => {
    const mensajeBienvenida = `
        <section class="container text-center">
            <h5 class="mb-3" style="font-size: 16px;">🚀 ¡Bienvenido a <strong>Canales Online</strong>! 🚀</h5>
            <p class="mt-3" style="font-size: 15px; color: #ccc;">
                🔔 Para una mejor experiencia sin interrupciones, usá un navegador que permita tener extensiones.
            </p>
            <p class="mt-4" style="font-size: 18px;">
                💖 <strong>¡Gracias por ser parte de esta comunidad!</strong> 💖
            </p>
        </section>
    `;
    showNotification('gray', mensajeBienvenida);
}, 3500);

const categorias = [
    { nombre: 'Todos', descripcion: 'Todos los canales', icono: 'Todos.png', alt: 'Todos los canales' },
    { nombre: 'Argentina', descripcion: 'Canales vistos en Argentina', icono: 'Argentina.png', alt: 'Argentina' },
    { nombre: 'Grilla', descripcion: 'Canales disponibles en la grilla de la Guía de Programación', icono: 'Grilla.png', alt: 'Grilla' },
    { nombre: 'Noticias', descripcion: 'Canales de Noticias', icono: 'Noticias.png', alt: 'Noticias' },
    { nombre: 'Peliculas', descripcion: 'Canales de Peliculas', icono: 'Peliculas.png', alt: 'Películas' },
    { nombre: 'Series', descripcion: 'Canales de Series', icono: 'Series.png', alt: 'Series' },
    { nombre: 'Documentales', descripcion: 'Canales de Documentales', icono: 'Documentales.png', alt: 'Documentales' },
    { nombre: 'Cultura', descripcion: 'Canales de Cultura', icono: 'Cultura.png', alt: 'Cultura' },
    { nombre: 'Deportes', descripcion: 'Canales de Deportes', icono: 'Deportes.png', alt: 'Deportes' },
    { nombre: 'Novelas', descripcion: 'Canales de Novelas', icono: 'Novelas.png', alt: 'Novelas' },
    { nombre: 'Música', descripcion: 'Canales de Música', icono: 'Música.png', alt: 'Música' },
    { nombre: 'Caricaturas', descripcion: 'Canales de Caricaturas', icono: 'Caricaturas.png', alt: 'Caricaturas' },
    { nombre: 'Adultos', descripcion: 'Canales de Adultos', icono: 'Playboy.png', alt: 'Adultos', claseExtra: 'mx-auto' },
    { nombre: 'Varios', descripcion: 'Canales Varios', icono: 'Varios.png', alt: 'Varios', claseExtra: 'mx-auto' },
    { nombre: 'Quita 1 y 2', descripcion: 'Quita los servidores 1 y 2 caidos', icono: 'serverOff.webp', alt: 'Quita los servidores 1 y 2 caidos', claseExtra: 'mx-auto' },
];

const contenedor = document.getElementById('botonesCategorias');

// Agregar botones de favoritos y configuración al principio del modal
const botonesEspeciales = `
    <section class="col-12 mb-3">
        <section class="row g-2">
            <section class="col-6">
                <button class="btn btn-warning w-100 d-flex flex-column align-items-center py-3" id="verFavoritosModal">
                    <i class="bi bi-star-fill fs-3 mb-2"></i>
                    <span>Mis Favoritos</span>
                    <span class="badge bg-danger mt-1" id="contadorFavoritosModal" style="display: none;">0</span>
                </button>
            </section>
            <section class="col-6">
                <button class="btn btn-info w-100 d-flex flex-column align-items-center py-3" id="configModalBtn">
                    <i class="bi bi-gear-fill fs-3 mb-2"></i>
                    <span>Configuración</span>
                </button>
            </section>
        </section>
    </section>
    <hr class="border-secondary my-3">
`;

contenedor.innerHTML = botonesEspeciales;

// Agregar categorías normales
categorias.forEach(cat => {
    const col = document.createElement('section');
    col.className = `col-4 ${cat.claseExtra || ''} `;
    col.innerHTML = `
        <button id="Categ_${cat.nombre}" class="btn btn-outline-light w-100 d-flex flex-column align-items-center" onclick="redirigir('${cat.nombre}')" title="${cat.descripcion}">
            <img src="img/Iconos/${cat.icono}" alt="${cat.alt}">
            <span>${cat.nombre}</span>
        </button>
    `;
    contenedor.appendChild(col);
});

document.getElementById("Categ_" + channels)?.classList.add("bg-light", "text-dark");

// Event listeners para los botones en el modal
setTimeout(() => {
    // Botón de favoritos
    const btnFavoritosModal = document.getElementById('verFavoritosModal');
    if (btnFavoritosModal) {
        btnFavoritosModal.addEventListener('click', function () {
            // Cerrar el modal de categorías
            const modalElement = document.getElementById('canalesModal');
            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement);
                if (modal) modal.hide();
            }
            // Mostrar favoritos
            mostrarSoloFavoritos();
        });
    }

    // Botón de configuración
    const btnConfigModal = document.getElementById('configModalBtn');
    if (btnConfigModal) {
        btnConfigModal.addEventListener('click', function () {
            // Cerrar el modal de categorías
            const modalCategoriasElement = document.getElementById('canalesModal');
            if (modalCategoriasElement) {
                const modalCategorias = bootstrap.Modal.getInstance(modalCategoriasElement);
                if (modalCategorias) {
                    modalCategorias.hide();
                }
            }

            // Esperar a que se cierre el modal anterior antes de abrir el nuevo
            setTimeout(() => {
                const modalConfigElement = document.getElementById('configModal');
                if (modalConfigElement) {
                    const modalConfig = new bootstrap.Modal(modalConfigElement);
                    modalConfig.show();
                }
            }, 300);
        });
    }
}, 500);

function redirigir(tipo) {
    // Desactivar modo favoritos al cambiar de categoría
    modoFavoritosActivo = false;
    document.getElementById("id_BuscardorCanales").placeholder = "🔍 Buscar canales...";

    if (tipo === "Todos") window.location.href = `/`;
    else if (tipo === "Quita 1 y 2") window.location.href = `/?server1y2=off`;
    else window.location.href = `/?channels=${tipo}`;
}

const donadores = [
    { nombre: "Avila, Victor Manuel", monto: 11000 },
    { nombre: "Gouiric, Alfonso Eduardo", monto: 7500 },
    { nombre: "Mamani Carrasco, Florencia Daiana", monto: 6500 },
    { nombre: "Paz, Lucio", monto: 5000 },
    { nombre: "Deris, Jonatan Emanuel", monto: 4000 },
    { nombre: "Llarull Zagurak, Santiago Agustín", monto: 2500 },
    { nombre: "Ramirez, Benjamin Lucas", monto: 2500 },
    { nombre: "De Los Santos, Patricia", monto: 2500 },
    { nombre: "Córdova, Sergio", monto: 2500 },
    { nombre: "Gerez, Lucas", monto: 2500 },
];

const cuerpoTabla = document.getElementById("donadores-body");
donadores.forEach((donador, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${donador.nombre}</td>
      <td>${donador.monto}</td>
    `;
    cuerpoTabla.appendChild(fila);
});

// ============================================================
// SISTEMA DE FAVORITOS Y MENÚ CONTEXTUAL
// ============================================================

let canalSeleccionadoContexto = "";

function inicializarMenuContextual() {
    const submenu = document.getElementById("submenu");
    if (!submenu) {
        console.error("❌ No se encontró el elemento #submenu");
        return;
    }

    submenu.innerHTML = `
    <li id="abrirOtraVentana" style="text-align: left;">
        <i class="bi bi-box-arrow-up-right"></i> Abrir en nueva ventana
    </li>
    <li id="agregarFavorito" style="text-align: left;">
        <i class="bi bi-star"></i> Agregar a favoritos
    </li>
    <li id="quitarFavorito" style="display: none; text-align: left;">
        <i class="bi bi-star-fill"></i> Quitar de favoritos
    </li>
    <li id="eliminarCanal" style="text-align: left;">
        <i class="bi bi-trash"></i> Eliminar canal
    </li>
`;


    // ⚠️ REMOVER el bloqueo global del menú contextual
    document.oncontextmenu = null;

    document.addEventListener('contextmenu', function (event) {
        const button = event.target.closest('.canalButton');

        if (button) {
            event.preventDefault();
            event.stopPropagation();

            canalSeleccionadoContexto = button.getAttribute("data-canal");
            console.log("🎯 Canal seleccionado:", canalSeleccionadoContexto);

            actualizarMenuContextual(canalSeleccionadoContexto);

            submenu.style.left = `${event.pageX}px`;
            submenu.style.top = `${event.pageY}px`;
            submenu.style.display = "block";
            submenu.style.zIndex = "99999";
        }
    }, true);

    document.getElementById("abrirOtraVentana")?.addEventListener("click", function () {
        if (canalSeleccionadoContexto) {
            var url = window.location.origin + "/?stream=" + encodeURIComponent(canalSeleccionadoContexto);
            window.open(url, "_blank");
        }
        submenu.style.display = "none";
    });

    document.getElementById("agregarFavorito")?.addEventListener("click", function () {
        if (canalSeleccionadoContexto && !canalesFavoritosSet.has(canalSeleccionadoContexto)) {
            canalesFavoritos.push(canalSeleccionadoContexto);
            canalesFavoritosSet.add(canalSeleccionadoContexto);
            localStorage.setItem('canalesFavoritos', JSON.stringify(canalesFavoritos));
            mostrarNotificacionFavorito(canalSeleccionadoContexto, 'agregado');
            actualizarVisualizacionFavoritos(canalSeleccionadoContexto); // Solo actualizar este canal
            actualizarContadorFavoritos();
        }
        submenu.style.display = "none";
    });

    document.getElementById("quitarFavorito")?.addEventListener("click", function () {
        if (canalSeleccionadoContexto) {
            canalesFavoritos = canalesFavoritos.filter(c => c !== canalSeleccionadoContexto);
            canalesFavoritosSet.delete(canalSeleccionadoContexto);
            localStorage.setItem('canalesFavoritos', JSON.stringify(canalesFavoritos));
            mostrarNotificacionFavorito(canalSeleccionadoContexto, 'quitado');
            actualizarVisualizacionFavoritos(canalSeleccionadoContexto); // Solo actualizar este canal
            actualizarContadorFavoritos();
        }
        submenu.style.display = "none";
    });

    document.getElementById("eliminarCanal")?.addEventListener("click", function () {
        if (canalSeleccionadoContexto) {
            if (confirm(`¿Estás seguro de que deseas eliminar "${canalSeleccionadoContexto}"?\n\nEsta acción se puede revertir desde la configuración.`)) {
                eliminarCanal(canalSeleccionadoContexto);
            }
        }
        submenu.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        if (!submenu.contains(event.target)) {
            submenu.style.display = "none";
        }
    });

    console.log("✅ Menú contextual inicializado correctamente");
}

function actualizarMenuContextual(nombreCanal) {
    const esFavorito = canalesFavoritosSet.has(nombreCanal);
    const agregarBtn = document.getElementById("agregarFavorito");
    const quitarBtn = document.getElementById("quitarFavorito");

    if (agregarBtn) agregarBtn.style.display = esFavorito ? "none" : "block";
    if (quitarBtn) quitarBtn.style.display = esFavorito ? "block" : "none";
}

function mostrarNotificacionFavorito(nombreCanal, accion) {
    const mensaje = accion === 'agregado'
        ? `⭐ "${nombreCanal}" agregado a favoritos`
        : `☆ "${nombreCanal}" quitado de favoritos`;

    showNotification('yellow', `<p>${mensaje}</p>`);
}

// Optimización: Usar Set para búsquedas más rápidas
let canalesFavoritosSet = new Set(canalesFavoritos);

function actualizarVisualizacionFavoritos(soloCanal = null) {
    // Si se especifica un canal, solo actualizar ese
    if (soloCanal) {
        const button = document.querySelector(`[data-canal="${soloCanal}"]`);
        if (button) {
            actualizarBadgeFavorito(button);
        }
        return;
    }

    // Si no, actualizar todos (pero de forma eficiente)
    const botones = document.querySelectorAll('.canalButton');
    botones.forEach(button => {
        actualizarBadgeFavorito(button);
    });
}

function actualizarBadgeFavorito(button) {
    const nombreCanal = button.getAttribute('data-canal');
    const esFavorito = canalesFavoritosSet.has(nombreCanal);

    const badgeExistente = button.querySelector('.badge-favorito');

    if (esFavorito && !badgeExistente) {
        // Agregar badge solo si es favorito y no existe
        const badge = document.createElement('span');
        badge.className = 'badge-favorito';
        badge.innerHTML = '<i class="bi bi-star-fill"></i>';
        const cardBody = button.querySelector('.card-body');
        if (cardBody) {
            cardBody.style.position = 'relative';
            cardBody.appendChild(badge);
        }
    } else if (!esFavorito && badgeExistente) {
        // Remover badge solo si no es favorito y existe
        badgeExistente.remove();
    }
}

function eliminarCanal(nombreCanal) {
    if (!canalesEliminados.includes(nombreCanal)) {
        canalesEliminados.push(nombreCanal);
        localStorage.setItem('canalesEliminados', JSON.stringify(canalesEliminados));
    }

    if (MisCanales.has(nombreCanal)) {
        MisCanales.delete(nombreCanal);
    }

    if (canalesFavoritosSet.has(nombreCanal)) {
        canalesFavoritos = canalesFavoritos.filter(c => c !== nombreCanal);
        canalesFavoritosSet.delete(nombreCanal);
        localStorage.setItem('canalesFavoritos', JSON.stringify(canalesFavoritos));
    }

    const button = document.querySelector(`[data-canal="${nombreCanal}"]`);
    if (button) {
        button.style.opacity = '0';
        button.style.transform = 'scale(0.8)';
        setTimeout(() => button.remove(), 300);
    }

    actualizarContadorFavoritos();
    showNotification('red', `<p>🗑️ "${nombreCanal}" ha sido eliminado</p>`);
}

function agregarBotonFavoritos() {
    // NO agregar botón en el navbar
    // Solo existirá en el modal de categorías
    console.log("✅ Botón de favoritos disponible solo en modal de categorías");
}

function mostrarSoloFavoritos() {
    const todosBotones = document.querySelectorAll('.canalButton');
    let hayFavoritos = false;

    // Activar modo favoritos
    modoFavoritosActivo = true;

    // Limpiar el buscador para mostrar todos los favoritos
    document.getElementById("id_BuscardorCanales").value = "";

    // Usar requestAnimationFrame para mejor rendimiento
    requestAnimationFrame(() => {
        todosBotones.forEach(button => {
            const nombreCanal = button.getAttribute('data-canal');
            if (canalesFavoritosSet.has(nombreCanal)) {
                button.style.display = 'flex';
                button.style.opacity = '1';
                button.classList.add('encontrado');
                hayFavoritos = true;
            } else {
                button.style.display = 'none';
                button.classList.remove('encontrado');
            }
        });

        if (!hayFavoritos) {
            modoFavoritosActivo = false; // Desactivar si no hay favoritos
            showNotification('yellow', '<p>⭐ No tienes canales favoritos agregados</p>');
            removerBannerFavoritos();
        } else {
            // Cambiar el placeholder del buscador para indicar modo favoritos
            document.getElementById("id_BuscardorCanales").placeholder = "🔍 Buscar en favoritos...";

            // Mostrar banner de modo favoritos
            mostrarBannerFavoritos();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

function mostrarBannerFavoritos() {
    // Remover banner anterior si existe
    removerBannerFavoritos();

    const buscador = document.getElementById('id_barra_buscador');
    const banner = document.createElement('div');
    banner.id = 'banner-modo-favoritos';
    banner.className = 'alert alert-warning d-flex justify-content-between align-items-center mb-3';
    banner.style.cssText = 'background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%); color: #000; border: none; box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);';
    banner.innerHTML = `
        <div>
            <i class="bi bi-star-fill"></i> <strong>Modo Favoritos Activo</strong> - Mostrando ${canalesFavoritos.length} canal(es)
        </div>
        <button class="btn btn-sm btn-dark" onclick="salirDeModoFavoritos()">
            <i class="bi bi-x-circle"></i> Ver todos
        </button>
    `;

    buscador.insertAdjacentElement('afterend', banner);
}

function removerBannerFavoritos() {
    const banner = document.getElementById('banner-modo-favoritos');
    if (banner) {
        banner.remove();
    }
}

function salirDeModoFavoritos() {
    modoFavoritosActivo = false;
    document.getElementById("id_BuscardorCanales").placeholder = "🔍 Buscar canales...";
    document.getElementById("id_BuscardorCanales").value = "";
    removerBannerFavoritos();

    // Mostrar todos los canales
    const todosBotones = document.querySelectorAll('.canalButton');
    todosBotones.forEach(button => {
        button.style.display = 'flex';
        button.style.opacity = '1';
        button.classList.add('encontrado');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function actualizarContadorFavoritos() {
    // Solo actualizar contador en modal (ya que no hay en navbar)
    const contadorModal = document.getElementById('contadorFavoritosModal');
    if (contadorModal) {
        contadorModal.textContent = canalesFavoritos.length;
        contadorModal.style.display = canalesFavoritos.length > 0 ? 'inline' : 'none';
    }
}

function agregarPanelConfiguracion() {
    // NO agregar botón en el navbar
    // Solo existirá en el modal de categorías

    // Crear el modal solo una vez
    if (!document.getElementById('configModal')) {
        const modalHTML = `
            <section class="modal fade" id="configModal" tabindex="-1" aria-labelledby="configModalLabel" aria-hidden="true">
                <section class="modal-dialog modal-dialog-centered">
                    <section class="modal-content bg-dark text-white">
                        <header class="modal-header">
                            <h5 class="modal-title" id="configModalLabel">⚙️ Configuración</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </header>
                        <article class="modal-body">
                            <section class="mb-3">
                                <h6>📊 Estadísticas</h6>
                                <p>Canales favoritos: <strong id="statFavoritos">0</strong></p>
                                <p>Canales eliminados: <strong id="statEliminados">0</strong></p>
                            </section>
                            
                            <section class="mb-3">
                                <h6>🗑️ Canales Eliminados</h6>
                                <div id="listaEliminados" class="list-group" style="max-height: 200px; overflow-y: auto;">
                                    <p class="text-muted">Cargando...</p>
                                </div>
                            </section>
                            
                            <section class="d-grid gap-2">
                                <button class="btn btn-danger" id="limpiarFavoritos">
                                    <i class="bi bi-trash"></i> Limpiar favoritos
                                </button>
                                <button class="btn btn-warning" id="restaurarTodos">
                                    <i class="bi bi-arrow-counterclockwise"></i> Restaurar todos los canales
                                </button>
                            </section>
                        </article>
                    </section>
                </section>
            </section>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        document.getElementById('limpiarFavoritos').addEventListener('click', limpiarFavoritos);
        document.getElementById('restaurarTodos').addEventListener('click', restaurarTodosCanales);
        document.getElementById('configModal').addEventListener('show.bs.modal', actualizarModalConfiguracion);
    }

    console.log("✅ Panel de configuración disponible solo en modal de categorías");
}

function actualizarModalConfiguracion() {
    document.getElementById('statFavoritos').textContent = canalesFavoritos.length;
    document.getElementById('statEliminados').textContent = canalesEliminados.length;

    const listaEliminados = document.getElementById('listaEliminados');
    if (canalesEliminados.length > 0) {
        listaEliminados.innerHTML = canalesEliminados.map(c => `
            <div class="list-group-item bg-secondary text-white d-flex justify-content-between align-items-center mb-2">
                <span>${c}</span>
                <button class="btn btn-sm btn-success restaurar-canal" data-canal="${c}">
                    <i class="bi bi-arrow-counterclockwise"></i> Restaurar
                </button>
            </div>
        `).join('');

        document.querySelectorAll('.restaurar-canal').forEach(btn => {
            btn.addEventListener('click', function () {
                restaurarCanal(this.getAttribute('data-canal'));
            });
        });
    } else {
        listaEliminados.innerHTML = '<p class="text-muted">No hay canales eliminados</p>';
    }
}

function limpiarFavoritos() {
    if (confirm('¿Estás seguro de que deseas limpiar todos los favoritos?')) {
        canalesFavoritos = [];
        canalesFavoritosSet.clear();
        localStorage.setItem('canalesFavoritos', JSON.stringify(canalesFavoritos));

        // Actualizar todos los badges de una vez
        requestAnimationFrame(() => {
            document.querySelectorAll('.badge-favorito').forEach(badge => badge.remove());
            actualizarContadorFavoritos();
            actualizarModalConfiguracion();
        });

        showNotification('green', '<p>✅ Favoritos limpiados</p>');
    }
}

function restaurarCanal(nombreCanal) {
    canalesEliminados = canalesEliminados.filter(c => c !== nombreCanal);
    localStorage.setItem('canalesEliminados', JSON.stringify(canalesEliminados));
    showNotification('green', `<p>✅ "${nombreCanal}" restaurado. Recargando...</p>`);
    setTimeout(() => location.reload(), 1500);
}

function restaurarTodosCanales() {
    if (confirm('¿Estás seguro de que deseas restaurar todos los canales eliminados?')) {
        canalesEliminados = [];
        localStorage.setItem('canalesEliminados', JSON.stringify(canalesEliminados));
        showNotification('green', '<p>✅ Todos los canales restaurados. Recargando...</p>');
        setTimeout(() => location.reload(), 1500);
    }
}

// ============================================================
// INICIALIZACIÓN PRINCIPAL
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    console.log("🚀 Inicializando sistema de favoritos y menú contextual...");

    setTimeout(() => {
        inicializarMenuContextual();
        agregarBotonFavoritos();
        agregarPanelConfiguracion();

        // Optimización: Usar un debounce para el MutationObserver
        let timeoutId = null;
        const observer = new MutationObserver(function (mutations) {
            // Cancelar timeout anterior
            if (timeoutId) clearTimeout(timeoutId);

            // Esperar 100ms después del último cambio antes de actualizar
            timeoutId = setTimeout(() => {
                let necesitaActualizar = false;
                mutations.forEach(function (mutation) {
                    if (mutation.addedNodes.length) {
                        mutation.addedNodes.forEach(function (node) {
                            if (node.classList && node.classList.contains('canalButton')) {
                                necesitaActualizar = true;
                            }
                        });
                    }
                });

                if (necesitaActualizar) {
                    actualizarVisualizacionFavoritos();
                }
            }, 100);
        });

        const contenedorCanales = document.getElementById('id_CanalesDisponibles');
        if (contenedorCanales) {
            observer.observe(contenedorCanales, {
                childList: true,
                subtree: false // Cambiar a false para mejor rendimiento
            });
        }

        // Actualizar una sola vez al inicio
        actualizarVisualizacionFavoritos();
        actualizarContadorFavoritos();
        console.log(`✅ Sistema inicializado: ${canalesFavoritos.length} favoritos | ${canalesEliminados.length} eliminados`);
    }, 500);
});

const yearElements = document.querySelectorAll('.dynamic-year span');
const currentYear = new Date().getFullYear();
yearElements.forEach(element => { element.textContent = currentYear; });

document.getElementById("id_optPais").addEventListener("change", FiltrarPais);
document.getElementById("id_optCanales").addEventListener("change", CambiarOpt);
document.getElementById("id_sapping-izquierda").addEventListener("click", sapping_izquierda);
document.getElementById("id_sapping-canal").addEventListener("click", sapping_reset);
document.getElementById("id_sapping-derecha").addEventListener("click", sapping_derecha);
document.getElementById("id_BuscardorCanales").addEventListener("keyup", Buscar_Canal);
document.getElementById("id_BuscardorCanales").addEventListener("click", Buscar_Canal);
window.addEventListener("scroll", mostrarScroll);

console.log("✅ Script cargado completamente - Menú contextual funcionando");