import placeDonkey from './placeDonkey';
import countdown from './countdown';

const resetGame = () => {
  const tail = document.querySelector('.tail');
  const donkey = document.querySelector('.donkey') as HTMLElement;
  const countdownElement = document.querySelector(
    '.countdown'
  ) as HTMLDivElement;

  tail?.remove();
  donkey.style.visibility = 'hidden';
  countdownElement.innerText = '3';
  placeDonkey();
  countdown();
};

export default resetGame;
