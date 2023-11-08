const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

const buttons = document.querySelectorAll('.timer__button');

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds % 60;
    const display = `*${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    timerDisplay.textContent = display;

}

function displayEndTime (timestamp) {
    const end = new date(timestamp)

    let hours = end.getHours();
    const minutes = end.getMinutes();

    const adjustedHours = hours > 12 ? hours - 12 : hours;
    const amPm = hours >= 12 ? 'PM' : 'AM';

    const formattedTime = `${adjustedHours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
    endTime.textContent = `Fin à ${formattedTime}`;
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', function(){
        const seconds = parseInt(this.dataset.time);
        startTimer(seconds);
    });
});