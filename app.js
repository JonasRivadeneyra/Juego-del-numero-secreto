//mis variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//funcion general
function asignarTextoElemento(elemento , texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;             
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo )+ 1;
   
    //si ya sorteamops todos los mumeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p' , 'Ya se sortearon todos los numeros posibles');
    }   else {
            //si el numero generado esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}




function condicionesIniciales(){
    asignarTextoElemento('h1' , ' Juego del numero secreto');
    asignarTextoElemento('p' , `' Indica un numero del 1 al ${numeroMaximo}'`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;
}

//funcion principal de verificacion
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
       asignarTextoElemento('p' , `Acertaste el número , acertaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); 
       document.getElementById('reiniciar').removeAttribute('disabled');
    }   else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secereto es menor');
        } else {
            asignarTextoElemento('p' , 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        console.log(intentos);
    }   return;  
 }  
    




function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje nde intervallo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}



condicionesIniciales();