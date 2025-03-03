let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
    
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste! en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    // Condición para saber si ya se sortearon todos los números posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Felicitaciones! Ganaste el juego');
        return null; // Se devuelve null para indicar que el juego ha terminado
    }

    // Generar un número aleatorio
    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}


function condicionesIniciales(){
    //Inicializar el contador de intentos
    intentos = 1;
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto()
    // Verificar si ya acabó el juego
    if (numeroSecreto === null) {
        return;
    }
    //Mensajes iniciales
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Introduce un número de 1 a ${numeroMaximo}`);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Mensaje de inicio (intervalo de números)
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();