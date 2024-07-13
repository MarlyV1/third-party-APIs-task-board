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
   
    if (task.dueDate && task.status !== 'done') {
        const today = dayjs();
        if (today.isSame(task.dueDate, 'day')) {
            taskCard.addClass('bg-warning text-white')
        } else if(today.isAfter(task.dueDate)) {
            taskCard.addClass('bg-danger text-white')
            cardDeleteBtn.addClass('border-light')
        }
    }
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);
    return taskCard;
}

//Renders the task list and make cards draggable
function renderTaskList() {
    //Empties the columns 
    $('#todo-cards').empty();
    $('#in-progress-cards').empty();
    $('#done-cards').empty();

    for(let task of taskList){
        if(task.status === 'to-do') {
            $('#todo-cards').append(createTaskCard(task))
        } else if(task.status === 'in-progress') {
            $('#in-progress-cards').append(createTaskCard(task))
        } else {
            $('#done-cards').append(createTaskCard(task))
        }
    }
    $('.task-card').draggable({opacity: 0.7, zIndex: 100})
}

//Handles a new task being added
function handleAddTask(event){
    const newTask = {
        id: generateTaskId(),
        title: $('#title-name').val(),
        dueDate: $('#due-date').val(),
        description: $('#description-text').val(),
        status: 'to-do'
    }
    taskList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(taskList))
    $('#title-name').val('')
    $('#due-date').val('')
    $('#description-text').val('')
    renderTaskList();
}

//Handle a task being deleted
function handleDeleteTask(event){
    const taskId = $(this).closest('.task-card').attr('data-task-id');
    taskList = taskList.filter(task => task.id !== Number(taskId));
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = ui.draggable[0].dataset.taskId;
    const newStatus = event.target.id;
    for(let task of taskList) {
        if(task.id === Number(taskId)) {
            task.status = newStatus;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
