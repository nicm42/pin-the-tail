import random from './random';

const placeDonkey = () => {
  // Put the donkey randomly on the page but all of it needs to be on the page
  const donkey = document.querySelector('.donkey') as HTMLElement;
  if (donkey) {
    const pageWidth = document.body.clientWidth;
    const pageHeight = document.body.clientHeight;
    let donkeyWidth = donkey.clientWidth;
    let donkeyHeight = donkey.clientHeight;

    // Make sure donkey doesn't take up too much of the page
    // TODO re-do this on window resize
    if (donkeyWidth / pageWidth > 0.5 || donkeyHeight / pageHeight > 0.5) {
      if (donkeyWidth / pageWidth > donkeyHeight / pageHeight) {
        donkey.style.width = pageWidth / 2 + 'px';
      } else {
        donkey.style.height = pageHeight / 2 + 'px';
      }
      // Get the updated donkey width and height
      donkeyWidth = donkey.clientWidth;
      donkeyHeight = donkey.clientHeight;
    }

    const leftMostPosition = 0;
    const topMostPosition = 0;
    const rightMostPosition = pageWidth - donkeyWidth;
    const bottomMostPosition = pageHeight - donkeyHeight;

    const leftPosition = random(leftMostPosition, rightMostPosition);
    const topPosition = random(topMostPosition, bottomMostPosition);

    donkey.style.left = leftPosition + 'px';
    donkey.style.top = topPosition + 'px';

    // TODO re-position on window resize
  }
};

export default placeDonkey;
