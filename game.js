
const DollImg = document.querySelector(".Portada img");
const PalabraAdiv = document.querySelector(".Palabra");
const ContarIntentos = document.querySelector(".Intentos b");
const TecladoDir = document.querySelector(".Teclado");
const ModoJuego = document.querySelector(".Modo-Juego");
const JuegaDeNuevo = document.querySelector(".Juega-de-Nuevo");
//const AdivinarPalabra = document.querySelector(".adivinar");


let PalabraActual, LetrasCorrectas, ContarAdivinarIncorrecto;
const maxAdivinar = 6;

const resetGame = () => {

    // Reiniciar todo el juego / partida

    LetrasCorrectas = [];
    ContarAdivinarIncorrecto = 0;
    DollImg.src = `imagenes/ahorcado-${ContarAdivinarIncorrecto}.svg`;
    ContarIntentos.innerText = `${ContarAdivinarIncorrecto} / ${maxAdivinar}`;
    TecladoDir.querySelectorAll("button").forEach(btn => btn.disabled = false);
    PalabraAdiv.innerHTML = PalabraActual.split("").map(() => `<li class="letra"></li>`).join("");
    //AdivinarPalabra.innerHTML = PalabraActual.split("").map(() => `<li class="letra"></li>`).join("");

    ModoJuego.classList.remove("mostrar");

}

// Seleccionando una palabra aleatoria y su clave de PalabrasAdivinar del words.js
const getPalabraAleatoria = () => {
    const { palabra, clave } = PalabrasAdivinar[Math.floor(Math.random() * PalabrasAdivinar.length)];
    //const { palabra } = AdivinarPalabra[Math.floor(Math.random() * AdivinarPalabra.length)];

    //console.log(palabra, clave);
    PalabraActual = palabra;
    //console.log(palabra);

    document.querySelector(".Clave b").innerText = clave;
    resetGame();
    //PalabraAdiv.innerHTML = palabra.split("").map(() => `<li class="letra"></li>`).join("");
}

const gameOver = (EsVictoria) => {

    // Después de 600ms de completar el juego se mostrarán los detalles de la partida

    setTimeout(() => {
        const ModoTexto = EsVictoria ? `¡¡ Encontraste la Palabra: ` : `¡¡ La Palabra Correcta era:` ;
        ModoJuego.querySelector("img").src = `imagenes/${EsVictoria ? 'Victoria' : 'Derrota'}.png`;
        ModoJuego.querySelector("h4").innerText = `${EsVictoria ? '¡¡ FELICITACIONES !!' : '¡¡ Juego Terminado !!'}`;
        ModoJuego.querySelector("p").innerHTML = `${ModoTexto} <b>${PalabraActual} !!</b>`;

        ModoJuego.classList.add("mostrar");
    }, 300);
}

const initGame = (button, clickLetra) => {
    //console.log(button, clickLetra);
    // Verifificando si la letra que se hace click / clickLetra está en la Palabra Actual a Adivinar
    if(PalabraActual.includes(clickLetra)) {
        //console.log(clickLetra, " existe / está en la palabra");
        
        // Mostrar todas las letras correctas / que pertenezcan a la palabra correspondiente
        [...PalabraActual].forEach((letra, index) => {
            if(letra === clickLetra) {
                LetrasCorrectas.push(letra);
                PalabraAdiv.querySelectorAll("li")[index].innerText = letra;
                PalabraAdiv.querySelectorAll("li")[index].classList.add("vista");
                AdivinarPalabra.querySelectorAll("li")[index].innerText = palabra;
                AdivinarPalabra.querySelectorAll("li")[index].classList.add("vista");

            }
        })
    } else {
        //console.log(clickLetra, " no existe / no está en la palabra");

        // Si se hace click a una letra que no está en la palabra sumará al ContarAdivinarIncorrecto y al DollImg
        ContarAdivinarIncorrecto++;
        DollImg.src = `imagenes/ahorcado-${ContarAdivinarIncorrecto}.svg`;
    }

    button.disabled = true;
    ContarIntentos.innerText = `${ContarAdivinarIncorrecto} / ${maxAdivinar}`;

    // Se llama a la función GameOver si alguna de éstas condiciones se cumplen / pasan
    if(ContarAdivinarIncorrecto === maxAdivinar) return gameOver(false);
    if(LetrasCorrectas.length === PalabraActual.length) return gameOver(true);
}

// Creando los Botones del Teclado y Añadir EventListener
for (let i = 97; i <= 122; i++) {
    //console.log(String.fromCharCode(i));
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    TecladoDir.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}

getPalabraAleatoria();
JuegaDeNuevo.addEventListener("click", getPalabraAleatoria);

/*
<button>a</button><button>b</button><button>c</button><button>d</button>
                <button>e</button><button>f</button><button>g</button><button>h</button>
                <button>i</button><button>j</button><button>k</button><button>l</button>
                <button>m</button><button>n</button><button>o</button><button>p</button>
                <button>q</button><button>r</button><button>s</button><button>t</button>
                <button>u</button><button>v</button><button>w</button><button>x</button>
                <button>y</button><button>z</button>
*/