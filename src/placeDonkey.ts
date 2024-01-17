import random from './random';

const placeDonkey = () => {
  // Put the donkey randomly on the page but all of it needs to be on the page
  const donkey = document.querySelector('.donkey') as HTMLElement;
  if (donkey) {
    const pageWidth = document.body.clientWidth;
    const pageHeight = document.body.clientHeight;
    const donkeyWidth = donkey.clientWidth;
    const donkeyHeight = donkey.clientHeight;

    const leftMostPosition = 0;
    const topMostPosition = 0;
    const rightMostPosition = pageWidth - donkeyWidth;
    const bottomMostPosition = pageHeight - donkeyHeight;

    const leftPosition = random(leftMostPosition, rightMostPosition);
    const topPosition = random(topMostPosition, bottomMostPosition);

    donkey.style.left = leftPosition + 'px';
    donkey.style.top = topPosition + 'px';

    // TODO re-position on window resize
    // TODO re-size donkey based on window size
  }
};

export default placeDonkey;
