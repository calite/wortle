let palabraCorrecta = palabras[Math.trunc(Math.random() * 787)]
let countFila = 1
let countLetra = 1
let countLetra2 = 1
let letras = new Array
let colorGris = "#787c7e";
let colorAmarillo = "#c9b458";
let colorVerde = "#6aaa64";
let colorBlanco = "white";

function intento() {
    if (letras.length != 5) {} else {
        //comentado para evitar que mire si la palabra esta en el array
        //if (Array.from(palabras).includes(letras.join("").toLowerCase())) {
        let arrayPalabraCorrecta = Array.from(palabraCorrecta.toUpperCase());
        let palabraEscrita = letras.join("");

        if (!esPalabraCorrecta(palabraEscrita)) {
            establecerErrorEnPalaba(countFila, palabraEscrita)
        } else {
            //cuando ganas
            mostrarCartel('hasGanado', 'cuentaAtras')
        }

        arrayPalabraCorrecta.forEach(function callback(currentValue, index, array) {

            asignarLetraACuadrado(countFila, countLetra, letras[index])
            coloreaCuadrado(colorGris, colorGris, colorBlanco, letras[index])
            establecerAnimacion(countFila, countLetra)

            if (incluyeLaPalabraLaLetra(arrayPalabraCorrecta, letras[index]) && esPrimeraCoincidencia(index, letras[index])) {
                coloreaCuadrado(colorAmarillo, colorAmarillo, colorBlanco, letras[index])
            }

            if (esLetraCorrecta(letras[index], currentValue.toUpperCase())) {
                coloreaCuadrado(colorVerde, colorVerde, colorBlanco, letras[index])
            }
            countLetra++
        })
        countFila++
        countLetra = 1
        countLetra2 = 1
        letras = new Array
            //cuando pierdes
        if (countFila == 7) {
            mostrarCartel('hasPerdido', 'cuentaAtras')
        }
        /* }
         
         else {
             mostrarPanel('palabraNoExistente');
             setTimeout(() => {
                 ocultarPanel('palabraNoExistente');
             }, 2000);
         }
         */
    }
}

function esPrimeraCoincidencia(index, letra) {
    return index === letras.indexOf(letra);
}

function establecerAnimacion(coordenadaX, coordenadaY) {
    document.getElementById(coordenadaX.toString() + coordenadaY.toString()).style.animation = 'pop 0.3s linear 1';
}

function incluyeLaPalabraLaLetra(palabra, letra) {
    return palabra.includes(letra);
}

function esLetraCorrecta(letraEscrita, letraCorrecta) {
    return letraCorrecta.toUpperCase() == letraEscrita;
}

function esPalabraCorrecta(palabra) {
    return palabraCorrecta.toUpperCase() === palabra.toUpperCase();
}

function asignarLetraACuadrado(corrdenadaX, coordenadaY, valor) {
    document.getElementById(corrdenadaX.toString() + coordenadaY.toString()).textContent = valor;
}

function establecerErrorEnPalaba(countFila, palabra) {
    document.getElementById("texto" + countFila.toString()).textContent = palabra + " no es correcta"
}

function coloreaCuadrado(backgroundColor, borderColor, color, letra) {
    document.getElementById(letra).style.backgroundColor = backgroundColor;
    document.getElementById(letra).style.borderColor = borderColor;
    document.getElementById(letra).style.color = color;
    document.getElementById(countFila.toString() + countLetra.toString()).style.backgroundColor = backgroundColor;
    document.getElementById(countFila.toString() + countLetra.toString()).style.color = color;
}



function selectLetra(letra) {
    if (letras.length < 5) {
        letras.push(letra);
        document.getElementById("texto" + countFila).textContent = letras.join("")
        document.getElementById(countFila + "" + countLetra2).textContent = letra
        countLetra2++
    }
}

function mostrarCartel(idCartelHasGanado, idCartelCuenteAtras) {
    mostrarPanel(idCartelHasGanado);
    setTimeout(() => {
        ocultarPanel(idCartelHasGanado);
        mostrarPanel(idCartelCuenteAtras);
        document.getElementById('contadorCuentaAtras').innerHTML = 'El juego se reiniciara en  3s';
        setTimeout(() => {
            document.getElementById('contadorCuentaAtras').innerHTML = 'El juego se reiniciara en  2s';
            setTimeout(() => {
                document.getElementById('contadorCuentaAtras').innerHTML = 'El juego se reiniciara en  1s';
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }, 1000);
        }, 1000);
    }, 3000);

}

function borrarLetra() {
    if (letras.length != 0) { countLetra2-- }
    document.getElementById(countFila + "" + countLetra2).textContent = ""
    letras.pop()
    document.getElementById("texto" + countFila).textContent = letras.join("")
}

function mostrarReglas() {
    document.getElementById('reglas').style.display = 'block';
    document.getElementById('fondoReglas').style.display = 'block';
}

function cerrarReglas() {
    document.getElementById('reglas').style.display = 'none';
    document.getElementById('fondoReglas').style.display = 'none';
}

function sinHacer() {
    alert('Eso aun no esta implementado.');
}

function mostrarPanel(idDelpanel) {
    document.getElementById(idDelpanel).style.display = 'block';
}

function ocultarPanel(idDelpanel) {
    document.getElementById(idDelpanel).style.display = 'none';
}