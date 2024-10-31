console.log('controllers/custom/top.js');

const exampleModalBtn = document.querySelector('#example_modal_btn');

exampleModalBtn.addEventListener('click', function () {
  console.log('exampleModalBtn click');
  const exampleModal = new bootstrap.Modal('#example_modal');
  exampleModal.show(exampleModal);
})

