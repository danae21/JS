var solicitudSpan = document.querySelector("#solicitudes");
var conexionSpan = document.querySelector("#conexiones");
var usuarioSpan = document.querySelector("#usuario");

function aceptar(id) {
    var element = document.querySelector(id);
    element.remove();
    solicitudSpan.innerText--;
    conexionSpan.innerText++;
}

function ignorar(id) {
    var element = document.querySelector(id);
    element.remove();
    solicitudSpan.innerText--;
}

function editar() {
    usuarioSpan.innerText = "Marisa G";
}