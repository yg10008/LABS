export const tasks = [];

export function addTask(task) {
    try {
        if (!task.title || !task.dueTime || !task.priority) {
            throw new Error("Task must have title, dueTime, and priority.");
        }
        tasks.push(task);
        console.log("Task added successfully!");
    } catch (error) {
        console.error(error.message);
    }
}

export function sortTasksByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
}

export function getTasksDueWithin(minutes) {
    const now = 0; 
    return tasks.filter(task => task.dueTime <= now + minutes);
}

export function scheduleReminders() {
    const now = Date.now(); 

    tasks.forEach(task => {
        const delay = task.dueTime * 60000;
        const reminderTime = now + delay;

        if (delay > 0) {
            setTimeout(() => {
                alert(`Reminder: Task "${task.title}" is due now!`);
                console.log(`Reminder sent for task: "${task.title}"`);
            }, delay);
        } else {
            console.warn(`Task "${task.title}" has an invalid or past dueTime.`);
        }
    });
}
