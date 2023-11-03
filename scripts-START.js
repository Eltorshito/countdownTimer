const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

const buttons = document.querySelectorAll('.timer__button');

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    
}

function displayTimeLeft(timestamp) {
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds % 60;
    const display = `*${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    timerDisplay.textContent = display;

}
