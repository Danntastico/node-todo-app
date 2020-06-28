const description = { demand: true, alias: 'd', desc: 'task`s description' };
const completed = {
  default: true,
  alias: 'c',
  desc: 'Mark a task as completed or pending',
};

const argv = require('yargs')
  .command('create', 'Creates a todo', {
    description,
  })
  .command('update', 'Updates a todo to done!', {
    description,
    completed,
  })
  .command('delete', 'Delete a todo', {
    description,
  })
  .help().argv;

module.exports = {
  argv,
};
