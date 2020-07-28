console.log('start');
const refs = {
  days: document.querySelector('[days]'),
  hours: document.querySelector('[hours]'),
  mins: document.querySelector('[mins]'),
  secs: document.querySelector('[secs]'),
  startButton: document.querySelector('.start'),
};

const timer = {
  intervalId: null,
  start() {
    const startTime = Date.now() + 10000;
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      if (deltaTime > 0) {
        updateClockface(deltaTime);
      } else {
        updateClockface(0);
        timer.stop();
      }
    }, 1000);
  },
  stop() {
    clearInterval(intervalId);
    intervalId = null;
  },
};

timer.start();

function updateClockface(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

console.log('end');
