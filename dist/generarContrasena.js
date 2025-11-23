"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Algoritmo para generar contraseñas
function generarContrasena() {
    let longitudMinima = 8;
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    const regexMayusculas = /[A-Z]/;
    const regexEspeciales = /[!@#$%^&*]/;
    const regexNumeros = /[0-9]/;
    let contrasena = '';
    const obtenerCaracterAleatorio = () => {
        let caracter;
        caracter = (Math.floor(Math.random() * caracteresPermitidos.length));
        return caracteresPermitidos.charAt(caracter);
    };
    do {
        contrasena += obtenerCaracterAleatorio();
    } while ((contrasena.length < longitudMinima) || !regexEspeciales.test(contrasena) || !regexMayusculas.test(contrasena) || !regexNumeros.test(contrasena));
    console.log(`Contraseña generada: ${contrasena}`);
}
generarContrasena();
//# sourceMappingURL=generarContrasena.js.map