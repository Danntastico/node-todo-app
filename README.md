# NodeJS ToDo Application!

This is one of my firsts practices with nodeJS!

Here I made a to do application using [yargs](https://www.npmjs.com/package/yargs) to build the interactive command line.

## Installation

Just clone this repo and run the command

```bash
  //npm
 npm install
```

## Process!

1. First, create the `config/yargs.js` file where I put the different configurations to the commands that I need to create.

```javascript
    description: {
      demand: true,
      alias: 'd',
      desc: 'task`s description',
    },
```

2. create a main file where I call my config yargs file and start to proove with the commands that I'm Running

3. I've created a `to-do.js` file, where we can put the logic to create tasks

4. On a JSON file called `data.json` we save the data
