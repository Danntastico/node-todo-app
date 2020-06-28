const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Descripcion de la tarea por hacer',
    },
  })
  .command('actualizar', 'actualiza el estado compleatod de una tarea', {
    descripcion: {
      demmand: true,
      alias: 'd',
      desc: 'Descripcion de la tarea porhacer',
    },
    completado: {
      default: true,
      alias: 'c',
      desc: 'Marca como completado o pendiente la tarea',
    },
  })
  .help().argv;

module.exports = {
  argv,
};
