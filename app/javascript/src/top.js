import { Modal } from 'bootstrap';

document.addEventListener('turbo:load', () => {
  console.log('top/index.js loaded');
  initializeExampleModal();
});

function showExampleModal() {
  console.log('Example modal button clicked');
  const exampleModal = new Modal('#example_modal');
  exampleModal.show();
}

function initializeExampleModal() {
  const exampleModalBtn = document.querySelector('#example_modal_btn');
  if (!exampleModalBtn) return;
  exampleModalBtn.addEventListener('click', showExampleModal);
}

