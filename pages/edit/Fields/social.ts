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
         message: "Please fill out this field"
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
         message: "Please fill out this field"
      },
    },
  },
  {
    name: 'linkdin',
    label: 'Linkedin',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
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
      pattern: {
        value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
        message: "Invalid website URL"
      }
    },
  },
];
