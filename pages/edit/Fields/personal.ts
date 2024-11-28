import { FieldConfig } from "@/components/GeneralForm/GeneralForm";

export const personalFields:FieldConfig[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'birthDate',
    label: 'Date of Birth',
    type: 'date',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'dropdown',
    options: [
      { title: 'Male', key: 'M', text: 'Male', value: 'male' },
      { title: 'Female', key: 'F', text: 'Female', value: 'female' },
    ],
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'bio',
    label: 'Short Bio',
    type: 'area',
  },
  {
    name: 'website',
    label: 'Website',
    type: 'text',
  },
];