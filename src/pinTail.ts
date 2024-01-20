const pinTail = () => {
  const donkey = document.querySelector('.donkey') as HTMLElement;

  document.body.addEventListener(
    'click',
    (event) => {
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
        pinTail();
      }, 1000);
    },
    { once: true }
  );
};

export default pinTail;
