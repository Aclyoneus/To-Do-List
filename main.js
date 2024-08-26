const doneTaskList = document.querySelector('#done-task-list');
const doingTaskList = document.querySelector('#doing-task-list');
const toDoTaskList = document.querySelector('#to-do-task-list');
const taskNameInput = document.querySelector('#task-name-input');
const addTaskButton = document.querySelector('#add-task-button');

const newTask = taskNameInput.value;

newTask.forEach(function(task) {
    const taskContainer = document.createElement('div');
    const taskName = document.createElement('h2');
    const taskIconContainer = document.createElement('div');
    const leftArrowButton = document.createElement('button');
    const rightArrowButton = document.createElement('button');
    const trashCanButton = document.createElement('button');
    const leftArrowIcon = document.createElement('i');
    const rightArrowIcon = document.createElement('i');
    const trashCanIcon = document.createElement('i');

})

if (taskNameInput.value !== '') {
    addTaskButton.addEventListener('click', function() {

    })
}