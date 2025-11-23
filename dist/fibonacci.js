"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Algoritmo de sucesión de Fibonacci
function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        const temp = a;
        a = b;
        b = temp + b;
    }
}
;
fibonacci(parseInt(prompt("Ingresa un número para calcular su sucesión de Fibonacci: ") || "0"));
//# sourceMappingURL=fibonacci.js.map