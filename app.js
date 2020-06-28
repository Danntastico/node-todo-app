const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./to-do/to-do');

let command = argv._[0];
switch (command) {
  case 'create':
    let task = todo.create(argv.description);
    console.log(task);
    break;
  case 'list':
    let list = todo.getList();
    console.group('List of tasks');
    for (const item of list) {
      console.log('=====TODO====='.green);
      console.log(item.description);
      console.log(item.completed);
      console.log('=============='.green);
    }
    console.groupEnd();
    break;
  case 'update':
    let updated = todo.updateList(argv.description, argv.completed);
    console.log(updated);
    break;
  case 'delete':
    let deleted = todo.deleteItem(argv.description);
    console.log(deleted);
    break;
  default:
    console.log('Error! the command you are using is not recognized!');
    break;
}
