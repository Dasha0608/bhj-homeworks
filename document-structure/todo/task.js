const taskList = document.querySelector('.tasks__list');
const taskInput = document.querySelector('.tasks__input');
const taskForm = document.getElementById('tasks__form');

function createTask(text) {
    let task = document.createElement('div');
    task.className = 'task';

    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = text;
    task.appendChild(taskTitle);

    let taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = '&times';
    task.appendChild(taskRemove);

    taskList.appendChild(task);

    taskRemove.addEventListener('click', function() {
        task.remove();
    })
}

taskForm.addEventListener('submit', function(element) {
    element.preventDefault();
    if (taskInput.value.length > 0) {
        let taskMessage = taskInput.value;
        createTask(taskMessage);
        taskInput.value = '';
    }
})
