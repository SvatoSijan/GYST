const alias = document.getElementById('username');
const age = document.getElementById('age');
const pronouns = document.getElementById('pronouns');
const password = document.getElementById('password');
const c_password = document.getElementById('c-password');
const email = document.getElementById('email');
const submitButton = document.getElementById('submitButton');

let errorForm = '';

function isValidString(inputString) {
  return /^[a-zA-Z0-9_]+$/.test(inputString);
}

function checherror() {
  errorForm = '';

  if (!isValidString(alias.value)) {
    errorForm += '  Alias can only contain alphabets, numbers, and underscores.\n';
  }



  if (password.value.toLowerCase() === 'password') {
    errorForm += '  Password cannot be "password".\n';
  }

  if (password.value !== c_password.value) {
    errorForm += '  Password and confirm password do not match.\n';
  }


}

submitButton.addEventListener('click', function (event) {
  checherror();
  if (errorForm === '') {

  } else {event.preventDefault();
    alert('Form submission failed. Please fix the following errors:\n' + errorForm);
  }
});
