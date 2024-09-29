const tasks = [
    {text: "Drink 8 glasses of water", tip: "Set reminders on your phone for each glass"},
    {text: "Exercise for 30 minutes", tip: "Try a quick home workout or go for a jog"},
    {text: "Eat 5 servings of fruits/vegetables", tip: "Include a fruit or veggie with each meal"},
    {text: "Meditate for 10 minutes", tip: "Use a guided meditation app to get started"},
    {text: "Get 8 hours of sleep", tip: "Set a consistent bedtime and wake-up time"},
    {text: "Take a 15-minute walk", tip: "Walk during your lunch break or after dinner"},
    {text: "Do 20 push-ups", tip: "Break it into sets if needed, like 4 sets of 5"},
    {text: "Practice gratitude for 5 minutes", tip: "Write down three things you're grateful for"},
    {text: "Stretch for 10 minutes", tip: "Focus on major muscle groups, hold each stretch for 30 seconds"},
    {text: "Read a book for 30 minutes", tip: "Set aside time before bed for reading"}
];

const emotions = ["😴", "🙁", "😐", "🙂", "😊", "😄", "🥳", "🤩", "😍"];
const motivationalQuotes = [
    "Great job! Keep up the good work!",
    "You're making fantastic progress!",
    "Your dedication is inspiring!",
    "You're on the path to a healthier you!",
    "Every step counts. You're doing amazing!"
];

const tasksContainer = document.getElementById('tasks-container');
const petEmotion = document.getElementById('pet-emotion');
const progressDisplay = document.getElementById('progress');
const treatMessage = document.getElementById('treat-message');
const motivationalQuoteDisplay = document.getElementById('motivational-quote');

let petName = '';

function namePet() {
    petName = prompt("Please name your pet:", "Buddy");
    if (petName === null || petName.trim() === "") {
        petName = "Buddy";
    }
    localStorage.setItem('petName', petName);
}

function loadPetName() {
    petName = localStorage.getItem('petName');
    if (!petName) {
        namePet();
    }
}

function getRandomTasks(count) {
    return tasks.sort(() => 0.5 - Math.random()).slice(0, count);
}

function saveTasks(tasks) {
    localStorage.setItem('healthTasks', JSON.stringify(tasks));
}

function loadTasks() {
    return JSON.parse(localStorage.getItem('healthTasks')) || [];
}

function renderTasks() {
    const tasks = loadTasks();
    tasksContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        if (!task.completed) {
            const taskCard = document.createElement('div');
            taskCard.className = 'task-card';
            taskCard.innerHTML = `
                <div class="task-header">
                    <span>${task.text}</span>
                    <button class="btn btn-complete">Complete</button>
                </div>
                <div class="task-tip">Tip: ${task.tip}</div>
            `;
            taskCard.querySelector('.btn-complete').addEventListener('click', () => completeTask(index));
            tasksContainer.appendChild(taskCard);
        }
    });
    updateProgress();
    updatePetEmotion();
}

function completeTask(index) {
    const tasks = loadTasks();
    tasks[index].completed = true;
    saveTasks(tasks);
    renderTasks();
    giveTreat();
    checkAllTasksCompleted();
}

function updateProgress() {
    const tasks = loadTasks();
    const completedCount = tasks.filter(task => task.completed).length;
    progressDisplay.textContent = `${completedCount}/${tasks.length} tasks completed`;
}

function updatePetEmotion() {
    const tasks = loadTasks();
    const completedCount = tasks.filter(task => task.completed).length;
    const emotionIndex = Math.min(Math.floor(completedCount / tasks.length * emotions.length), emotions.length - 1);
    petEmotion.textContent = emotions[emotionIndex];
}

function giveTreat() {
    treatMessage.textContent = `${petName} got a treat!`;
    setTimeout(() => {
        treatMessage.textContent = '';
    }, 3000);
}

function checkAllTasksCompleted() {
    const tasks = loadTasks();
    if (tasks.every(task => task.completed)) {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        motivationalQuoteDisplay.textContent = `${petName} says: "${randomQuote}"`;
    }
}

function resetTasks() {
    const newTasks = getRandomTasks(5);
    saveTasks(newTasks);
    motivationalQuoteDisplay.textContent = '';
    renderTasks();
}

function checkAndResetDaily() {
    const lastResetDate = localStorage.getItem('lastResetDate');
    const today = new Date().toDateString();
    if (lastResetDate !== today) {
        resetTasks();
        localStorage.setItem('lastResetDate', today);
    }
}

loadPetName();
checkAndResetDaily();
renderTasks();
setInterval(checkAndResetDaily, 60000);