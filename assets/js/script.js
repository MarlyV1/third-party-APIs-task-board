// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 0;

const newTask = document.getElementById('todo-cards');
// Todo: create a function to generate a unique task id
function generateTaskId() {
    ++nextId;
    localStorage.setItem('nextId', nextId);
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

    newTask.innerHTML = `
        <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">
                <h5>${task.title}</h5>
            </div>
            <div class="card-body">
                <p class="card-title">${task.description}</p>
                <p class="card-text">${task.dueDate}</p>
                <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
    `;
};

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
