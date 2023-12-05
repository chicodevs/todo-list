const form = document.querySelector('.add-todo');
const editBtn = document.querySelectorAll('.fa-pen');
const saveBtn = document.querySelectorAll('.fa-circle-check');
const removeBtn = document.querySelectorAll('.fa-trash-can');
const checkTodo = document.querySelectorAll('.check-todo');



addEventListener("load", () => {
  fetch('http://localhost:4000').then(res => res.json()).then( data => {
    data.forEach(el => AddTodo(el));
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = form.elements[0];

  if(!inputValue.value) {
    return;
  }

  fetch('http://localhost:4000', {
    method: 'POST',
    body: JSON.stringify({ task: inputValue.value, done: 0 })
  }).then(window.location.reload());

  inputValue.value = '';
});

editBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    RenameTodo(index);
  });
});

saveBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    SaveTodo(index);
  });
});

removeBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    RemoveTodo(index)
  });
});

checkTodo.forEach((el, index) => {
  el.addEventListener('click', (event) => {
    CheckTodo(index);
  });
});

function AddTodo (todo) {
  const list = document.querySelector('main');

  const todoContainer = document.createElement('article');
  todoContainer.setAttribute('class', 'todo-item');

  const todoCheck = document.createElement('input');
  todoCheck.setAttribute('type', 'checkbox');
  todoCheck.setAttribute('class', 'check-todo');
 

  const todoLabel = document.createElement('input');
  todoLabel.setAttribute('class', 'todo-item-label');
  todoLabel.setAttribute('id', todo.id);
  todoLabel.setAttribute('readonly', 'readonly');
  todoLabel.value = todo.task;
  const sizeInput = todo.task.length * 8 + 'px'
  todoLabel.style.width = sizeInput;
 

  const todoEdit = document.createElement('i');
  todoEdit.setAttribute('class', 'fa-solid fa-pen');

  const todoSave = document.createElement('i');
  todoSave.setAttribute('class', 'fa-solid fa-circle-check');
  

  const todoDelete = document.createElement('i');
  todoDelete.setAttribute('class', 'fa-regular fa-trash-can');

  if(todo.done) {
    todoCheck.checked = true;
    todoLabel.classList.add('checked-todo');
  }
  

  todoContainer.appendChild(todoCheck);
  todoContainer.appendChild(todoLabel);
  todoContainer.appendChild(todoEdit);
  todoContainer.appendChild(todoSave);
  todoContainer.appendChild(todoDelete);

  list.appendChild(todoContainer);

  const lastIndexEdit = document.querySelectorAll('.fa-pen').length - 1;
  const lastIndexSave = document.querySelectorAll('.fa-circle-check').length - 1;
  const lastIndexRemove = document.querySelectorAll('.fa-trash-can').length - 1;
  const lastIndexCheck = document.querySelectorAll('.check-todo').length - 1;

  todoEdit.addEventListener('click', () => {
    RenameTodo(lastIndexEdit);
  });
  todoSave.addEventListener('click', () => {
    SaveTodo(lastIndexSave);
  });
  todoDelete.addEventListener('click', () => {
    RemoveTodo(lastIndexRemove);
  });
  todoCheck.addEventListener('click', (event) => {
    CheckTodo(lastIndexCheck);
  });
}

function RenameTodo(index) {
  const listLabel = document.querySelectorAll('.todo-item-label');
  listLabel[index].removeAttribute("readonly");
  listLabel[index].focus();
}

function SaveTodo(index) {
  const listLabel = document.querySelectorAll('.todo-item-label');
  if (listLabel[index].hasAttribute("readonly")) {
    return;
  }
  fetch('http://localhost:4000', {
    method: 'PUT',
    body: JSON.stringify({ id: listLabel[index].id, task: listLabel[index].value, done: 0 })
  }).then(window.location.reload());
}


function RemoveTodo(index) {
  const list = document.querySelectorAll('.todo-item-label');
  console.log('AQUI O ID', list[index].id);
  fetch('http://localhost:4000', {
    method: 'DELETE',
    body: JSON.stringify({ id: list[index].id })
  }).then(window.location.reload());
}

function CheckTodo(index) {
  const listLabel = document.querySelectorAll('.todo-item-label');
  fetch('http://localhost:4000', {
    method: 'PUT',
    body: JSON.stringify({ id: listLabel[index].id, task: listLabel[index].value, done: 1 })
  }).then(window.location.reload());
}

