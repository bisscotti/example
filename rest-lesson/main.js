import { getTasks, createTask, updateTask, deleteTask } from './api.js';

const completedSelect = document.querySelector('#completed');
const searchInput = document.querySelector('#search');
const sortBySelect = document.querySelector('#sortBy');
const orderSelect = document.querySelector('#order');
const limitInput = document.querySelector('#limit');
const urlText = document.querySelector('.url');
const list = document.querySelector('.tasks');
const loadMoreBtn = document.querySelector('.load-more');
const form = document.querySelector('form');

let page = 1;

const getQuery = () => {
  const query = new URLSearchParams();
  if(completedSelect.value){
    query.append('completed', completedSelect.value);
  }
  if(limitInput.value){
    query.append('limit', limitInput.value) 
  }
  if(searchInput.value){
    query.append('search', searchInput.value)
  }
  if(sortBySelect.value){
    query.append('sortBy', sortBySelect.value);
    query.append('order', orderSelect.value);
  };
  if(page){
    query.append('page', page);
  }
  return query.toString();
}

const renderTask = (task) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type='checkbox' class='update' ${task.completed ? 'checked' : ''}>
    <p>${task.title}</p>
    <button class=delete>X</button>
  `;
  list.append(li);
  li.querySelector('.update').addEventListener('change', async(event) => {
    try{
      await updateTask(task.id, {completed: event.target.checked});
    }catch(error){
      console.warn('Произошла ошибка при изменении', error)
    }
  })
  li.querySelector('.delete').addEventListener('click', async()=>{
    try{
      await deleteTask(task.id);
      li.remove();
    }catch(error){
      console.warn('Произошла ошибка при удалении', error)
    }
  })
  return li;
}

[completedSelect, searchInput, sortBySelect, orderSelect, limitInput].forEach((input) => {
  input.addEventListener('change', () => {
    loadTasks();
  })
})

const loadTasks = async(more = false) => {
  if(!more){
    page = 1;
    list.innerHTML = ``;
  }
  const query = getQuery();
  const tasks = await getTasks(query);
  urlText.innerText = `/tasks?${decodeURIComponent(query)}`
  loadMoreBtn.style.display = tasks.length < limitInput.value ? 'none' : 'block';
  tasks.forEach((task) => renderTask(task));
}

loadMoreBtn.onclick = () => {
  page++;
  loadTasks(true);
}

form.addEventListener('submit', async(event) => {
  event.preventDefault();
  try{
    const responseData = await createTask({title: event.target.title.value});
    list.prepend(renderTask(responseData))
  }catch(error){
    console.warn('Произошла ошибка при создании', error);
  }
  form.reset();
})

loadTasks();