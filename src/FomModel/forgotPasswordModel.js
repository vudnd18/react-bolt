import { checkEmailPattern, checkIsFilled } from '../lib/inputValidater';

const forgotPasswordModel = [
  {
    name: 'email',
    label: '',
    type: 'text',
    placeholder: 'Enter email',
    className: 'wd-sm-250 flex-fill',
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
];

export default forgotPasswordModel;
