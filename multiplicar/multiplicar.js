//Requireds
const fs = require('fs'); //lo quitamos de app.js y lo requerimos aquí
const colors=require('colors');
//Promesa
const crearArchivo = async (base = 1, listar, limite) => {

    try {

        if (listar === true) {
            console.log('==================='.green);
            console.log('  Tabla del: '.bgCyan, colors.blue(base));
            console.log('==================='.green);
        }


        let salida = ''; 
        let consola = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base}*${i}=${base*i}\n`;
            consola += `${base}${'x'.red}${i}=${base*i}\n`;
        }

        if (listar === true) {
            console.log(consola);

        }

        fs.writeFileSync(`tablas/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;

    } catch (error) {
        throw error;

    }

}

module.exports = {
    //crearArchivo: crearArchivo //se puede dejar solo como crearArchivo y ya
    crearArchivo
}