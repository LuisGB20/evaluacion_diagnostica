import promptSync from "prompt-sync";
const prompt = promptSync();

interface Usuario {
    id?: number,
    nombreUsuario: string,
    edad: number,
    contrasena: string
}

const usuarios: Usuario[] = [];
let idPrevio = 0;

function validarNumero(mensaje : string) {
    let valor;
    do {
        valor = Number(prompt(mensaje));
        if (isNaN(valor)) console.log('Debes ingresar un número válido');
    } while (isNaN(valor));
    return valor;
}

function validarTexto(mensaje : string) {
    let valor;
    do {
        valor = prompt(mensaje);
        if(valor == null || valor.trim() == '') console.log('Respuesta no valida')
    } while (valor == null || valor.trim() == '');
    return valor;
}

const usuarioService = {
    agregarUsuario(usuario: Usuario) {
        usuario.id = idPrevio + 1;
        usuarios.push(usuario);
        idPrevio++;

        console.log('Usuario agregado correctamente');
        this.consultarUsuarios();
    },
    consultarUsuarios() {
        if (usuarios.length == 0) {
            console.log("No hay usuarios existentes")
        }
        console.table(usuarios);
    },
    editarUsuario(usuarioId: number) {
        let usuario = usuarios.find((u) => u.id == usuarioId);

        if (usuario == null) {
            console.log('Usuario no encontrado')
            return;
        }

        const opcionSeleccionada = Number(prompt(`
                Selecciona que dato quieres modificar
                1.Nombre 
                2.Edad 
                3.Contrasena
                 
            `))
        switch (opcionSeleccionada) {
            case 1:
                const nombreNuevo = validarTexto('Introduce el nuevo Nombre');
                usuario.nombreUsuario = nombreNuevo;
                console.log('Nombre de usuario actualizado correctamente');
                break;
            case 2:
                const edadNueva = validarNumero('Introduce la nueva Edad:')
                usuario.edad = edadNueva;
                console.log('Edad actualizada correctamente');
                break;
            case 3: { }
                const contrasenaNueva = validarTexto('Introduce la nueva Contraseña:');
                usuario.contrasena = contrasenaNueva;
                console.log('Contraseña actualizada correctamente');
                break;
            default:
                console.log('Opción no valida');
                return;
        }
        console.log('Operación realizada correctamente');
        this.consultarUsuarios();
    },
    eliminarUsuario(usuarioId: number) {
        let usuario = usuarios.find((u) => u.id == usuarioId);
        if (usuario == null) {
            console.log('Usuario no encontrado')
            return;
        }

        console.log('Usuario eliminado correctamente');
        this.consultarUsuarios();
    }
}

function crudUsuarios() {
    console.log(`Sistema Gestor de Usuarios
    Operaciones disponibles:
    1. Agregar
    2. Listar
    3. Editar
    4. Eliminar
    5. Salir`);

    const operacion = validarNumero('Selecciona que operación deseas realizar [1 - 5]: ');
    let idUsuarioSeleccionado : number;

    switch (operacion) {
        case 1:
            const nombreUsuario = validarTexto('Introduce el nombre del usuario: ');
            const edadUsuario = validarNumero('Introduce la edad del usuario: ')
            const contrasenaUsuario = validarTexto('Introduce la contraseña del usuario: ');

            const usuarioNuevo: Usuario = {
                nombreUsuario: nombreUsuario,
                edad: edadUsuario,
                contrasena: contrasenaUsuario
            }

            usuarioService.agregarUsuario(usuarioNuevo);
            break;
        case 2:
            usuarioService.consultarUsuarios();
            break;
        case 3:
            idUsuarioSeleccionado = validarNumero('Introduce el Id del usuario a editar: ');
            usuarioService.editarUsuario(idUsuarioSeleccionado);
            break;
        case 4:
           idUsuarioSeleccionado = validarNumero('Introduce el Id del usuario a eliminar: ');
            usuarioService.eliminarUsuario(idUsuarioSeleccionado);
        case 5:
            console.log('Sistema finalizado')
            return;
        default:
            console.log('Operación no valida');
            break;
    }

    const reintentar = validarNumero('¿Desea realizar otra operacion? [1.Si - 2.No]: ');

    if (reintentar == 1) {
        crudUsuarios()
    } else {
        console.log('Sistema finalizado')
        return;
    };
}

crudUsuarios()