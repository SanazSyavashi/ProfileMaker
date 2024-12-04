//dependency
import { FieldConfig } from "@/components/GeneralForm/GeneralForm";
//---------------------------------------------------------------------

//FIELDS OF PERSONAL FORM WHICH LOAD DYNAMICALLY
export const personalFields:FieldConfig[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
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
         message: "Please fill out this field"
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
         message: "Please fill out this field"
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
         message: "Please fill out this field"
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