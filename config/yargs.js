const argv = require('yargs')
  .command('create', 'Creates a todo', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'task`s description',
    },
  })
  .command('update', 'Updates a todo to done!', {
    description: {
      demmand: true,
      alias: 'd',
      desc: 'task`s description',
    },
    completed: {
      default: true,
      alias: 'c',
      desc: 'Mark a task as completed or pending',
    },
  })
  .help().argv;

module.exports = {
  argv,
};
