/* Fase 2 - Toggle "desactivar animaciones".
   Archivo local (NO se sincroniza desde el remoto).
   La preferencia se guarda en localStorage y la clase se aplica a <html>. */
(function () {
    'use strict';
    var STORAGE_KEY = 'sin_animaciones';
    var BTN_ID = 'id_toggle-animaciones';

    function aplicar(activo) {
        document.documentElement.classList.toggle('sin-animaciones', activo);
        var btn = document.getElementById(BTN_ID);
        if (btn) {
            btn.classList.toggle('active', activo);
            btn.classList.toggle('bi-stars-fill', activo);
            btn.classList.toggle('bi-stars', !activo);
            btn.setAttribute('title', activo ? 'Reactivar animaciones' : 'Desactivar animaciones');
        }
        try {
            localStorage.setItem(STORAGE_KEY, activo ? '1' : '0');
        } catch (e) {
            /* localStorage no disponible: el toggle aplica solo en la sesión */
        }
    }

    // Estado inicial: la clase ya fue aplicada por el script inline en <head>
    // (evita parpadeo); aquí solo sincronizamos el botón.
    aplicar(document.documentElement.classList.contains('sin-animaciones'));

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById(BTN_ID);
        if (!btn) return;
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            aplicar(!document.documentElement.classList.contains('sin-animaciones'));
        });
    });
})();