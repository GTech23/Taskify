const taskTitleEl = document.getElementById('js-task-input-title');
const taskDescriptionEl = document.getElementById('js-task-input-desc');
const taskPriorityEl = document.getElementById('js-task-dropdown');
const taskDateEl = document.getElementById('js-task-date');
const taskAddBtnEl = document.getElementById('js-task-add-btn');

const taskContainer = document.querySelector('.task-container');
const taskList = [];

taskAddBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    taskContainer.style.display = 'none'
    const taskTitle = taskTitleEl.value;
    const taskDescription = taskDescriptionEl.value;
    const taskPriority = taskPriorityEl.value;
    const taskDueDate = taskDateEl.value;
    
    const newTask = {
        taskTitle,
        taskDescription,
        taskPriority,
        taskDueDate
    }

    taskList.push(newTask)
    renderTaskOnUI();
})

function renderTaskOnUI (){
    const todoListContainer = document.getElementById('todo-container');


    let todoHTML = ''
    taskList.map((task) => {
        todoHTML +=`
             <li class="todo-item">
                <div class="todo-header">
                    <h3 class="todo-title">${task.taskTitle}</h3>
                    <span class="todo-due-date">Due: ${task.taskDueDate}</span>
                </div>
                <p class="todo-description">${task.taskDescription}</p>
    
                <div class="todo-actions">
                <button class="btn-complete">✓ Complete</button>
                <button class="btn-delete">🗑 Delete</button>
                </div>
          </li>`
        
    })

    todoListContainer.innerHTML = todoHTML;
}