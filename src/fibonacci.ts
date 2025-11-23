import promptSync from "prompt-sync";
const prompt = promptSync();

// Algoritmo de sucesión de Fibonacci

function fibonacci(n: number){
    let a = 0;
    let b = 1;

    for(let i = 0; i < n; i++){
        console.log(a);
        const temp = a;
        a = b;
        b = temp + b;
    }

};

fibonacci(parseInt(prompt("Ingresa un número para calcular su sucesión de Fibonacci: ") || "0"))
