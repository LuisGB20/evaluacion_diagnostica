import promptSync from "prompt-sync";
const prompt = promptSync();

// Algoritmo para validar palíndromos.
function validarPalindromo(palabra : string) {

    const palabraLimpia = palabra.trim().toLowerCase().replace(/\s*/g, '');
    if(palabraLimpia.length === 0){
        console.log("No ingresaste una palabra válida");
        return;
    }
    const palabraReversa = palabraLimpia.split('').reverse().join('');
    palabraLimpia === palabraReversa ? console.log("valido") : console.log("invalido");
}

validarPalindromo(prompt("Ingresa una palabra: ") || "");