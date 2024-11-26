let tasks = [];

// Function to add a new task
function addTask(description, priority) {
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1; // Generate unique ID
    const task = { id, description, priority };
    tasks.push(task);
    console.log(`Task added: ${JSON.stringify(task)}`);
    displayAllTasks(); // Display tasks in the console after adding
}

// Function to handle the add task button click
function handleAddTask() {
    const description = document.getElementById("taskDescription").value.trim();
    const priority = document.getElementById("taskPriority").value;

    if (!description) {
        alert("Task description cannot be empty.");
        return;
    }

    addTask(description, priority);

    // Clear input fields
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskPriority").value = "high";
}

// Function to display all tasks
function displayAllTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("All Tasks:");
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}`);
        });
    }
}

// Function to delete a task by ID
function deleteTaskById(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        const removedTask = tasks.splice(taskIndex, 1);
        console.log(`Task deleted: ${JSON.stringify(removedTask[0])}`);
        displayAllTasks(); // Display tasks after deletion
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
}

// Function to prompt the user for task deletion
function promptDeleteTask() {
    const taskId = parseInt(prompt("Enter the ID of the task to delete:"), 10);
    if (isNaN(taskId)) {
        alert("Invalid ID. Please enter a numeric value.");
        return;
    }
    deleteTaskById(taskId);
}

// Function to display tasks by priority
function displayTasksByPriority(priority) {
    const filteredTasks = tasks.filter(task => task.priority === priority);
    if (filteredTasks.length === 0) {
        console.log(`No tasks with priority "${priority}" found.`);
    } else {
        console.log(`Tasks with priority "${priority}":`);
        filteredTasks.forEach(task => {
            console.log(`ID: ${task.id}, Description: ${task.description}`);
        });
    }
}

// Function to prompt the user for priority filtering
function promptDisplayByPriority() {
    const priority = prompt("Enter the priority to filter tasks (high, medium, low):").toLowerCase();
    if (priority !== "high" && priority !== "medium" && priority !== "low") {
        alert("Invalid priority. Please enter 'high', 'medium', or 'low'.");
        return;
    }
    displayTasksByPriority(priority);
}
