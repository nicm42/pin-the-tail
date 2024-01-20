import showDonkey from './showDonkey';

const showCountdown = () => {
  const countdownElement = document.querySelector(
    '.countdown'
  ) as HTMLDivElement;
  let countdownNumber: number = Number(countdownElement?.innerText);

  const countdownTimer = setInterval(() => {
    countdownNumber -= 1;
    countdownElement.innerText = countdownNumber.toString();
  }, 1000);

  setTimeout(() => {
    clearInterval(countdownTimer);
    clearTimeout(this);
    countdownElement.style.display = 'none';
    showDonkey();
    countdownElement.style.display = 'none';
  }, 3000);
};

const countdown = () => {
  const startButton = document.querySelector('.start') as HTMLButtonElement;

  if (startButton) {
    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      showCountdown();
    });
  }
};

export default countdown;
