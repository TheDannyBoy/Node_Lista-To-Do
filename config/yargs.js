const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado la tarea'
    }
}

const argv = require('yargs')
    .command(
        'listar',
        'Lista en consola elementos por hacer',
        opts)
    .command(
        'crear',
        'Crea elemento por hacer',
        opts)
    .command(
        'actualizar',
        'Actualiza un elemento por hacer',
        opts)
    .command(
        'borrar',
        'Borra un elemento de la lista',
        opts)
    .help()
    .argv;

module.exports = {
    argv
}