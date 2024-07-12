// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 0;


//Generates a unique task id
function generateTaskId() {
    ++nextId;
    localStorage.setItem('nextId', nextId);
    return nextId;
}

//Creates a task card
function createTaskCard(task) {
    const taskCard = $("<div>").addClass("card w-75 task-card my-3").attr("data-task-id", task.id);
    const cardHeader = $("<div>").addClass("card-header h4").text(task.title);
    const cardBody = $("<div>").addClass("card-body");
    const cardDescription = $("<p>").addClass("card-text").text(task.description);
    const cardDueDate = $("<p>").addClass("card-text").text(task.dueDate);
    const cardDeleteBtn = $("<button>").addClass("btn btn-danger delete").text("Delete");
    cardDeleteBtn.on("click", handleDeleteTask);
   
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
