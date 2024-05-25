
const PalabraAdiv = document.querySelector(".Palabra");
const TecladoDir = document.querySelector(".Teclado");


// Seleccionando una palabra aleatoria y su clave de PalabrasAdivinar del words.js
const getPalabraAleatoria = () => {
    const { palabra, clave } = PalabrasAdivinar[Math.floor(Math.random() * PalabrasAdivinar.length)];
    //console.log(palabra, clave);
    console.log(palabra);

    document.querySelector(".Clave b").innerText = clave;
    PalabraAdiv.innerHTML = palabra.split("").map(() => `<li class="letra"></li>`).join("");
}

const initGame = (button, clickLetra) => {
    console.log(button, clickLetra);
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