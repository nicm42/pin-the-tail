import resetGame from './resetGame';

const showDialog = () => {
  const dialog = document.querySelector('dialog');

  if (dialog) {
    const yesButton = dialog.querySelector('.yes') as HTMLButtonElement;
    const noButton = dialog.querySelector('.no') as HTMLButtonElement;

    dialog.showModal();

    if (yesButton) {
      yesButton.addEventListener('click', () => {
        dialog.close();
        resetGame();
      });
    }

    if (noButton) {
      noButton.addEventListener('click', () => {
        dialog.close();
      });
    }
  }
};

export default showDialog;
