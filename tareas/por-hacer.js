const fs = require('fs');


let listadoPorHacer = [];


const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(
        'db/data.json',
        data,
        (err) => {
            if (err)
                throw new Error('Error al crear el archivo'.red, err);
        }
    );

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(
        tarea => tarea.descripcion === descripcion
    );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();
    listadoPorHacer.push(porHacer);

    guardaDB();

    return porHacer;

}

const borrar = (descripcion) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(
        tarea => tarea.descripcion === descripcion
    );
    console.log('Index', index);


    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardaDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    actualizar,
    borrar,
    crear,
    getListado
}