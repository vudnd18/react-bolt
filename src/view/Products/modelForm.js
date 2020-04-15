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
    name: 'category',
    label: 'Category',
    type: 'select',
    options: [],
    validators: [],
  },
  {
    name: 'image',
    label: 'Image',
    type: 'file',
  },
  {
    name: 'listImage',
    label: 'List Image',
    type: 'multipleFile',
    value: [],
  },
  {
    name: 'shortDescriptions',
    label: 'Short Descriptions',
    type: 'textarea',
  },
  {
    name: 'descriptions',
    label: 'Descriptions',
    type: 'textarea',
  },
];

export default modelForm;
