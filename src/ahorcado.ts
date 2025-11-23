import promptSync from "prompt-sync";
const prompt = promptSync();

// Algoritmo de un ahorcado
function juegoDelAhorcado() {
    const palabras = ["AUTO", "PERRO", "TECNOLOGIA", "NAVIDAD", "MEXICO", "POZOLE"];
    let intentos = 5;
    const palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    const progreso: string[] = [];

    palabraSeleccionada.split('').forEach(letra => {
        progreso.push('_')
    });


    const mostrarProgreso = () => {
        console.log('Tu progreso: ')
        console.log(progreso.join(' '));
        console.log(`Te quedan: ${intentos} intentos`)
    }


    console.log('***Bienvenido al juego del ahorcado***');
    console.log(`Tendras ${intentos} intentos para lograr formar la palabra, mucha suerte`);

    while (intentos > 0 && (progreso.join('') != palabraSeleccionada)) {
        let letra;
        do {
            const caracter = prompt('Introduce una letra: ').toUpperCase();
            if (letra == null) {
                console.log('No puedes introducir caracteres vacios')
            }
            if(caracter.length > 1){
                console.log('Solo puedes introducir una letra');
            }
            letra = caracter;
        } while (letra == null || letra.length > 1);

        if (palabraSeleccionada.includes(letra)) {
            palabraSeleccionada.split('').forEach((letraPalabraSeleccionada, index) => {
                if (letraPalabraSeleccionada == letra) {
                    progreso.splice(index, 1, letra);
                }
            })

            console.log('Haz acertado, la letra si se encuentra en la palabra');
        } else {
            intentos--;
            console.log('La letra no se encuentra en la palabra')
        }

        mostrarProgreso()
    }


    console.log(progreso.join("") === palabraSeleccionada
        ? `Lo lograste, La palabra es: ${palabraSeleccionada}`
        : `Te ira mejor la proxima vez. La palabra era: ${palabraSeleccionada}`);
}

juegoDelAhorcado()