const toDoTaskList = document.querySelector('#to-do-task-list');
const doingTaskList = document.querySelector('#doing-task-list');
const doneTaskList = document.querySelector('#done-task-list');
const taskNameInput = document.querySelector('#task-name-input');
const addTaskButton = document.querySelector('#add-task-button');

function createTask(name) {
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
    taskName.innerText = name;
    taskName.classList.add('task-list-header');
    taskIconContainer.classList.add('task-icons');
    leftArrowButton.classList.add('arrow-left-button', 'task-button', 'hidden-button');
    trashCanButton.classList.add('trash-can-button', 'task-button');
    rightArrowButton.classList.add('arrow-right-button', 'task-button');
    leftArrowIcon.classList.add('fa-solid', 'fa-circle-arrow-left', 'arrow-left-icon', 'icon');
    trashCanIcon.classList.add('fa-solid', 'fa-trash-can', 'trash-can-icon', 'icon');
    rightArrowIcon.classList.add('fa-solid', 'fa-circle-arrow-right', 'arrow-right-icon', 'icon');

    rightArrowButton.append(rightArrowIcon);
    trashCanButton.append(trashCanIcon);
    leftArrowButton.append(leftArrowIcon);
    taskIconContainer.append(leftArrowButton, trashCanButton, rightArrowButton);
    taskContainer.append(taskName, taskIconContainer);

    trashCanButton.addEventListener('click', function() {
        taskContainer.remove();
    })

    return taskContainer;
}

addTaskButton.addEventListener('click', function() {
    const newTask = taskNameInput.value;

    if (!newTask) {
        return;
    }

    const taskContainer = createTask(newTask);
    toDoTaskList.append(taskContainer);

    rightArrowButton.addEventListener('click', function() {
        doingTaskList.append(taskContainer);
        const doingRightArrowButton = rightArrowButton.cloneNode(true);
        const doingLeftArrowButton = leftArrowButton.cloneNode(true);

        rightArrowButton.replaceWith(doingRightArrowButton);
        leftArrowButton.replaceWith(doingLeftArrowButton);
        doingLeftArrowButton.classList.remove('hidden-button');

        doingLeftArrowButton.addEventListener('click', function() {
            toDoTaskList.append(taskContainer);
            doingLeftArrowButton.replaceWith(leftArrowButton);
            doingRightArrowButton.replaceWith(rightArrowButton);
            leftArrowButton.classList.add('hidden-button');
        })

        doingRightArrowButton.addEventListener('click', function() {
            doneTaskList.append(taskContainer);
            const doneLeftArrowButton = doingLeftArrowButton.cloneNode(true);
            doingLeftArrowButton.replaceWith(doneLeftArrowButton);
            doingRightArrowButton.classList.add('hidden-button');

            doneLeftArrowButton.addEventListener('click', function() {
                doingTaskList.append(taskContainer);
                doneLeftArrowButton.replaceWith(doingLeftArrowButton);
                doingRightArrowButton.classList.remove('hidden-button');
            })
        })
    })
})