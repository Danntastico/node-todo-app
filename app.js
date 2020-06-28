const argv = require('./config/yargs').argv;

const todo = require('./to-do/to-do');

let command = argv._[0];
switch (command) {
  case 'create':
    let task = todo.create(argv.description);
    console.log(task);
    break;
  case 'list':
    console.log('Showing all to dos');
    break;
  case 'update':
    console.log('update a todo');
    break;
  default:
    console.log('Error! the command you are using is not recognized!');
    break;
}
