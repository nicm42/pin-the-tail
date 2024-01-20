const showDonkey = () => {
  const donkey = document.querySelector('.donkey') as HTMLElement;
  donkey.style.visibility = 'visible';

  setTimeout(() => {
    donkey.style.visibility = 'hidden';
    clearTimeout(this);
  }, 1000);
};

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
