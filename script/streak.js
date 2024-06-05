const progressBar = document.getElementById('progress-bar');
    const checkInBtn = document.getElementById('check-in-btn');
    const timer = document.getElementById('timer');
    const popupForm = document.getElementById('popup-form');

    let lastCheckInTime = localStorage.getItem('lastCheckInTime');
    let consecutiveMinutes = localStorage.getItem('consecutiveMinutes') || 0;
    let nextCheckInTime = localStorage.getItem('nextCheckInTime') || 0;
    let isProgressResetNeeded = false;

    function checkIn() {
      const now = new Date().getTime();

      if (now < nextCheckInTime) {
        const remainingSeconds = Math.ceil((nextCheckInTime - now) / 1000);
        timer.textContent = `Next check-in available in ${remainingSeconds} seconds.`;
        return;
      }

      if (consecutiveMinutes === 0 || isProgressResetNeeded) {
        consecutiveMinutes = 1;
        isProgressResetNeeded = false;
      } else {
        consecutiveMinutes++;
      }

      localStorage.setItem('lastCheckInTime', now);
      localStorage.setItem('consecutiveMinutes', consecutiveMinutes);

      const progress = Math.min(Math.round((consecutiveMinutes / 7) * 100), 100);
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress);
      progressBar.textContent = `${progress}%`;

      if (progress === 100) {
        popupForm.style.display = 'block';
        popupForm.classList.add('show');
      } else {
        nextCheckInTime = now + 86400000; // 1 day (24 hours)
        localStorage.setItem('nextCheckInTime', nextCheckInTime);
        setTimeout(() => {
          checkInBtn.disabled = false;
          timer.textContent = '';
        }, 86400000); // Update this line
        checkInBtn.disabled = true;
      }
    }

    function submitForm() {
      const nameInput = document.getElementById('name');
      const phoneInput = document.getElementById('phone');

      if (nameInput.value && phoneInput.value) {
        alert('Thank you for Compleating the Task! Your Rewaard will Credit Soon.');
        nameInput.value = '';
        phoneInput.value = '';
        resetProgress();
      } else {
        alert('Please enter your name and phone number.');
      }
    }

    function resetProgress() {
      progressBar.style.width = '0%';
      progressBar.setAttribute('aria-valuenow', 0);
      progressBar.textContent = '0%';
      localStorage.removeItem('lastCheckInTime');
      localStorage.removeItem('consecutiveMinutes');
      localStorage.removeItem('nextCheckInTime');
      consecutiveMinutes = 0;
      nextCheckInTime = 0;
      popupForm.style.display = 'none';
      popupForm.classList.remove('show');
      isProgressResetNeeded = true;
    }

    function startCountdown() {
      const now = new Date().getTime();
      nextCheckInTime = now + (7 * 86400000); // 7 days (24 hours * 7)
      localStorage.setItem('nextCheckInTime', nextCheckInTime);
      const countdownInterval = setInterval(() => {
        const remainingSeconds = Math.ceil((nextCheckInTime - new Date().getTime()) / 1000);
        if (remainingSeconds <= 0) {
          clearInterval(countdownInterval);
          timer.textContent = '';
          checkInBtn.disabled = false;
        } else {
          timer.textContent = `Next check-in available in NEXt Day..`;
        }
      }, 1000);
    }

    function init() {
      const progress = Math.min(Math.round((consecutiveMinutes / 7) * 100), 100);
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress);
      progressBar.textContent = `${progress}%`;

      if (progress === 100) {
        popupForm.style.display = 'block';
        popupForm.classList.add('show');
      } else if (nextCheckInTime > new Date().getTime()) {
        const remainingSeconds = Math.ceil((nextCheckInTime - new Date().getTime()) / 1000);
        checkInBtn.disabled = true;
        setTimeout(() => {
          checkInBtn.disabled = false;
          timer.textContent = '';
        }, remainingSeconds * 1000);
      } else {
        checkInBtn.disabled = false;
      }
    }

    init(); // Initialize the progress bar and check-in status