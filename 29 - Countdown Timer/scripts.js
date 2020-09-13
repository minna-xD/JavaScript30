let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();

  // Shows up in 24-hour format so in the video they had to do some more work
  endTime.textContent = `Be back at ${hour < 10 ? '0' : ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const mins = this.minutes.value;
  this.reset();

  // Added this check + error message just to play around a little
  if (!isNaN(mins)) {
    timer(mins * 60);
  } else {
    setInterval(() => {
      this.minutes.placeholder = 'Enter Minutes';
      this.minutes.style.backgroundColor = '#fff';
    }, 1000);
    this.minutes.placeholder = 'Invalid number';
    this.minutes.style.backgroundColor = '#ffe6e6';
  }
});