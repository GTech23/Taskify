const token = localStorage.getItem('token');
let taskContainer = document.querySelector(".task-container");
const taskForm = document.getElementById('task-form');
const todoContainer = document.getElementById('todo-container');
window.addEventListener('DOMContentLoaded', ()=> {
    const token = localStorage.getItem('token');

    if(!token){
        window.location = 'http://127.0.0.1:5500/src/pages/login.html';
        return;
    }
    const decodedToken  = jwt_decode(token);
    const userEmailEl = document.querySelector('.auth-user-email');
    const userLetter = document.querySelector('.auth-username-single').innerHTML = decodedToken.email[0].toUpperCase()
    const username = document.querySelector('.auth-username').innerHTML = decodedToken.username

    userEmailEl.innerHTML = decodedToken.email;
   
});

const taskList = [];


async function getAllTask() {
    let loading = true;
    try {
         if(loading) {
            taskContainer.innerHTML = `Fetching Tasks...`
        }
        const response = await fetch('https://taskify-backend-w1ye.onrender.com/task', {
            method: "GET",
           headers:{
            authorization: `Bearer ${token}`
           }
        });
        if(!response.ok){
            throw new Error('Something went wrong with the request');
        }

       
        const tasks = await response.json();
        taskContainer.style.display = 'none'
        let taskHTML = ''
        tasks?.map((task, i) => {
            taskHTML += `
                <div class="task">
      <h3>${task.title}</h3>
      <p><strong>Description:</strong> ${task.description}</p>
      <p><strong>Due Date:</strong> ${new Date(task.dueDate).toLocaleString().split(',')[0]}</p>
      <div class="actions">
        <button>Edit</button>
        <button>Complete</button>
        <button>Delete</button>
      </div>
    </div>

            
            `
        })

        todoContainer.innerHTML = taskHTML
         getAllTask()
         
        if(tasks.length === 0){
            taskContainer.style.display = 'flex'
            taskContainer.innerHTML = ` <img src="../../assets/no-task.svg" width="400px" alt="" />

          <div>
            <h2>No Tasks Here!</h2>
            <p>
              Add your to-dos and keep track of them to get a clear view of the
              day ahead.
            </p>
          </div>`
        }
       
    } catch (error) {
        console.error(error)
    }finally{
        loading = false;
    }
    
}



taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById('js-task-input-title').value;
    const taskDescription = document.getElementById('js-task-input-desc').value;
    const priority = document.getElementById('js-task-dropdown').value;
    const dueDate = document.getElementById('js-task-date').value;

    const newTask = {
        title: taskTitle,
        description: taskDescription,
        priority: priority,
        dueDate: dueDate
    }
    const response = await fetch('https://taskify-backend-w1ye.onrender.com/task/create', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            authorization: `Bearer ${token}`
        },

        body: JSON.stringify(newTask)

    })

    if(!response.ok){
        throw new Error(`Something went wrong with the request`);
        return;
    }

    const result = await response.json();
    console.log(result)
})

getAllTask()