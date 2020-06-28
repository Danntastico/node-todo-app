const fs = require('fs');
let todolist = [];

const saveOnDB = () => {
  let data = JSON.stringify(todolist);

  fs.writeFile('db/data.json', data, (err) => {
    err
      ? console.error('Failed writing data file')
      : console.log('success writing data file');
  });
};

const loadDB = () => {
  try {
    todolist = require('../db/data.json');
  } catch (error) {
    todolist = [];
  }
};

const create = (description) => {
  loadDB();
  let toDo = {
    description,
    completed: false,
  };

  todolist.push(toDo);
  saveOnDB();
  return toDo;
};

module.exports = {
  create,
};
