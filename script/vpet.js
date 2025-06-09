const tasks = [
    // Physical Activity Tasks (25)
    {text: "Drink 8 glasses of water", tip: "Set reminders on your phone for each glass"},
    {text: "Exercise for 30 minutes", tip: "Try a quick home workout or go for a jog"},
    {text: "Take a 15-minute walk", tip: "Walk during your lunch break or after dinner"},
    {text: "Do 20 push-ups", tip: "Break it into sets if needed, like 4 sets of 5"},
    {text: "Stretch for 10 minutes", tip: "Focus on major muscle groups, hold each stretch for 30 seconds"},
    {text: "Do 50 jumping jacks", tip: "Great cardio boost, can be done anywhere"},
    {text: "Hold a plank for 60 seconds", tip: "Start with 30 seconds if you're a beginner"},
    {text: "Do 15 squats", tip: "Keep your back straight and knees behind your toes"},
    {text: "Climb stairs for 10 minutes", tip: "Use your home stairs or find a public staircase"},
    {text: "Do 10 burpees", tip: "High-intensity exercise that works your whole body"},
    {text: "Dance for 15 minutes", tip: "Put on your favorite music and let loose"},
    {text: "Do yoga for 20 minutes", tip: "Try a beginner-friendly YouTube video"},
    {text: "Swim for 30 minutes", tip: "Great low-impact full-body workout"},
    {text: "Ride a bike for 45 minutes", tip: "Explore your neighborhood or use a stationary bike"},
    {text: "Do 25 lunges", tip: "Alternate legs and focus on proper form"},
    {text: "Run for 20 minutes", tip: "Start with a comfortable pace you can maintain"},
    {text: "Do 30 crunches", tip: "Keep your movements controlled and steady"},
    {text: "Walk 10,000 steps", tip: "Use a pedometer or phone app to track your steps"},
    {text: "Do wall sits for 2 minutes", tip: "Break into 30-second intervals if needed"},
    {text: "Practice balance exercises", tip: "Try standing on one foot for 30 seconds each"},
    {text: "Do resistance band exercises", tip: "Great for strength training at home"},
    {text: "Play a sport for 45 minutes", tip: "Basketball, tennis, soccer - any sport you enjoy"},
    {text: "Do mountain climbers for 3 minutes", tip: "Keep your core engaged throughout"},
    {text: "Walk up and down stairs 20 times", tip: "Use proper form and take breaks if needed"},
    {text: "Do jumping rope for 10 minutes", tip: "Start with 2-minute intervals if you're new to it"},

    // Nutrition Tasks (25)
    {text: "Eat 5 servings of fruits/vegetables", tip: "Include a fruit or veggie with each meal"},
    {text: "Prepare a healthy breakfast", tip: "Include protein, whole grains, and fruit"},
    {text: "Drink green tea", tip: "Rich in antioxidants and metabolism-boosting compounds"},
    {text: "Eat a handful of nuts", tip: "Almonds, walnuts, or mixed nuts for healthy fats"},
    {text: "Have a protein-rich snack", tip: "Greek yogurt, boiled eggs, or protein smoothie"},
    {text: "Eat fish or lean protein", tip: "Salmon, chicken breast, or tofu for dinner"},
    {text: "Avoid processed foods today", tip: "Choose whole, natural foods instead"},
    {text: "Eat a colorful salad", tip: "Include at least 5 different colored vegetables"},
    {text: "Drink a green smoothie", tip: "Blend spinach, banana, and your favorite fruits"},
    {text: "Have oatmeal for breakfast", tip: "Top with berries and nuts for extra nutrition"},
    {text: "Eat probiotic foods", tip: "Yogurt, kefir, or fermented vegetables"},
    {text: "Reduce sugar intake", tip: "Avoid sugary drinks and desserts today"},
    {text: "Eat whole grains", tip: "Choose brown rice, quinoa, or whole wheat bread"},
    {text: "Have a healthy dinner before 7 PM", tip: "Gives your body time to digest before sleep"},
    {text: "Snack on fresh fruit", tip: "Keep cut fruit visible and easily accessible"},
    {text: "Drink water before each meal", tip: "Helps with portion control and hydration"},
    {text: "Eat mindfully for one meal", tip: "No distractions, focus on taste and texture"},
    {text: "Try a new healthy recipe", tip: "Experiment with cuisines rich in vegetables"},
    {text: "Eat foods rich in omega-3", tip: "Salmon, walnuts, chia seeds, or flaxseeds"},
    {text: "Have a vegetarian meal", tip: "Focus on legumes, vegetables, and whole grains"},
    {text: "Limit caffeine after 2 PM", tip: "Prevents interference with sleep quality"},
    {text: "Pack healthy snacks", tip: "Prepare nutritious options to avoid vending machines"},
    {text: "Eat calcium-rich foods", tip: "Dairy, leafy greens, or fortified plant milks"},
    {text: "Have herbal tea instead of soda", tip: "Chamomile, peppermint, or ginger tea"},
    {text: "Eat antioxidant-rich berries", tip: "Blueberries, strawberries, or blackberries"},

    // Mental Health & Wellness Tasks (25)
    {text: "Meditate for 10 minutes", tip: "Use a guided meditation app to get started"},
    {text: "Practice gratitude for 5 minutes", tip: "Write down three things you're grateful for"},
    {text: "Read a book for 30 minutes", tip: "Set aside time before bed for reading"},
    {text: "Practice deep breathing", tip: "4-7-8 technique: inhale 4, hold 7, exhale 8"},
    {text: "Write in a journal", tip: "Reflect on your day, goals, or feelings"},
    {text: "Listen to calming music", tip: "Classical, nature sounds, or meditation music"},
    {text: "Do a digital detox for 2 hours", tip: "No phones, computers, or screens"},
    {text: "Practice positive self-talk", tip: "Replace negative thoughts with encouraging ones"},
    {text: "Call a friend or family member", tip: "Social connection is vital for mental health"},
    {text: "Learn something new", tip: "Watch educational videos or read articles"},
    {text: "Practice mindfulness", tip: "Focus on the present moment during daily activities"},
    {text: "Do a puzzle or brain game", tip: "Crosswords, sudoku, or mobile brain training apps"},
    {text: "Spend time in nature", tip: "Even 10 minutes outside can improve mood"},
    {text: "Practice progressive muscle relaxation", tip: "Tense and release muscle groups systematically"},
    {text: "Write down your goals", tip: "Short-term and long-term objectives"},
    {text: "Do something creative", tip: "Draw, paint, write, or play music"},
    {text: "Practice forgiveness", tip: "Let go of grudges for your own mental peace"},
    {text: "Compliment someone", tip: "Genuine compliments boost both your moods"},
    {text: "Practice saying 'no'", tip: "Set healthy boundaries to reduce stress"},
    {text: "Do a random act of kindness", tip: "Help others to boost your own happiness"},
    {text: "Visualize your success", tip: "Spend 5 minutes imagining achieving your goals"},
    {text: "Practice acceptance", tip: "Accept things you cannot change"},
    {text: "Declutter a small space", tip: "A tidy environment can improve mental clarity"},
    {text: "Practice self-compassion", tip: "Treat yourself with the same kindness you'd show a friend"},
    {text: "Do breathing exercises", tip: "Box breathing: inhale 4, hold 4, exhale 4, hold 4"},

    // Sleep & Recovery Tasks (12)
    {text: "Get 8 hours of sleep", tip: "Set a consistent bedtime and wake-up time"},
    {text: "Take a 20-minute power nap", tip: "Short naps can boost energy without affecting night sleep"},
    {text: "Create a bedtime routine", tip: "Dim lights, no screens, relaxing activities"},
    {text: "Wake up without snoozing", tip: "Place alarm across the room to avoid snooze button"},
    {text: "Avoid screens 1 hour before bed", tip: "Blue light can interfere with sleep hormones"},
    {text: "Keep bedroom cool and dark", tip: "Optimal sleep temperature is 65-68°F"},
    {text: "Do gentle stretches before bed", tip: "Help your body relax and prepare for sleep"},
    {text: "Practice sleep hygiene", tip: "Use bed only for sleep, keep room clean"},
    {text: "Limit daytime naps to 30 minutes", tip: "Longer naps can interfere with nighttime sleep"},
    {text: "Have a relaxing bath", tip: "Warm water helps lower body temperature for sleep"},
    {text: "Listen to a sleep story or meditation", tip: "Calming audio can help you fall asleep"},
    {text: "Go to bed 30 minutes earlier", tip: "Gradually adjust your bedtime for better sleep"},

    // Hydration & Habits Tasks (13)
    {text: "Start day with a glass of water", tip: "Rehydrate after hours without fluids"},
    {text: "Drink water every hour", tip: "Set hourly reminders to maintain hydration"},
    {text: "Replace one sugary drink with water", tip: "Gradually reduce sugar intake"},
    {text: "Add lemon to your water", tip: "Natural flavor and vitamin C boost"},
    {text: "Track your water intake", tip: "Use a water bottle with measurements"},
    {text: "Drink coconut water", tip: "Natural electrolytes for hydration"},
    {text: "Have herbal tea", tip: "Counts toward hydration and provides antioxidants"},
    {text: "Eat water-rich foods", tip: "Cucumber, watermelon, oranges, soup"},
    {text: "Check urine color", tip: "Pale yellow indicates good hydration"},
    {text: "Carry a water bottle", tip: "Makes it easier to drink throughout the day"},
    {text: "Drink water before, during, after exercise", tip: "Maintain hydration during physical activity"},
    {text: "Set a water drinking goal", tip: "Aim for half your body weight in ounces"},
    {text: "Make infused water", tip: "Add fruits, herbs, or vegetables for flavor"}
];

const emotions = ["😴", "🙁", "😐", "🙂", "😊", "😄", "🥳", "🤩", "😍"];

const motivationalQuotes = [
    "Great job! Keep up the good work!",
    "You're making fantastic progress!",
    "Your dedication is inspiring!",
    "You're on the path to a healthier you!",
    "Every step counts. You're doing amazing!",
    "Small changes lead to big results!",
    "You're stronger than you think!",
    "Progress, not perfection!",
    "Your future self will thank you!",
    "Consistency is key - you've got this!",
    "Health is wealth - invest in yourself!",
    "You're building healthy habits that last!",
    "Every healthy choice matters!",
    "You're becoming the best version of yourself!",
    "Your commitment to health is admirable!",
    "One day at a time, one task at a time!",
    "You're proving that you can do hard things!",
    "Your body and mind are getting stronger!",
    "Success is the sum of small efforts!",
    "You're creating a lifestyle, not just completing tasks!"
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