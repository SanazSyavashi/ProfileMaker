//DEPENDENCY
import { FieldConfig } from "@/components/GeneralForm/GeneralForm";
//----------------------------------------------------------------

//FIELDS OF SOCIAL FORM WHICH LOAD DYNAMICALLY
export const socialFields: FieldConfig[] = [
  {
    name: 'twitter',
    label: 'Twitter',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      }, 
    },
  },
  {
    name: 'github',
    label: 'Github',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'linkdin',
    label: 'LinkedIn',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'instagram',
    label: 'Instagram',
    type: 'text',
    rules: {
      required: false, 
    },
  },
  {
    name: 'personal',
    label: 'Personal Blog',
    type: 'text',
    rules: {
      required: false,
    },
  },
];
