const placeTail = (event: MouseEvent) => {
  document.body.removeEventListener('click', placeTail, false);

  const donkey = document.querySelector('.donkey') as HTMLElement;
  const tail = document.createElement('img');

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
};

const pinTail = () => {
  document.body.addEventListener('click', placeTail, { once: true });
};

export default pinTail;
