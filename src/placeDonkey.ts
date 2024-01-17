import random from './random';
import * as _ from 'lodash';

// Put the donkey randomly on the page
// - but all of it needs to be on the page

const positionDonkey = (
  donkey: HTMLElement,
  donkeyWidth: number,
  donkeyHeight: number,
  pageWidth: number,
  pageHeight: number
) => {
  const leftMostPosition = 0;
  const topMostPosition = 0;
  const rightMostPosition = pageWidth - donkeyWidth;
  const bottomMostPosition = pageHeight - donkeyHeight;

  console.log(pageWidth, donkeyWidth);
  console.log(rightMostPosition, bottomMostPosition);

  const leftPosition = random(leftMostPosition, rightMostPosition);
  const topPosition = random(topMostPosition, bottomMostPosition);

  console.log(leftPosition, topPosition);

  donkey.style.left = leftPosition + 'px';
  donkey.style.top = topPosition + 'px';
};

const resizeDonkey = (
  donkey: HTMLElement,
  donkeyWidth: number,
  donkeyHeight: number,
  pageWidth: number,
  pageHeight: number
) => {
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

  positionDonkey(donkey, donkeyWidth, donkeyHeight, pageWidth, pageHeight);
  window.addEventListener(
    'resize',
    _.debounce(() => {
      console.log('re-positioning donkey: ', pageWidth, donkeyWidth);
      // Re-get page and donkey width and height
      donkeyWidth = donkey.clientWidth;
      donkeyHeight = donkey.clientHeight;
      pageWidth = document.body.clientWidth;
      pageHeight = document.body.clientHeight;
      positionDonkey(donkey, donkeyWidth, donkeyHeight, pageWidth, pageHeight);
    }, 100)
  );
};

const placeDonkey = () => {
  const donkey = document.querySelector('.donkey') as HTMLElement;
  if (donkey) {
    let pageWidth = document.body.clientWidth;
    let pageHeight = document.body.clientHeight;
    let donkeyWidth = donkey.clientWidth;
    let donkeyHeight = donkey.clientHeight;

    // Make sure donkey doesn't take up too much of the page
    resizeDonkey(donkey, donkeyWidth, donkeyHeight, pageWidth, pageHeight);
    window.addEventListener(
      'resize',
      _.debounce(() => {
        // Re-get page width and height
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
        // Re-set donkey width and height in CSS
        donkey.style.width = '';
        donkey.style.height = '';
        resizeDonkey(donkey, donkeyWidth, donkeyHeight, pageWidth, pageHeight);
      }, 100)
    );
  }
};

export default placeDonkey;
