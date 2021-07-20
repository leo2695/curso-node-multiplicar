//Requireds
//const fs= require('fs'); //solo definimos la libreria que ya esta en node
//const fs= require('express'); //paquetes no nativos de node
//const fs= require('./fs'); //archivos que nosotros mismos escribimos
//const argv=require('yargs').argv;


//destructurar
//const { crearArchivo }=require('./multiplicar/multiplicar.js');
//console.clear;

//const base=3; //si mando '9' como string si lo acepta
//crearArchivo( base );


////////////////////////////////
//let salida= '';
//for(let i=1;i<=10;i++){ //el orden en que coloco los i importa, el i++ va al final
//Template Literales
//salida+=`${base}*${i}=${base*i}\n`; //salida += para que se vaya concatenando
//}
//console.log(salida);
////////////////////////////////


///////
//fs.writeFileSync(`tablas/tabla-${base}.txt`,salida);
//console.log(`tabla-${base}.txt creada`);

/////////////////////
//crearArchivo(base)
//  .then(archivo=>console.log(`Archivo creado: ${archivo}`))
//  .catch(error=>console.log(error));
//////////////////////


////TEMA argumentos desde consola

//console.log(process.argv);
//const [,,argumento3='base=5']=process.argv;
//const[,base=1]=argumento3.split('=');
//console.log(base);
/*crearArchivo(base)
  .then(archivo=>console.log(`Archivo creado: ${archivo}`))
  .catch(error=>console.log(error));*/

///////



///TEMA yargs
//const {crearArchivo} = require('./multiplicar/multiplicar.js');
//lo corto y me lo llevo al archivo en config
/* const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: true
  })
  .check((argv, options) => {
    //console.log('yargs',argv);
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser número'
    }
    return true;
  })
  .argv; */


////Tema yargs independiente
const {crearArchivo} = require('./multiplicar/multiplicar.js');
const argv=require('./config/yargs');
/////
console.clear;

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);
//console.log('base: yargs', argv.b);

crearArchivo(argv.b, argv.l, argv.t)
  .then(archivo=>console.log(`Archivo creado: ${archivo}`))
  .catch(error=>console.log(error));

///////

/////TEMA colores/////
const colors=require('colors');

/////////////////////