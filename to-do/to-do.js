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

const getList = () => {
  loadDB();
  return todolist;
};

const updateList = (description, completed = true) => {
  loadDB();
  let index = todolist.findIndex((task) => task.description === description);
  if (index >= 0) {
    todolist[index].completed = completed;
    saveOnDB();
    return true;
  } else {
    return false;
  }
};

const deleteItem = (description) => {
  loadDB();
  let newList = todolist.filter((task) => task.description !== description);
  if (newList.length === todolist.length) {
    return false;
  } else {
    todolist = newList;
    saveOnDB();
    return true;
  }
};

module.exports = {
  create,
  getList,
  updateList,
  deleteItem,
};
