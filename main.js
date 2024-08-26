const doneTaskList = document.querySelector('#done-task-list');
const doingTaskList = document.querySelector('#doing-task-list');
const toDoTaskList = document.querySelector('#to-do-task-list');
const taskNameInput = document.querySelector('#task-name-input');
const addTaskButton = document.querySelector('#add-task-button');

const newTask = taskNameInput.value;

newTask.forEach(function(task) {
    const taskContainer = document.createElement('div');
    const taskName = document.createElement('h3');
    const taskIconContainer = document.createElement('div');
    const leftArrowButton = document.createElement('button');
    const rightArrowButton = document.createElement('button');
    const trashCanButton = document.createElement('button');
    const leftArrowIcon = document.createElement('i');
    const rightArrowIcon = document.createElement('i');
    const trashCanIcon = document.createElement('i');

    taskContainer.classList.add('task');
    taskName.innerText = taskNameInput.value;
    taskName.classList.add('task-list-header');
    taskIconContainer.classList.add('task-icons');
    leftArrowButton.classList.add('arrow-left-button', 'task-button', 'hidden-button');
    trashCanButton.classList.add('trash-can-button', 'task-button');
    rightArrowButton.classList.add('arrow-right-button', 'task-button');
    leftArrowIcon.classList.add('fa-solid', 'fa-circle-arrow-left', 'arrow-left-icon', 'icon');
    trashCanIcon.classList.add('fa-solid', 'fa-trash-can', 'trash-can-icon', 'icon');
    rightArrowIcon.classList.add('fa solid', 'fa-circle-arrow-right', 'arrow-right-icon', 'icon');

    trashCanButton.addEventListener('click', function () {
        taskContainer.remove();
    })

    rightArrowButton.append(rightArrowIcon);
    trashCanButton.append(trashCanIcon);
    leftArrowButton.append(leftArrowIcon);
    taskIconContainer.append(leftArrowButton, trashCanButton, rightArrowButton);
    taskContainer.append(taskName, taskIconContainer);



    if (taskNameInput.value !== '') {
        addTaskButton.addEventListener('click', function() {

        })
    }

})