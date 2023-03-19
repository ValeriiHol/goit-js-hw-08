// before 
// npm i --save lodash.throttle
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onSubmit(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert(`Всі поля повинні бути заповненні.`);
  }
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
  dataForm = {};
}