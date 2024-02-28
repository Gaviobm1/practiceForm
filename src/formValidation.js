function checkEmailValidity() {
  const element = document.querySelector('input[type="email"]');
  const warning = document.getElementById('warningemail');
  const constraint = '^\\w+@[a-zA-Z]+\\.[a-zA-Z]{2,3}$';
  const check = new RegExp(constraint, '');
  if (check.test(element.value)) {
    element.setCustomValidity('');
  } else {
    element.setCustomValidity("Please enter an email in the format 'xyz@xyz.xyz'");
  }
  warning.textContent = element.validationMessage;
}

function zipValidation() {
  const element = document.querySelector('input[type="zipcode"]');
  const country = document.querySelector('select').value;
  const warning = document.getElementById('warningzipcode');
  const fresp = '\\d{5}';
  const ire = '[A-Z]\\d{2}\\s[A-Z]\\d{3}';
  const checkfs = new RegExp(fresp, '');
  const checkire = new RegExp(ire, '');
  if ((country === 'France' || country === 'Spain') && checkfs.test(element.value)) {
    element.setCustomValidity('');
    warning.textContent = element.validationMessage;
  } else if ((country === 'France' || country === 'Spain') && !checkfs.test(element.value)) {
    element.setCustomValidity('Please enter a 5 digit postcode');
    warning.textContent = element.validationMessage;
  } else if (country === 'Ireland' && checkire.test(element.value)) {
    element.setCustomValidity('');
    warning.textContent = element.validationMessage;
  } else if (country === 'Ireland' && !checkire.test(element.value)) {
    element.setCustomValidity('Please enter a post code in the format(L= Letter, N=Number): LNN LNNN');
    warning.textContent = element.validationMessage;
  }
}

function passwordValidation() {
  const element = document.querySelector('input[type="password"]');
  const warning = document.getElementById('warningpassword');
  const constraint = '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]+)(?=.*\\W)';
  const check = new RegExp(constraint, '');
  if (check.test(element.value) && element.value.length >= 8) {
    element.setCustomValidity('');
    warning.textContent = element.validationMessage;
  } else if (!check.test(element.value) || element.value.length < 8) {
    element.setCustomValidity('Password must contain an uppercase and lowercase letter, a number and a special character and be 8 characters long.');
    warning.textContent = element.validationMessage;
  }
}

function passwordMatching() {
  const element = document.querySelector('input[type="passwordMatch"]');
  const warning = document.getElementById('warningpasswordMatch');
  const password = document.querySelector('input[type="passwordMatch"]');
  if (element.value === password.value && !password.validity.patternMismatch) {
    element.setCustomValidity('');
    warning.textContent = element.validationMessage;
  } else {
    element.setCustomValidity('Passwords must match and be valid');
    warning.textContent = element.validationMessage;
  }
}

export {
  checkEmailValidity,
  zipValidation,
  passwordValidation,
  passwordMatching,
};
