import { checkAtLeastLength, recheckSameString } from '../../lib/inputValidater';

const model = [
  {
    name: 'password',
    label: 'New password',
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
          const password = model[0].value;
          return recheckSameString(expression, password);
        },
        alert: 'Password not match',
      },
    ],
  },
];

export default model;
