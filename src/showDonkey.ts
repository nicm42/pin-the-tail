import pinTail from './pinTail';

const showDonkey = () => {
  const donkey = document.querySelector('.donkey') as HTMLElement;
  donkey.style.visibility = 'visible';

  setTimeout(() => {
    clearTimeout(this);
    donkey.style.visibility = 'hidden';
    pinTail();
  }, 1000);
};

export default showDonkey;
