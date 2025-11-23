"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Algoritmo para validar palíndromos.
function validarPalindromo(palabra) {
    const palabraLimpia = palabra.trim().toLowerCase().replace(/\s*/g, '');
    if (palabraLimpia.length === 0) {
        console.log("No ingresaste una palabra válida");
        return;
    }
    const palabraReversa = palabraLimpia.split('').reverse().join('');
    palabraLimpia === palabraReversa ? console.log("valido") : console.log("invalido");
}
validarPalindromo(prompt("Ingresa una palabra: ") || "");
//# sourceMappingURL=palindromo.js.map