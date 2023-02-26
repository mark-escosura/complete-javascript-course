'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');

const buttonsShowModal = document.querySelectorAll('.show-modal');
// this console.log will return a nodelist of all button elements with the classes "".show-modal"
console.log('buttonsOpenModal:', buttonsShowModal);

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//loop through the nodelist
for (let i = 0; i < buttonsShowModal.length; i++) {
  buttonsShowModal[i].addEventListener('click', openModal);
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
