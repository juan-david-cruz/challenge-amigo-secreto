let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim().length === 0) {
        asignarTextoElemento('ul', 'El campo está vacío, digite nuevamente.');
    } else {
        listaAmigos.push(nombreAmigo);
        asignarTextoElemento('ul', `Nombre: ${nombreAmigo} agregado.`);
    }
    return;
}

function sortearAmigo() {

}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}