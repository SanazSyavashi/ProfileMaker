//DEPENDENCY
import { FieldConfig } from "@/components/GeneralForm/GeneralForm";
//-----------------------------------------------------------------

//FIELDS OF BASIC FORM WHICH LOAD DYNAMICALLY
export const basicFields: FieldConfig[] = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      }, 
    },
  },
  {
    name: 'userName',
    label: 'User Name',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'pic',
    label: 'Profile Picture',
    type: 'file',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'number',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
];