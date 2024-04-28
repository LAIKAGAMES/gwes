// Funzione per mostrare le attività
function showTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        taskList.appendChild(taskItem);
    });
}

// Funzione per aggiungere una nuova attività
function addTask(task) {
    tasks.push(task);
    showTasks(tasks);
}

// Simulazione di dati di esempio per le attività
let tasks = [];
showTasks(tasks);

// Funzione per gestire l'invio del modulo di aggiunta task
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput').value.trim();
    if (taskInput !== '') {
        addTask(taskInput);
        // Pulizia del campo di input
        document.getElementById('taskInput').value = '';
    } else {
        alert('Please enter a task!');
    }
});
// Funzione per mostrare le attività
function showTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        
        // Aggiungi un pulsante per eliminare l'attività
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(index);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

// Funzione per eliminare un'attività
function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks(tasks);
    saveTasksToLocalStorage(tasks);
}

// Funzione per aggiungere una nuova attività
function addTask(task) {
    tasks.push(task);
    showTasks(tasks);
    saveTasksToLocalStorage(tasks);
}

// Funzione per salvare le attività nel localStorage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Funzione per caricare le attività dal localStorage
function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        showTasks(tasks);
    }
}

// Carica le attività dal localStorage al caricamento della pagina
loadTasksFromLocalStorage();

// Funzione per gestire l'invio del modulo di aggiunta task
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput').value.trim();
    if (taskInput !== '') {
        addTask(taskInput);
        // Pulizia del campo di input
        document.getElementById('taskInput').value = '';
    } else {
        alert('Please enter a task!');
    }
});

