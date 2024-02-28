import { makeInput, makeSelect } from './makeInputs';
import {
  checkEmailValidity,
  zipValidation,
  passwordValidation,
  passwordMatching,
} from './formValidation';
import './style.css';

const email = makeInput('Email', 'email');
email.input.setAttribute('pattern', '^\\w+@[a-zA-Z]+\\.[a-zA-Z]{2,3}$');

const country = makeSelect(['France', 'Spain', 'Ireland'], 'Country', 'country');

const zipCode = makeInput('ZIP', 'zipcode');
const password = makeInput('Password', 'password');
password.input.setAttribute('pattern', '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]+)(?=.*\\W)');
const passwordMatch = makeInput('Confirm password', 'passwordMatch');

document.body.appendChild(email.label);
document.body.appendChild(country.label);
document.body.appendChild(zipCode.label);
document.body.appendChild(password.label);
document.body.appendChild(passwordMatch.label);
email.input.addEventListener('input', checkEmailValidity);
zipCode.input.addEventListener('input', zipValidation);
password.input.addEventListener('input', passwordValidation);
passwordMatch.input.addEventListener('input', passwordMatching);
