let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim().length === 0) {
        alert('El campo está vacío, digite el nombre nuevamente.');
    } else {
        listaAmigos.push(nombreAmigo);
        asignarTextoElemento('ul', `Nombre: ${nombreAmigo} agregado.`);
    }
    limpiarCaja();
    return;
}

function sortearAmigo() {

}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}