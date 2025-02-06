let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');

/*
Funcion para guardar el nombre ingresado al campo de entrada.
Esta funcion se ejecuta al oprimir el boton AÑADIR.
*/
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

//Funcion para mostrar y añadir en lista el nombre ingresado
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    for (var i = 1; i <= amigos.length; i++) {
        let elementoDeLista = document.createElement('li');
        elementoDeLista.textContent = `${i}. ${amigos[i - 1]}.`;
        listaAmigos.appendChild(elementoDeLista);
    }
}

//Funcion para sortear un amigo cuando se oprime el boton SORTEAR AMIGO
function sortearAmigo() {
    if (amigos.length >= 1) {
        let numero = Math.floor(Math.random() * amigos.length);
        amigoSorteado.innerHTML = `El amigo sorteado es: ${amigos[numero]}.`;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}