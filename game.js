
const TecladoDir = document.querySelector(".Teclado");

// Seleccionando una palabra aleatoria y su clave de la Palabras a Adivinar en el words.js
const getPalabraAleatoria = () => {
    const { palabra, clave } = PalabrasAdivinar[Math.floor(Math.random() * PalabrasAdivinar.length)];
    //console.log(palabra, clave);
    console.log(palabra);
    document.querySelector("");
}


// Creando Botones del Teclado
for (let i = 97; i <= 122; i++) {
    //console.log(String.fromCharCode(i));
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    TecladoDir.appendChild(button);
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