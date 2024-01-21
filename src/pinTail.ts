import showDialog from './showDialog';

const placeTail = (event: MouseEvent) => {
  document.body.removeEventListener('click', placeTail, false);

  const donkey = document.querySelector('.donkey') as HTMLElement;
  const tail = document.createElement('img');
  const donkeyTimeout = 250;
  const dialogTImeout = donkeyTimeout + 1000;

  document.body.appendChild(tail);
  tail.src = '/tail.png';
  tail.alt = 'Tail';
  tail.classList.add('tail');
  tail.style.left = event.clientX + 'px';
  tail.style.top = event.clientY + 'px';

  setTimeout(() => {
    clearTimeout(this);
    donkey.style.visibility = 'visible';
  }, 250);

  setTimeout(() => {
    clearTimeout(this);
    showDialog();
  }, dialogTImeout);
};

const pinTail = () => {
  document.body.addEventListener('click', placeTail, { once: true });
};

export default pinTail;
