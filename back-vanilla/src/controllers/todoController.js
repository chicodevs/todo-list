const Todos = require('../models/todoModel');
const { getPostData } = require('../utils');

const headers = {
  'Access-Control-Allow-Origin': '*', 
  'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Max-Age': 2592000,
  'Content-Type': 'application/json'
};

async function getTodos(req, res) {
  try {
    const todos = await Todos.findAll();

    res.writeHead(200, headers);
    res.end(JSON.stringify(todos));

  } catch (error) {
    console.log(error);
  }
}

async function updateTodo(req, res) {
  try {
    const body = await getPostData(req);
    const { id, task, done } = JSON.parse(body);

    todoItem = await Todos.findById(id)
    if(!todoItem.length) {
      res.writeHead(404, headers)
      res.end(JSON.stringify({ message: `Todo ${id} not found` }))
    } else {
      todoItem = await Todos.update(id, task, done);
      res.writeHead(200, headers)
      res.end(JSON.stringify(todoItem));
    }
  } catch (error) {
    console.log(error);
  }
}

async function createTodo(req, res) {
  try {
    const body = await getPostData(req);
    const { task, done } = JSON.parse(body);
    const todoItem = await Todos.create(task, done);

    res.writeHead(200, headers);
    res.end(JSON.stringify(todoItem));
  } catch (error) {
    console.log(error);
  }
}

async function removeTodo(req, res) {
  try {
    const body = await getPostData(req);
    const { id } = JSON.parse(body);

    todoItem = await Todos.findById(id)
    if(!todoItem.length) {
      res.writeHead(404, headers)
      res.end(JSON.stringify({ message: `Todo ${id} not found` }))
    } else {
      await Todos.remove(id);
      res.writeHead(200, headers)
      res.end(JSON.stringify({ message: `Todo ${id} removed` }))
    }
  } catch (error) {
    console.log(error);
  }
}

async function getOptions (req,res) {
  res.writeHead(204, headers);
  res.end();
}

module.exports = { getTodos, updateTodo, createTodo, removeTodo, getOptions };