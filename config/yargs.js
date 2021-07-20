const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es el producto 1 de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola si esta en true'
  })
  .option('t', {
    alias: 'limite',
    type: 'number',
    demandOption: true,
    describe: 'Número del producto 2 de la tabla'
  })
  .check((argv, options) => {
    //console.log('yargs',argv);
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser número'
    }
    return true;
  })
  .argv;

  module.exports=argv;