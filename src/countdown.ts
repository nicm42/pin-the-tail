import showDonkey from './showDonkey';

const showCountdown = () => {
  const countdownElement = document.querySelector(
    '.countdown'
  ) as HTMLDivElement;
  let countdownNumber: number = Number(
    window.getComputedStyle(document.body).getPropertyValue('--countdown-time')
  );
  countdownElement.innerText = countdownNumber.toString();

  const countdownDuration = window
    .getComputedStyle(document.body)
    .getPropertyValue('--countdown-duration');
  const countdownDurationNumber = Number(countdownDuration.replace(/\D/gm, ''));

  countdownElement.style.display = 'block';
  countdownElement.style.animationPlayState = 'running';

  // Change the number every second
  const countdownTimer = setInterval(() => {
    countdownNumber -= 1;
    countdownElement.innerText = countdownNumber.toString();
  }, countdownDurationNumber);

  // After three seconds remove the number and show the donkey
  setTimeout(() => {
    clearInterval(countdownTimer);
    clearTimeout(this);
    countdownElement.style.display = 'none';
    countdownElement.style.animationPlayState = 'paused';
    showDonkey();
  }, countdownNumber * 1000);
};

const countdown = () => {
  const startButton = document.querySelector('.start') as HTMLButtonElement;
  startButton.style.display = 'block';

  if (startButton) {
    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      showCountdown();
    });
  }
};

export default countdown;
