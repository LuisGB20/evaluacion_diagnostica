"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Algoritmo de Cálculo de edad exacta
function calcularEdadExacta() {
    function validarDosDigitos(valor) {
        const numero = Number(valor);
        return numero < 10 ? `0${numero}` : `${numero}`;
    }
    const fechaActual = new Date();
    const anioNacimiento = prompt("Ingrese su año de nacimiento: ");
    const mesNacimiento = validarDosDigitos(prompt("Ingrese su mes de nacimiento (01 - 12): "));
    const diaNacimiento = validarDosDigitos(prompt("Ingrese su dia de nacimiento (01 - 31): "));
    const horaNacimiento = validarDosDigitos(prompt("Ingrese su hora de nacimiento (00 - 23): "));
    if (!anioNacimiento || !mesNacimiento || !diaNacimiento || !horaNacimiento) {
        console.error("Fecha u hora de nacimiento no proporcionada.");
        return;
    }
    if ((new Date(anioNacimiento).getFullYear()) > fechaActual.getFullYear()) {
        console.error("El año no puede ser mayor al año actual");
        return;
    }
    const fechaHoraNacimiento = new Date(`${anioNacimiento}-${mesNacimiento}-${diaNacimiento}T${horaNacimiento}:00`);
    if (isNaN(fechaHoraNacimiento.getTime())) {
        console.error("Error al formar la fecha, revisa que los datos introducidos sean correctos");
        return;
    }
    let aniosCumplidos = fechaActual.getFullYear() - fechaHoraNacimiento.getFullYear();
    let mesesCumplidos = fechaActual.getMonth() - fechaHoraNacimiento.getMonth();
    let diasCumplidos = fechaActual.getDate() - fechaHoraNacimiento.getDate();
    let semanasCumplidas = Math.floor(diasCumplidos / 7);
    let diasConSemanasIncluidas = diasCumplidos % 7;
    let horasCumplidas = fechaActual.getHours() - fechaHoraNacimiento.getHours();
    if (mesesCumplidos < 0) {
        mesesCumplidos += 12;
        aniosCumplidos--;
    }
    if (semanasCumplidas < 0) {
        semanasCumplidas += 4;
        mesesCumplidos--;
    }
    if (diasConSemanasIncluidas < 0) {
        diasConSemanasIncluidas += 7;
        semanasCumplidas--;
    }
    if (horasCumplidas < 0) {
        horasCumplidas += 24;
        diasCumplidos--;
    }
    console.log(`Usted tiene ${aniosCumplidos} años, ${mesesCumplidos} meses, ${semanasCumplidas} semanas, ${diasConSemanasIncluidas} días y ${horasCumplidas} horas`);
    return;
}
calcularEdadExacta();
//# sourceMappingURL=calculoEdadExacta.js.map