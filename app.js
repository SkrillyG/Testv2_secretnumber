let numeroSecreto = 0;
let intentos = 0;
let listaDenumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario === numeroSecreto);
    //console.log(intentos);

    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el numero correcto en: ${intentos} ${intentos === 1 ? 'vez': 'veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');   
        } else {
        //El usuario no acierta 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //si ya sorteamos todos los numeros
    if(listaDenumeroSorteado.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');
    }

    //si el numero generado esta incluido en la lista
    if(listaDenumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaDenumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}
function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Limpia la caja 
//indicar mensje de interbalo de numeroSecreto
//generar el numero aleatorio
//deshabilitar el boton de nuevo el juego
//Inicializar el numero de intentos

function reiniciarJuego()
{
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();