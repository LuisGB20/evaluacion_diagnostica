import promptSync from "prompt-sync";
const prompt = promptSync();

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
    }

    do {
        contrasena += obtenerCaracterAleatorio();
    } while ((contrasena.length < longitudMinima) || !regexEspeciales.test(contrasena) || !regexMayusculas.test(contrasena) || !regexNumeros.test(contrasena))

    console.log(`Contraseña generada: ${contrasena}`)
}

generarContrasena();