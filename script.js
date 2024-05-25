let palabra = "_ _ _ _ _ _";
let intentos = 6;
let letrasUsadas = [];
let palabraOculta = "palabraoculta"; // Palabra a adivinar

document.getElementById("palabra").innerHTML = palabra;
document.getElementById("intentos").innerHTML = `Intentos: ${intentos}`;

document.getElementById("enviar").addEventListener("click", function() {
    let letra = document.getElementById("letra").value.trim().toLowerCase();
    if (letra.length === 1 && letra.match(/[a-z]/i)) {
        if (!letrasUsadas.includes(letra)) {
            letrasUsadas.push(letra);
            let palabraArray = palabraOculta.split("");
            let aciertos = 0;
            for (let i = 0; i < palabraArray.length; i++) {
                if (palabraArray[i] === letra) {
                    palabra = palabra.replace("_", letra, i);
                    aciertos++;
                }
            }
            if (aciertos === 0) {
                intentos--;
                document.getElementById("intentos").innerHTML = `Intentos: ${intentos}`;
                dibujarAhorcado();
            }
            document.getElementById("palabra").innerHTML = palabra;
            if (palabra === palabraOculta) {
                alert("¡Felicidades! Has ganado.");
            }
        } else {
            alert("La letra ya ha sido utilizada.");
        }
    } else {
        alert("Ingrese una letra válida.");
    }
    document.getElementById("letra").value = "";
});

function dibujarAhorcado() {
    let dibujo = document.getElementById("dibujo");
    let partes = ["cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho", "piernaIzquierda", "piernaDerecha"];
    let parte = partes.pop();
    let elemento = document.createElement("div");
    elemento.className = "dibujo-part";
    elemento.innerHTML = parte;
    dibujo.appendChild(elemento);
    if (intentos === 0) {
        alert("¡Lo siento! Has perdido.");
    }
}