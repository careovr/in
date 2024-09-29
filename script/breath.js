const breathingCircle = document.getElementById('breathingCircle');
        const startBtn = document.getElementById('startBtn');
        const durationSelect = document.getElementById('durationSelect');
        const inhaleAudio = document.getElementById('inhaleAudio');
        const exhaleAudio = document.getElementById('exhaleAudio');

        let isBreathing = false;
        let interval;

        startBtn.addEventListener('click', () => {
            if (!isBreathing) {
                startBreathing();
            } else {
                stopBreathing();
            }
        });

        function startBreathing() {
            isBreathing = true;
            startBtn.textContent = 'Stop Breathing Exercise';
            
            const duration = durationSelect.value * 60 * 1000;
            const endTime = Date.now() + duration;

            breathe();
            interval = setInterval(() => {
                if (Date.now() >= endTime) {
                    stopBreathing();
                } else {
                    breathe();
                }
            }, 8000);
        }

        function stopBreathing() {
            isBreathing = false;
            startBtn.textContent = 'Start Breathing Exercise';
            clearInterval(interval);
            breathingCircle.classList.remove('inhale', 'exhale');
            breathingCircle.textContent = 'Inhale';
        }

        function breathe() {
            breathingCircle.classList.add('inhale');
            breathingCircle.classList.remove('exhale');
            breathingCircle.textContent = 'Inhale';
            inhaleAudio.play();
            
            setTimeout(() => {
                breathingCircle.classList.add('exhale');
                breathingCircle.classList.remove('inhale');
                breathingCircle.textContent = 'Exhale';
                exhaleAudio.play();
            }, 5000);
        }