
const PalabraAdiv = document.querySelector(".Palabra");
const ContarIntentos = document.querySelector(".Intentos b");
const TecladoDir = document.querySelector(".Teclado");


let PalabraActual, ContarAdivinarIncorrecto = 0;
const maxAdivinar = 6;

// Seleccionando una palabra aleatoria y su clave de PalabrasAdivinar del words.js
const getPalabraAleatoria = () => {
    const { palabra, clave } = PalabrasAdivinar[Math.floor(Math.random() * PalabrasAdivinar.length)];
    //console.log(palabra, clave);
    PalabraActual = palabra;
    console.log(palabra);

    document.querySelector(".Clave b").innerText = clave;
    PalabraAdiv.innerHTML = palabra.split("").map(() => `<li class="letra"></li>`).join("");
}

const initGame = (button, clickLetra) => {
    //console.log(button, clickLetra);
    // Verifificando si la letra que se hace click / clickLetra está en la Palabra Actual a Adivinar
    if(PalabraActual.includes(clickLetra)) {
        //console.log(clickLetra, " existe / está en la palabra");
        
        // Mostrar todas las letras correctas / que pertenezcan a la palabra correspondiente
        [...PalabraActual].forEach((letra, index) => {
            if(letra === clickLetra) {
                PalabraAdiv.querySelectorAll("li")[index].innerText = letra;
                PalabraAdiv.querySelectorAll("li")[index].classList.add("vista");


            }
        })
    } else {
        //console.log(clickLetra, " no existe / no está en la palabra");
        ContarAdivinarIncorrecto++;
    }
    ContarIntentos.innerText = `${ContarAdivinarIncorrecto} / ${maxAdivinar}`;
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

/*
<button>a</button><button>b</button><button>c</button><button>d</button>
                <button>e</button><button>f</button><button>g</button><button>h</button>
                <button>i</button><button>j</button><button>k</button><button>l</button>
                <button>m</button><button>n</button><button>o</button><button>p</button>
                <button>q</button><button>r</button><button>s</button><button>t</button>
                <button>u</button><button>v</button><button>w</button><button>x</button>
                <button>y</button><button>z</button>
*/