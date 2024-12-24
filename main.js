import { tasks, addTask, sortTasksByPriority, getTasksDueWithin, scheduleReminders } from './tasks.js';

document.getElementById('addTaskButton').addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    const dueTime = parseInt(document.getElementById('taskDueTime').value, 10);
    const priority = document.getElementById('taskPriority').value;

    addTask({ title, dueTime, priority });
    displayTasks();
});

document.getElementById('scheduleRemindersButton').addEventListener('click', () => {
    scheduleReminders();
});

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    sortTasksByPriority();
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.title} - ${task.priority} - Due in ${task.dueTime} mins`;
        taskList.appendChild(listItem);
    });
}
