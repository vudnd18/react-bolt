import { parseOnlyLetterAndSpace, parseLength } from '../../lib/inputParser';
import {
  checkAtLeastLength,
  checkEmailPattern,
  checkIsFilled,
  checkIsTrue,
  checkPhoneNumberPattern,
  recheckSameString,
} from '../../lib/inputValidater';

const model = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: '',
    parseFun: parseOnlyLetterAndSpace,
    validators: [
      {
        id: 'name-length',
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: 'Name is too short',
      },
    ],
  },
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
    name: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: '',
    validators: [
      {
        id: 'phone-pattern',
        isValidFun: checkPhoneNumberPattern,
        alert: 'Phone is not valid',
      },
      {
        id: 'phone-required',
        isValidFun: checkIsFilled,
        alert: 'Phone is empty',
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
  {
    name: 're-password',
    label: 'Retype Password',
    type: 'password',
    placeholder: '',
    validators: [
      {
        id: 're-password',
        isValidFun: expression => {
          const password = model[3].value;
          return recheckSameString(expression, password);
        },
        alert: 'Password not match',
      },
    ],
  },
];

export default model;
