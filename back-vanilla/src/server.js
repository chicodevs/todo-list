const http = require("http");
const { getTodos, updateTodo, createTodo, removeTodo, getOptions } = require('./controllers/todoController')

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    getTodos(req, res)
  } else if (req.url === '/' && req.method === 'POST') {
    createTodo(req, res)
  } else if (req.url === '/' && req.method === 'PUT') {
    updateTodo(req, res)
  } else if (req.url === '/' && req.method === 'DELETE') {
    removeTodo(req, res)
  } else if (req.url === '/' && req.method === 'OPTIONS') {
    getOptions(req, res)  
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found',
      })
    );
  }
  
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error(`Caught exception: ${error}\n` + `Exception origin: ${error.stack}`);
});

module.exports = server;