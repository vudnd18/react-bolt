import { checkIsFilled } from '../../lib/inputValidater';

const modelForm = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: '',
    validators: [
      {
        id: 'name-required',
        isValidFun: checkIsFilled,
        alert: 'Name is emplty',
      },
    ],
    slug: 'slug',
  },
  {
    name: 'slug',
    label: 'Slug',
    disabled: true,
    type: 'text',
  },
  {
    name: 'parent',
    label: 'Parent',
    type: 'select',
    options: [],
    validators: [],
  },
];

export default modelForm;
