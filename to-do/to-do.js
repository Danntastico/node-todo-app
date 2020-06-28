const fs = require('fs');
let todolist = [];

const create = (description) => {
  let toDo = {
    description,
    completed: false,
  };

  todolist.push(toDo);

  return toDo;
};

module.exports = {
  create,
};
