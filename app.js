let numeroSereto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
const asignarTextoElemento = (elemento, texto) => {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

const verificarIntento = () => {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSereto);
    if (numeroDeUsuario === numeroSereto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        numeroDeUsuario > numeroSereto ? asignarTextoElemento('p', 'El número secreto en menor') : asignarTextoElemento('p', 'El número secreto es mayor');
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si ya sortemaos todos os numeros
    if (listaNumerosSorteados == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }



}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del Número Secreto");
    asignarTextoElemento("p", `Indica un número del 1 al 10 ${numeroMaximo}`);
    //generar el número aleatorio
    numeroSereto = generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //limpiarCaja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute("disabled", true);
}

condicionesIniciales();