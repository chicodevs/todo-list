let db = require('../config/database');

async function findAll() {
  return new Promise((resolve, reject)=>{
    db.query(`SELECT * FROM todos`,(error, result)=>{
      if(error){
        return reject(error);
      }
      return resolve(result);
    });
  });
}

async function findById(id) {
  return new Promise((resolve, reject)=>{
    db.query(`SELECT * FROM todos WHERE id = ${id}`,(error, result)=>{
      if(error){
        return reject(error);
      }
      return resolve(result);
    });
  });
}

function update(id, task, done) {
  return new Promise((resolve, reject)=>{
    db.query(`UPDATE todos SET done = ${done}, task = '${task}' WHERE id = ${id}`,(error, result)=>{
      if(error){
        return reject(error);
      }
      return resolve(result);
    });
  });
}

function create(task, done) {
  return new Promise((resolve, reject)=>{
    db.query(`INSERT INTO todos (id, task, done) VALUES (NULL, '${task}', ${done})`,(error, result)=>{
      if(error){
        return reject(error);
      }
      return resolve(result);
    });
  });
}

function remove(id) {
  return new Promise((resolve, reject)=>{
    db.query(`DELETE from todos WHERE id = ${id}`,(error, result)=>{
      if(error){
        return reject(error);
      }
      return resolve(result);
    });
  });
}

module.exports = { findAll, findById, update, create, remove };