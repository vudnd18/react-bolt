import { parseOnlyLetterAndSpace, parseLength } from '../lib/inputParser';
import {
  checkAtLeastLength,
  checkEmailPattern,
  checkIsFilled,
  checkIsTrue,
} from '../lib/inputValidater';

const loginModel = [
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    placeholder: '',
    validators: [
      {
        id: 'email-pattern',
        isValidFun: checkEmailPattern,
        alert: 'Email is not valid',
      },
      {
        id: 'email-required',
        isValidFun: checkIsFilled,
        alert: 'Email is empty',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '',
    validators: [
      {
        id: 'password-length',
        isValidFun: expression => checkAtLeastLength(expression, 6),
        alert: 'Password must be more than 6 characters',
      },
    ],
  },
];

export default loginModel;
