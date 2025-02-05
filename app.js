let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim().length === 0) {
        alert('El campo está vacío, digite el nombre nuevamente.');
    } else {
        amigos.push(nombreAmigo);
    }
    limpiarCaja();
    actualizarListaAmigos();
    return;
}

function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    for (var i = 0; i <= amigos.length - 1; i++) {
        let elementoDeLista = document.createElement('li');
        elementoDeLista.textContent = amigos[i];
        listaHTML.appendChild(elementoDeLista);
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}