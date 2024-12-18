import { Modal } from 'bootstrap';

document.addEventListener('turbo:load', () => {
  console.log('top/user.js loaded');
  initializeUserModal();
});

function showUserModal() {
  console.log('User modal button clicked');
  const exampleModal = new Modal('#user_modal');
  exampleModal.show();
}

function initializeUserModal() {
  const userEditBtn = document.querySelector('#user_edit_btn');
  if (!userEditBtn) return;
  userEditBtn.addEventListener('click', showUserModal);
}

