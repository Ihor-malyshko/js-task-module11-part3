import timer from './timer';

const form = document.querySelector('form');

form.addEventListener('submit', setTimer);

function setTimer(event) {
  event.preventDefault();
  let time = event.target[0].value;
  timer.start(time);
}
